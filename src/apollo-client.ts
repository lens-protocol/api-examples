import {
  ApolloClient,
  ApolloLink,
  DefaultOptions,
  from,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import WebSocket from 'ws';
import { onError } from '@apollo/client/link/error';
import fetch from 'cross-fetch';
import { print } from 'graphql/language/printer';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { LENS_API, LENS_API_WEBSOCKET, ORIGIN } from './config';
import { getAuthenticationToken } from './state';

import { getMainDefinition } from '@apollo/client/utilities';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const wsLink = LENS_API_WEBSOCKET
  ? new WebSocketLink(
      new SubscriptionClient(LENS_API_WEBSOCKET, { lazy: true, reconnect: true }, WebSocket)
    )
  : null;

const httpLink = new HttpLink({
  uri: LENS_API,
  fetch,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error) =>
      console.log('[GraphQL error]:', JSON.stringify(error, null, 2))
    );
  }

  if (networkError) {
    console.log('[Network error]:', JSON.stringify(networkError, null, 2));
  }
});

// example how you can pass in the x-access-token into requests using `ApolloLink`
const authLink = new ApolloLink((operation, forward) => {
  const token = getAuthenticationToken();
  console.log('jwt token:', token);

  const logMessage = `GraphQL Query: ${print(operation.query)}, Variables: ${JSON.stringify(
    operation.variables
  )}`;
  console.log(logMessage);

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token}` : '',
      ...(ORIGIN ? { origin: ORIGIN } : {}),
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const splitLink = wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink,
      httpLink
    )
  : httpLink;

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, splitLink]),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

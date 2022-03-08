import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import fetch from 'cross-fetch';
import { getAuthenticationToken } from './state';

// const customFetch = (uri: string, options: any) => {
//   return fetch(uri, options).then((response) => {
//     if (response.status >= 500) {
//       // or handle 400 errors
//       return Promise.reject(response.status);
//     }
//     return response;
//   });
// };

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
  fetch,
});

// example how you can pass in the x-access-token into requests using `ApolloLink`
const authLink = new ApolloLink((operation, forward) => {
  const token = getAuthenticationToken();
  console.log('jwt token:', token);

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token}` : '',
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

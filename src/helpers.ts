export const prettyJSON = (message: string, obj: string) => {
  console.log(message, JSON.stringify(obj, null, 2));
};

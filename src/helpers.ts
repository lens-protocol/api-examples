export const prettyJSON = (message: string, obj: string) => {
  console.log(message, JSON.stringify(obj, null, 2));
};

export const sleep = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

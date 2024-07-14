export const isEmptyString = (text: string) => {
  return (typeof text === 'string' && text?.trim()?.length === 0) || text === null || text === undefined;
};
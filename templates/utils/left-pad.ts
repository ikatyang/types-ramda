export const left_pad = (str: string, char: string, length: number) => {
  let result = str;
  while (result.length < length) {
    result = char + result;
  }
  return result;
};

import * as R from 'ramda';

/**
 * (str: string, char: string, max_length: number) => string
 */
export const left_pad = R.curry(
  (str: string, char: string, max_length: number) =>
    R.concat(R.join('', R.repeat(char, max_length - str.length)), str),
);

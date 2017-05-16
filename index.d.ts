export as namespace R;
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 */
export declare const __: Placeholder;
export interface Placeholder {
  "@@functional/placeholder": true;
}
export type PH = Placeholder;
/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
export declare const add: add;
export type add = add_00;
export type add_00 = {
  (_a: PH, b: number): add_01;
  (a: number, b: number): add_11;
  <X extends "11">(): (a: number, b: number) => add_11;
  <X extends "01">(): (_a: PH, b: number) => add_01;
  <X extends "1">(): (a: number) => add_10;
  (a: number): add_10;
};
export type add_01 = {
  (a: number): add_11;
};
export type add_10 = {
  (b: number): add_11;
};
export type add_11 = number;
/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
export declare const replace: replace;
export type replace = replace_000;
export type replace_000 = {
  (pattern: string | RegExp, _replacement: PH, str: string): replace_101;
  (_pattern: PH, replacement: string, str: string): replace_011;
  (_pattern: PH, _replacement: PH, str: string): replace_001;
  (pattern: string | RegExp, replacement: string, str: string): replace_111;
  (_pattern: PH, replacement: string): replace_010;
  (pattern: string | RegExp, replacement: string): replace_110;
  <X extends "1">(): (pattern: string | RegExp) => replace_100;
  <X extends "101">(): (pattern: string | RegExp, _replacement: PH, str: string) => replace_101;
  <X extends "011">(): (_pattern: PH, replacement: string, str: string) => replace_011;
  <X extends "001">(): (_pattern: PH, _replacement: PH, str: string) => replace_001;
  <X extends "11">(): (pattern: string | RegExp, replacement: string) => replace_110;
  <X extends "01">(): (_pattern: PH, replacement: string) => replace_010;
  <X extends "111">(): (pattern: string | RegExp, replacement: string, str: string) => replace_111;
  (pattern: string | RegExp): replace_100;
};
export type replace_001 = {
  (_pattern: PH, replacement: string): replace_011;
  (pattern: string | RegExp, replacement: string): replace_111;
  <X extends "11">(): (pattern: string | RegExp, replacement: string) => replace_111;
  <X extends "01">(): (_pattern: PH, replacement: string) => replace_011;
  <X extends "1">(): (pattern: string | RegExp) => replace_101;
  (pattern: string | RegExp): replace_101;
};
export type replace_010 = {
  (_pattern: PH, str: string): replace_011;
  (pattern: string | RegExp, str: string): replace_111;
  <X extends "11">(): (pattern: string | RegExp, str: string) => replace_111;
  <X extends "01">(): (_pattern: PH, str: string) => replace_011;
  <X extends "1">(): (pattern: string | RegExp) => replace_110;
  (pattern: string | RegExp): replace_110;
};
export type replace_011 = {
  (pattern: string | RegExp): replace_111;
};
export type replace_100 = {
  (_replacement: PH, str: string): replace_101;
  (replacement: string, str: string): replace_111;
  <X extends "11">(): (replacement: string, str: string) => replace_111;
  <X extends "01">(): (_replacement: PH, str: string) => replace_101;
  <X extends "1">(): (replacement: string) => replace_110;
  (replacement: string): replace_110;
};
export type replace_101 = {
  (replacement: string): replace_111;
};
export type replace_110 = {
  (str: string): replace_111;
};
export type replace_111 = string;

/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
declare const empty: empty_0;
type empty_0 = {
    <T>(container: T[]): empty_array_1<T>;
    (container: string): empty_string_1;
    <$SEL extends "1", $KIND extends "array">(): <T>(container: T[]) => empty_array_1<T>;
    <$SEL extends "1", $KIND extends "string">(): (container: string) => empty_string_1;
    <$SEL extends "1", $KIND extends "manual">(): <R, U = any>(container: U) => empty_manual_1<R>;
    <R, U = any>(container: U): empty_manual_1<R>;
};
type empty_array_1<T> = T[];
type empty_string_1 = string;
type empty_manual_1<R> = R;
export = empty;

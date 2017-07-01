import { List, Morphism } from "./$types";
/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
declare const adjust: adjust_000;
type adjust_000 = {
    <T>(fn: Morphism<T, T>): adjust_100<T>;
    <T>(fn: Morphism<T, T>, index: number): adjust_110<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, T>, index: number, list: List<T>) => adjust_111<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, T>, index: number) => adjust_110<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, T>) => adjust_100<T>;
    <T>(fn: Morphism<T, T>, index: number, list: List<T>): adjust_111<T>;
};
type adjust_100<T> = {
    (index: number): adjust_110<T>;
    <$SEL extends "11">(): (index: number, list: List<T>) => adjust_111<T>;
    <$SEL extends "1">(): (index: number) => adjust_110<T>;
    (index: number, list: List<T>): adjust_111<T>;
};
type adjust_010 = {
    <T>(fn: Morphism<T, T>): adjust_110<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, T>, list: List<T>) => adjust_111<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, T>) => adjust_110<T>;
    <T>(fn: Morphism<T, T>, list: List<T>): adjust_111<T>;
};
type adjust_110<T> = {
    (list: List<T>): adjust_111<T>;
};
type adjust_001<T> = {
    (fn: Morphism<T, T>): adjust_101<T>;
    <$SEL extends "11">(): (fn: Morphism<T, T>, index: number) => adjust_111<T>;
    <$SEL extends "1">(): (fn: Morphism<T, T>) => adjust_101<T>;
    (fn: Morphism<T, T>, index: number): adjust_111<T>;
};
type adjust_101<T> = {
    (index: number): adjust_111<T>;
};
type adjust_011<T> = {
    (fn: Morphism<T, T>): adjust_111<T>;
};
type adjust_111<T> = T[];
export = adjust;

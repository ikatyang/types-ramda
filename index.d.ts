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
export type Morphism<T, U> = (value: T) => U;
export type IndexedMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
export type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
export type DictionaryMapper<T, U> = (fn: Morphism<T, U>, dictionary: Dictionary<T>) => Dictionary<U>;
export interface List<T> {
    length: number;
    [index: number]: T;
}
export interface Dictionary<T> {
    [key: string]: T;
}
export interface CurriedFunction1<T1, R> {
    (v1: T1): R;
}
export interface CurriedFunction2<T1, T2, R> {
    (_1: PH, v2: T2): CurriedFunction1<T1, R>;
    (v1: T1, v2: T2): R;
    (v1: T1): CurriedFunction1<T2, R>;
}
export interface CurriedFunction3<T1, T2, T3, R> {
    (v1: T1, _2: PH, v3: T3): CurriedFunction1<T2, R>;
    (_1: PH, v2: T2, v3: T3): CurriedFunction1<T1, R>;
    (_1: PH, _2: PH, v3: T3): CurriedFunction2<T1, T2, R>;
    (v1: T1, v2: T2, v3: T3): R;
    (_1: PH, v2: T2): CurriedFunction2<T1, T3, R>;
    (v1: T1, v2: T2): CurriedFunction1<T3, R>;
    (v1: T1): CurriedFunction2<T2, T3, R>;
}
export interface CurriedFunction4<T1, T2, T3, T4, R> {
    (v1: T1, v2: T2, _3: PH, v4: T4): CurriedFunction1<T3, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4): CurriedFunction1<T2, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4): CurriedFunction2<T2, T3, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4): CurriedFunction3<T1, T2, T3, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4): CurriedFunction2<T1, T2, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4): CurriedFunction2<T1, T3, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4): CurriedFunction1<T1, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): R;
    (v1: T1, _2: PH, v3: T3): CurriedFunction2<T2, T4, R>;
    (_1: PH, v2: T2, v3: T3): CurriedFunction2<T1, T4, R>;
    (_1: PH, _2: PH, v3: T3): CurriedFunction3<T1, T2, T4, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction1<T4, R>;
    (_1: PH, v2: T2): CurriedFunction3<T1, T3, T4, R>;
    (v1: T1, v2: T2): CurriedFunction2<T3, T4, R>;
    (v1: T1): CurriedFunction3<T2, T3, T4, R>;
}
export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (v1: T1, v2: T2, v3: T3, _4: PH, v5: T5): CurriedFunction1<T4, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4, v5: T5): CurriedFunction1<T3, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH, v5: T5): CurriedFunction2<T3, T4, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4, v5: T5): CurriedFunction1<T2, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH, v5: T5): CurriedFunction2<T2, T4, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4, v5: T5): CurriedFunction2<T2, T3, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH, v5: T5): CurriedFunction3<T2, T3, T4, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH, v5: T5): CurriedFunction4<T1, T2, T3, T4, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH, v5: T5): CurriedFunction3<T1, T3, T4, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH, v5: T5): CurriedFunction3<T1, T2, T4, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4, v5: T5): CurriedFunction2<T1, T3, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4, v5: T5): CurriedFunction3<T1, T2, T3, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH, v5: T5): CurriedFunction2<T1, T4, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4, v5: T5): CurriedFunction2<T1, T2, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction1<T1, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): R;
    (v1: T1, v2: T2, _3: PH, v4: T4): CurriedFunction2<T3, T5, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4): CurriedFunction2<T2, T5, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4): CurriedFunction3<T2, T3, T5, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4): CurriedFunction2<T1, T5, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4): CurriedFunction3<T1, T2, T5, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4): CurriedFunction3<T1, T3, T5, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4): CurriedFunction4<T1, T2, T3, T5, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction1<T5, R>;
    (v1: T1, _2: PH, v3: T3): CurriedFunction3<T2, T4, T5, R>;
    (_1: PH, v2: T2, v3: T3): CurriedFunction3<T1, T4, T5, R>;
    (_1: PH, _2: PH, v3: T3): CurriedFunction4<T1, T2, T4, T5, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction2<T4, T5, R>;
    (_1: PH, v2: T2): CurriedFunction4<T1, T3, T4, T5, R>;
    (v1: T1, v2: T2): CurriedFunction3<T3, T4, T5, R>;
    (v1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
}
export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
    (v1: T1, v2: T2, v3: T3, v4: T4, _5: PH, v6: T6): CurriedFunction1<T5, R>;
    (v1: T1, v2: T2, v3: T3, _4: PH, _5: PH, v6: T6): CurriedFunction2<T4, T5, R>;
    (v1: T1, v2: T2, v3: T3, _4: PH, v5: T5, v6: T6): CurriedFunction1<T4, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4, v5: T5, v6: T6): CurriedFunction1<T3, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4, _5: PH, v6: T6): CurriedFunction2<T3, T5, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH, v5: T5, v6: T6): CurriedFunction2<T3, T4, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH, _5: PH, v6: T6): CurriedFunction3<T3, T4, T5, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction1<T2, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4, _5: PH, v6: T6): CurriedFunction2<T2, T5, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH, v5: T5, v6: T6): CurriedFunction2<T2, T4, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH, _5: PH, v6: T6): CurriedFunction3<T2, T4, T5, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4, v5: T5, v6: T6): CurriedFunction2<T2, T3, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4, _5: PH, v6: T6): CurriedFunction3<T2, T3, T5, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH, v5: T5, v6: T6): CurriedFunction3<T2, T3, T4, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH, _5: PH, v6: T6): CurriedFunction4<T2, T3, T4, T5, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH, _5: PH, v6: T6): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH, _5: PH, v6: T6): CurriedFunction4<T1, T3, T4, T5, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH, _5: PH, v6: T6): CurriedFunction4<T1, T2, T4, T5, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH, v5: T5, v6: T6): CurriedFunction3<T1, T3, T4, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4, _5: PH, v6: T6): CurriedFunction4<T1, T2, T3, T5, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4, _5: PH, v6: T6): CurriedFunction3<T1, T3, T5, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH, v5: T5, v6: T6): CurriedFunction3<T1, T2, T4, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4, v5: T5, v6: T6): CurriedFunction2<T1, T3, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH, v5: T5, v6: T6): CurriedFunction4<T1, T2, T3, T4, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH, _5: PH, v6: T6): CurriedFunction3<T1, T4, T5, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4, _5: PH, v6: T6): CurriedFunction3<T1, T2, T5, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH, v5: T5, v6: T6): CurriedFunction2<T1, T4, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4, v5: T5, v6: T6): CurriedFunction3<T1, T2, T3, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4, _5: PH, v6: T6): CurriedFunction2<T1, T5, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction2<T1, T2, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): CurriedFunction1<T1, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): R;
    (v1: T1, v2: T2, v3: T3, _4: PH, v5: T5): CurriedFunction2<T4, T6, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4, v5: T5): CurriedFunction2<T3, T6, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH, v5: T5): CurriedFunction3<T3, T4, T6, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4, v5: T5): CurriedFunction3<T2, T3, T6, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH, v5: T5): CurriedFunction3<T2, T4, T6, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4, v5: T5): CurriedFunction2<T2, T6, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH, v5: T5): CurriedFunction4<T2, T3, T4, T6, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4, v5: T5): CurriedFunction3<T1, T3, T6, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction2<T1, T6, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4, v5: T5): CurriedFunction4<T1, T2, T3, T6, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4, v5: T5): CurriedFunction3<T1, T2, T6, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH, v5: T5): CurriedFunction4<T1, T3, T4, T6, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH, v5: T5): CurriedFunction4<T1, T2, T4, T6, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH, v5: T5): CurriedFunction3<T1, T4, T6, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH, v5: T5): CurriedFunction5<T1, T2, T3, T4, T6, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction1<T6, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4): CurriedFunction3<T3, T5, T6, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4): CurriedFunction3<T2, T5, T6, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4): CurriedFunction4<T2, T3, T5, T6, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4): CurriedFunction4<T1, T2, T5, T6, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4): CurriedFunction5<T1, T2, T3, T5, T6, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4): CurriedFunction3<T1, T5, T6, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4): CurriedFunction4<T1, T3, T5, T6, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction2<T5, T6, R>;
    (v1: T1, _2: PH, v3: T3): CurriedFunction4<T2, T4, T5, T6, R>;
    (_1: PH, v2: T2, v3: T3): CurriedFunction4<T1, T4, T5, T6, R>;
    (_1: PH, _2: PH, v3: T3): CurriedFunction5<T1, T2, T4, T5, T6, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction3<T4, T5, T6, R>;
    (_1: PH, v2: T2): CurriedFunction5<T1, T3, T4, T5, T6, R>;
    (v1: T1, v2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
    (v1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
}
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
export declare const add: add_00;
export type add_00 = {
    (_a: PH, b: number): add_01;
    (a: number, b: number): add_11;
    <X extends "11">(): (a: number, b: number) => add_11;
    <X extends "1">(): (a: number) => add_10;
    <X extends "01">(): (_a: PH, b: number) => add_01;
    (a: number): add_10;
};
export type add_10 = {
    (b: number): add_11;
};
export type add_01 = {
    (a: number): add_11;
};
export type add_11 = number;
/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, Ramda's simple `map` function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
export declare const addIndex: addIndex_0;
export type addIndex_0 = {
    <T, U>(fn: ListMapper<T, U>): addIndex_array_1<T, U>;
    <X extends "1", K extends "array">(): <T, U>(fn: ListMapper<T, U>) => addIndex_array_1<T, U>;
    <X extends "1", K extends "object">(): <T, U>(fn: DictionaryMapper<T, U>) => addIndex_object_1<T, U>;
    <T, U>(fn: DictionaryMapper<T, U>): addIndex_object_1<T, U>;
};
export type addIndex_array_1<T, U> = CurriedFunction2<IndexedMorphism<T, U>, List<T>, U[]>;
export type addIndex_object_1<T, U> = CurriedFunction2<IndexedMorphism<T, U>, Dictionary<T>, Dictionary<U>>;
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
export declare const adjust: adjust_000;
export type adjust_000 = {
    <T, U>(fn: Morphism<T, U>, _index: PH, list: List<T>): adjust_101<T, U>;
    <T>(_fn: PH, index: number, list: List<T>): adjust_011<T>;
    <T>(_fn: PH, _index: PH, list: List<T>): adjust_001<T>;
    <T, U>(fn: Morphism<T, U>, index: number, list: List<T>): adjust_111<T, U>;
    (_fn: PH, index: number): adjust_010;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_110<T, U>;
    <X extends "111">(): <T, U>(fn: Morphism<T, U>, index: number, list: List<T>) => adjust_111<T, U>;
    <X extends "11">(): <T, U>(fn: Morphism<T, U>, index: number) => adjust_110<T, U>;
    <X extends "101">(): <T, U>(fn: Morphism<T, U>, _index: PH, list: List<T>) => adjust_101<T, U>;
    <X extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_100<T, U>;
    <X extends "011">(): <T>(_fn: PH, index: number, list: List<T>) => adjust_011<T>;
    <X extends "01">(): (_fn: PH, index: number) => adjust_010;
    <X extends "001">(): <T>(_fn: PH, _index: PH, list: List<T>) => adjust_001<T>;
    <T, U>(fn: Morphism<T, U>): adjust_100<T, U>;
};
export type adjust_100<T, U> = {
    (_index: PH, list: List<T>): adjust_101<T, U>;
    (index: number, list: List<T>): adjust_111<T, U>;
    <X extends "11">(): (index: number, list: List<T>) => adjust_111<T, U>;
    <X extends "1">(): (index: number) => adjust_110<T, U>;
    <X extends "01">(): (_index: PH, list: List<T>) => adjust_101<T, U>;
    (index: number): adjust_110<T, U>;
};
export type adjust_010 = {
    <T>(_fn: PH, list: List<T>): adjust_011<T>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): adjust_111<T, U>;
    <X extends "11">(): <T, U>(fn: Morphism<T, U>, list: List<T>) => adjust_111<T, U>;
    <X extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_110<T, U>;
    <X extends "01">(): <T>(_fn: PH, list: List<T>) => adjust_011<T>;
    <T, U>(fn: Morphism<T, U>): adjust_110<T, U>;
};
export type adjust_110<T, U> = {
    (list: List<T>): adjust_111<T, U>;
};
export type adjust_001<T> = {
    (_fn: PH, index: number): adjust_011<T>;
    <U>(fn: Morphism<T, U>, index: number): adjust_111<T, U>;
    <X extends "11">(): <U>(fn: Morphism<T, U>, index: number) => adjust_111<T, U>;
    <X extends "1">(): <U>(fn: Morphism<T, U>) => adjust_101<T, U>;
    <X extends "01">(): (_fn: PH, index: number) => adjust_011<T>;
    <U>(fn: Morphism<T, U>): adjust_101<T, U>;
};
export type adjust_101<T, U> = {
    (index: number): adjust_111<T, U>;
};
export type adjust_011<T> = {
    <U>(fn: Morphism<T, U>): adjust_111<T, U>;
};
export type adjust_111<T, U> = (T | U)[];
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
export declare const map: map_00;
export type map_00 = {
    <T>(_fn: PH, list: List<T>): map_array_01<T>;
    <T>(_fn: PH, dictionary: Dictionary<T>): map_object_01<T>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): map_array_11<T, U>;
    <T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>): map_object_11<T, U>;
    <X extends "11", K extends "array">(): <T, U>(fn: Morphism<T, U>, list: List<T>) => map_array_11<T, U>;
    <X extends "01", K extends "array">(): <T>(_fn: PH, list: List<T>) => map_array_01<T>;
    <X extends "11", K extends "object">(): <T, U>(fn: Morphism<T, U>, dictionary: Dictionary<T>) => map_object_11<T, U>;
    <X extends "01", K extends "object">(): <T>(_fn: PH, dictionary: Dictionary<T>) => map_object_01<T>;
    <X extends "1">(): <T, U>(fn: Morphism<T, U>) => map_10<T, U>;
    <T, U>(fn: Morphism<T, U>): map_10<T, U>;
};
export type map_10<T, U> = {
    (list: List<T>): map_array_11<T, U>;
    <X extends "1", K extends "array">(): (list: List<T>) => map_array_11<T, U>;
    <X extends "1", K extends "object">(): (dictionary: Dictionary<T>) => map_object_11<T, U>;
    (dictionary: Dictionary<T>): map_object_11<T, U>;
};
export type map_array_01<T> = {
    <U>(fn: Morphism<T, U>): map_array_11<T, U>;
};
export type map_object_01<T> = {
    <U>(fn: Morphism<T, U>): map_object_11<T, U>;
};
export type map_array_11<T, U> = U[];
export type map_object_11<T, U> = Dictionary<U>;
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
export declare const replace: replace_000;
export type replace_000 = {
    (pattern: RegExp | string, _replacement: PH, str: string): replace_101;
    (_pattern: PH, replacement: string, str: string): replace_011;
    (_pattern: PH, _replacement: PH, str: string): replace_001;
    (pattern: RegExp | string, replacement: string, str: string): replace_111;
    (_pattern: PH, replacement: string): replace_010;
    (pattern: RegExp | string, replacement: string): replace_110;
    <X extends "111">(): (pattern: RegExp | string, replacement: string, str: string) => replace_111;
    <X extends "11">(): (pattern: RegExp | string, replacement: string) => replace_110;
    <X extends "101">(): (pattern: RegExp | string, _replacement: PH, str: string) => replace_101;
    <X extends "1">(): (pattern: RegExp | string) => replace_100;
    <X extends "011">(): (_pattern: PH, replacement: string, str: string) => replace_011;
    <X extends "01">(): (_pattern: PH, replacement: string) => replace_010;
    <X extends "001">(): (_pattern: PH, _replacement: PH, str: string) => replace_001;
    (pattern: RegExp | string): replace_100;
};
export type replace_100 = {
    (_replacement: PH, str: string): replace_101;
    (replacement: string, str: string): replace_111;
    <X extends "11">(): (replacement: string, str: string) => replace_111;
    <X extends "1">(): (replacement: string) => replace_110;
    <X extends "01">(): (_replacement: PH, str: string) => replace_101;
    (replacement: string): replace_110;
};
export type replace_010 = {
    (_pattern: PH, str: string): replace_011;
    (pattern: RegExp | string, str: string): replace_111;
    <X extends "11">(): (pattern: RegExp | string, str: string) => replace_111;
    <X extends "1">(): (pattern: RegExp | string) => replace_110;
    <X extends "01">(): (_pattern: PH, str: string) => replace_011;
    (pattern: RegExp | string): replace_110;
};
export type replace_110 = {
    (str: string): replace_111;
};
export type replace_001 = {
    (_pattern: PH, replacement: string): replace_011;
    (pattern: RegExp | string, replacement: string): replace_111;
    <X extends "11">(): (pattern: RegExp | string, replacement: string) => replace_111;
    <X extends "1">(): (pattern: RegExp | string) => replace_101;
    <X extends "01">(): (_pattern: PH, replacement: string) => replace_011;
    (pattern: RegExp | string): replace_101;
};
export type replace_101 = {
    (replacement: string): replace_111;
};
export type replace_011 = {
    (pattern: RegExp | string): replace_111;
};
export type replace_111 = string;

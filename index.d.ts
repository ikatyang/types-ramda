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
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
export declare const __: Placeholder;
export interface Placeholder {
    "@@functional/placeholder": true;
}
export type PH = Placeholder;
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
export interface Setoid<T> {
    equals(b: Setoid<T>): boolean;
}
export interface Semigroup<T> {
    concat(b: Semigroup<T>): Semigroup<T>;
}
export interface Monoid<T> extends Semigroup<T> {
    empty<T>(): Monoid<T>;
}
export interface Functor<T> {
    map<U>(fn: (t: T) => U): Functor<U>;
}
export interface Apply<T> extends Functor<T> {
    apply<U>(fn: Apply<((t: T) => U)>): Apply<U>;
}
export interface Applicative<T> extends Apply<T> {
    of<U>(a: U): Applicative<U>;
}
export interface Alt<T> extends Functor<T> {
    alt(b: T): Alt<T>;
}
export interface Plus<T> extends Alt<T> {
    zero<T>(): Plus<T>;
}
export interface Alternative<T> extends Plus<T>, Applicative<T> {
}
export interface Foldable<T> {
    reduce<U>(fn: (u: U, t: T) => U, u: U): U;
}
export interface Traversable<T> extends Functor<T>, Foldable<T> {
    traverse<U, V>(fn: (t: T) => Applicative<U>, of: (v: V) => Applicative<V>): Applicative<Traversable<U>>;
}
export interface Chain<T> extends Apply<T> {
    chain<U>(fn: (t: T) => Chain<U>): Chain<U>;
}
export interface ChainRec<T> extends Chain<T> {
    chainRec<A, B, C>(f: (next: (a: A) => C, done: (b: B) => C, value: A) => ChainRec<C>, i: A): ChainRec<B>;
}
export interface Monad<T> extends Applicative<T>, Chain<T> {
}
export interface Extend<T> {
    extend<U>(f: (v: Extend<T>) => U): Extend<U>;
}
export interface Comonad<T> extends Functor<T>, Extend<T> {
    extract<U>(): U;
}
export interface Bifunctor<T, U> extends Functor<T> {
    bimap<B, D>(f: (v: T) => B, g: (v: U) => D): Bifunctor<B, D>;
}
export interface Profunctor<T, U> extends Functor<T> {
    promap<B, D>(f: (v: T) => B, g: (v: U) => D): Profunctor<B, D>;
}
export interface Type<T> extends Function {
    new (...args: any[]): T;
}
export interface Variadic<T> {
    (...args: any[]): T;
}
export interface KeyValuePair<K, V> extends Array<K | V> {
    "0": K;
    "1": V;
}
export interface Transformer<T, Acc, Res> {
    step: (acc: Acc, v: T) => Acc;
    init: () => Acc;
    result: (acc: Acc) => Res;
}
export interface NumericDictionary<T> {
    [index: number]: T;
}
export interface StringRepresentable<T> {
    toString(): T;
}
export interface NestedObj<T> {
    [index: string]: T | NestedObj<T>;
}
export interface NestedArray<T> {
    [index: number]: T | NestedArray<T>;
    length: number;
}
export interface Lens<T, U> {
    (obj: T): U;
    set(v: U, obj: T): T;
}
export interface ManualLens<U> {
    <T extends Struct<any>>(obj: T): U;
    set<T extends Struct<any>>(v: U, obj: T): T;
}
export interface UnknownLens {
    <T, U>(obj: T): U;
    set<T, U>(v: U, obj: T): T;
}
export interface Reduced {
}
export type Index = string | number;
export type Primitive = string | number | boolean;
export type Ord = string | number | boolean | Date;
export interface Dictionary<T> {
    [index: string]: T;
}
export type Obj<T> = Dictionary<T>;
export type List<T> = T[] | ArrayLike<T>;
export type StringLike = string | StringRepresentable<string>;
export type Prop = Index | StringRepresentable<Index>;
export type Path = List<Prop>;
export type Struct<T> = Obj<T> | List<T>;
export type AccOpts<T, U> = List<any> | Obj<any> | Transformer<T, U, U>;
export type Pred<T> = (v: T) => boolean;
export type ObjPred<T> = (value: T, key: string) => boolean;
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
    <$SEL extends "11">(): (a: number, b: number) => add_11;
    <$SEL extends "1">(): (a: number) => add_10;
    <$SEL extends "01">(): (_a: PH, b: number) => add_01;
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
    <T, U>(mapper: (fn: (value: T) => U, list: List<T>) => U[]): addIndex_array_1<T, U>;
    <$SEL extends "1", $KIND extends "array">(): <T, U>(mapper: (fn: (value: T) => U, list: List<T>) => U[]) => addIndex_array_1<T, U>;
    <$SEL extends "1", $KIND extends "object">(): <T, U>(mapper: (fn: (value: T) => U, obj: Obj<T>) => Obj<U>) => addIndex_object_1<T, U>;
    <T, U>(mapper: (fn: (value: T) => U, obj: Obj<T>) => Obj<U>): addIndex_object_1<T, U>;
};
export type addIndex_array_1<T, U> = CurriedFunction2<((value: T, index: number, list: List<T>) => U), List<T>, U[]>;
export type addIndex_object_1<T, U> = CurriedFunction2<((value: T, index: number, obj: Obj<T>) => U), Obj<T>, Obj<U>>;
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
    <T>(fn: (a: T) => T, _index: PH, list: List<T>): adjust_101<T>;
    <T>(_fn: PH, index: number, list: List<T>): adjust_011<T>;
    <T>(_fn: PH, _index: PH, list: List<T>): adjust_001<T>;
    <T>(fn: (a: T) => T, index: number, list: List<T>): adjust_111<T>;
    (_fn: PH, index: number): adjust_010;
    <T>(fn: (a: T) => T, index: number): adjust_110<T>;
    <$SEL extends "111">(): <T>(fn: (a: T) => T, index: number, list: List<T>) => adjust_111<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => T, index: number) => adjust_110<T>;
    <$SEL extends "101">(): <T>(fn: (a: T) => T, _index: PH, list: List<T>) => adjust_101<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => T) => adjust_100<T>;
    <$SEL extends "011">(): <T>(_fn: PH, index: number, list: List<T>) => adjust_011<T>;
    <$SEL extends "01">(): (_fn: PH, index: number) => adjust_010;
    <$SEL extends "001">(): <T>(_fn: PH, _index: PH, list: List<T>) => adjust_001<T>;
    <T>(fn: (a: T) => T): adjust_100<T>;
};
export type adjust_100<T> = {
    (_index: PH, list: List<T>): adjust_101<T>;
    (index: number, list: List<T>): adjust_111<T>;
    <$SEL extends "11">(): (index: number, list: List<T>) => adjust_111<T>;
    <$SEL extends "1">(): (index: number) => adjust_110<T>;
    <$SEL extends "01">(): (_index: PH, list: List<T>) => adjust_101<T>;
    (index: number): adjust_110<T>;
};
export type adjust_010 = {
    <T>(_fn: PH, list: List<T>): adjust_011<T>;
    <T>(fn: (a: T) => T, list: List<T>): adjust_111<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => T, list: List<T>) => adjust_111<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => T) => adjust_110<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => adjust_011<T>;
    <T>(fn: (a: T) => T): adjust_110<T>;
};
export type adjust_110<T> = {
    (list: List<T>): adjust_111<T>;
};
export type adjust_001<T> = {
    (_fn: PH, index: number): adjust_011<T>;
    (fn: (a: T) => T, index: number): adjust_111<T>;
    <$SEL extends "11">(): (fn: (a: T) => T, index: number) => adjust_111<T>;
    <$SEL extends "1">(): (fn: (a: T) => T) => adjust_101<T>;
    <$SEL extends "01">(): (_fn: PH, index: number) => adjust_011<T>;
    (fn: (a: T) => T): adjust_101<T>;
};
export type adjust_101<T> = {
    (index: number): adjust_111<T>;
};
export type adjust_011<T> = {
    (fn: (a: T) => T): adjust_111<T>;
};
export type adjust_111<T> = T[];
/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
export declare const all: all_00;
export type all_00 = {
    <T>(_pred: PH, list: List<T>): all_01<T>;
    <T>(pred: Pred<T>, list: List<T>): all_11<T>;
    <$SEL extends "11">(): <T>(pred: Pred<T>, list: List<T>) => all_11<T>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => all_10<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list: List<T>) => all_01<T>;
    <T>(pred: Pred<T>): all_10<T>;
};
export type all_10<T> = {
    (list: List<T>): all_11<T>;
};
export type all_01<T> = {
    (pred: Pred<T>): all_11<T>;
};
export type all_11<T> = boolean;
/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
export declare const allPass: allPass_0;
export type allPass_0 = {
    <T>(pred: Pred<T>[]): allPass_1<T>;
};
export type allPass_1<T> = Pred<T>;
/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
export declare const always: always_0;
export type always_0 = {
    <T>(val: T): always_1<T>;
};
export type always_1<T> = () => T;
/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
export declare const and: and_00;
export type and_00 = {
    <U>(_a: PH, b: U): and_01<U>;
    <T, U>(a: T, b: U): and_11<T, U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => and_11<T, U>;
    <$SEL extends "1">(): <T>(a: T) => and_10<T>;
    <$SEL extends "01">(): <U>(_a: PH, b: U) => and_01<U>;
    <T>(a: T): and_10<T>;
};
export type and_10<T> = {
    <U>(b: U): and_11<T, U>;
};
export type and_01<U> = {
    <T>(a: T): and_11<T, U>;
};
export type and_11<T, U> = T | U;
/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
export declare const any: any_00;
export type any_00 = {
    <T>(_pred: PH, list: List<T>): any_01<T>;
    <T>(pred: Pred<T>, list: List<T>): any_11<T>;
    <$SEL extends "11">(): <T>(pred: Pred<T>, list: List<T>) => any_11<T>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => any_10<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list: List<T>) => any_01<T>;
    <T>(pred: Pred<T>): any_10<T>;
};
export type any_10<T> = {
    (list: List<T>): any_11<T>;
};
export type any_01<T> = {
    (pred: Pred<T>): any_11<T>;
};
export type any_11<T> = boolean;
/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
export declare const anyPass: anyPass_0;
export type anyPass_0 = {
    <T>(preds: Pred<T>[]): anyPass_1<T>;
};
export type anyPass_1<T> = Pred<T>;
/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @param {Array} fns An array of functions
 * @param {Array} vs An array of values
 * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
export declare const ap: ap_00;
export type ap_00 = {
    <T>(_fns: PH, xs: List<T>): ap_01<T>;
    <T, U>(fns: ((a: T) => U)[], xs: List<T>): ap_11<T, U>;
    <$SEL extends "11">(): <T, U>(fns: ((a: T) => U)[], xs: List<T>) => ap_11<T, U>;
    <$SEL extends "1">(): <T, U>(fns: ((a: T) => U)[]) => ap_10<T, U>;
    <$SEL extends "01">(): <T>(_fns: PH, xs: List<T>) => ap_01<T>;
    <T, U>(fns: ((a: T) => U)[]): ap_10<T, U>;
};
export type ap_10<T, U> = {
    (xs: List<T>): ap_11<T, U>;
};
export type ap_01<T> = {
    <U>(fns: ((a: T) => U)[]): ap_11<T, U>;
};
export type ap_11<T, U> = U[];
/**
 * Returns a new list, composed of n-tuples of consecutive elements If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
export declare const aperture: aperture_00;
export type aperture_00 = {
    <T>(_n: PH, list: List<T>): aperture_01<T>;
    <T>(n: number, list: List<T>): aperture_11<T>;
    <$SEL extends "11">(): <T>(n: number, list: List<T>) => aperture_11<T>;
    <$SEL extends "1">(): (n: number) => aperture_10;
    <$SEL extends "01">(): <T>(_n: PH, list: List<T>) => aperture_01<T>;
    (n: number): aperture_10;
};
export type aperture_10 = {
    <T>(list: List<T>): aperture_11<T>;
};
export type aperture_01<T> = {
    (n: number): aperture_11<T>;
};
export type aperture_11<T> = T[][];
/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
export declare const append: append_00;
export type append_00 = {
    <T>(_el: PH, list: List<T>): append_01<T>;
    <T, U>(el: U, list: List<T>): append_11<T, U>;
    <$SEL extends "11">(): <T, U>(el: U, list: List<T>) => append_11<T, U>;
    <$SEL extends "1">(): <U>(el: U) => append_10<U>;
    <$SEL extends "01">(): <T>(_el: PH, list: List<T>) => append_01<T>;
    <U>(el: U): append_10<U>;
};
export type append_10<U> = {
    <T>(list: List<T>): append_11<T, U>;
};
export type append_01<T> = {
    <U>(el: U): append_11<T, U>;
};
export type append_11<T, U> = (T & U)[];
/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
export declare const apply: apply_00;
export type apply_00 = {
    (_fn: PH, args: any[]): apply_01;
    <TResult>(fn: (...args: any[]) => TResult, args: any[]): apply_11<TResult>;
    <$SEL extends "11">(): <TResult>(fn: (...args: any[]) => TResult, args: any[]) => apply_11<TResult>;
    <$SEL extends "1">(): <TResult>(fn: (...args: any[]) => TResult) => apply_10<TResult>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => apply_01;
    <TResult>(fn: (...args: any[]) => TResult): apply_10<TResult>;
};
export type apply_10<TResult> = {
    (args: any[]): apply_11<TResult>;
};
export type apply_01 = {
    <TResult>(fn: (...args: any[]) => TResult): apply_11<TResult>;
};
export type apply_11<TResult> = TResult;
/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *                                      sum: R.add,
 *                                      nested: { mul: R.multiply }
 *                                   });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
export declare const applySpec: applySpec_0;
export type applySpec_0 = {
    <T>(obj: any): applySpec_1<T>;
};
export type applySpec_1<T> = Variadic<T>;
/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
export declare const ascend: ascend_000;
export type ascend_000 = {
    <U extends Struct<any>, K extends keyof U>(prop: K, _val: PH, obj: U): ascend_base_101<U, K>;
    <T>(prop: Prop, _val: PH, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <T>(_prop: PH, _val: PH, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_001<T>;
    <T>(_prop: PH, val: any, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    <T, U extends Struct<any>>(_prop: PH, val: T, obj: U): ascend_base_011<T, U>;
    <U extends Struct<any>>(_prop: PH, _val: PH, obj: U): ascend_base_001<U>;
    <T, U extends Struct<any>, K extends keyof U>(prop: K, val: T, obj: U): ascend_base_111<T, U, K>;
    <T>(prop: Prop, val: any, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <T>(_prop: PH, val: T): ascend_base_010<T>;
    (_prop: PH, val: any): ascend_any_object_as_long_as_the_type_remains_unchanged_010;
    <T, U extends Struct<any>, K extends keyof U>(prop: K, val: T): ascend_base_110<T, U, K>;
    (prop: Prop, val: any): ascend_any_object_as_long_as_the_type_remains_unchanged_110;
    (prop: Prop): ascend_any_object_as_long_as_the_type_remains_unchanged_100;
    <$SEL extends "111", $KIND extends "base">(): <T, U extends Struct<any>, K extends keyof U>(prop: K, val: T, obj: U) => ascend_base_111<T, U, K>;
    <$SEL extends "11", $KIND extends "base">(): <T, U extends Struct<any>, K extends keyof U>(prop: K, val: T) => ascend_base_110<T, U, K>;
    <$SEL extends "101", $KIND extends "base">(): <U extends Struct<any>, K extends keyof U>(prop: K, _val: PH, obj: U) => ascend_base_101<U, K>;
    <$SEL extends "1", $KIND extends "base">(): <U extends Struct<any>, K extends keyof U>(prop: K) => ascend_base_100<U, K>;
    <$SEL extends "011", $KIND extends "base">(): <T, U extends Struct<any>>(_prop: PH, val: T, obj: U) => ascend_base_011<T, U>;
    <$SEL extends "01", $KIND extends "base">(): <T>(_prop: PH, val: T) => ascend_base_010<T>;
    <$SEL extends "001", $KIND extends "base">(): <U extends Struct<any>>(_prop: PH, _val: PH, obj: U) => ascend_base_001<U>;
    <$SEL extends "111", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(prop: Prop, val: any, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): (prop: Prop, val: any) => ascend_any_object_as_long_as_the_type_remains_unchanged_110;
    <$SEL extends "101", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(prop: Prop, _val: PH, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <$SEL extends "1", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): (prop: Prop) => ascend_any_object_as_long_as_the_type_remains_unchanged_100;
    <$SEL extends "011", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(_prop: PH, val: any, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    <$SEL extends "01", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): (_prop: PH, val: any) => ascend_any_object_as_long_as_the_type_remains_unchanged_010;
    <$SEL extends "001", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(_prop: PH, _val: PH, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_001<T>;
    <U extends Struct<any>, K extends keyof U>(prop: K): ascend_base_100<U, K>;
};
export type ascend_base_100<U extends Struct<any>, K extends keyof U> = {
    (_val: PH, obj: U): ascend_base_101<U, K>;
    <T>(val: T, obj: U): ascend_base_111<T, U, K>;
    <$SEL extends "11">(): <T>(val: T, obj: U) => ascend_base_111<T, U, K>;
    <$SEL extends "1">(): <T>(val: T) => ascend_base_110<T, U, K>;
    <$SEL extends "01">(): (_val: PH, obj: U) => ascend_base_101<U, K>;
    <T>(val: T): ascend_base_110<T, U, K>;
};
export type ascend_any_object_as_long_as_the_type_remains_unchanged_100 = {
    <T>(_val: PH, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <T>(val: any, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11">(): <T>(val: any, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "1">(): (val: any) => ascend_any_object_as_long_as_the_type_remains_unchanged_110;
    <$SEL extends "01">(): <T>(_val: PH, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    (val: any): ascend_any_object_as_long_as_the_type_remains_unchanged_110;
};
export type ascend_base_010<T> = {
    <U extends Struct<any>>(_prop: PH, obj: U): ascend_base_011<T, U>;
    <U extends Struct<any>, K extends keyof U>(prop: K, obj: U): ascend_base_111<T, U, K>;
    <$SEL extends "11">(): <U extends Struct<any>, K extends keyof U>(prop: K, obj: U) => ascend_base_111<T, U, K>;
    <$SEL extends "1">(): <U extends Struct<any>, K extends keyof U>(prop: K) => ascend_base_110<T, U, K>;
    <$SEL extends "01">(): <U extends Struct<any>>(_prop: PH, obj: U) => ascend_base_011<T, U>;
    <U extends Struct<any>, K extends keyof U>(prop: K): ascend_base_110<T, U, K>;
};
export type ascend_any_object_as_long_as_the_type_remains_unchanged_010 = {
    <T>(_prop: PH, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    <T>(prop: Prop, obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11">(): <T>(prop: Prop, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "1">(): (prop: Prop) => ascend_any_object_as_long_as_the_type_remains_unchanged_110;
    <$SEL extends "01">(): <T>(_prop: PH, obj: T) => ascend_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    (prop: Prop): ascend_any_object_as_long_as_the_type_remains_unchanged_110;
};
export type ascend_base_110<T, U extends Struct<any>, K extends keyof U> = {
    (obj: U): ascend_base_111<T, U, K>;
};
export type ascend_any_object_as_long_as_the_type_remains_unchanged_110 = {
    <T>(obj: T): ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
};
export type ascend_base_001<U extends Struct<any>> = {
    <T>(_prop: PH, val: T): ascend_base_011<T, U>;
    <T, K extends keyof U>(prop: K, val: T): ascend_base_111<T, U, K>;
    <$SEL extends "11">(): <T, K extends keyof U>(prop: K, val: T) => ascend_base_111<T, U, K>;
    <$SEL extends "1">(): <K extends keyof U>(prop: K) => ascend_base_101<U, K>;
    <$SEL extends "01">(): <T>(_prop: PH, val: T) => ascend_base_011<T, U>;
    <K extends keyof U>(prop: K): ascend_base_101<U, K>;
};
export type ascend_any_object_as_long_as_the_type_remains_unchanged_001<T> = {
    (_prop: PH, val: any): ascend_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    (prop: Prop, val: any): ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11">(): (prop: Prop, val: any) => ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "1">(): (prop: Prop) => ascend_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <$SEL extends "01">(): (_prop: PH, val: any) => ascend_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    (prop: Prop): ascend_any_object_as_long_as_the_type_remains_unchanged_101<T>;
};
export type ascend_base_101<U extends Struct<any>, K extends keyof U> = {
    <T>(val: T): ascend_base_111<T, U, K>;
};
export type ascend_any_object_as_long_as_the_type_remains_unchanged_101<T> = {
    (val: any): ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
};
export type ascend_base_011<T, U extends Struct<any>> = {
    <K extends keyof U>(prop: K): ascend_base_111<T, U, K>;
};
export type ascend_any_object_as_long_as_the_type_remains_unchanged_011<T> = {
    (prop: Prop): ascend_any_object_as_long_as_the_type_remains_unchanged_111<T>;
};
export type ascend_base_111<T, U extends Struct<any>, K extends keyof U> = {
    [P in K]: T;
} & U;
export type ascend_any_object_as_long_as_the_type_remains_unchanged_111<T> = T;
/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
export declare const assoc: assoc_000;
export type assoc_000 = {
    <U extends Struct<any>, K extends string>(prop: K, _val: PH, obj: U): assoc_extend_object_with_new_property_101<U, K>;
    <T>(prop: Prop, _val: PH, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <T>(_prop: PH, _val: PH, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_001<T>;
    <T>(_prop: PH, val: any, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    <T, U extends Struct<any>>(_prop: PH, val: T, obj: U): assoc_extend_object_with_new_property_011<T, U>;
    <U extends Struct<any>>(_prop: PH, _val: PH, obj: U): assoc_extend_object_with_new_property_001<U>;
    <T, U extends Struct<any>, K extends string>(prop: K, val: T, obj: U): assoc_extend_object_with_new_property_111<T, U, K>;
    <T>(prop: Prop, val: any, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <T>(_prop: PH, val: T): assoc_extend_object_with_new_property_010<T>;
    (_prop: PH, val: any): assoc_any_object_as_long_as_the_type_remains_unchanged_010;
    <T, K extends string>(prop: K, val: T): assoc_extend_object_with_new_property_110<T, K>;
    (prop: Prop, val: any): assoc_any_object_as_long_as_the_type_remains_unchanged_110;
    (prop: Prop): assoc_any_object_as_long_as_the_type_remains_unchanged_100;
    <$SEL extends "111", $KIND extends "extend_object_with_new_property">(): <T, U extends Struct<any>, K extends string>(prop: K, val: T, obj: U) => assoc_extend_object_with_new_property_111<T, U, K>;
    <$SEL extends "11", $KIND extends "extend_object_with_new_property">(): <T, K extends string>(prop: K, val: T) => assoc_extend_object_with_new_property_110<T, K>;
    <$SEL extends "101", $KIND extends "extend_object_with_new_property">(): <U extends Struct<any>, K extends string>(prop: K, _val: PH, obj: U) => assoc_extend_object_with_new_property_101<U, K>;
    <$SEL extends "1", $KIND extends "extend_object_with_new_property">(): <K extends string>(prop: K) => assoc_extend_object_with_new_property_100<K>;
    <$SEL extends "011", $KIND extends "extend_object_with_new_property">(): <T, U extends Struct<any>>(_prop: PH, val: T, obj: U) => assoc_extend_object_with_new_property_011<T, U>;
    <$SEL extends "01", $KIND extends "extend_object_with_new_property">(): <T>(_prop: PH, val: T) => assoc_extend_object_with_new_property_010<T>;
    <$SEL extends "001", $KIND extends "extend_object_with_new_property">(): <U extends Struct<any>>(_prop: PH, _val: PH, obj: U) => assoc_extend_object_with_new_property_001<U>;
    <$SEL extends "111", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(prop: Prop, val: any, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): (prop: Prop, val: any) => assoc_any_object_as_long_as_the_type_remains_unchanged_110;
    <$SEL extends "101", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(prop: Prop, _val: PH, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <$SEL extends "1", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): (prop: Prop) => assoc_any_object_as_long_as_the_type_remains_unchanged_100;
    <$SEL extends "011", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(_prop: PH, val: any, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    <$SEL extends "01", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): (_prop: PH, val: any) => assoc_any_object_as_long_as_the_type_remains_unchanged_010;
    <$SEL extends "001", $KIND extends "any_object_as_long_as_the_type_remains_unchanged">(): <T>(_prop: PH, _val: PH, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_001<T>;
    <K extends string>(prop: K): assoc_extend_object_with_new_property_100<K>;
};
export type assoc_extend_object_with_new_property_100<K extends string> = {
    <U extends Struct<any>>(_val: PH, obj: U): assoc_extend_object_with_new_property_101<U, K>;
    <T, U extends Struct<any>>(val: T, obj: U): assoc_extend_object_with_new_property_111<T, U, K>;
    <$SEL extends "11">(): <T, U extends Struct<any>>(val: T, obj: U) => assoc_extend_object_with_new_property_111<T, U, K>;
    <$SEL extends "1">(): <T>(val: T) => assoc_extend_object_with_new_property_110<T, K>;
    <$SEL extends "01">(): <U extends Struct<any>>(_val: PH, obj: U) => assoc_extend_object_with_new_property_101<U, K>;
    <T>(val: T): assoc_extend_object_with_new_property_110<T, K>;
};
export type assoc_any_object_as_long_as_the_type_remains_unchanged_100 = {
    <T>(_val: PH, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <T>(val: any, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11">(): <T>(val: any, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "1">(): (val: any) => assoc_any_object_as_long_as_the_type_remains_unchanged_110;
    <$SEL extends "01">(): <T>(_val: PH, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    (val: any): assoc_any_object_as_long_as_the_type_remains_unchanged_110;
};
export type assoc_extend_object_with_new_property_010<T> = {
    <U extends Struct<any>>(_prop: PH, obj: U): assoc_extend_object_with_new_property_011<T, U>;
    <U extends Struct<any>, K extends string>(prop: K, obj: U): assoc_extend_object_with_new_property_111<T, U, K>;
    <$SEL extends "11">(): <U extends Struct<any>, K extends string>(prop: K, obj: U) => assoc_extend_object_with_new_property_111<T, U, K>;
    <$SEL extends "1">(): <K extends string>(prop: K) => assoc_extend_object_with_new_property_110<T, K>;
    <$SEL extends "01">(): <U extends Struct<any>>(_prop: PH, obj: U) => assoc_extend_object_with_new_property_011<T, U>;
    <K extends string>(prop: K): assoc_extend_object_with_new_property_110<T, K>;
};
export type assoc_any_object_as_long_as_the_type_remains_unchanged_010 = {
    <T>(_prop: PH, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    <T>(prop: Prop, obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11">(): <T>(prop: Prop, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "1">(): (prop: Prop) => assoc_any_object_as_long_as_the_type_remains_unchanged_110;
    <$SEL extends "01">(): <T>(_prop: PH, obj: T) => assoc_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    (prop: Prop): assoc_any_object_as_long_as_the_type_remains_unchanged_110;
};
export type assoc_extend_object_with_new_property_110<T, K extends string> = {
    <U extends Struct<any>>(obj: U): assoc_extend_object_with_new_property_111<T, U, K>;
};
export type assoc_any_object_as_long_as_the_type_remains_unchanged_110 = {
    <T>(obj: T): assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
};
export type assoc_extend_object_with_new_property_001<U extends Struct<any>> = {
    <T>(_prop: PH, val: T): assoc_extend_object_with_new_property_011<T, U>;
    <T, K extends string>(prop: K, val: T): assoc_extend_object_with_new_property_111<T, U, K>;
    <$SEL extends "11">(): <T, K extends string>(prop: K, val: T) => assoc_extend_object_with_new_property_111<T, U, K>;
    <$SEL extends "1">(): <K extends string>(prop: K) => assoc_extend_object_with_new_property_101<U, K>;
    <$SEL extends "01">(): <T>(_prop: PH, val: T) => assoc_extend_object_with_new_property_011<T, U>;
    <K extends string>(prop: K): assoc_extend_object_with_new_property_101<U, K>;
};
export type assoc_any_object_as_long_as_the_type_remains_unchanged_001<T> = {
    (_prop: PH, val: any): assoc_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    (prop: Prop, val: any): assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "11">(): (prop: Prop, val: any) => assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
    <$SEL extends "1">(): (prop: Prop) => assoc_any_object_as_long_as_the_type_remains_unchanged_101<T>;
    <$SEL extends "01">(): (_prop: PH, val: any) => assoc_any_object_as_long_as_the_type_remains_unchanged_011<T>;
    (prop: Prop): assoc_any_object_as_long_as_the_type_remains_unchanged_101<T>;
};
export type assoc_extend_object_with_new_property_101<U extends Struct<any>, K extends string> = {
    <T>(val: T): assoc_extend_object_with_new_property_111<T, U, K>;
};
export type assoc_any_object_as_long_as_the_type_remains_unchanged_101<T> = {
    (val: any): assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
};
export type assoc_extend_object_with_new_property_011<T, U extends Struct<any>> = {
    <K extends string>(prop: K): assoc_extend_object_with_new_property_111<T, U, K>;
};
export type assoc_any_object_as_long_as_the_type_remains_unchanged_011<T> = {
    (prop: Prop): assoc_any_object_as_long_as_the_type_remains_unchanged_111<T>;
};
export type assoc_extend_object_with_new_property_111<T, U extends Struct<any>, K extends string> = {
    [P in K]: T;
} & U;
export type assoc_any_object_as_long_as_the_type_remains_unchanged_111<T> = T;
/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
export declare const assocPath: assocPath_000;
export type assocPath_000 = {
    <U>(path: Path, _val: PH, obj: U): assocPath_101<U>;
    <T, U>(_path: PH, val: T, obj: U): assocPath_011<T, U>;
    <U>(_path: PH, _val: PH, obj: U): assocPath_001<U>;
    <T, U>(path: Path, val: T, obj: U): assocPath_111<T, U>;
    <T>(_path: PH, val: T): assocPath_010<T>;
    <T>(path: Path, val: T): assocPath_110<T>;
    <$SEL extends "111">(): <T, U>(path: Path, val: T, obj: U) => assocPath_111<T, U>;
    <$SEL extends "11">(): <T>(path: Path, val: T) => assocPath_110<T>;
    <$SEL extends "101">(): <U>(path: Path, _val: PH, obj: U) => assocPath_101<U>;
    <$SEL extends "1">(): (path: Path) => assocPath_100;
    <$SEL extends "011">(): <T, U>(_path: PH, val: T, obj: U) => assocPath_011<T, U>;
    <$SEL extends "01">(): <T>(_path: PH, val: T) => assocPath_010<T>;
    <$SEL extends "001">(): <U>(_path: PH, _val: PH, obj: U) => assocPath_001<U>;
    (path: Path): assocPath_100;
};
export type assocPath_100 = {
    <U>(_val: PH, obj: U): assocPath_101<U>;
    <T, U>(val: T, obj: U): assocPath_111<T, U>;
    <$SEL extends "11">(): <T, U>(val: T, obj: U) => assocPath_111<T, U>;
    <$SEL extends "1">(): <T>(val: T) => assocPath_110<T>;
    <$SEL extends "01">(): <U>(_val: PH, obj: U) => assocPath_101<U>;
    <T>(val: T): assocPath_110<T>;
};
export type assocPath_010<T> = {
    <U>(_path: PH, obj: U): assocPath_011<T, U>;
    <U>(path: Path, obj: U): assocPath_111<T, U>;
    <$SEL extends "11">(): <U>(path: Path, obj: U) => assocPath_111<T, U>;
    <$SEL extends "1">(): (path: Path) => assocPath_110<T>;
    <$SEL extends "01">(): <U>(_path: PH, obj: U) => assocPath_011<T, U>;
    (path: Path): assocPath_110<T>;
};
export type assocPath_110<T> = {
    <U>(obj: U): assocPath_111<T, U>;
};
export type assocPath_001<U> = {
    <T>(_path: PH, val: T): assocPath_011<T, U>;
    <T>(path: Path, val: T): assocPath_111<T, U>;
    <$SEL extends "11">(): <T>(path: Path, val: T) => assocPath_111<T, U>;
    <$SEL extends "1">(): (path: Path) => assocPath_101<U>;
    <$SEL extends "01">(): <T>(_path: PH, val: T) => assocPath_011<T, U>;
    (path: Path): assocPath_101<U>;
};
export type assocPath_101<U> = {
    <T>(val: T): assocPath_111<T, U>;
};
export type assocPath_011<T, U> = {
    (path: Path): assocPath_111<T, U>;
};
export type assocPath_111<T, U> = U;
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
export declare const binary: binary_0;
export type binary_0 = {
    <T, A, B>(fn: (a: A, b: T, ...args: any[]) => T): binary_base_1<T, A, B>;
    <$SEL extends "1", $KIND extends "base">(): <T, A, B>(fn: (a: A, b: T, ...args: any[]) => T) => binary_base_1<T, A, B>;
    <$SEL extends "1", $KIND extends "non_generics_for_return_func">(): <T>(fn: Variadic<T>) => binary_non_generics_for_return_func_1<T>;
    <T>(fn: Variadic<T>): binary_non_generics_for_return_func_1<T>;
};
export type binary_base_1<T, A, B> = (a: A, b: B) => T;
export type binary_non_generics_for_return_func_1<T> = (a: any, b: any) => T;
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
export declare const bind: bind_00;
export type bind_00 = {
    (_fn: PH, thisObj: {}): bind_01;
    <T>(fn: Variadic<T>, thisObj: {}): bind_11<T>;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, thisObj: {}) => bind_11<T>;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => bind_10<T>;
    <$SEL extends "01">(): (_fn: PH, thisObj: {}) => bind_01;
    <T>(fn: Variadic<T>): bind_10<T>;
};
export type bind_10<T> = {
    (thisObj: {}): bind_11<T>;
};
export type bind_01 = {
    <T>(fn: Variadic<T>): bind_11<T>;
};
export type bind_11<T> = Variadic<T>;
/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
export declare const both: both_00;
export type both_00 = {
    <T>(_pred1: PH, pred2: Pred<T>): both_01<T>;
    <T>(pred1: Pred<T>, pred2: Pred<T>): both_11<T>;
    <$SEL extends "11">(): <T>(pred1: Pred<T>, pred2: Pred<T>) => both_11<T>;
    <$SEL extends "1">(): <T>(pred1: Pred<T>) => both_10<T>;
    <$SEL extends "01">(): <T>(_pred1: PH, pred2: Pred<T>) => both_01<T>;
    <T>(pred1: Pred<T>): both_10<T>;
};
export type both_10<T> = {
    (pred2: Pred<T>): both_11<T>;
};
export type both_01<T> = {
    (pred1: Pred<T>): both_11<T>;
};
export type both_11<T> = Pred<T>;
/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * `R.converge`: the left branch can produce a function while the right branch
 * produces a value to be passed to that function as an argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.times(R.always(' ')),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
export declare const call: call_00;
export type call_00 = {
    (_fn: PH, ...args: any[]): call_01;
    <T>(fn: Variadic<T>, ...args: any[]): call_11<T>;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, ...args: any[]) => call_11<T>;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => call_10<T>;
    <$SEL extends "01">(): (_fn: PH, ...args: any[]) => call_01;
    <T>(fn: Variadic<T>): call_10<T>;
};
export type call_10<T> = {
    (...args: any[]): call_11<T>;
};
export type call_01 = {
    <T>(fn: Variadic<T>): call_11<T>;
};
export type call_11<T> = T;
/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
export declare const chain: chain_00;
export type chain_00 = {
    <T>(_fn: PH, list: List<T>): chain_list_version_01<T>;
    <T>(_fn: PH, list: Chain<T>): chain_generic_chain_version_01<T>;
    <T, V>(_fn: PH, monad: (list: List<T>) => V): chain_function_argument_01<T, V>;
    <T, U>(fn: (n: T) => U[], list: List<T>): chain_list_version_11<T, U>;
    <T, U>(fn: (n: T) => Chain<U>, list: Chain<T>): chain_generic_chain_version_11<T, U>;
    <T, U, V>(fn: (v: V) => (list: List<T>) => U[], monad: (list: List<T>) => V): chain_function_argument_11<T, U, V>;
    <T, U>(fn: (n: T) => U[]): chain_list_version_10<T, U>;
    <T, U>(fn: (n: T) => Chain<U>): chain_generic_chain_version_10<T, U>;
    <$SEL extends "11", $KIND extends "list_version">(): <T, U>(fn: (n: T) => U[], list: List<T>) => chain_list_version_11<T, U>;
    <$SEL extends "1", $KIND extends "list_version">(): <T, U>(fn: (n: T) => U[]) => chain_list_version_10<T, U>;
    <$SEL extends "01", $KIND extends "list_version">(): <T>(_fn: PH, list: List<T>) => chain_list_version_01<T>;
    <$SEL extends "11", $KIND extends "generic_chain_version">(): <T, U>(fn: (n: T) => Chain<U>, list: Chain<T>) => chain_generic_chain_version_11<T, U>;
    <$SEL extends "1", $KIND extends "generic_chain_version">(): <T, U>(fn: (n: T) => Chain<U>) => chain_generic_chain_version_10<T, U>;
    <$SEL extends "01", $KIND extends "generic_chain_version">(): <T>(_fn: PH, list: Chain<T>) => chain_generic_chain_version_01<T>;
    <$SEL extends "11", $KIND extends "function_argument">(): <T, U, V>(fn: (v: V) => (list: List<T>) => U[], monad: (list: List<T>) => V) => chain_function_argument_11<T, U, V>;
    <$SEL extends "1", $KIND extends "function_argument">(): <T, U, V>(fn: (v: V) => (list: List<T>) => U[]) => chain_function_argument_10<T, U, V>;
    <$SEL extends "01", $KIND extends "function_argument">(): <T, V>(_fn: PH, monad: (list: List<T>) => V) => chain_function_argument_01<T, V>;
    <T, U, V>(fn: (v: V) => (list: List<T>) => U[]): chain_function_argument_10<T, U, V>;
};
export type chain_list_version_10<T, U> = {
    (list: List<T>): chain_list_version_11<T, U>;
};
export type chain_generic_chain_version_10<T, U> = {
    (list: Chain<T>): chain_generic_chain_version_11<T, U>;
};
export type chain_function_argument_10<T, U, V> = {
    (monad: (list: List<T>) => V): chain_function_argument_11<T, U, V>;
};
export type chain_list_version_01<T> = {
    <U>(fn: (n: T) => U[]): chain_list_version_11<T, U>;
};
export type chain_generic_chain_version_01<T> = {
    <U>(fn: (n: T) => Chain<U>): chain_generic_chain_version_11<T, U>;
};
export type chain_function_argument_01<T, V> = {
    <U>(fn: (v: V) => (list: List<T>) => U[]): chain_function_argument_11<T, U, V>;
};
export type chain_list_version_11<T, U> = U[];
export type chain_generic_chain_version_11<T, U> = Chain<U>;
export type chain_function_argument_11<T, U, V> = (list: List<T>) => U[];
/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
export declare const clamp: clamp_000;
export type clamp_000 = {
    <T>(min: T, _max: PH, value: T): clamp_101<T>;
    <T>(_min: PH, max: T, value: T): clamp_011<T>;
    <T>(_min: PH, _max: PH, value: T): clamp_001<T>;
    <T>(min: T, max: T, value: T): clamp_111<T>;
    <T>(_min: PH, max: T): clamp_010<T>;
    <T>(min: T, max: T): clamp_110<T>;
    <$SEL extends "111">(): <T>(min: T, max: T, value: T) => clamp_111<T>;
    <$SEL extends "11">(): <T>(min: T, max: T) => clamp_110<T>;
    <$SEL extends "101">(): <T>(min: T, _max: PH, value: T) => clamp_101<T>;
    <$SEL extends "1">(): <T>(min: T) => clamp_100<T>;
    <$SEL extends "011">(): <T>(_min: PH, max: T, value: T) => clamp_011<T>;
    <$SEL extends "01">(): <T>(_min: PH, max: T) => clamp_010<T>;
    <$SEL extends "001">(): <T>(_min: PH, _max: PH, value: T) => clamp_001<T>;
    <T>(min: T): clamp_100<T>;
};
export type clamp_100<T> = {
    (_max: PH, value: T): clamp_101<T>;
    (max: T, value: T): clamp_111<T>;
    <$SEL extends "11">(): (max: T, value: T) => clamp_111<T>;
    <$SEL extends "1">(): (max: T) => clamp_110<T>;
    <$SEL extends "01">(): (_max: PH, value: T) => clamp_101<T>;
    (max: T): clamp_110<T>;
};
export type clamp_010<T> = {
    (_min: PH, value: T): clamp_011<T>;
    (min: T, value: T): clamp_111<T>;
    <$SEL extends "11">(): (min: T, value: T) => clamp_111<T>;
    <$SEL extends "1">(): (min: T) => clamp_110<T>;
    <$SEL extends "01">(): (_min: PH, value: T) => clamp_011<T>;
    (min: T): clamp_110<T>;
};
export type clamp_110<T> = {
    (value: T): clamp_111<T>;
};
export type clamp_001<T> = {
    (_min: PH, max: T): clamp_011<T>;
    (min: T, max: T): clamp_111<T>;
    <$SEL extends "11">(): (min: T, max: T) => clamp_111<T>;
    <$SEL extends "1">(): (min: T) => clamp_101<T>;
    <$SEL extends "01">(): (_min: PH, max: T) => clamp_011<T>;
    (min: T): clamp_101<T>;
};
export type clamp_101<T> = {
    (max: T): clamp_111<T>;
};
export type clamp_011<T> = {
    (min: T): clamp_111<T>;
};
export type clamp_111<T> = T;
/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
export declare const clone: clone_0;
export type clone_0 = {
    <T>(value: T): clone_Objects_1<T>;
    <$SEL extends "1", $KIND extends "Objects">(): <T>(value: T) => clone_Objects_1<T>;
    <$SEL extends "1", $KIND extends "Arrays">(): <T>(value: List<T>) => clone_Arrays_1<T>;
    <T>(value: List<T>): clone_Arrays_1<T>;
};
export type clone_Objects_1<T> = T;
export type clone_Arrays_1<T> = T[];
/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
export declare const comparator: comparator_0;
export type comparator_0 = {
    <T>(pred: (a: T, b: T) => boolean): comparator_1<T>;
};
export type comparator_1<T> = (x: T, y: T) => number;
/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
export declare const complement: complement_0;
export type complement_0 = {
    (pred: Variadic<boolean>): complement_1;
};
export type complement_1 = Variadic<boolean>;
/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
export declare function compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export declare function compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
export declare function compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
export declare function compose<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T1;
export declare function compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
export declare function compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
export declare function compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;
export declare function compose<V0, V1, V2, V3, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T2;
export declare function compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T3;
export declare function compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
export declare function compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;
export declare function compose<V0, V1, V2, V3, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T3;
export declare function compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T4;
export declare function compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
export declare function compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;
export declare function compose<V0, V1, V2, V3, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T4;
export declare function compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T5;
export declare function compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
export declare function compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;
export declare function compose<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T5;
export declare function compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T6;
export declare function compose<V0, V1, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
export declare function compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;
export declare function compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T6;
export declare function compose<V0, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T7;
export declare function compose<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T7;
export declare function compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T7;
export declare function compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T7;
export declare function compose<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T8;
export declare function compose<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T8;
export declare function compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T8;
export declare function compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T8;
export declare function compose<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T9;
export declare function compose<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T9;
export declare function compose<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T9;
export declare function compose<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => T9, fn7: (x: T7) => T8, fn6: (x: T6) => T7, fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T9;
/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
export declare function composeK<V, T1>(fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T1>;
export declare function composeK<V, T1, T2>(fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T2>;
export declare function composeK<V, T1, T2, T3>(fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T3>;
export declare function composeK<V, T1, T2, T3, T4>(fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T4>;
export declare function composeK<V, T1, T2, T3, T4, T5>(fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T5>;
export declare function composeK<V, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T6>;
export declare function composeK<V, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T7>;
export declare function composeK<V, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Chain<T8>, fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T8>;
export declare function composeK<V, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Chain<T9>, fn7: (x: T7) => Chain<T8>, fn6: (x: T6) => Chain<T7>, fn5: (x: T5) => Chain<T6>, fn4: (x: T4) => Chain<T5>, fn3: (x: T3) => Chain<T4>, fn2: (x: T2) => Chain<T3>, fn1: (x: T1) => Chain<T2>, fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T9>;
/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
export declare function composeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
export declare function composeP<V0, V1, T1>(fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;
export declare function composeP<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;
export declare function composeP<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>;
export declare function composeP<V0, T1, T2>(fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T2>;
export declare function composeP<V0, V1, T1, T2>(fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T2>;
export declare function composeP<V0, V1, V2, T1, T2>(fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T2>;
export declare function composeP<V0, V1, V2, V3, T1, T2>(fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T2>;
export declare function composeP<V0, T1, T2, T3>(fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T3>;
export declare function composeP<V0, V1, T1, T2, T3>(fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T3>;
export declare function composeP<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T3>;
export declare function composeP<V0, V1, V2, V3, T1, T2, T3>(fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T3>;
export declare function composeP<V0, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T4>;
export declare function composeP<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T4>;
export declare function composeP<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T4>;
export declare function composeP<V0, V1, V2, V3, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T4>;
export declare function composeP<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T5>;
export declare function composeP<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T5>;
export declare function composeP<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T5>;
export declare function composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T5>;
export declare function composeP<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T6>;
export declare function composeP<V0, V1, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T6>;
export declare function composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T6>;
export declare function composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T6>;
export declare function composeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T7>;
export declare function composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T7>;
export declare function composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T7>;
export declare function composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T7>;
export declare function composeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T8>;
export declare function composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T8>;
export declare function composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T8>;
export declare function composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T8>;
export declare function composeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9> | T9, fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T9>;
export declare function composeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9> | T9, fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T9>;
export declare function composeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9> | T9, fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T9>;
export declare function composeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn8: (x: T8) => Promise<T9> | T9, fn7: (x: T7) => Promise<T8> | T8, fn6: (x: T6) => Promise<T7> | T7, fn5: (x: T5) => Promise<T6> | T6, fn4: (x: T4) => Promise<T5> | T5, fn3: (x: T3) => Promise<T4> | T4, fn2: (x: T2) => Promise<T3> | T3, fn1: (x: T1) => Promise<T2> | T2, fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T9>;
/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
export declare const concat: concat_00;
export type concat_00 = {
    <T extends List<any>>(_list1: PH, list2: T): concat_01<T>;
    <T extends List<any>>(list1: T, list2: T): concat_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(list1: T, list2: T) => concat_11<T>;
    <$SEL extends "1">(): <T extends List<any>>(list1: T) => concat_10<T>;
    <$SEL extends "01">(): <T extends List<any>>(_list1: PH, list2: T) => concat_01<T>;
    <T extends List<any>>(list1: T): concat_10<T>;
};
export type concat_10<T extends List<any>> = {
    (list2: T): concat_11<T>;
};
export type concat_01<T extends List<any>> = {
    (list1: T): concat_11<T>;
};
export type concat_11<T extends List<any>> = T;
/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
export declare const cond: cond_0;
export type cond_0 = {
    <T, U>(fns: [Pred<T>, (v: T) => U][]): cond_1<T, U>;
};
export type cond_1<T, U> = (v: T) => U;
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
export declare const construct: construct_0;
export type construct_0 = {
    (fn: Function): construct_1;
};
export type construct_1 = Function;
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
export declare const constructN: constructN_00;
export type constructN_00 = {
    (_n: PH, fn: Function): constructN_01;
    (n: number, fn: Function): constructN_11;
    <$SEL extends "11">(): (n: number, fn: Function) => constructN_11;
    <$SEL extends "1">(): (n: number) => constructN_10;
    <$SEL extends "01">(): (_n: PH, fn: Function) => constructN_01;
    (n: number): constructN_10;
};
export type constructN_10 = {
    (fn: Function): constructN_11;
};
export type constructN_01 = {
    (n: number): constructN_11;
};
export type constructN_11 = Function;
/**
 * Returns `true` if the specified value is equal, in `R.equals` terms, to at
 * least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
export declare const contains: contains_00;
export type contains_00 = {
    (_a: PH, list: string): contains_base_01;
    <T, R extends List<T>>(_a: PH, list: R): contains_generics_01<T, R>;
    (a: string, list: string): contains_base_11;
    <T, R extends List<T>>(a: T, list: R): contains_generics_11<T, R>;
    (a: string): contains_base_10;
    <$SEL extends "11", $KIND extends "base">(): (a: string, list: string) => contains_base_11;
    <$SEL extends "1", $KIND extends "base">(): (a: string) => contains_base_10;
    <$SEL extends "01", $KIND extends "base">(): (_a: PH, list: string) => contains_base_01;
    <$SEL extends "11", $KIND extends "generics">(): <T, R extends List<T>>(a: T, list: R) => contains_generics_11<T, R>;
    <$SEL extends "1", $KIND extends "generics">(): <T>(a: T) => contains_generics_10<T>;
    <$SEL extends "01", $KIND extends "generics">(): <T, R extends List<T>>(_a: PH, list: R) => contains_generics_01<T, R>;
    <T>(a: T): contains_generics_10<T>;
};
export type contains_base_10 = {
    (list: string): contains_base_11;
};
export type contains_generics_10<T> = {
    <R extends List<T>>(list: R): contains_generics_11<T, R>;
};
export type contains_base_01 = {
    (a: string): contains_base_11;
};
export type contains_generics_01<T, R extends List<T>> = {
    (a: T): contains_generics_11<T, R>;
};
export type contains_base_11 = boolean;
export type contains_generics_11<T, R extends List<T>> = boolean;
/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
export declare const converge: converge_00;
export type converge_00 = {
    (_after: PH, fns: List<Variadic<any>>): converge_01;
    <T>(after: Variadic<T>, fns: List<Variadic<any>>): converge_11<T>;
    <$SEL extends "11">(): <T>(after: Variadic<T>, fns: List<Variadic<any>>) => converge_11<T>;
    <$SEL extends "1">(): <T>(after: Variadic<T>) => converge_10<T>;
    <$SEL extends "01">(): (_after: PH, fns: List<Variadic<any>>) => converge_01;
    <T>(after: Variadic<T>): converge_10<T>;
};
export type converge_10<T> = {
    (fns: List<Variadic<any>>): converge_11<T>;
};
export type converge_01 = {
    <T>(after: Variadic<T>): converge_11<T>;
};
export type converge_11<T> = Variadic<T>;
/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
export declare const countBy: countBy_00;
export type countBy_00 = {
    <T>(_fn: PH, list: List<T>): countBy_01<T>;
    <T>(fn: (a: T) => Prop, list: List<T>): countBy_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => Prop, list: List<T>) => countBy_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => Prop) => countBy_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => countBy_01<T>;
    <T>(fn: (a: T) => Prop): countBy_10<T>;
};
export type countBy_10<T> = {
    (list: List<T>): countBy_11<T>;
};
export type countBy_01<T> = {
    (fn: (a: T) => Prop): countBy_11<T>;
};
export type countBy_11<T> = Obj<number>;
/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
export declare function curry<T1, TResult>(fn: (a: T1) => TResult): CurriedFunction1<T1, TResult>;
export declare function curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
export declare function curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
export declare function curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
export declare function curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
export declare function curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
export declare const curryN: curryN_00;
export type curryN_00 = {
    <T>(_length: PH, fn: Variadic<T>): curryN_01<T>;
    <T>(length: number, fn: Variadic<T>): curryN_11<T>;
    <$SEL extends "11">(): <T>(length: number, fn: Variadic<T>) => curryN_11<T>;
    <$SEL extends "1">(): (length: number) => curryN_10;
    <$SEL extends "01">(): <T>(_length: PH, fn: Variadic<T>) => curryN_01<T>;
    (length: number): curryN_10;
};
export type curryN_10 = {
    <T>(fn: Variadic<T>): curryN_11<T>;
};
export type curryN_01<T> = {
    (length: number): curryN_11<T>;
};
export type curryN_11<T> = Variadic<T>;
/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
export declare const dec: dec_0;
export type dec_0 = {
    (n: number): dec_1;
};
export type dec_1 = number;
/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
export declare const defaultTo: defaultTo_00;
export type defaultTo_00 = {
    <U>(_a: PH, b: U | null | undefined): defaultTo_01<U>;
    <T, U>(a: T, b: U | null | undefined): defaultTo_11<T, U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U | null | undefined) => defaultTo_11<T, U>;
    <$SEL extends "1">(): <T>(a: T) => defaultTo_10<T>;
    <$SEL extends "01">(): <U>(_a: PH, b: U | null | undefined) => defaultTo_01<U>;
    <T>(a: T): defaultTo_10<T>;
};
export type defaultTo_10<T> = {
    <U>(b: U | null | undefined): defaultTo_11<T, U>;
};
export type defaultTo_01<U> = {
    <T>(a: T): defaultTo_11<T, U>;
};
export type defaultTo_11<T, U> = T | U;
/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
export declare const descend: descend_000;
export type descend_000 = {
    <T, V extends Ord>(comparator: (val: T) => V, _a: PH, b: T): descend_101<T, V>;
    <T>(_comparator: PH, a: T, b: T): descend_011<T>;
    <T>(_comparator: PH, _a: PH, b: T): descend_001<T>;
    <T, V extends Ord>(comparator: (val: T) => V, a: T, b: T): descend_111<T, V>;
    <T>(_comparator: PH, a: T): descend_010<T>;
    <T, V extends Ord>(comparator: (val: T) => V, a: T): descend_110<T, V>;
    <$SEL extends "111">(): <T, V extends Ord>(comparator: (val: T) => V, a: T, b: T) => descend_111<T, V>;
    <$SEL extends "11">(): <T, V extends Ord>(comparator: (val: T) => V, a: T) => descend_110<T, V>;
    <$SEL extends "101">(): <T, V extends Ord>(comparator: (val: T) => V, _a: PH, b: T) => descend_101<T, V>;
    <$SEL extends "1">(): <T, V extends Ord>(comparator: (val: T) => V) => descend_100<T, V>;
    <$SEL extends "011">(): <T>(_comparator: PH, a: T, b: T) => descend_011<T>;
    <$SEL extends "01">(): <T>(_comparator: PH, a: T) => descend_010<T>;
    <$SEL extends "001">(): <T>(_comparator: PH, _a: PH, b: T) => descend_001<T>;
    <T, V extends Ord>(comparator: (val: T) => V): descend_100<T, V>;
};
export type descend_100<T, V extends Ord> = {
    (_a: PH, b: T): descend_101<T, V>;
    (a: T, b: T): descend_111<T, V>;
    <$SEL extends "11">(): (a: T, b: T) => descend_111<T, V>;
    <$SEL extends "1">(): (a: T) => descend_110<T, V>;
    <$SEL extends "01">(): (_a: PH, b: T) => descend_101<T, V>;
    (a: T): descend_110<T, V>;
};
export type descend_010<T> = {
    (_comparator: PH, b: T): descend_011<T>;
    <V extends Ord>(comparator: (val: T) => V, b: T): descend_111<T, V>;
    <$SEL extends "11">(): <V extends Ord>(comparator: (val: T) => V, b: T) => descend_111<T, V>;
    <$SEL extends "1">(): <V extends Ord>(comparator: (val: T) => V) => descend_110<T, V>;
    <$SEL extends "01">(): (_comparator: PH, b: T) => descend_011<T>;
    <V extends Ord>(comparator: (val: T) => V): descend_110<T, V>;
};
export type descend_110<T, V extends Ord> = {
    (b: T): descend_111<T, V>;
};
export type descend_001<T> = {
    (_comparator: PH, a: T): descend_011<T>;
    <V extends Ord>(comparator: (val: T) => V, a: T): descend_111<T, V>;
    <$SEL extends "11">(): <V extends Ord>(comparator: (val: T) => V, a: T) => descend_111<T, V>;
    <$SEL extends "1">(): <V extends Ord>(comparator: (val: T) => V) => descend_101<T, V>;
    <$SEL extends "01">(): (_comparator: PH, a: T) => descend_011<T>;
    <V extends Ord>(comparator: (val: T) => V): descend_101<T, V>;
};
export type descend_101<T, V extends Ord> = {
    (a: T): descend_111<T, V>;
};
export type descend_011<T> = {
    <V extends Ord>(comparator: (val: T) => V): descend_111<T, V>;
};
export type descend_111<T, V extends Ord> = number;
/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared are compared
 * in terms of value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
export declare const difference: difference_00;
export type difference_00 = {
    <T>(_list1: PH, list2: List<T>): difference_01<T>;
    <T>(list1: List<T>, list2: List<T>): difference_11<T>;
    <$SEL extends "11">(): <T>(list1: List<T>, list2: List<T>) => difference_11<T>;
    <$SEL extends "1">(): <T>(list1: List<T>) => difference_10<T>;
    <$SEL extends "01">(): <T>(_list1: PH, list2: List<T>) => difference_01<T>;
    <T>(list1: List<T>): difference_10<T>;
};
export type difference_10<T> = {
    (list2: List<T>): difference_11<T>;
};
export type difference_01<T> = {
    (list1: List<T>): difference_11<T>;
};
export type difference_11<T> = T[];
/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
export declare const differenceWith: differenceWith_000;
export type differenceWith_000 = {
    <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>): differenceWith_101<T>;
    <T>(_pred: PH, list1: List<T>, list2: List<T>): differenceWith_011<T>;
    <T>(_pred: PH, _list1: PH, list2: List<T>): differenceWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): differenceWith_111<T>;
    <T>(_pred: PH, list1: List<T>): differenceWith_010<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>): differenceWith_110<T>;
    <$SEL extends "111">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>) => differenceWith_111<T>;
    <$SEL extends "11">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>) => differenceWith_110<T>;
    <$SEL extends "101">(): <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>) => differenceWith_101<T>;
    <$SEL extends "1">(): <T>(pred: (a: T, b: T) => boolean) => differenceWith_100<T>;
    <$SEL extends "011">(): <T>(_pred: PH, list1: List<T>, list2: List<T>) => differenceWith_011<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list1: List<T>) => differenceWith_010<T>;
    <$SEL extends "001">(): <T>(_pred: PH, _list1: PH, list2: List<T>) => differenceWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean): differenceWith_100<T>;
};
export type differenceWith_100<T> = {
    (_list1: PH, list2: List<T>): differenceWith_101<T>;
    (list1: List<T>, list2: List<T>): differenceWith_111<T>;
    <$SEL extends "11">(): (list1: List<T>, list2: List<T>) => differenceWith_111<T>;
    <$SEL extends "1">(): (list1: List<T>) => differenceWith_110<T>;
    <$SEL extends "01">(): (_list1: PH, list2: List<T>) => differenceWith_101<T>;
    (list1: List<T>): differenceWith_110<T>;
};
export type differenceWith_010<T> = {
    (_pred: PH, list2: List<T>): differenceWith_011<T>;
    (pred: (a: T, b: T) => boolean, list2: List<T>): differenceWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list2: List<T>) => differenceWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => differenceWith_110<T>;
    <$SEL extends "01">(): (_pred: PH, list2: List<T>) => differenceWith_011<T>;
    (pred: (a: T, b: T) => boolean): differenceWith_110<T>;
};
export type differenceWith_110<T> = {
    (list2: List<T>): differenceWith_111<T>;
};
export type differenceWith_001<T> = {
    (_pred: PH, list1: List<T>): differenceWith_011<T>;
    (pred: (a: T, b: T) => boolean, list1: List<T>): differenceWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list1: List<T>) => differenceWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => differenceWith_101<T>;
    <$SEL extends "01">(): (_pred: PH, list1: List<T>) => differenceWith_011<T>;
    (pred: (a: T, b: T) => boolean): differenceWith_101<T>;
};
export type differenceWith_101<T> = {
    (list1: List<T>): differenceWith_111<T>;
};
export type differenceWith_011<T> = {
    (pred: (a: T, b: T) => boolean): differenceWith_111<T>;
};
export type differenceWith_111<T> = T[];
/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
export declare const dissoc: dissoc_00;
export type dissoc_00 = {
    <T>(_prop: PH, obj: T): dissoc_accurate_01<T>;
    (_prop: PH, obj: Struct<any>): dissoc_easier_01;
    <T>(prop: keyof T, obj: T): dissoc_accurate_11<T>;
    <T>(prop: Prop, obj: Struct<any>): dissoc_easier_11<T>;
    <T>(prop: keyof T): dissoc_accurate_10<T>;
    <$SEL extends "11", $KIND extends "accurate">(): <T>(prop: keyof T, obj: T) => dissoc_accurate_11<T>;
    <$SEL extends "1", $KIND extends "accurate">(): <T>(prop: keyof T) => dissoc_accurate_10<T>;
    <$SEL extends "01", $KIND extends "accurate">(): <T>(_prop: PH, obj: T) => dissoc_accurate_01<T>;
    <$SEL extends "11", $KIND extends "easier">(): <T>(prop: Prop, obj: Struct<any>) => dissoc_easier_11<T>;
    <$SEL extends "1", $KIND extends "easier">(): (prop: Prop) => dissoc_easier_10;
    <$SEL extends "01", $KIND extends "easier">(): (_prop: PH, obj: Struct<any>) => dissoc_easier_01;
    (prop: Prop): dissoc_easier_10;
};
export type dissoc_accurate_10<T> = {
    (obj: T): dissoc_accurate_11<T>;
};
export type dissoc_easier_10 = {
    <T>(obj: Struct<any>): dissoc_easier_11<T>;
};
export type dissoc_accurate_01<T> = {
    (prop: keyof T): dissoc_accurate_11<T>;
};
export type dissoc_easier_01 = {
    <T>(prop: Prop): dissoc_easier_11<T>;
};
export type dissoc_accurate_11<T> = T;
export type dissoc_easier_11<T> = T;
/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @sig [String] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
export declare const dissocPath: dissocPath_00;
export type dissocPath_00 = {
    (_path: PH, obj: Struct<any>): dissocPath_01;
    <T>(path: Path, obj: Struct<any>): dissocPath_11<T>;
    <$SEL extends "11">(): <T>(path: Path, obj: Struct<any>) => dissocPath_11<T>;
    <$SEL extends "1">(): (path: Path) => dissocPath_10;
    <$SEL extends "01">(): (_path: PH, obj: Struct<any>) => dissocPath_01;
    (path: Path): dissocPath_10;
};
export type dissocPath_10 = {
    <T>(obj: Struct<any>): dissocPath_11<T>;
};
export type dissocPath_01 = {
    <T>(path: Path): dissocPath_11<T>;
};
export type dissocPath_11<T> = T;
/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
export declare const divide: divide_00;
export type divide_00 = {
    (_a: PH, b: number): divide_01;
    (a: number, b: number): divide_11;
    <$SEL extends "11">(): (a: number, b: number) => divide_11;
    <$SEL extends "1">(): (a: number) => divide_10;
    <$SEL extends "01">(): (_a: PH, b: number) => divide_01;
    (a: number): divide_10;
};
export type divide_10 = {
    (b: number): divide_11;
};
export type divide_01 = {
    (a: number): divide_11;
};
export type divide_11 = number;
/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {[a]} list
 * @return {[a]} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
export declare const drop: drop_00;
export type drop_00 = {
    <T extends List<any>>(_n: PH, xs: T): drop_01<T>;
    <T extends List<any>>(n: number, xs: T): drop_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, xs: T) => drop_11<T>;
    <$SEL extends "1">(): (n: number) => drop_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, xs: T) => drop_01<T>;
    (n: number): drop_10;
};
export type drop_10 = {
    <T extends List<any>>(xs: T): drop_11<T>;
};
export type drop_01<T extends List<any>> = {
    (n: number): drop_11<T>;
};
export type drop_11<T extends List<any>> = T;
/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
export declare const dropLast: dropLast_00;
export type dropLast_00 = {
    <T extends List<any>>(_n: PH, xs: T): dropLast_01<T>;
    <T extends List<any>>(n: number, xs: T): dropLast_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, xs: T) => dropLast_11<T>;
    <$SEL extends "1">(): (n: number) => dropLast_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, xs: T) => dropLast_01<T>;
    (n: number): dropLast_10;
};
export type dropLast_10 = {
    <T extends List<any>>(xs: T): dropLast_11<T>;
};
export type dropLast_01<T extends List<any>> = {
    (n: number): dropLast_11<T>;
};
export type dropLast_11<T extends List<any>> = T;
/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
export declare const dropLastWhile: dropLastWhile_00;
export type dropLastWhile_00 = {
    <T, R extends List<T>>(_pred: PH, list: R): dropLastWhile_01<T, R>;
    <T, R extends List<T>>(pred: Pred<T>, list: R): dropLastWhile_11<T, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(pred: Pred<T>, list: R) => dropLastWhile_11<T, R>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => dropLastWhile_10<T>;
    <$SEL extends "01">(): <T, R extends List<T>>(_pred: PH, list: R) => dropLastWhile_01<T, R>;
    <T>(pred: Pred<T>): dropLastWhile_10<T>;
};
export type dropLastWhile_10<T> = {
    <R extends List<T>>(list: R): dropLastWhile_11<T, R>;
};
export type dropLastWhile_01<T, R extends List<T>> = {
    (pred: Pred<T>): dropLastWhile_11<T, R>;
};
export type dropLastWhile_11<T, R extends List<T>> = T[];
/**
 * Returns a new list without any consecutively repeating elements. `R.equals`
 * is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
export declare const dropRepeats: dropRepeats_0;
export type dropRepeats_0 = {
    <T>(list: List<T>): dropRepeats_1<T>;
};
export type dropRepeats_1<T> = T[];
/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
export declare const dropRepeatsWith: dropRepeatsWith_00;
export type dropRepeatsWith_00 = {
    <T>(_pred: PH, list: List<T>): dropRepeatsWith_01<T>;
    <T>(pred: Pred<T>, list: List<T>): dropRepeatsWith_11<T>;
    <$SEL extends "11">(): <T>(pred: Pred<T>, list: List<T>) => dropRepeatsWith_11<T>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => dropRepeatsWith_10<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list: List<T>) => dropRepeatsWith_01<T>;
    <T>(pred: Pred<T>): dropRepeatsWith_10<T>;
};
export type dropRepeatsWith_10<T> = {
    (list: List<T>): dropRepeatsWith_11<T>;
};
export type dropRepeatsWith_01<T> = {
    (pred: Pred<T>): dropRepeatsWith_11<T>;
};
export type dropRepeatsWith_11<T> = T[];
/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
export declare const dropWhile: dropWhile_00;
export type dropWhile_00 = {
    <T, R extends List<T>>(_pred: PH, list: R): dropWhile_01<T, R>;
    <T, R extends List<T>>(pred: Pred<T>, list: R): dropWhile_11<T, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(pred: Pred<T>, list: R) => dropWhile_11<T, R>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => dropWhile_10<T>;
    <$SEL extends "01">(): <T, R extends List<T>>(_pred: PH, list: R) => dropWhile_01<T, R>;
    <T>(pred: Pred<T>): dropWhile_10<T>;
};
export type dropWhile_10<T> = {
    <R extends List<T>>(list: R): dropWhile_11<T, R>;
};
export type dropWhile_01<T, R extends List<T>> = {
    (pred: Pred<T>): dropWhile_11<T, R>;
};
export type dropWhile_11<T, R extends List<T>> = T[];
/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
export declare const either: either_00;
export type either_00 = {
    <T>(_pred1: PH, pred2: Pred<T>): either_01<T>;
    <T>(pred1: Pred<T>, pred2: Pred<T>): either_11<T>;
    <$SEL extends "11">(): <T>(pred1: Pred<T>, pred2: Pred<T>) => either_11<T>;
    <$SEL extends "1">(): <T>(pred1: Pred<T>) => either_10<T>;
    <$SEL extends "01">(): <T>(_pred1: PH, pred2: Pred<T>) => either_01<T>;
    <T>(pred1: Pred<T>): either_10<T>;
};
export type either_10<T> = {
    (pred2: Pred<T>): either_11<T>;
};
export type either_01<T> = {
    (pred1: Pred<T>): either_11<T>;
};
export type either_11<T> = Pred<T>;
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
export declare const empty: empty_0;
export type empty_0 = {
    <T>(x: T): empty_1<T>;
};
export type empty_1<T> = T;
/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
export declare const eqBy: eqBy_000;
export type eqBy_000 = {
    <T>(fn: (a: T) => T, _a: PH, b: T): eqBy_101<T>;
    <T>(_fn: PH, a: T, b: T): eqBy_011<T>;
    <T>(_fn: PH, _a: PH, b: T): eqBy_001<T>;
    <T>(fn: (a: T) => T, a: T, b: T): eqBy_111<T>;
    <T>(_fn: PH, a: T): eqBy_010<T>;
    <T>(fn: (a: T) => T, a: T): eqBy_110<T>;
    <$SEL extends "111">(): <T>(fn: (a: T) => T, a: T, b: T) => eqBy_111<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => T, a: T) => eqBy_110<T>;
    <$SEL extends "101">(): <T>(fn: (a: T) => T, _a: PH, b: T) => eqBy_101<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => T) => eqBy_100<T>;
    <$SEL extends "011">(): <T>(_fn: PH, a: T, b: T) => eqBy_011<T>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => eqBy_010<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => eqBy_001<T>;
    <T>(fn: (a: T) => T): eqBy_100<T>;
};
export type eqBy_100<T> = {
    (_a: PH, b: T): eqBy_101<T>;
    (a: T, b: T): eqBy_111<T>;
    <$SEL extends "11">(): (a: T, b: T) => eqBy_111<T>;
    <$SEL extends "1">(): (a: T) => eqBy_110<T>;
    <$SEL extends "01">(): (_a: PH, b: T) => eqBy_101<T>;
    (a: T): eqBy_110<T>;
};
export type eqBy_010<T> = {
    (_fn: PH, b: T): eqBy_011<T>;
    (fn: (a: T) => T, b: T): eqBy_111<T>;
    <$SEL extends "11">(): (fn: (a: T) => T, b: T) => eqBy_111<T>;
    <$SEL extends "1">(): (fn: (a: T) => T) => eqBy_110<T>;
    <$SEL extends "01">(): (_fn: PH, b: T) => eqBy_011<T>;
    (fn: (a: T) => T): eqBy_110<T>;
};
export type eqBy_110<T> = {
    (b: T): eqBy_111<T>;
};
export type eqBy_001<T> = {
    (_fn: PH, a: T): eqBy_011<T>;
    (fn: (a: T) => T, a: T): eqBy_111<T>;
    <$SEL extends "11">(): (fn: (a: T) => T, a: T) => eqBy_111<T>;
    <$SEL extends "1">(): (fn: (a: T) => T) => eqBy_101<T>;
    <$SEL extends "01">(): (_fn: PH, a: T) => eqBy_011<T>;
    (fn: (a: T) => T): eqBy_101<T>;
};
export type eqBy_101<T> = {
    (a: T): eqBy_111<T>;
};
export type eqBy_011<T> = {
    (fn: (a: T) => T): eqBy_111<T>;
};
export type eqBy_111<T> = boolean;
/**
 * Reports whether two objects have the same value, in `R.equals` terms, for
 * the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
export declare const eqProps: eqProps_000;
export type eqProps_000 = {
    <U>(prop: Prop, _obj1: PH, obj2: U): eqProps_base_101<U>;
    (prop: Prop, _obj1: PH, obj2: any): eqProps_less_generics_101;
    <T, U>(_prop: PH, obj1: T, obj2: U): eqProps_base_011<T, U>;
    (_prop: PH, _obj1: PH, obj2: any): eqProps_less_generics_001;
    <U>(_prop: PH, _obj1: PH, obj2: U): eqProps_base_001<U>;
    (_prop: PH, obj1: any, obj2: any): eqProps_less_generics_011;
    (prop: Prop, obj1: any, obj2: any): eqProps_less_generics_111;
    <T, U>(prop: Prop, obj1: T, obj2: U): eqProps_base_111<T, U>;
    (_prop: PH, obj1: any): eqProps_less_generics_010;
    <T>(_prop: PH, obj1: T): eqProps_base_010<T>;
    (prop: Prop, obj1: any): eqProps_less_generics_110;
    <T>(prop: Prop, obj1: T): eqProps_base_110<T>;
    <$SEL extends "111", $KIND extends "base">(): <T, U>(prop: Prop, obj1: T, obj2: U) => eqProps_base_111<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <T>(prop: Prop, obj1: T) => eqProps_base_110<T>;
    <$SEL extends "101", $KIND extends "base">(): <U>(prop: Prop, _obj1: PH, obj2: U) => eqProps_base_101<U>;
    <$SEL extends "011", $KIND extends "base">(): <T, U>(_prop: PH, obj1: T, obj2: U) => eqProps_base_011<T, U>;
    <$SEL extends "01", $KIND extends "base">(): <T>(_prop: PH, obj1: T) => eqProps_base_010<T>;
    <$SEL extends "001", $KIND extends "base">(): <U>(_prop: PH, _obj1: PH, obj2: U) => eqProps_base_001<U>;
    <$SEL extends "111", $KIND extends "less_generics">(): (prop: Prop, obj1: any, obj2: any) => eqProps_less_generics_111;
    <$SEL extends "11", $KIND extends "less_generics">(): (prop: Prop, obj1: any) => eqProps_less_generics_110;
    <$SEL extends "101", $KIND extends "less_generics">(): (prop: Prop, _obj1: PH, obj2: any) => eqProps_less_generics_101;
    <$SEL extends "011", $KIND extends "less_generics">(): (_prop: PH, obj1: any, obj2: any) => eqProps_less_generics_011;
    <$SEL extends "01", $KIND extends "less_generics">(): (_prop: PH, obj1: any) => eqProps_less_generics_010;
    <$SEL extends "001", $KIND extends "less_generics">(): (_prop: PH, _obj1: PH, obj2: any) => eqProps_less_generics_001;
    <$SEL extends "1">(): (prop: Prop) => eqProps_100;
    (prop: Prop): eqProps_100;
};
export type eqProps_100 = {
    <U>(_obj1: PH, obj2: U): eqProps_base_101<U>;
    (_obj1: PH, obj2: any): eqProps_less_generics_101;
    <T, U>(obj1: T, obj2: U): eqProps_base_111<T, U>;
    (obj1: any, obj2: any): eqProps_less_generics_111;
    <T>(obj1: T): eqProps_base_110<T>;
    <$SEL extends "11", $KIND extends "base">(): <T, U>(obj1: T, obj2: U) => eqProps_base_111<T, U>;
    <$SEL extends "1", $KIND extends "base">(): <T>(obj1: T) => eqProps_base_110<T>;
    <$SEL extends "01", $KIND extends "base">(): <U>(_obj1: PH, obj2: U) => eqProps_base_101<U>;
    <$SEL extends "11", $KIND extends "less_generics">(): (obj1: any, obj2: any) => eqProps_less_generics_111;
    <$SEL extends "1", $KIND extends "less_generics">(): (obj1: any) => eqProps_less_generics_110;
    <$SEL extends "01", $KIND extends "less_generics">(): (_obj1: PH, obj2: any) => eqProps_less_generics_101;
    (obj1: any): eqProps_less_generics_110;
};
export type eqProps_base_010<T> = {
    <U>(_prop: PH, obj2: U): eqProps_base_011<T, U>;
    <U>(prop: Prop, obj2: U): eqProps_base_111<T, U>;
    <$SEL extends "11">(): <U>(prop: Prop, obj2: U) => eqProps_base_111<T, U>;
    <$SEL extends "1">(): (prop: Prop) => eqProps_base_110<T>;
    <$SEL extends "01">(): <U>(_prop: PH, obj2: U) => eqProps_base_011<T, U>;
    (prop: Prop): eqProps_base_110<T>;
};
export type eqProps_less_generics_010 = {
    (_prop: PH, obj2: any): eqProps_less_generics_011;
    (prop: Prop, obj2: any): eqProps_less_generics_111;
    <$SEL extends "11">(): (prop: Prop, obj2: any) => eqProps_less_generics_111;
    <$SEL extends "1">(): (prop: Prop) => eqProps_less_generics_110;
    <$SEL extends "01">(): (_prop: PH, obj2: any) => eqProps_less_generics_011;
    (prop: Prop): eqProps_less_generics_110;
};
export type eqProps_base_110<T> = {
    <U>(obj2: U): eqProps_base_111<T, U>;
};
export type eqProps_less_generics_110 = {
    (obj2: any): eqProps_less_generics_111;
};
export type eqProps_base_001<U> = {
    <T>(_prop: PH, obj1: T): eqProps_base_011<T, U>;
    <T>(prop: Prop, obj1: T): eqProps_base_111<T, U>;
    <$SEL extends "11">(): <T>(prop: Prop, obj1: T) => eqProps_base_111<T, U>;
    <$SEL extends "1">(): (prop: Prop) => eqProps_base_101<U>;
    <$SEL extends "01">(): <T>(_prop: PH, obj1: T) => eqProps_base_011<T, U>;
    (prop: Prop): eqProps_base_101<U>;
};
export type eqProps_less_generics_001 = {
    (_prop: PH, obj1: any): eqProps_less_generics_011;
    (prop: Prop, obj1: any): eqProps_less_generics_111;
    <$SEL extends "11">(): (prop: Prop, obj1: any) => eqProps_less_generics_111;
    <$SEL extends "1">(): (prop: Prop) => eqProps_less_generics_101;
    <$SEL extends "01">(): (_prop: PH, obj1: any) => eqProps_less_generics_011;
    (prop: Prop): eqProps_less_generics_101;
};
export type eqProps_base_101<U> = {
    <T>(obj1: T): eqProps_base_111<T, U>;
};
export type eqProps_less_generics_101 = {
    (obj1: any): eqProps_less_generics_111;
};
export type eqProps_base_011<T, U> = {
    (prop: Prop): eqProps_base_111<T, U>;
};
export type eqProps_less_generics_011 = {
    (prop: Prop): eqProps_less_generics_111;
};
export type eqProps_base_111<T, U> = boolean;
export type eqProps_less_generics_111 = boolean;
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
export declare const equals: equals_00;
export type equals_00 = {
    <T>(_a: PH, b: T): equals_01<T>;
    <T>(a: T, b: T): equals_11<T>;
    <$SEL extends "11">(): <T>(a: T, b: T) => equals_11<T>;
    <$SEL extends "1">(): <T>(a: T) => equals_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: T) => equals_01<T>;
    <T>(a: T): equals_10<T>;
};
export type equals_10<T> = {
    (b: T): equals_11<T>;
};
export type equals_01<T> = {
    (a: T): equals_11<T>;
};
export type equals_11<T> = boolean;
/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
export declare const evolve: evolve_00;
export type evolve_00 = {
    <V>(_transformations: PH, obj: V): evolve_base_01<V>;
    (_transformations: PH, obj: any): evolve_no_inference_01;
    <V>(transformations: NestedObj<((v: any) => any)>, obj: V): evolve_base_11<V>;
    <T>(transformations: Obj<Function>, obj: any): evolve_no_inference_11<T>;
    (transformations: NestedObj<((v: any) => any)>): evolve_base_10;
    <$SEL extends "11", $KIND extends "base">(): <V>(transformations: NestedObj<((v: any) => any)>, obj: V) => evolve_base_11<V>;
    <$SEL extends "1", $KIND extends "base">(): (transformations: NestedObj<((v: any) => any)>) => evolve_base_10;
    <$SEL extends "01", $KIND extends "base">(): <V>(_transformations: PH, obj: V) => evolve_base_01<V>;
    <$SEL extends "11", $KIND extends "no_inference">(): <T>(transformations: Obj<Function>, obj: any) => evolve_no_inference_11<T>;
    <$SEL extends "1", $KIND extends "no_inference">(): (transformations: Obj<Function>) => evolve_no_inference_10;
    <$SEL extends "01", $KIND extends "no_inference">(): (_transformations: PH, obj: any) => evolve_no_inference_01;
    (transformations: Obj<Function>): evolve_no_inference_10;
};
export type evolve_base_10 = {
    <V>(obj: V): evolve_base_11<V>;
};
export type evolve_no_inference_10 = {
    <T>(obj: any): evolve_no_inference_11<T>;
};
export type evolve_base_01<V> = {
    (transformations: NestedObj<((v: any) => any)>): evolve_base_11<V>;
};
export type evolve_no_inference_01 = {
    <T>(transformations: Obj<Function>): evolve_no_inference_11<T>;
};
export type evolve_base_11<V> = V;
export type evolve_no_inference_11<T> = T;
/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
export declare const F: () => false;
/**
 * Takes a predicate and a "filterable", and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
export declare const filter: filter_00;
export type filter_00 = {
    <T>(_pred: PH, list: List<T>): filter_base_01<T>;
    <T>(_pred: PH, list: Functor<T>): filter_functor_to_functor_01<T>;
    <T>(_pred: PH, list: Functor<T>): filter_functor_to_array_01<T>;
    <T, U extends Obj<T>>(_pred: PH, obj: U): filter_object_01<T, U>;
    <T>(pred: Pred<T>, list: List<T>): filter_base_11<T>;
    <T>(pred: Pred<T>, list: Functor<T>): filter_functor_to_functor_11<T>;
    <T>(pred: Pred<T>, list: Functor<T>): filter_functor_to_array_11<T>;
    <T, U extends Obj<T>>(pred: Pred<T>, obj: U): filter_object_11<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <T>(pred: Pred<T>, list: List<T>) => filter_base_11<T>;
    <$SEL extends "01", $KIND extends "base">(): <T>(_pred: PH, list: List<T>) => filter_base_01<T>;
    <$SEL extends "11", $KIND extends "functor_to_functor">(): <T>(pred: Pred<T>, list: Functor<T>) => filter_functor_to_functor_11<T>;
    <$SEL extends "01", $KIND extends "functor_to_functor">(): <T>(_pred: PH, list: Functor<T>) => filter_functor_to_functor_01<T>;
    <$SEL extends "11", $KIND extends "functor_to_array">(): <T>(pred: Pred<T>, list: Functor<T>) => filter_functor_to_array_11<T>;
    <$SEL extends "01", $KIND extends "functor_to_array">(): <T>(_pred: PH, list: Functor<T>) => filter_functor_to_array_01<T>;
    <$SEL extends "11", $KIND extends "object">(): <T, U extends Obj<T>>(pred: Pred<T>, obj: U) => filter_object_11<T, U>;
    <$SEL extends "01", $KIND extends "object">(): <T, U extends Obj<T>>(_pred: PH, obj: U) => filter_object_01<T, U>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => filter_10<T>;
    <T>(pred: Pred<T>): filter_10<T>;
};
export type filter_10<T> = {
    (list: List<T>): filter_base_11<T>;
    (list: Functor<T>): filter_functor_to_functor_11<T>;
    (list: Functor<T>): filter_functor_to_array_11<T>;
    <$SEL extends "1", $KIND extends "base">(): (list: List<T>) => filter_base_11<T>;
    <$SEL extends "1", $KIND extends "functor_to_functor">(): (list: Functor<T>) => filter_functor_to_functor_11<T>;
    <$SEL extends "1", $KIND extends "functor_to_array">(): (list: Functor<T>) => filter_functor_to_array_11<T>;
    <$SEL extends "1", $KIND extends "object">(): <U extends Obj<T>>(obj: U) => filter_object_11<T, U>;
    <U extends Obj<T>>(obj: U): filter_object_11<T, U>;
};
export type filter_base_01<T> = {
    (pred: Pred<T>): filter_base_11<T>;
};
export type filter_functor_to_functor_01<T> = {
    (pred: Pred<T>): filter_functor_to_functor_11<T>;
};
export type filter_functor_to_array_01<T> = {
    (pred: Pred<T>): filter_functor_to_array_11<T>;
};
export type filter_object_01<T, U extends Obj<T>> = {
    (pred: Pred<T>): filter_object_11<T, U>;
};
export type filter_base_11<T> = T[];
export type filter_functor_to_functor_11<T> = Functor<T>[];
export type filter_functor_to_array_11<T> = T[];
export type filter_object_11<T, U extends Obj<T>> = Partial<U>;
/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
export declare const find: find_00;
export type find_00 = {
    <T>(_fn: PH, list: List<T>): find_01<T>;
    <T>(fn: (a: T) => boolean, list: List<T>): find_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => boolean, list: List<T>) => find_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => boolean) => find_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => find_01<T>;
    <T>(fn: (a: T) => boolean): find_10<T>;
};
export type find_10<T> = {
    (list: List<T>): find_11<T>;
};
export type find_01<T> = {
    (fn: (a: T) => boolean): find_11<T>;
};
export type find_11<T> = T;
/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
export declare const findIndex: findIndex_00;
export type findIndex_00 = {
    <T>(_fn: PH, list: List<T>): findIndex_01<T>;
    <T>(fn: (a: T) => boolean, list: List<T>): findIndex_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => boolean, list: List<T>) => findIndex_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => boolean) => findIndex_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => findIndex_01<T>;
    <T>(fn: (a: T) => boolean): findIndex_10<T>;
};
export type findIndex_10<T> = {
    (list: List<T>): findIndex_11<T>;
};
export type findIndex_01<T> = {
    (fn: (a: T) => boolean): findIndex_11<T>;
};
export type findIndex_11<T> = number;
/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
export declare const findLast: findLast_00;
export type findLast_00 = {
    <T>(_fn: PH, list: List<T>): findLast_01<T>;
    <T>(fn: (a: T) => boolean, list: List<T>): findLast_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => boolean, list: List<T>) => findLast_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => boolean) => findLast_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => findLast_01<T>;
    <T>(fn: (a: T) => boolean): findLast_10<T>;
};
export type findLast_10<T> = {
    (list: List<T>): findLast_11<T>;
};
export type findLast_01<T> = {
    (fn: (a: T) => boolean): findLast_11<T>;
};
export type findLast_11<T> = T;
/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
export declare const findLastIndex: findLastIndex_00;
export type findLastIndex_00 = {
    <T>(_fn: PH, list: List<T>): findLastIndex_01<T>;
    <T>(fn: (a: T) => boolean, list: List<T>): findLastIndex_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => boolean, list: List<T>) => findLastIndex_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => boolean) => findLastIndex_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => findLastIndex_01<T>;
    <T>(fn: (a: T) => boolean): findLastIndex_10<T>;
};
export type findLastIndex_10<T> = {
    (list: List<T>): findLastIndex_11<T>;
};
export type findLastIndex_01<T> = {
    (fn: (a: T) => boolean): findLastIndex_11<T>;
};
export type findLastIndex_11<T> = number;
/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
export declare const flatten: flatten_0;
export type flatten_0 = {
    <T>(x: NestedArray<T>): flatten_1<T>;
};
export type flatten_1<T> = T[];
/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
export declare const flip: flip_0;
export type flip_0 = {
    <T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): flip_base_1<T, U, TResult>;
    <$SEL extends "1", $KIND extends "base">(): <T, U, TResult>(fn: (arg0: T, arg1: U) => TResult) => flip_base_1<T, U, TResult>;
    <$SEL extends "1", $KIND extends "rest_arguments">(): <T, U, Rest, TResult>(fn: (arg0: T, arg1: U, ...args: Rest[]) => TResult) => flip_rest_arguments_1<T, U, Rest, TResult>;
    <T, U, Rest, TResult>(fn: (arg0: T, arg1: U, ...args: Rest[]) => TResult): flip_rest_arguments_1<T, U, Rest, TResult>;
};
export type flip_base_1<T, U, TResult> = (arg1: U, arg0?: T) => TResult;
export type flip_rest_arguments_1<T, U, Rest, TResult> = (arg1: U, arg0?: T, ...args: Rest[]) => TResult;
/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
export declare const forEach: forEach_00;
export type forEach_00 = {
    <T>(_fn: PH, list: List<T>): forEach_01<T>;
    <T>(fn: (x: T) => void, list: List<T>): forEach_11<T>;
    <$SEL extends "11">(): <T>(fn: (x: T) => void, list: List<T>) => forEach_11<T>;
    <$SEL extends "1">(): <T>(fn: (x: T) => void) => forEach_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => forEach_01<T>;
    <T>(fn: (x: T) => void): forEach_10<T>;
};
export type forEach_10<T> = {
    (list: List<T>): forEach_11<T>;
};
export type forEach_01<T> = {
    (fn: (x: T) => void): forEach_11<T>;
};
export type forEach_11<T> = T[];
/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
export declare const forEachObjIndexed: forEachObjIndexed_00;
export type forEachObjIndexed_00 = {
    <T, Inp extends Struct<T>>(_fn: PH, o: Inp): forEachObjIndexed_01<T, Inp>;
    <T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void, o: Inp): forEachObjIndexed_11<T, Inp>;
    <$SEL extends "11">(): <T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void, o: Inp) => forEachObjIndexed_11<T, Inp>;
    <$SEL extends "1">(): <T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void) => forEachObjIndexed_10<T, Inp>;
    <$SEL extends "01">(): <T, Inp extends Struct<T>>(_fn: PH, o: Inp) => forEachObjIndexed_01<T, Inp>;
    <T, Inp extends Struct<T>>(fn: (val: T, key: string, obj?: Inp) => void): forEachObjIndexed_10<T, Inp>;
};
export type forEachObjIndexed_10<T, Inp extends Struct<T>> = {
    (o: Inp): forEachObjIndexed_11<T, Inp>;
};
export type forEachObjIndexed_01<T, Inp extends Struct<T>> = {
    (fn: (val: T, key: string, obj?: Inp) => void): forEachObjIndexed_11<T, Inp>;
};
export type forEachObjIndexed_11<T, Inp extends Struct<T>> = Inp;
/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
export declare const fromPairs: fromPairs_0;
export type fromPairs_0 = {
    <V>(pairs: List<KeyValuePair<Prop, V>>): fromPairs_1<V>;
};
export type fromPairs_1<V> = Obj<V>;
/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
export declare const groupBy: groupBy_00;
export type groupBy_00 = {
    <T>(_fn: PH, list: List<T>): groupBy_01<T>;
    <T>(fn: (a: T) => Prop, list: List<T>): groupBy_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => Prop, list: List<T>) => groupBy_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => Prop) => groupBy_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => groupBy_01<T>;
    <T>(fn: (a: T) => Prop): groupBy_10<T>;
};
export type groupBy_10<T> = {
    (list: List<T>): groupBy_11<T>;
};
export type groupBy_01<T> = {
    (fn: (a: T) => Prop): groupBy_11<T>;
};
export type groupBy_11<T> = Obj<T[]>;
/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all "equal" according to the provided equality function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of equal elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
export declare const groupWith: groupWith_00;
export type groupWith_00 = {
    <T>(_fn: PH, list: List<T>): groupWith_01<T>;
    <T>(fn: (a: T) => Prop, list: List<T>): groupWith_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => Prop, list: List<T>) => groupWith_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => Prop) => groupWith_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => groupWith_01<T>;
    <T>(fn: (a: T) => Prop): groupWith_10<T>;
};
export type groupWith_10<T> = {
    (list: List<T>): groupWith_11<T>;
};
export type groupWith_01<T> = {
    (fn: (a: T) => Prop): groupWith_11<T>;
};
export type groupWith_11<T> = Obj<T[]>;
/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
export declare const gt: gt_00;
export type gt_00 = {
    (_a: PH, b: number): gt_01;
    (a: number, b: number): gt_11;
    <$SEL extends "11">(): (a: number, b: number) => gt_11;
    <$SEL extends "1">(): (a: number) => gt_10;
    <$SEL extends "01">(): (_a: PH, b: number) => gt_01;
    (a: number): gt_10;
};
export type gt_10 = {
    (b: number): gt_11;
};
export type gt_01 = {
    (a: number): gt_11;
};
export type gt_11 = boolean;
/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
export declare const gte: gte_00;
export type gte_00 = {
    (_a: PH, b: number): gte_01;
    (a: number, b: number): gte_11;
    <$SEL extends "11">(): (a: number, b: number) => gte_11;
    <$SEL extends "1">(): (a: number) => gte_10;
    <$SEL extends "01">(): (_a: PH, b: number) => gte_01;
    (a: number): gte_10;
};
export type gte_10 = {
    (b: number): gte_11;
};
export type gte_01 = {
    (a: number): gte_11;
};
export type gte_11 = boolean;
/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
export declare const has: has_00;
export type has_00 = {
    (_s: PH, obj: Struct<any>): has_01;
    (s: Prop, obj: Struct<any>): has_11;
    <$SEL extends "11">(): (s: Prop, obj: Struct<any>) => has_11;
    <$SEL extends "1">(): (s: Prop) => has_10;
    <$SEL extends "01">(): (_s: PH, obj: Struct<any>) => has_01;
    (s: Prop): has_10;
};
export type has_10 = {
    (obj: Struct<any>): has_11;
};
export type has_01 = {
    (s: Prop): has_11;
};
export type has_11 = boolean;
/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
export declare const hasIn: hasIn_00;
export type hasIn_00 = {
    (_s: PH, obj: Struct<any>): hasIn_01;
    (s: Prop, obj: Struct<any>): hasIn_11;
    <$SEL extends "11">(): (s: Prop, obj: Struct<any>) => hasIn_11;
    <$SEL extends "1">(): (s: Prop) => hasIn_10;
    <$SEL extends "01">(): (_s: PH, obj: Struct<any>) => hasIn_01;
    (s: Prop): hasIn_10;
};
export type hasIn_10 = {
    (obj: Struct<any>): hasIn_11;
};
export type hasIn_01 = {
    (s: Prop): hasIn_11;
};
export type hasIn_11 = boolean;
/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
export declare const head: head_0;
export type head_0 = {
    <T0, T1, T2>(list: [T0, T1, T2]): head_triple_1<T0, T1, T2>;
    <T0, T1>(list: [T0, T1]): head_tuple_1<T0, T1>;
    <T>(list: [T]): head_single_1<T>;
    <$SEL extends "1", $KIND extends "triple">(): <T0, T1, T2>(list: [T0, T1, T2]) => head_triple_1<T0, T1, T2>;
    <$SEL extends "1", $KIND extends "tuple">(): <T0, T1>(list: [T0, T1]) => head_tuple_1<T0, T1>;
    <$SEL extends "1", $KIND extends "single">(): <T>(list: [T]) => head_single_1<T>;
    <$SEL extends "1", $KIND extends "any">(): <T extends List<any>>(list: T) => head_any_1<T>;
    <T extends List<any>>(list: T): head_any_1<T>;
};
export type head_triple_1<T0, T1, T2> = T0;
export type head_tuple_1<T0, T1> = T0;
export type head_single_1<T> = T;
export type head_any_1<T extends List<any>> = any;
/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
export declare const identical: identical_00;
export type identical_00 = {
    <T>(_a: PH, b: T): identical_01<T>;
    <T>(a: T, b: T): identical_11<T>;
    <$SEL extends "11">(): <T>(a: T, b: T) => identical_11<T>;
    <$SEL extends "1">(): <T>(a: T) => identical_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: T) => identical_01<T>;
    <T>(a: T): identical_10<T>;
};
export type identical_10<T> = {
    (b: T): identical_11<T>;
};
export type identical_01<T> = {
    (a: T): identical_11<T>;
};
export type identical_11<T> = boolean;
/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
export declare const identity: identity_0;
export type identity_0 = {
    <T>(a: T): identity_1<T>;
};
export type identity_1<T> = T;
/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
export declare const ifElse: ifElse_000;
export type ifElse_000 = {
    <T, V>(fn: Pred<T>, _onTrue: PH, onFalse: (v: T) => V): ifElse_101<T, V>;
    <T, U, V>(_fn: PH, onTrue: (v: T) => U, onFalse: (v: T) => V): ifElse_011<T, U, V>;
    <T, V>(_fn: PH, _onTrue: PH, onFalse: (v: T) => V): ifElse_001<T, V>;
    <T, U, V>(fn: Pred<T>, onTrue: (v: T) => U, onFalse: (v: T) => V): ifElse_111<T, U, V>;
    <T, U>(_fn: PH, onTrue: (v: T) => U): ifElse_010<T, U>;
    <T, U>(fn: Pred<T>, onTrue: (v: T) => U): ifElse_110<T, U>;
    <$SEL extends "111">(): <T, U, V>(fn: Pred<T>, onTrue: (v: T) => U, onFalse: (v: T) => V) => ifElse_111<T, U, V>;
    <$SEL extends "11">(): <T, U>(fn: Pred<T>, onTrue: (v: T) => U) => ifElse_110<T, U>;
    <$SEL extends "101">(): <T, V>(fn: Pred<T>, _onTrue: PH, onFalse: (v: T) => V) => ifElse_101<T, V>;
    <$SEL extends "1">(): <T>(fn: Pred<T>) => ifElse_100<T>;
    <$SEL extends "011">(): <T, U, V>(_fn: PH, onTrue: (v: T) => U, onFalse: (v: T) => V) => ifElse_011<T, U, V>;
    <$SEL extends "01">(): <T, U>(_fn: PH, onTrue: (v: T) => U) => ifElse_010<T, U>;
    <$SEL extends "001">(): <T, V>(_fn: PH, _onTrue: PH, onFalse: (v: T) => V) => ifElse_001<T, V>;
    <T>(fn: Pred<T>): ifElse_100<T>;
};
export type ifElse_100<T> = {
    <V>(_onTrue: PH, onFalse: (v: T) => V): ifElse_101<T, V>;
    <U, V>(onTrue: (v: T) => U, onFalse: (v: T) => V): ifElse_111<T, U, V>;
    <$SEL extends "11">(): <U, V>(onTrue: (v: T) => U, onFalse: (v: T) => V) => ifElse_111<T, U, V>;
    <$SEL extends "1">(): <U>(onTrue: (v: T) => U) => ifElse_110<T, U>;
    <$SEL extends "01">(): <V>(_onTrue: PH, onFalse: (v: T) => V) => ifElse_101<T, V>;
    <U>(onTrue: (v: T) => U): ifElse_110<T, U>;
};
export type ifElse_010<T, U> = {
    <V>(_fn: PH, onFalse: (v: T) => V): ifElse_011<T, U, V>;
    <V>(fn: Pred<T>, onFalse: (v: T) => V): ifElse_111<T, U, V>;
    <$SEL extends "11">(): <V>(fn: Pred<T>, onFalse: (v: T) => V) => ifElse_111<T, U, V>;
    <$SEL extends "1">(): (fn: Pred<T>) => ifElse_110<T, U>;
    <$SEL extends "01">(): <V>(_fn: PH, onFalse: (v: T) => V) => ifElse_011<T, U, V>;
    (fn: Pred<T>): ifElse_110<T, U>;
};
export type ifElse_110<T, U> = {
    <V>(onFalse: (v: T) => V): ifElse_111<T, U, V>;
};
export type ifElse_001<T, V> = {
    <U>(_fn: PH, onTrue: (v: T) => U): ifElse_011<T, U, V>;
    <U>(fn: Pred<T>, onTrue: (v: T) => U): ifElse_111<T, U, V>;
    <$SEL extends "11">(): <U>(fn: Pred<T>, onTrue: (v: T) => U) => ifElse_111<T, U, V>;
    <$SEL extends "1">(): (fn: Pred<T>) => ifElse_101<T, V>;
    <$SEL extends "01">(): <U>(_fn: PH, onTrue: (v: T) => U) => ifElse_011<T, U, V>;
    (fn: Pred<T>): ifElse_101<T, V>;
};
export type ifElse_101<T, V> = {
    <U>(onTrue: (v: T) => U): ifElse_111<T, U, V>;
};
export type ifElse_011<T, U, V> = {
    (fn: Pred<T>): ifElse_111<T, U, V>;
};
export type ifElse_111<T, U, V> = (v: T) => U | V;
/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
export declare const inc: inc_0;
export type inc_0 = {
    (n: number): inc_1;
};
export type inc_1 = number;
/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
export declare const indexBy: indexBy_00;
export type indexBy_00 = {
    <T>(_fn: PH, list: List<T>): indexBy_01<T>;
    <T>(fn: (a: T) => Prop, list: List<T>): indexBy_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => Prop, list: List<T>) => indexBy_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => Prop) => indexBy_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => indexBy_01<T>;
    <T>(fn: (a: T) => Prop): indexBy_10<T>;
};
export type indexBy_10<T> = {
    (list: List<T>): indexBy_11<T>;
};
export type indexBy_01<T> = {
    (fn: (a: T) => Prop): indexBy_11<T>;
};
export type indexBy_11<T> = Obj<T>;
/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. `R.equals` is used to determine
 * equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
export declare const indexOf: indexOf_00;
export type indexOf_00 = {
    <T>(_target: PH, list: List<T>): indexOf_01<T>;
    <T>(target: T, list: List<T>): indexOf_11<T>;
    <$SEL extends "11">(): <T>(target: T, list: List<T>) => indexOf_11<T>;
    <$SEL extends "1">(): <T>(target: T) => indexOf_10<T>;
    <$SEL extends "01">(): <T>(_target: PH, list: List<T>) => indexOf_01<T>;
    <T>(target: T): indexOf_10<T>;
};
export type indexOf_10<T> = {
    (list: List<T>): indexOf_11<T>;
};
export type indexOf_01<T> = {
    (target: T): indexOf_11<T>;
};
export type indexOf_11<T> = number;
/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
export declare const init: init_0;
export type init_0 = {
    <T extends List<any>>(list: T): init_1<T>;
};
export type init_1<T extends List<any>> = T;
/**
 * Inserts the supplied element into the list, at index `index`. _Note that
 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
export declare const insert: insert_000;
export type insert_000 = {
    <T>(index: number, _elt: PH, list: List<T>): insert_101<T>;
    <T>(_index: PH, elt: T, list: List<T>): insert_011<T>;
    <T>(_index: PH, _elt: PH, list: List<T>): insert_001<T>;
    <T>(index: number, elt: T, list: List<T>): insert_111<T>;
    <T>(_index: PH, elt: T): insert_010<T>;
    <T>(index: number, elt: T): insert_110<T>;
    <$SEL extends "111">(): <T>(index: number, elt: T, list: List<T>) => insert_111<T>;
    <$SEL extends "11">(): <T>(index: number, elt: T) => insert_110<T>;
    <$SEL extends "101">(): <T>(index: number, _elt: PH, list: List<T>) => insert_101<T>;
    <$SEL extends "1">(): (index: number) => insert_100;
    <$SEL extends "011">(): <T>(_index: PH, elt: T, list: List<T>) => insert_011<T>;
    <$SEL extends "01">(): <T>(_index: PH, elt: T) => insert_010<T>;
    <$SEL extends "001">(): <T>(_index: PH, _elt: PH, list: List<T>) => insert_001<T>;
    (index: number): insert_100;
};
export type insert_100 = {
    <T>(_elt: PH, list: List<T>): insert_101<T>;
    <T>(elt: T, list: List<T>): insert_111<T>;
    <$SEL extends "11">(): <T>(elt: T, list: List<T>) => insert_111<T>;
    <$SEL extends "1">(): <T>(elt: T) => insert_110<T>;
    <$SEL extends "01">(): <T>(_elt: PH, list: List<T>) => insert_101<T>;
    <T>(elt: T): insert_110<T>;
};
export type insert_010<T> = {
    (_index: PH, list: List<T>): insert_011<T>;
    (index: number, list: List<T>): insert_111<T>;
    <$SEL extends "11">(): (index: number, list: List<T>) => insert_111<T>;
    <$SEL extends "1">(): (index: number) => insert_110<T>;
    <$SEL extends "01">(): (_index: PH, list: List<T>) => insert_011<T>;
    (index: number): insert_110<T>;
};
export type insert_110<T> = {
    (list: List<T>): insert_111<T>;
};
export type insert_001<T> = {
    (_index: PH, elt: T): insert_011<T>;
    (index: number, elt: T): insert_111<T>;
    <$SEL extends "11">(): (index: number, elt: T) => insert_111<T>;
    <$SEL extends "1">(): (index: number) => insert_101<T>;
    <$SEL extends "01">(): (_index: PH, elt: T) => insert_011<T>;
    (index: number): insert_101<T>;
};
export type insert_101<T> = {
    (elt: T): insert_111<T>;
};
export type insert_011<T> = {
    (index: number): insert_111<T>;
};
export type insert_111<T> = T[];
/**
 * Inserts the sub-list into the list, at index `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
export declare const insertAll: insertAll_000;
export type insertAll_000 = {
    <U>(index: number, _elts: PH, list: List<U>): insertAll_101<U>;
    <T, U>(_index: PH, elts: List<T>, list: List<U>): insertAll_011<T, U>;
    <U>(_index: PH, _elts: PH, list: List<U>): insertAll_001<U>;
    <T, U>(index: number, elts: List<T>, list: List<U>): insertAll_111<T, U>;
    <T>(_index: PH, elts: List<T>): insertAll_010<T>;
    <T>(index: number, elts: List<T>): insertAll_110<T>;
    <$SEL extends "111">(): <T, U>(index: number, elts: List<T>, list: List<U>) => insertAll_111<T, U>;
    <$SEL extends "11">(): <T>(index: number, elts: List<T>) => insertAll_110<T>;
    <$SEL extends "101">(): <U>(index: number, _elts: PH, list: List<U>) => insertAll_101<U>;
    <$SEL extends "1">(): (index: number) => insertAll_100;
    <$SEL extends "011">(): <T, U>(_index: PH, elts: List<T>, list: List<U>) => insertAll_011<T, U>;
    <$SEL extends "01">(): <T>(_index: PH, elts: List<T>) => insertAll_010<T>;
    <$SEL extends "001">(): <U>(_index: PH, _elts: PH, list: List<U>) => insertAll_001<U>;
    (index: number): insertAll_100;
};
export type insertAll_100 = {
    <U>(_elts: PH, list: List<U>): insertAll_101<U>;
    <T, U>(elts: List<T>, list: List<U>): insertAll_111<T, U>;
    <$SEL extends "11">(): <T, U>(elts: List<T>, list: List<U>) => insertAll_111<T, U>;
    <$SEL extends "1">(): <T>(elts: List<T>) => insertAll_110<T>;
    <$SEL extends "01">(): <U>(_elts: PH, list: List<U>) => insertAll_101<U>;
    <T>(elts: List<T>): insertAll_110<T>;
};
export type insertAll_010<T> = {
    <U>(_index: PH, list: List<U>): insertAll_011<T, U>;
    <U>(index: number, list: List<U>): insertAll_111<T, U>;
    <$SEL extends "11">(): <U>(index: number, list: List<U>) => insertAll_111<T, U>;
    <$SEL extends "1">(): (index: number) => insertAll_110<T>;
    <$SEL extends "01">(): <U>(_index: PH, list: List<U>) => insertAll_011<T, U>;
    (index: number): insertAll_110<T>;
};
export type insertAll_110<T> = {
    <U>(list: List<U>): insertAll_111<T, U>;
};
export type insertAll_001<U> = {
    <T>(_index: PH, elts: List<T>): insertAll_011<T, U>;
    <T>(index: number, elts: List<T>): insertAll_111<T, U>;
    <$SEL extends "11">(): <T>(index: number, elts: List<T>) => insertAll_111<T, U>;
    <$SEL extends "1">(): (index: number) => insertAll_101<U>;
    <$SEL extends "01">(): <T>(_index: PH, elts: List<T>) => insertAll_011<T, U>;
    (index: number): insertAll_101<U>;
};
export type insertAll_101<U> = {
    <T>(elts: List<T>): insertAll_111<T, U>;
};
export type insertAll_011<T, U> = {
    (index: number): insertAll_111<T, U>;
};
export type insertAll_111<T, U> = Array<T | U>;
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.intersectionWith
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
export declare const intersection: intersection_00;
export type intersection_00 = {
    <U>(_list1: PH, list2: List<U>): intersection_01<U>;
    <T, U>(list1: List<T>, list2: List<U>): intersection_11<T, U>;
    <$SEL extends "11">(): <T, U>(list1: List<T>, list2: List<U>) => intersection_11<T, U>;
    <$SEL extends "1">(): <T>(list1: List<T>) => intersection_10<T>;
    <$SEL extends "01">(): <U>(_list1: PH, list2: List<U>) => intersection_01<U>;
    <T>(list1: List<T>): intersection_10<T>;
};
export type intersection_10<T> = {
    <U>(list2: List<U>): intersection_11<T, U>;
};
export type intersection_01<U> = {
    <T>(list1: List<T>): intersection_11<T, U>;
};
export type intersection_11<T, U> = Array<T | U>;
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.intersection
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
export declare const intersectionWith: intersectionWith_000;
export type intersectionWith_000 = {
    <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>): intersectionWith_101<T>;
    <T>(_pred: PH, list1: List<T>, list2: List<T>): intersectionWith_011<T>;
    <T>(_pred: PH, _list1: PH, list2: List<T>): intersectionWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): intersectionWith_111<T>;
    <T>(_pred: PH, list1: List<T>): intersectionWith_010<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>): intersectionWith_110<T>;
    <$SEL extends "111">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>) => intersectionWith_111<T>;
    <$SEL extends "11">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>) => intersectionWith_110<T>;
    <$SEL extends "101">(): <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>) => intersectionWith_101<T>;
    <$SEL extends "1">(): <T>(pred: (a: T, b: T) => boolean) => intersectionWith_100<T>;
    <$SEL extends "011">(): <T>(_pred: PH, list1: List<T>, list2: List<T>) => intersectionWith_011<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list1: List<T>) => intersectionWith_010<T>;
    <$SEL extends "001">(): <T>(_pred: PH, _list1: PH, list2: List<T>) => intersectionWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean): intersectionWith_100<T>;
};
export type intersectionWith_100<T> = {
    (_list1: PH, list2: List<T>): intersectionWith_101<T>;
    (list1: List<T>, list2: List<T>): intersectionWith_111<T>;
    <$SEL extends "11">(): (list1: List<T>, list2: List<T>) => intersectionWith_111<T>;
    <$SEL extends "1">(): (list1: List<T>) => intersectionWith_110<T>;
    <$SEL extends "01">(): (_list1: PH, list2: List<T>) => intersectionWith_101<T>;
    (list1: List<T>): intersectionWith_110<T>;
};
export type intersectionWith_010<T> = {
    (_pred: PH, list2: List<T>): intersectionWith_011<T>;
    (pred: (a: T, b: T) => boolean, list2: List<T>): intersectionWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list2: List<T>) => intersectionWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => intersectionWith_110<T>;
    <$SEL extends "01">(): (_pred: PH, list2: List<T>) => intersectionWith_011<T>;
    (pred: (a: T, b: T) => boolean): intersectionWith_110<T>;
};
export type intersectionWith_110<T> = {
    (list2: List<T>): intersectionWith_111<T>;
};
export type intersectionWith_001<T> = {
    (_pred: PH, list1: List<T>): intersectionWith_011<T>;
    (pred: (a: T, b: T) => boolean, list1: List<T>): intersectionWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list1: List<T>) => intersectionWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => intersectionWith_101<T>;
    <$SEL extends "01">(): (_pred: PH, list1: List<T>) => intersectionWith_011<T>;
    (pred: (a: T, b: T) => boolean): intersectionWith_101<T>;
};
export type intersectionWith_101<T> = {
    (list1: List<T>): intersectionWith_111<T>;
};
export type intersectionWith_011<T> = {
    (pred: (a: T, b: T) => boolean): intersectionWith_111<T>;
};
export type intersectionWith_111<T> = T[];
/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
export declare const intersperse: intersperse_00;
export type intersperse_00 = {
    <T>(_separator: PH, list: List<T>): intersperse_01<T>;
    <T>(separator: T, list: List<T>): intersperse_11<T>;
    <$SEL extends "11">(): <T>(separator: T, list: List<T>) => intersperse_11<T>;
    <$SEL extends "1">(): <T>(separator: T) => intersperse_10<T>;
    <$SEL extends "01">(): <T>(_separator: PH, list: List<T>) => intersperse_01<T>;
    <T>(separator: T): intersperse_10<T>;
};
export type intersperse_10<T> = {
    (list: List<T>): intersperse_11<T>;
};
export type intersperse_01<T> = {
    (separator: T): intersperse_11<T>;
};
export type intersperse_11<T> = T[];
/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with R.reduce after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
export declare const into: into_000;
export type into_000 = {
    <T, U, V extends AccOpts<T, U>>(acc: V, _xf: PH, list: List<T>): into_101<T, U, V>;
    <T, U>(_acc: PH, xf: (list: List<T>) => U, list: List<T>): into_011<T, U>;
    <T>(_acc: PH, _xf: PH, list: List<T>): into_001<T>;
    <T, U, V extends AccOpts<T, U>>(acc: V, xf: (list: List<T>) => U, list: List<T>): into_111<T, U, V>;
    <T, U>(_acc: PH, xf: (list: List<T>) => U): into_010<T, U>;
    <T, U, V extends AccOpts<T, U>>(acc: V, xf: (list: List<T>) => U): into_110<T, U, V>;
    <$SEL extends "111">(): <T, U, V extends AccOpts<T, U>>(acc: V, xf: (list: List<T>) => U, list: List<T>) => into_111<T, U, V>;
    <$SEL extends "11">(): <T, U, V extends AccOpts<T, U>>(acc: V, xf: (list: List<T>) => U) => into_110<T, U, V>;
    <$SEL extends "101">(): <T, U, V extends AccOpts<T, U>>(acc: V, _xf: PH, list: List<T>) => into_101<T, U, V>;
    <$SEL extends "1">(): <T, U, V extends AccOpts<T, U>>(acc: V) => into_100<T, U, V>;
    <$SEL extends "011">(): <T, U>(_acc: PH, xf: (list: List<T>) => U, list: List<T>) => into_011<T, U>;
    <$SEL extends "01">(): <T, U>(_acc: PH, xf: (list: List<T>) => U) => into_010<T, U>;
    <$SEL extends "001">(): <T>(_acc: PH, _xf: PH, list: List<T>) => into_001<T>;
    <T, U, V extends AccOpts<T, U>>(acc: V): into_100<T, U, V>;
};
export type into_100<T, U, V extends AccOpts<T, U>> = {
    (_xf: PH, list: List<T>): into_101<T, U, V>;
    (xf: (list: List<T>) => U, list: List<T>): into_111<T, U, V>;
    <$SEL extends "11">(): (xf: (list: List<T>) => U, list: List<T>) => into_111<T, U, V>;
    <$SEL extends "1">(): (xf: (list: List<T>) => U) => into_110<T, U, V>;
    <$SEL extends "01">(): (_xf: PH, list: List<T>) => into_101<T, U, V>;
    (xf: (list: List<T>) => U): into_110<T, U, V>;
};
export type into_010<T, U> = {
    (_acc: PH, list: List<T>): into_011<T, U>;
    <V extends AccOpts<T, U>>(acc: V, list: List<T>): into_111<T, U, V>;
    <$SEL extends "11">(): <V extends AccOpts<T, U>>(acc: V, list: List<T>) => into_111<T, U, V>;
    <$SEL extends "1">(): <V extends AccOpts<T, U>>(acc: V) => into_110<T, U, V>;
    <$SEL extends "01">(): (_acc: PH, list: List<T>) => into_011<T, U>;
    <V extends AccOpts<T, U>>(acc: V): into_110<T, U, V>;
};
export type into_110<T, U, V extends AccOpts<T, U>> = {
    (list: List<T>): into_111<T, U, V>;
};
export type into_001<T> = {
    <U>(_acc: PH, xf: (list: List<T>) => U): into_011<T, U>;
    <U, V extends AccOpts<T, U>>(acc: V, xf: (list: List<T>) => U): into_111<T, U, V>;
    <$SEL extends "11">(): <U, V extends AccOpts<T, U>>(acc: V, xf: (list: List<T>) => U) => into_111<T, U, V>;
    <$SEL extends "1">(): <U, V extends AccOpts<T, U>>(acc: V) => into_101<T, U, V>;
    <$SEL extends "01">(): <U>(_acc: PH, xf: (list: List<T>) => U) => into_011<T, U>;
    <U, V extends AccOpts<T, U>>(acc: V): into_101<T, U, V>;
};
export type into_101<T, U, V extends AccOpts<T, U>> = {
    (xf: (list: List<T>) => U): into_111<T, U, V>;
};
export type into_011<T, U> = {
    <V extends AccOpts<T, U>>(acc: V): into_111<T, U, V>;
};
export type into_111<T, U, V extends AccOpts<T, U>> = U;
/**
 * Same as R.invertObj, however this accounts for objects with duplicate values
 * by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys
 * in an array.
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
export declare const invert: invert_0;
export type invert_0 = {
    (obj: Struct<Prop>): invert_1;
};
export type invert_1 = Obj<List<string>>;
/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
export declare const invertObj: invertObj_0;
export type invertObj_0 = {
    (obj: Struct<Prop>): invertObj_1;
};
export type invertObj_1 = Obj<string>;
/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
export declare const invoker: invoker_000;
export type invoker_000 = {
    <T>(len: number, _name: PH, obj: T): invoker_101<T>;
    <T>(_len: PH, name: Prop, obj: T): invoker_011<T>;
    <T>(_len: PH, _name: PH, obj: T): invoker_001<T>;
    <T, R>(len: number, name: Prop, obj: T): invoker_111<T, R>;
    (_len: PH, name: Prop): invoker_010;
    (len: number, name: Prop): invoker_110;
    <$SEL extends "111">(): <T, R>(len: number, name: Prop, obj: T) => invoker_111<T, R>;
    <$SEL extends "11">(): (len: number, name: Prop) => invoker_110;
    <$SEL extends "101">(): <T>(len: number, _name: PH, obj: T) => invoker_101<T>;
    <$SEL extends "1">(): (len: number) => invoker_100;
    <$SEL extends "011">(): <T>(_len: PH, name: Prop, obj: T) => invoker_011<T>;
    <$SEL extends "01">(): (_len: PH, name: Prop) => invoker_010;
    <$SEL extends "001">(): <T>(_len: PH, _name: PH, obj: T) => invoker_001<T>;
    (len: number): invoker_100;
};
export type invoker_100 = {
    <T>(_name: PH, obj: T): invoker_101<T>;
    <T, R>(name: Prop, obj: T): invoker_111<T, R>;
    <$SEL extends "11">(): <T, R>(name: Prop, obj: T) => invoker_111<T, R>;
    <$SEL extends "1">(): (name: Prop) => invoker_110;
    <$SEL extends "01">(): <T>(_name: PH, obj: T) => invoker_101<T>;
    (name: Prop): invoker_110;
};
export type invoker_010 = {
    <T>(_len: PH, obj: T): invoker_011<T>;
    <T, R>(len: number, obj: T): invoker_111<T, R>;
    <$SEL extends "11">(): <T, R>(len: number, obj: T) => invoker_111<T, R>;
    <$SEL extends "1">(): (len: number) => invoker_110;
    <$SEL extends "01">(): <T>(_len: PH, obj: T) => invoker_011<T>;
    (len: number): invoker_110;
};
export type invoker_110 = {
    <T, R>(obj: T): invoker_111<T, R>;
};
export type invoker_001<T> = {
    (_len: PH, name: Prop): invoker_011<T>;
    <R>(len: number, name: Prop): invoker_111<T, R>;
    <$SEL extends "11">(): <R>(len: number, name: Prop) => invoker_111<T, R>;
    <$SEL extends "1">(): (len: number) => invoker_101<T>;
    <$SEL extends "01">(): (_len: PH, name: Prop) => invoker_011<T>;
    (len: number): invoker_101<T>;
};
export type invoker_101<T> = {
    <R>(name: Prop): invoker_111<T, R>;
};
export type invoker_011<T> = {
    <R>(len: number): invoker_111<T, R>;
};
export type invoker_111<T, R> = R;
/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
export declare const is: is_00;
export type is_00 = {
    (_ctor: PH, val: any): is_01;
    <T>(ctor: Type<T>, val: any): val is T;
    <$SEL extends "11">(): <T>(ctor: Type<T>, val: any) => val is T;
    <$SEL extends "1">(): <T>(ctor: Type<T>) => is_10<T>;
    <$SEL extends "01">(): (_ctor: PH, val: any) => is_01;
    <T>(ctor: Type<T>): is_10<T>;
};
export type is_10<T> = {
    (val: any): val is T;
};
export type is_01 = {
    <T>(ctor: Type<T>): is_11<T>;
};
export type is_11<T> = boolean;
/**
 * Tests whether or not an object is similar to an array.
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @deprecated since v0.23.0
 * @example
 *
 *      R.isArrayLike([]); //=> true
 *      R.isArrayLike(true); //=> false
 *      R.isArrayLike({}); //=> false
 *      R.isArrayLike({length: 10}); //=> false
 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
export declare const isArrayLike: isArrayLike_0;
export type isArrayLike_0 = {
    (val: any): val is List<any>;
};
export type isArrayLike_1 = boolean;
/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
export declare const isEmpty: isEmpty_0;
export type isEmpty_0 = {
    (val: any): isEmpty_1;
};
export type isEmpty_1 = boolean;
/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
export declare const isNil: isNil_0;
export type isNil_0 = {
    (val: any): isNil_1;
};
export type isNil_1 = boolean;
/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
export declare const join: join_00;
export type join_00 = {
    (_x: PH, xs: Array<any>): join_01;
    (x: Prop, xs: Array<any>): join_11;
    <$SEL extends "11">(): (x: Prop, xs: Array<any>) => join_11;
    <$SEL extends "1">(): (x: Prop) => join_10;
    <$SEL extends "01">(): (_x: PH, xs: Array<any>) => join_01;
    (x: Prop): join_10;
};
export type join_10 = {
    (xs: Array<any>): join_11;
};
export type join_01 = {
    (x: Prop): join_11;
};
export type join_11 = string;
/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
export declare const juxt: juxt_0;
export type juxt_0 = {
    <T, U>(fns: {
            (...args: T[]): U;
        }[]): juxt_1<T, U>;
};
export type juxt_1<T, U> = (...args: T[]) => U[];
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
export declare const keys: keys_0;
export type keys_0 = {
    (x: Struct<any>): keys_1;
};
export type keys_1 = string[];
/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
export declare const keysIn: keysIn_0;
export type keysIn_0 = {
    (obj: Struct<any>): keysIn_1;
};
export type keysIn_1 = string[];
/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
export declare const last: last_0;
export type last_0 = {
    <T, R extends List<T>>(list: R): last_1<T, R>;
};
export type last_1<T, R extends List<T>> = T;
/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. `R.equals` is used to determine
 * equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
export declare const lastIndexOf: lastIndexOf_00;
export type lastIndexOf_00 = {
    <T>(_target: PH, list: List<T>): lastIndexOf_01<T>;
    <T>(target: T, list: List<T>): lastIndexOf_11<T>;
    <$SEL extends "11">(): <T>(target: T, list: List<T>) => lastIndexOf_11<T>;
    <$SEL extends "1">(): <T>(target: T) => lastIndexOf_10<T>;
    <$SEL extends "01">(): <T>(_target: PH, list: List<T>) => lastIndexOf_01<T>;
    <T>(target: T): lastIndexOf_10<T>;
};
export type lastIndexOf_10<T> = {
    (list: List<T>): lastIndexOf_11<T>;
};
export type lastIndexOf_01<T> = {
    (target: T): lastIndexOf_11<T>;
};
export type lastIndexOf_11<T> = number;
/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
export declare const length: length_0;
export type length_0 = {
    (list: List<any>): length_1;
};
export type length_1 = number;
/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
export declare const lens: lens_00;
export type lens_00 = {
    <V, U extends Struct<any>>(_getter: PH, setter: (a: V, s: U) => U): lens_base_01<V, U>;
    <T, U, V>(_getter: PH, setter: (a: U, s: T) => V): lens_allows_setter_to_change_value_type_01<T, U, V>;
    <V, U extends Struct<any>>(getter: (s: U) => V, setter: (a: V, s: U) => U): lens_base_11<V, U>;
    <T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): lens_allows_setter_to_change_value_type_11<T, U, V>;
    <V, U extends Struct<any>>(getter: (s: U) => V): lens_base_10<V, U>;
    <$SEL extends "11", $KIND extends "base">(): <V, U extends Struct<any>>(getter: (s: U) => V, setter: (a: V, s: U) => U) => lens_base_11<V, U>;
    <$SEL extends "1", $KIND extends "base">(): <V, U extends Struct<any>>(getter: (s: U) => V) => lens_base_10<V, U>;
    <$SEL extends "01", $KIND extends "base">(): <V, U extends Struct<any>>(_getter: PH, setter: (a: V, s: U) => U) => lens_base_01<V, U>;
    <$SEL extends "11", $KIND extends "allows_setter_to_change_value_type">(): <T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V) => lens_allows_setter_to_change_value_type_11<T, U, V>;
    <$SEL extends "1", $KIND extends "allows_setter_to_change_value_type">(): <T, U>(getter: (s: T) => U) => lens_allows_setter_to_change_value_type_10<T, U>;
    <$SEL extends "01", $KIND extends "allows_setter_to_change_value_type">(): <T, U, V>(_getter: PH, setter: (a: U, s: T) => V) => lens_allows_setter_to_change_value_type_01<T, U, V>;
    <T, U>(getter: (s: T) => U): lens_allows_setter_to_change_value_type_10<T, U>;
};
export type lens_base_10<V, U extends Struct<any>> = {
    (setter: (a: V, s: U) => U): lens_base_11<V, U>;
};
export type lens_allows_setter_to_change_value_type_10<T, U> = {
    <V>(setter: (a: U, s: T) => V): lens_allows_setter_to_change_value_type_11<T, U, V>;
};
export type lens_base_01<V, U extends Struct<any>> = {
    (getter: (s: U) => V): lens_base_11<V, U>;
};
export type lens_allows_setter_to_change_value_type_01<T, U, V> = {
    (getter: (s: T) => U): lens_allows_setter_to_change_value_type_11<T, U, V>;
};
export type lens_base_11<V, U extends Struct<any>> = ManualLens<V>;
export type lens_allows_setter_to_change_value_type_11<T, U, V> = Lens<T, U>;
/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
export declare const lensIndex: lensIndex_0;
export type lensIndex_0 = {
    <T>(n: number): lensIndex_generics_1<T>;
    <$SEL extends "1", $KIND extends "generics">(): <T>(n: number) => lensIndex_generics_1<T>;
    <$SEL extends "1", $KIND extends "non_generic">(): (n: number) => lensIndex_non_generic_1;
    (n: number): lensIndex_non_generic_1;
};
export type lensIndex_generics_1<T> = ManualLens<T>;
export type lensIndex_non_generic_1 = UnknownLens;
/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
export declare const lensPath: lensPath_0;
export type lensPath_0 = {
    <T>(path: Path): lensPath_generics_1<T>;
    <$SEL extends "1", $KIND extends "generics">(): <T>(path: Path) => lensPath_generics_1<T>;
    <$SEL extends "1", $KIND extends "non_generic">(): (path: Path) => lensPath_non_generic_1;
    (path: Path): lensPath_non_generic_1;
};
export type lensPath_generics_1<T> = ManualLens<T>;
export type lensPath_non_generic_1 = UnknownLens;
/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
export declare const lensProp: lensProp_0;
export type lensProp_0 = {
    <T>(prop: Prop): lensProp_generics_1<T>;
    <$SEL extends "1", $KIND extends "generics">(): <T>(prop: Prop) => lensProp_generics_1<T>;
    <$SEL extends "1", $KIND extends "non_generic">(): (prop: Prop) => lensProp_non_generic_1;
    (prop: Prop): lensProp_non_generic_1;
};
export type lensProp_generics_1<T> = ManualLens<T>;
export type lensProp_non_generic_1 = UnknownLens;
/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
export declare function lift<TResult>(fn: () => TResult): () => TResult[];
export declare function lift<T1, TResult>(fn: (v1: T1) => TResult): (v1: List<T1>) => TResult[];
export declare function lift<T1, T2, TResult>(fn: (v1: T1, v2: T2) => TResult): (v1: List<T1>, v2: List<T2>) => TResult[];
export declare function lift<T1, T2, T3, TResult>(fn: (v1: T1, v2: T2, v3: T3) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>) => TResult[];
export declare function lift<T1, T2, T3, T4, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>) => TResult[];
export declare function lift<T1, T2, T3, T4, T5, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>) => TResult[];
export declare function lift<T1, T2, T3, T4, T5, T6, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>) => TResult[];
export declare function lift<T1, T2, T3, T4, T5, T6, T7, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>) => TResult[];
export declare function lift<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>) => TResult[];
export declare function lift<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>, v9: List<T9>) => TResult[];
/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
export declare function liftN<TResult>(n: number, fn: () => TResult): () => TResult[];
export declare function liftN<T1, TResult>(n: number, fn: (v1: T1) => TResult): (v1: List<T1>) => TResult[];
export declare function liftN<T1, T2, TResult>(n: number, fn: (v1: T1, v2: T2) => TResult): (v1: List<T1>, v2: List<T2>) => TResult[];
export declare function liftN<T1, T2, T3, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>) => TResult[];
export declare function liftN<T1, T2, T3, T4, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>) => TResult[];
export declare function liftN<T1, T2, T3, T4, T5, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>) => TResult[];
export declare function liftN<T1, T2, T3, T4, T5, T6, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>) => TResult[];
export declare function liftN<T1, T2, T3, T4, T5, T6, T7, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>) => TResult[];
export declare function liftN<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>) => TResult[];
export declare function liftN<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(n: number, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): (v1: List<T1>, v2: List<T2>, v3: List<T3>, v4: List<T4>, v5: List<T5>, v6: List<T6>, v7: List<T7>, v8: List<T8>, v9: List<T9>) => TResult[];
/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
export declare const lt: lt_00;
export type lt_00 = {
    (_a: PH, b: number): lt_01;
    (a: number, b: number): lt_11;
    <$SEL extends "11">(): (a: number, b: number) => lt_11;
    <$SEL extends "1">(): (a: number) => lt_10;
    <$SEL extends "01">(): (_a: PH, b: number) => lt_01;
    (a: number): lt_10;
};
export type lt_10 = {
    (b: number): lt_11;
};
export type lt_01 = {
    (a: number): lt_11;
};
export type lt_11 = boolean;
/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
export declare const lte: lte_00;
export type lte_00 = {
    (_a: PH, b: number): lte_01;
    (a: number, b: number): lte_11;
    <$SEL extends "11">(): (a: number, b: number) => lte_11;
    <$SEL extends "1">(): (a: number) => lte_10;
    <$SEL extends "01">(): (_a: PH, b: number) => lte_01;
    (a: number): lte_10;
};
export type lte_10 = {
    (b: number): lte_11;
};
export type lte_01 = {
    (a: number): lte_11;
};
export type lte_11 = boolean;
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
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
export declare const map: map_0;
export type map_0 = {
    <T, U>(fn: (value: T) => U): map_1<T, U>;
};
export type map_1<T, U> = [object, Object];
/**
 * The mapAccum function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
export declare const mapAccum: mapAccum_000;
export type mapAccum_000 = {
    <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], _acc: PH, list: List<T>): mapAccum_101<T, U, TResult>;
    <T, U>(_fn: PH, acc: U, list: List<T>): mapAccum_011<T, U>;
    <T>(_fn: PH, _acc: PH, list: List<T>): mapAccum_001<T>;
    <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: List<T>): mapAccum_111<T, U, TResult>;
    <U>(_fn: PH, acc: U): mapAccum_010<U>;
    <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): mapAccum_110<T, U, TResult>;
    <$SEL extends "111">(): <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: List<T>) => mapAccum_111<T, U, TResult>;
    <$SEL extends "11">(): <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U) => mapAccum_110<T, U, TResult>;
    <$SEL extends "101">(): <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], _acc: PH, list: List<T>) => mapAccum_101<T, U, TResult>;
    <$SEL extends "1">(): <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]) => mapAccum_100<T, U, TResult>;
    <$SEL extends "011">(): <T, U>(_fn: PH, acc: U, list: List<T>) => mapAccum_011<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, acc: U) => mapAccum_010<U>;
    <$SEL extends "001">(): <T>(_fn: PH, _acc: PH, list: List<T>) => mapAccum_001<T>;
    <T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): mapAccum_100<T, U, TResult>;
};
export type mapAccum_100<T, U, TResult> = {
    (_acc: PH, list: List<T>): mapAccum_101<T, U, TResult>;
    (acc: U, list: List<T>): mapAccum_111<T, U, TResult>;
    <$SEL extends "11">(): (acc: U, list: List<T>) => mapAccum_111<T, U, TResult>;
    <$SEL extends "1">(): (acc: U) => mapAccum_110<T, U, TResult>;
    <$SEL extends "01">(): (_acc: PH, list: List<T>) => mapAccum_101<T, U, TResult>;
    (acc: U): mapAccum_110<T, U, TResult>;
};
export type mapAccum_010<U> = {
    <T>(_fn: PH, list: List<T>): mapAccum_011<T, U>;
    <T, TResult>(fn: (acc: U, value: T) => [U, TResult], list: List<T>): mapAccum_111<T, U, TResult>;
    <$SEL extends "11">(): <T, TResult>(fn: (acc: U, value: T) => [U, TResult], list: List<T>) => mapAccum_111<T, U, TResult>;
    <$SEL extends "1">(): <T, TResult>(fn: (acc: U, value: T) => [U, TResult]) => mapAccum_110<T, U, TResult>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => mapAccum_011<T, U>;
    <T, TResult>(fn: (acc: U, value: T) => [U, TResult]): mapAccum_110<T, U, TResult>;
};
export type mapAccum_110<T, U, TResult> = {
    (list: List<T>): mapAccum_111<T, U, TResult>;
};
export type mapAccum_001<T> = {
    <U>(_fn: PH, acc: U): mapAccum_011<T, U>;
    <U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): mapAccum_111<T, U, TResult>;
    <$SEL extends "11">(): <U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U) => mapAccum_111<T, U, TResult>;
    <$SEL extends "1">(): <U, TResult>(fn: (acc: U, value: T) => [U, TResult]) => mapAccum_101<T, U, TResult>;
    <$SEL extends "01">(): <U>(_fn: PH, acc: U) => mapAccum_011<T, U>;
    <U, TResult>(fn: (acc: U, value: T) => [U, TResult]): mapAccum_101<T, U, TResult>;
};
export type mapAccum_101<T, U, TResult> = {
    (acc: U): mapAccum_111<T, U, TResult>;
};
export type mapAccum_011<T, U> = {
    <TResult>(fn: (acc: U, value: T) => [U, TResult]): mapAccum_111<T, U, TResult>;
};
export type mapAccum_111<T, U, TResult> = [U, TResult[]];
/**
 * The mapAccumRight function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to `mapAccum`, except moves through the input list from the right to
 * the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
export declare const mapAccumRight: mapAccumRight_000;
export type mapAccumRight_000 = {
    <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], _acc: PH, list: List<T>): mapAccumRight_101<T, U, TResult>;
    <T, U>(_fn: PH, acc: U, list: List<T>): mapAccumRight_011<T, U>;
    <T>(_fn: PH, _acc: PH, list: List<T>): mapAccumRight_001<T>;
    <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U, list: List<T>): mapAccumRight_111<T, U, TResult>;
    <U>(_fn: PH, acc: U): mapAccumRight_010<U>;
    <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U): mapAccumRight_110<T, U, TResult>;
    <$SEL extends "111">(): <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U, list: List<T>) => mapAccumRight_111<T, U, TResult>;
    <$SEL extends "11">(): <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U) => mapAccumRight_110<T, U, TResult>;
    <$SEL extends "101">(): <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U], _acc: PH, list: List<T>) => mapAccumRight_101<T, U, TResult>;
    <$SEL extends "1">(): <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U]) => mapAccumRight_100<T, U, TResult>;
    <$SEL extends "011">(): <T, U>(_fn: PH, acc: U, list: List<T>) => mapAccumRight_011<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, acc: U) => mapAccumRight_010<U>;
    <$SEL extends "001">(): <T>(_fn: PH, _acc: PH, list: List<T>) => mapAccumRight_001<T>;
    <T, U, TResult>(fn: (value: T, acc: U) => [TResult, U]): mapAccumRight_100<T, U, TResult>;
};
export type mapAccumRight_100<T, U, TResult> = {
    (_acc: PH, list: List<T>): mapAccumRight_101<T, U, TResult>;
    (acc: U, list: List<T>): mapAccumRight_111<T, U, TResult>;
    <$SEL extends "11">(): (acc: U, list: List<T>) => mapAccumRight_111<T, U, TResult>;
    <$SEL extends "1">(): (acc: U) => mapAccumRight_110<T, U, TResult>;
    <$SEL extends "01">(): (_acc: PH, list: List<T>) => mapAccumRight_101<T, U, TResult>;
    (acc: U): mapAccumRight_110<T, U, TResult>;
};
export type mapAccumRight_010<U> = {
    <T>(_fn: PH, list: List<T>): mapAccumRight_011<T, U>;
    <T, TResult>(fn: (value: T, acc: U) => [TResult, U], list: List<T>): mapAccumRight_111<T, U, TResult>;
    <$SEL extends "11">(): <T, TResult>(fn: (value: T, acc: U) => [TResult, U], list: List<T>) => mapAccumRight_111<T, U, TResult>;
    <$SEL extends "1">(): <T, TResult>(fn: (value: T, acc: U) => [TResult, U]) => mapAccumRight_110<T, U, TResult>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => mapAccumRight_011<T, U>;
    <T, TResult>(fn: (value: T, acc: U) => [TResult, U]): mapAccumRight_110<T, U, TResult>;
};
export type mapAccumRight_110<T, U, TResult> = {
    (list: List<T>): mapAccumRight_111<T, U, TResult>;
};
export type mapAccumRight_001<T> = {
    <U>(_fn: PH, acc: U): mapAccumRight_011<T, U>;
    <U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U): mapAccumRight_111<T, U, TResult>;
    <$SEL extends "11">(): <U, TResult>(fn: (value: T, acc: U) => [TResult, U], acc: U) => mapAccumRight_111<T, U, TResult>;
    <$SEL extends "1">(): <U, TResult>(fn: (value: T, acc: U) => [TResult, U]) => mapAccumRight_101<T, U, TResult>;
    <$SEL extends "01">(): <U>(_fn: PH, acc: U) => mapAccumRight_011<T, U>;
    <U, TResult>(fn: (value: T, acc: U) => [TResult, U]): mapAccumRight_101<T, U, TResult>;
};
export type mapAccumRight_101<T, U, TResult> = {
    (acc: U): mapAccumRight_111<T, U, TResult>;
};
export type mapAccumRight_011<T, U> = {
    <TResult>(fn: (value: T, acc: U) => [TResult, U]): mapAccumRight_111<T, U, TResult>;
};
export type mapAccumRight_111<T, U, TResult> = [TResult[], U];
/**
 * An Object-specific version of `map`. The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * `map` instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
export declare const mapObjIndexed: mapObjIndexed_00;
export type mapObjIndexed_00 = {
    <T, M extends Obj<T>>(_fn: PH, obj: M): mapObjIndexed_01<T, M>;
    <T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?: M) => V, obj: M): mapObjIndexed_11<T, V, M>;
    <$SEL extends "11">(): <T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?: M) => V, obj: M) => mapObjIndexed_11<T, V, M>;
    <$SEL extends "1">(): <T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?: M) => V) => mapObjIndexed_10<T, V, M>;
    <$SEL extends "01">(): <T, M extends Obj<T>>(_fn: PH, obj: M) => mapObjIndexed_01<T, M>;
    <T, V, M extends Obj<T>>(fn: (value: T, key: string, obj?: M) => V): mapObjIndexed_10<T, V, M>;
};
export type mapObjIndexed_10<T, V, M extends Obj<T>> = {
    (obj: M): mapObjIndexed_11<T, V, M>;
};
export type mapObjIndexed_01<T, M extends Obj<T>> = {
    <V>(fn: (value: T, key: string, obj?: M) => V): mapObjIndexed_11<T, V, M>;
};
export type mapObjIndexed_11<T, V, M extends Obj<T>> = {
    [K in keyof M]: V;
};
/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
export declare const match: match_00;
export type match_00 = {
    (_regexp: PH, str: string): match_01;
    (regexp: RegExp, str: string): match_11;
    <$SEL extends "11">(): (regexp: RegExp, str: string) => match_11;
    <$SEL extends "1">(): (regexp: RegExp) => match_10;
    <$SEL extends "01">(): (_regexp: PH, str: string) => match_01;
    (regexp: RegExp): match_10;
};
export type match_10 = {
    (str: string): match_11;
};
export type match_01 = {
    (regexp: RegExp): match_11;
};
export type match_11 = string[];
/**
 * mathMod behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2,
 * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
 * when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
export declare const mathMod: mathMod_00;
export type mathMod_00 = {
    (_a: PH, b: number): mathMod_01;
    (a: number, b: number): mathMod_11;
    <$SEL extends "11">(): (a: number, b: number) => mathMod_11;
    <$SEL extends "1">(): (a: number) => mathMod_10;
    <$SEL extends "01">(): (_a: PH, b: number) => mathMod_01;
    (a: number): mathMod_10;
};
export type mathMod_10 = {
    (b: number): mathMod_11;
};
export type mathMod_01 = {
    (a: number): mathMod_11;
};
export type mathMod_11 = number;
/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
export declare const max: max_00;
export type max_00 = {
    <T extends Ord>(_a: PH, b: T): max_01<T>;
    <T extends Ord>(a: T, b: T): max_11<T>;
    <$SEL extends "11">(): <T extends Ord>(a: T, b: T) => max_11<T>;
    <$SEL extends "1">(): <T extends Ord>(a: T) => max_10<T>;
    <$SEL extends "01">(): <T extends Ord>(_a: PH, b: T) => max_01<T>;
    <T extends Ord>(a: T): max_10<T>;
};
export type max_10<T extends Ord> = {
    (b: T): max_11<T>;
};
export type max_01<T extends Ord> = {
    (a: T): max_11<T>;
};
export type max_11<T extends Ord> = T;
/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
export declare const maxBy: maxBy_000;
export type maxBy_000 = {
    <T>(keyFn: (a: T) => Ord, _a: PH, b: T): maxBy_101<T>;
    <T>(_keyFn: PH, a: T, b: T): maxBy_011<T>;
    <T>(_keyFn: PH, _a: PH, b: T): maxBy_001<T>;
    <T>(keyFn: (a: T) => Ord, a: T, b: T): maxBy_111<T>;
    <T>(_keyFn: PH, a: T): maxBy_010<T>;
    <T>(keyFn: (a: T) => Ord, a: T): maxBy_110<T>;
    <$SEL extends "111">(): <T>(keyFn: (a: T) => Ord, a: T, b: T) => maxBy_111<T>;
    <$SEL extends "11">(): <T>(keyFn: (a: T) => Ord, a: T) => maxBy_110<T>;
    <$SEL extends "101">(): <T>(keyFn: (a: T) => Ord, _a: PH, b: T) => maxBy_101<T>;
    <$SEL extends "1">(): <T>(keyFn: (a: T) => Ord) => maxBy_100<T>;
    <$SEL extends "011">(): <T>(_keyFn: PH, a: T, b: T) => maxBy_011<T>;
    <$SEL extends "01">(): <T>(_keyFn: PH, a: T) => maxBy_010<T>;
    <$SEL extends "001">(): <T>(_keyFn: PH, _a: PH, b: T) => maxBy_001<T>;
    <T>(keyFn: (a: T) => Ord): maxBy_100<T>;
};
export type maxBy_100<T> = {
    (_a: PH, b: T): maxBy_101<T>;
    (a: T, b: T): maxBy_111<T>;
    <$SEL extends "11">(): (a: T, b: T) => maxBy_111<T>;
    <$SEL extends "1">(): (a: T) => maxBy_110<T>;
    <$SEL extends "01">(): (_a: PH, b: T) => maxBy_101<T>;
    (a: T): maxBy_110<T>;
};
export type maxBy_010<T> = {
    (_keyFn: PH, b: T): maxBy_011<T>;
    (keyFn: (a: T) => Ord, b: T): maxBy_111<T>;
    <$SEL extends "11">(): (keyFn: (a: T) => Ord, b: T) => maxBy_111<T>;
    <$SEL extends "1">(): (keyFn: (a: T) => Ord) => maxBy_110<T>;
    <$SEL extends "01">(): (_keyFn: PH, b: T) => maxBy_011<T>;
    (keyFn: (a: T) => Ord): maxBy_110<T>;
};
export type maxBy_110<T> = {
    (b: T): maxBy_111<T>;
};
export type maxBy_001<T> = {
    (_keyFn: PH, a: T): maxBy_011<T>;
    (keyFn: (a: T) => Ord, a: T): maxBy_111<T>;
    <$SEL extends "11">(): (keyFn: (a: T) => Ord, a: T) => maxBy_111<T>;
    <$SEL extends "1">(): (keyFn: (a: T) => Ord) => maxBy_101<T>;
    <$SEL extends "01">(): (_keyFn: PH, a: T) => maxBy_011<T>;
    (keyFn: (a: T) => Ord): maxBy_101<T>;
};
export type maxBy_101<T> = {
    (a: T): maxBy_111<T>;
};
export type maxBy_011<T> = {
    (keyFn: (a: T) => Ord): maxBy_111<T>;
};
export type maxBy_111<T> = T;
/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
export declare const mean: mean_0;
export type mean_0 = {
    (list: List<number>): mean_1;
};
export type mean_1 = number;
/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
export declare const median: median_0;
export type median_0 = {
    (list: List<number>): median_1;
};
export type median_1 = number;
/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *
 *      var count = 0;
 *      var factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
export declare const memoize: memoize_0;
export type memoize_0 = {
    <T>(fn: Variadic<T>): memoize_1<T>;
};
export type memoize_1<T> = Variadic<T>;
/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
export declare const merge: merge_00;
export type merge_00 = {
    <V2, T2 extends Struct<V2>>(_a: PH, b: T2): merge_01<V2, T2>;
    <V1, V2, T1 extends Struct<V1>, T2 extends Struct<V2>>(a: T1, b: T2): merge_11<V1, V2, T1, T2>;
    <$SEL extends "11">(): <V1, V2, T1 extends Struct<V1>, T2 extends Struct<V2>>(a: T1, b: T2) => merge_11<V1, V2, T1, T2>;
    <$SEL extends "1">(): <V1, T1 extends Struct<V1>>(a: T1) => merge_10<V1, T1>;
    <$SEL extends "01">(): <V2, T2 extends Struct<V2>>(_a: PH, b: T2) => merge_01<V2, T2>;
    <V1, T1 extends Struct<V1>>(a: T1): merge_10<V1, T1>;
};
export type merge_10<V1, T1 extends Struct<V1>> = {
    <V2, T2 extends Struct<V2>>(b: T2): merge_11<V1, V2, T1, T2>;
};
export type merge_01<V2, T2 extends Struct<V2>> = {
    <V1, T1 extends Struct<V1>>(a: T1): merge_11<V1, V2, T1, T2>;
};
export type merge_11<V1, V2, T1 extends Struct<V1>, T2 extends Struct<V2>> = T1 & T2;
/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
export declare const mergeAll: mergeAll_0;
export type mergeAll_0 = {
    <T>(list: List<any>): mergeAll_1<T>;
};
export type mergeAll_1<T> = T;
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object. The key will be
 * excluded from the returned object if the resulting value is `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
export declare const mergeWith: mergeWith_000;
export type mergeWith_000 = {
    <V>(fn: (x: any, z: any) => any, _a: PH, b: V): mergeWith_101<V>;
    <U, V>(_fn: PH, a: U, b: V): mergeWith_011<U, V>;
    <V>(_fn: PH, _a: PH, b: V): mergeWith_001<V>;
    <U, V>(fn: (x: any, z: any) => any, a: U, b: V): mergeWith_111<U, V>;
    <U>(_fn: PH, a: U): mergeWith_010<U>;
    <U>(fn: (x: any, z: any) => any, a: U): mergeWith_110<U>;
    <$SEL extends "111">(): <U, V>(fn: (x: any, z: any) => any, a: U, b: V) => mergeWith_111<U, V>;
    <$SEL extends "11">(): <U>(fn: (x: any, z: any) => any, a: U) => mergeWith_110<U>;
    <$SEL extends "101">(): <V>(fn: (x: any, z: any) => any, _a: PH, b: V) => mergeWith_101<V>;
    <$SEL extends "1">(): (fn: (x: any, z: any) => any) => mergeWith_100;
    <$SEL extends "011">(): <U, V>(_fn: PH, a: U, b: V) => mergeWith_011<U, V>;
    <$SEL extends "01">(): <U>(_fn: PH, a: U) => mergeWith_010<U>;
    <$SEL extends "001">(): <V>(_fn: PH, _a: PH, b: V) => mergeWith_001<V>;
    (fn: (x: any, z: any) => any): mergeWith_100;
};
export type mergeWith_100 = {
    <V>(_a: PH, b: V): mergeWith_101<V>;
    <U, V>(a: U, b: V): mergeWith_111<U, V>;
    <$SEL extends "11">(): <U, V>(a: U, b: V) => mergeWith_111<U, V>;
    <$SEL extends "1">(): <U>(a: U) => mergeWith_110<U>;
    <$SEL extends "01">(): <V>(_a: PH, b: V) => mergeWith_101<V>;
    <U>(a: U): mergeWith_110<U>;
};
export type mergeWith_010<U> = {
    <V>(_fn: PH, b: V): mergeWith_011<U, V>;
    <V>(fn: (x: any, z: any) => any, b: V): mergeWith_111<U, V>;
    <$SEL extends "11">(): <V>(fn: (x: any, z: any) => any, b: V) => mergeWith_111<U, V>;
    <$SEL extends "1">(): (fn: (x: any, z: any) => any) => mergeWith_110<U>;
    <$SEL extends "01">(): <V>(_fn: PH, b: V) => mergeWith_011<U, V>;
    (fn: (x: any, z: any) => any): mergeWith_110<U>;
};
export type mergeWith_110<U> = {
    <V>(b: V): mergeWith_111<U, V>;
};
export type mergeWith_001<V> = {
    <U>(_fn: PH, a: U): mergeWith_011<U, V>;
    <U>(fn: (x: any, z: any) => any, a: U): mergeWith_111<U, V>;
    <$SEL extends "11">(): <U>(fn: (x: any, z: any) => any, a: U) => mergeWith_111<U, V>;
    <$SEL extends "1">(): (fn: (x: any, z: any) => any) => mergeWith_101<V>;
    <$SEL extends "01">(): <U>(_fn: PH, a: U) => mergeWith_011<U, V>;
    (fn: (x: any, z: any) => any): mergeWith_101<V>;
};
export type mergeWith_101<V> = {
    <U>(a: U): mergeWith_111<U, V>;
};
export type mergeWith_011<U, V> = {
    (fn: (x: any, z: any) => any): mergeWith_111<U, V>;
};
export type mergeWith_111<U, V> = U & V;
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object. The key
 * will be excluded from the returned object if the resulting value is
 * `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
export declare const mergeWithKey: mergeWithKey_000;
export type mergeWithKey_000 = {
    <V>(fn: (str: string, x: any, z: any) => any, _a: PH, b: V): mergeWithKey_101<V>;
    <U, V>(_fn: PH, a: U, b: V): mergeWithKey_011<U, V>;
    <V>(_fn: PH, _a: PH, b: V): mergeWithKey_001<V>;
    <U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): mergeWithKey_111<U, V>;
    <U>(_fn: PH, a: U): mergeWithKey_010<U>;
    <U>(fn: (str: string, x: any, z: any) => any, a: U): mergeWithKey_110<U>;
    <$SEL extends "111">(): <U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V) => mergeWithKey_111<U, V>;
    <$SEL extends "11">(): <U>(fn: (str: string, x: any, z: any) => any, a: U) => mergeWithKey_110<U>;
    <$SEL extends "101">(): <V>(fn: (str: string, x: any, z: any) => any, _a: PH, b: V) => mergeWithKey_101<V>;
    <$SEL extends "1">(): (fn: (str: string, x: any, z: any) => any) => mergeWithKey_100;
    <$SEL extends "011">(): <U, V>(_fn: PH, a: U, b: V) => mergeWithKey_011<U, V>;
    <$SEL extends "01">(): <U>(_fn: PH, a: U) => mergeWithKey_010<U>;
    <$SEL extends "001">(): <V>(_fn: PH, _a: PH, b: V) => mergeWithKey_001<V>;
    (fn: (str: string, x: any, z: any) => any): mergeWithKey_100;
};
export type mergeWithKey_100 = {
    <V>(_a: PH, b: V): mergeWithKey_101<V>;
    <U, V>(a: U, b: V): mergeWithKey_111<U, V>;
    <$SEL extends "11">(): <U, V>(a: U, b: V) => mergeWithKey_111<U, V>;
    <$SEL extends "1">(): <U>(a: U) => mergeWithKey_110<U>;
    <$SEL extends "01">(): <V>(_a: PH, b: V) => mergeWithKey_101<V>;
    <U>(a: U): mergeWithKey_110<U>;
};
export type mergeWithKey_010<U> = {
    <V>(_fn: PH, b: V): mergeWithKey_011<U, V>;
    <V>(fn: (str: string, x: any, z: any) => any, b: V): mergeWithKey_111<U, V>;
    <$SEL extends "11">(): <V>(fn: (str: string, x: any, z: any) => any, b: V) => mergeWithKey_111<U, V>;
    <$SEL extends "1">(): (fn: (str: string, x: any, z: any) => any) => mergeWithKey_110<U>;
    <$SEL extends "01">(): <V>(_fn: PH, b: V) => mergeWithKey_011<U, V>;
    (fn: (str: string, x: any, z: any) => any): mergeWithKey_110<U>;
};
export type mergeWithKey_110<U> = {
    <V>(b: V): mergeWithKey_111<U, V>;
};
export type mergeWithKey_001<V> = {
    <U>(_fn: PH, a: U): mergeWithKey_011<U, V>;
    <U>(fn: (str: string, x: any, z: any) => any, a: U): mergeWithKey_111<U, V>;
    <$SEL extends "11">(): <U>(fn: (str: string, x: any, z: any) => any, a: U) => mergeWithKey_111<U, V>;
    <$SEL extends "1">(): (fn: (str: string, x: any, z: any) => any) => mergeWithKey_101<V>;
    <$SEL extends "01">(): <U>(_fn: PH, a: U) => mergeWithKey_011<U, V>;
    (fn: (str: string, x: any, z: any) => any): mergeWithKey_101<V>;
};
export type mergeWithKey_101<V> = {
    <U>(a: U): mergeWithKey_111<U, V>;
};
export type mergeWithKey_011<U, V> = {
    (fn: (str: string, x: any, z: any) => any): mergeWithKey_111<U, V>;
};
export type mergeWithKey_111<U, V> = U & V;
/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
export declare const min: min_00;
export type min_00 = {
    <T extends Ord>(_a: PH, b: T): min_01<T>;
    <T extends Ord>(a: T, b: T): min_11<T>;
    <$SEL extends "11">(): <T extends Ord>(a: T, b: T) => min_11<T>;
    <$SEL extends "1">(): <T extends Ord>(a: T) => min_10<T>;
    <$SEL extends "01">(): <T extends Ord>(_a: PH, b: T) => min_01<T>;
    <T extends Ord>(a: T): min_10<T>;
};
export type min_10<T extends Ord> = {
    (b: T): min_11<T>;
};
export type min_01<T extends Ord> = {
    (a: T): min_11<T>;
};
export type min_11<T extends Ord> = T;
/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
export declare const minBy: minBy_000;
export type minBy_000 = {
    <T>(keyFn: (a: T) => Ord, _a: PH, b: T): minBy_101<T>;
    <T>(_keyFn: PH, a: T, b: T): minBy_011<T>;
    <T>(_keyFn: PH, _a: PH, b: T): minBy_001<T>;
    <T>(keyFn: (a: T) => Ord, a: T, b: T): minBy_111<T>;
    <T>(_keyFn: PH, a: T): minBy_010<T>;
    <T>(keyFn: (a: T) => Ord, a: T): minBy_110<T>;
    <$SEL extends "111">(): <T>(keyFn: (a: T) => Ord, a: T, b: T) => minBy_111<T>;
    <$SEL extends "11">(): <T>(keyFn: (a: T) => Ord, a: T) => minBy_110<T>;
    <$SEL extends "101">(): <T>(keyFn: (a: T) => Ord, _a: PH, b: T) => minBy_101<T>;
    <$SEL extends "1">(): <T>(keyFn: (a: T) => Ord) => minBy_100<T>;
    <$SEL extends "011">(): <T>(_keyFn: PH, a: T, b: T) => minBy_011<T>;
    <$SEL extends "01">(): <T>(_keyFn: PH, a: T) => minBy_010<T>;
    <$SEL extends "001">(): <T>(_keyFn: PH, _a: PH, b: T) => minBy_001<T>;
    <T>(keyFn: (a: T) => Ord): minBy_100<T>;
};
export type minBy_100<T> = {
    (_a: PH, b: T): minBy_101<T>;
    (a: T, b: T): minBy_111<T>;
    <$SEL extends "11">(): (a: T, b: T) => minBy_111<T>;
    <$SEL extends "1">(): (a: T) => minBy_110<T>;
    <$SEL extends "01">(): (_a: PH, b: T) => minBy_101<T>;
    (a: T): minBy_110<T>;
};
export type minBy_010<T> = {
    (_keyFn: PH, b: T): minBy_011<T>;
    (keyFn: (a: T) => Ord, b: T): minBy_111<T>;
    <$SEL extends "11">(): (keyFn: (a: T) => Ord, b: T) => minBy_111<T>;
    <$SEL extends "1">(): (keyFn: (a: T) => Ord) => minBy_110<T>;
    <$SEL extends "01">(): (_keyFn: PH, b: T) => minBy_011<T>;
    (keyFn: (a: T) => Ord): minBy_110<T>;
};
export type minBy_110<T> = {
    (b: T): minBy_111<T>;
};
export type minBy_001<T> = {
    (_keyFn: PH, a: T): minBy_011<T>;
    (keyFn: (a: T) => Ord, a: T): minBy_111<T>;
    <$SEL extends "11">(): (keyFn: (a: T) => Ord, a: T) => minBy_111<T>;
    <$SEL extends "1">(): (keyFn: (a: T) => Ord) => minBy_101<T>;
    <$SEL extends "01">(): (_keyFn: PH, a: T) => minBy_011<T>;
    (keyFn: (a: T) => Ord): minBy_101<T>;
};
export type minBy_101<T> = {
    (a: T): minBy_111<T>;
};
export type minBy_011<T> = {
    (keyFn: (a: T) => Ord): minBy_111<T>;
};
export type minBy_111<T> = T;
/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see `mathMod`.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
export declare const modulo: modulo_00;
export type modulo_00 = {
    (_a: PH, b: number): modulo_01;
    (a: number, b: number): modulo_11;
    <$SEL extends "11">(): (a: number, b: number) => modulo_11;
    <$SEL extends "1">(): (a: number) => modulo_10;
    <$SEL extends "01">(): (_a: PH, b: number) => modulo_01;
    (a: number): modulo_10;
};
export type modulo_10 = {
    (b: number): modulo_11;
};
export type modulo_01 = {
    (a: number): modulo_11;
};
export type modulo_11 = number;
/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
export declare const multiply: multiply_00;
export type multiply_00 = {
    (_a: PH, b: number): multiply_01;
    (a: number, b: number): multiply_11;
    <$SEL extends "11">(): (a: number, b: number) => multiply_11;
    <$SEL extends "1">(): (a: number) => multiply_10;
    <$SEL extends "01">(): (_a: PH, b: number) => multiply_01;
    (a: number): multiply_10;
};
export type multiply_10 = {
    (b: number): multiply_11;
};
export type multiply_01 = {
    (a: number): multiply_11;
};
export type multiply_11 = number;
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
export declare const nAry: nAry_00;
export type nAry_00 = {
    <T>(_n: PH, fn: Variadic<T>): nAry_01<T>;
    <T>(n: number, fn: Variadic<T>): nAry_11<T>;
    <$SEL extends "11">(): <T>(n: number, fn: Variadic<T>) => nAry_11<T>;
    <$SEL extends "1">(): (n: number) => nAry_10;
    <$SEL extends "01">(): <T>(_n: PH, fn: Variadic<T>) => nAry_01<T>;
    (n: number): nAry_10;
};
export type nAry_10 = {
    <T>(fn: Variadic<T>): nAry_11<T>;
};
export type nAry_01<T> = {
    (n: number): nAry_11<T>;
};
export type nAry_11<T> = Variadic<T>;
/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
export declare const negate: negate_0;
export type negate_0 = {
    (n: number): negate_1;
};
export type negate_1 = number;
/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
export declare const none: none_00;
export type none_00 = {
    <T>(_fn: PH, list: List<T>): none_01<T>;
    <T>(fn: (a: T) => boolean, list: List<T>): none_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => boolean, list: List<T>) => none_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => boolean) => none_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => none_01<T>;
    <T>(fn: (a: T) => boolean): none_10<T>;
};
export type none_10<T> = {
    (list: List<T>): none_11<T>;
};
export type none_01<T> = {
    (fn: (a: T) => boolean): none_11<T>;
};
export type none_11<T> = boolean;
/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
export declare const not: not_0;
export type not_0 = {
    (value: any): not_1;
};
export type not_1 = boolean;
/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
export declare const nth: nth_00;
export type nth_00 = {
    <T>(_n: PH, list: List<T>): nth_01<T>;
    <T>(n: number, list: List<T>): nth_11<T>;
    <$SEL extends "11">(): <T>(n: number, list: List<T>) => nth_11<T>;
    <$SEL extends "1">(): (n: number) => nth_10;
    <$SEL extends "01">(): <T>(_n: PH, list: List<T>) => nth_01<T>;
    (n: number): nth_10;
};
export type nth_10 = {
    <T>(list: List<T>): nth_11<T>;
};
export type nth_01<T> = {
    (n: number): nth_11<T>;
};
export type nth_11<T> = undefined;
/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
export declare const nthArg: nthArg_0;
export type nthArg_0 = {
    (n: number): nthArg_1;
};
export type nthArg_1 = <T>(...a: T[]) => T;
/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
export declare const objOf: objOf_00;
export type objOf_00 = {
    <V>(_key: PH, value: V): objOf_01<V>;
    <K extends string, V, T extends Record<K, V>>(key: K, value: V): objOf_11<K, V, T>;
    <$SEL extends "11">(): <K extends string, V, T extends Record<K, V>>(key: K, value: V) => objOf_11<K, V, T>;
    <$SEL extends "1">(): <K extends string>(key: K) => objOf_10<K>;
    <$SEL extends "01">(): <V>(_key: PH, value: V) => objOf_01<V>;
    <K extends string>(key: K): objOf_10<K>;
};
export type objOf_10<K extends string> = {
    <V, T extends Record<K, V>>(value: V): objOf_11<K, V, T>;
};
export type objOf_01<V> = {
    <K extends string, T extends Record<K, V>>(key: K): objOf_11<K, V, T>;
};
export type objOf_11<K extends string, V, T extends Record<K, V>> = T;
/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
export declare const of: of_0;
export type of_0 = {
    <T>(x: T): of_1<T>;
};
export type of_1<T> = T[];
/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
export declare const omit: omit_00;
export type omit_00 = {
    <T>(_names: PH, obj: T): omit_01<T>;
    <T>(names: List<Prop>, obj: T): omit_11<T>;
    <$SEL extends "11">(): <T>(names: List<Prop>, obj: T) => omit_11<T>;
    <$SEL extends "1">(): (names: List<Prop>) => omit_10;
    <$SEL extends "01">(): <T>(_names: PH, obj: T) => omit_01<T>;
    (names: List<Prop>): omit_10;
};
export type omit_10 = {
    <T>(obj: T): omit_11<T>;
};
export type omit_01<T> = {
    (names: List<Prop>): omit_11<T>;
};
export type omit_11<T> = T;
/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
export declare const once: once_0;
export type once_0 = {
    <T>(fn: Variadic<T>): once_1<T>;
};
export type once_1<T> = Variadic<T>;
/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
export declare const or: or_00;
export type or_00 = {
    <U>(_a: PH, b: U): or_01<U>;
    <T, U>(a: T, b: U): or_11<T, U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => or_11<T, U>;
    <$SEL extends "1">(): <T>(a: T) => or_10<T>;
    <$SEL extends "01">(): <U>(_a: PH, b: U) => or_01<U>;
    <T>(a: T): or_10<T>;
};
export type or_10<T> = {
    <U>(b: U): or_11<T, U>;
};
export type or_01<U> = {
    <T>(a: T): or_11<T, U>;
};
export type or_11<T, U> = T | U;
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
export declare const over: over_000;
export type over_000 = {
    <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, _fn: PH, value: T): over_Functor_version_applied_to_array_101<V, T>;
    <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, _fn: PH, value: U): over_unbound_value_101<V, U>;
    <U>(_lens: PH, _fn: PH, value: U): over_unbound_value_001<U>;
    <V, T extends List<V>>(_lens: PH, fn: (v: V) => V, value: T): over_Functor_version_applied_to_array_011<V, T>;
    <V, T extends List<V>>(_lens: PH, _fn: PH, value: T): over_Functor_version_applied_to_array_001<V, T>;
    <V, U>(_lens: PH, fn: (v: V) => V, value: U): over_unbound_value_011<V, U>;
    <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V, value: U): over_unbound_value_111<V, U>;
    <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V, value: T): over_Functor_version_applied_to_array_111<V, T>;
    <V>(_lens: PH, fn: (v: V) => V): over_010<V>;
    <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V): over_unbound_value_110<V, U>;
    <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V): over_Functor_version_applied_to_array_110<V, T>;
    <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens): over_unbound_value_100<V, U>;
    <$SEL extends "111", $KIND extends "Functor_version_applied_to_array">(): <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V, value: T) => over_Functor_version_applied_to_array_111<V, T>;
    <$SEL extends "11", $KIND extends "Functor_version_applied_to_array">(): <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V) => over_Functor_version_applied_to_array_110<V, T>;
    <$SEL extends "101", $KIND extends "Functor_version_applied_to_array">(): <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, _fn: PH, value: T) => over_Functor_version_applied_to_array_101<V, T>;
    <$SEL extends "1", $KIND extends "Functor_version_applied_to_array">(): <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens) => over_Functor_version_applied_to_array_100<V, T>;
    <$SEL extends "011", $KIND extends "Functor_version_applied_to_array">(): <V, T extends List<V>>(_lens: PH, fn: (v: V) => V, value: T) => over_Functor_version_applied_to_array_011<V, T>;
    <$SEL extends "001", $KIND extends "Functor_version_applied_to_array">(): <V, T extends List<V>>(_lens: PH, _fn: PH, value: T) => over_Functor_version_applied_to_array_001<V, T>;
    <$SEL extends "111", $KIND extends "unbound_value">(): <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V, value: U) => over_unbound_value_111<V, U>;
    <$SEL extends "11", $KIND extends "unbound_value">(): <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V) => over_unbound_value_110<V, U>;
    <$SEL extends "101", $KIND extends "unbound_value">(): <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, _fn: PH, value: U) => over_unbound_value_101<V, U>;
    <$SEL extends "1", $KIND extends "unbound_value">(): <V, U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens) => over_unbound_value_100<V, U>;
    <$SEL extends "011", $KIND extends "unbound_value">(): <V, U>(_lens: PH, fn: (v: V) => V, value: U) => over_unbound_value_011<V, U>;
    <$SEL extends "001", $KIND extends "unbound_value">(): <U>(_lens: PH, _fn: PH, value: U) => over_unbound_value_001<U>;
    <$SEL extends "01">(): <V>(_lens: PH, fn: (v: V) => V) => over_010<V>;
    <V, T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens): over_Functor_version_applied_to_array_100<V, T>;
};
export type over_010<V> = {
    <T extends List<V>>(_lens: PH, value: T): over_Functor_version_applied_to_array_011<V, T>;
    <U>(_lens: PH, value: U): over_unbound_value_011<V, U>;
    <T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, value: T): over_Functor_version_applied_to_array_111<V, T>;
    <U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, value: U): over_unbound_value_111<V, U>;
    <T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens): over_Functor_version_applied_to_array_110<V, T>;
    <$SEL extends "11", $KIND extends "Functor_version_applied_to_array">(): <T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens, value: T) => over_Functor_version_applied_to_array_111<V, T>;
    <$SEL extends "1", $KIND extends "Functor_version_applied_to_array">(): <T extends List<V>>(lens: Lens<T, V> | ManualLens<V> | UnknownLens) => over_Functor_version_applied_to_array_110<V, T>;
    <$SEL extends "01", $KIND extends "Functor_version_applied_to_array">(): <T extends List<V>>(_lens: PH, value: T) => over_Functor_version_applied_to_array_011<V, T>;
    <$SEL extends "11", $KIND extends "unbound_value">(): <U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, value: U) => over_unbound_value_111<V, U>;
    <$SEL extends "1", $KIND extends "unbound_value">(): <U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens) => over_unbound_value_110<V, U>;
    <$SEL extends "01", $KIND extends "unbound_value">(): <U>(_lens: PH, value: U) => over_unbound_value_011<V, U>;
    <U>(lens: Lens<U, V> | ManualLens<V> | UnknownLens): over_unbound_value_110<V, U>;
};
export type over_Functor_version_applied_to_array_100<V, T extends List<V>> = {
    (_fn: PH, value: T): over_Functor_version_applied_to_array_101<V, T>;
    (fn: (v: V) => V, value: T): over_Functor_version_applied_to_array_111<V, T>;
    <$SEL extends "11">(): (fn: (v: V) => V, value: T) => over_Functor_version_applied_to_array_111<V, T>;
    <$SEL extends "1">(): (fn: (v: V) => V) => over_Functor_version_applied_to_array_110<V, T>;
    <$SEL extends "01">(): (_fn: PH, value: T) => over_Functor_version_applied_to_array_101<V, T>;
    (fn: (v: V) => V): over_Functor_version_applied_to_array_110<V, T>;
};
export type over_unbound_value_100<V, U> = {
    (_fn: PH, value: U): over_unbound_value_101<V, U>;
    (fn: (v: V) => V, value: U): over_unbound_value_111<V, U>;
    <$SEL extends "11">(): (fn: (v: V) => V, value: U) => over_unbound_value_111<V, U>;
    <$SEL extends "1">(): (fn: (v: V) => V) => over_unbound_value_110<V, U>;
    <$SEL extends "01">(): (_fn: PH, value: U) => over_unbound_value_101<V, U>;
    (fn: (v: V) => V): over_unbound_value_110<V, U>;
};
export type over_Functor_version_applied_to_array_110<V, T extends List<V>> = {
    (value: T): over_Functor_version_applied_to_array_111<V, T>;
};
export type over_unbound_value_110<V, U> = {
    (value: U): over_unbound_value_111<V, U>;
};
export type over_Functor_version_applied_to_array_001<V, T extends List<V>> = {
    (_lens: PH, fn: (v: V) => V): over_Functor_version_applied_to_array_011<V, T>;
    (lens: Lens<T, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V): over_Functor_version_applied_to_array_111<V, T>;
    <$SEL extends "11">(): (lens: Lens<T, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V) => over_Functor_version_applied_to_array_111<V, T>;
    <$SEL extends "1">(): (lens: Lens<T, V> | ManualLens<V> | UnknownLens) => over_Functor_version_applied_to_array_101<V, T>;
    <$SEL extends "01">(): (_lens: PH, fn: (v: V) => V) => over_Functor_version_applied_to_array_011<V, T>;
    (lens: Lens<T, V> | ManualLens<V> | UnknownLens): over_Functor_version_applied_to_array_101<V, T>;
};
export type over_unbound_value_001<U> = {
    <V>(_lens: PH, fn: (v: V) => V): over_unbound_value_011<V, U>;
    <V>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V): over_unbound_value_111<V, U>;
    <$SEL extends "11">(): <V>(lens: Lens<U, V> | ManualLens<V> | UnknownLens, fn: (v: V) => V) => over_unbound_value_111<V, U>;
    <$SEL extends "1">(): <V>(lens: Lens<U, V> | ManualLens<V> | UnknownLens) => over_unbound_value_101<V, U>;
    <$SEL extends "01">(): <V>(_lens: PH, fn: (v: V) => V) => over_unbound_value_011<V, U>;
    <V>(lens: Lens<U, V> | ManualLens<V> | UnknownLens): over_unbound_value_101<V, U>;
};
export type over_Functor_version_applied_to_array_101<V, T extends List<V>> = {
    (fn: (v: V) => V): over_Functor_version_applied_to_array_111<V, T>;
};
export type over_unbound_value_101<V, U> = {
    (fn: (v: V) => V): over_unbound_value_111<V, U>;
};
export type over_Functor_version_applied_to_array_011<V, T extends List<V>> = {
    (lens: Lens<T, V> | ManualLens<V> | UnknownLens): over_Functor_version_applied_to_array_111<V, T>;
};
export type over_unbound_value_011<V, U> = {
    (lens: Lens<U, V> | ManualLens<V> | UnknownLens): over_unbound_value_111<V, U>;
};
export type over_Functor_version_applied_to_array_111<V, T extends List<V>> = V[];
export type over_unbound_value_111<V, U> = U;
/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
export declare const pair: pair_00;
export type pair_00 = {
    <S>(_fst: PH, snd: S): pair_01<S>;
    <F, S>(fst: F, snd: S): pair_11<F, S>;
    <$SEL extends "11">(): <F, S>(fst: F, snd: S) => pair_11<F, S>;
    <$SEL extends "1">(): <F>(fst: F) => pair_10<F>;
    <$SEL extends "01">(): <S>(_fst: PH, snd: S) => pair_01<S>;
    <F>(fst: F): pair_10<F>;
};
export type pair_10<F> = {
    <S>(snd: S): pair_11<F, S>;
};
export type pair_01<S> = {
    <F>(fst: F): pair_11<F, S>;
};
export type pair_11<F, S> = [F, S];
/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
export declare const partial: partial_00;
export type partial_00 = {
    (_fn: PH, args: any[]): partial_01;
    <T>(fn: Variadic<T>, args: any[]): partial_11<T>;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, args: any[]) => partial_11<T>;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => partial_10<T>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => partial_01;
    <T>(fn: Variadic<T>): partial_10<T>;
};
export type partial_10<T> = {
    (args: any[]): partial_11<T>;
};
export type partial_01 = {
    <T>(fn: Variadic<T>): partial_11<T>;
};
export type partial_11<T> = Variadic<T>;
/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
export declare const partialRight: partialRight_00;
export type partialRight_00 = {
    (_fn: PH, args: any[]): partialRight_01;
    <T>(fn: Variadic<T>, args: any[]): partialRight_11<T>;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, args: any[]) => partialRight_11<T>;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => partialRight_10<T>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => partialRight_01;
    <T>(fn: Variadic<T>): partialRight_10<T>;
};
export type partialRight_10<T> = {
    (args: any[]): partialRight_11<T>;
};
export type partialRight_01 = {
    <T>(fn: Variadic<T>): partialRight_11<T>;
};
export type partialRight_11<T> = Variadic<T>;
/**
 * Takes a predicate and a list or other "filterable" object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
export declare const partition: partition_00;
export type partition_00 = {
    <T>(_fn: PH, list: List<T>): partition_arrays_01<T>;
    <T extends Obj<V>, U extends Obj<V>, V>(_fn: PH, obj: T & U): partition_objects_01<T, U, V>;
    <T, U extends Obj<T>>(_fn: PH, obj: U): partition_objects__alternative_notation_01<T, U>;
    <T>(fn: (a: T) => boolean, list: List<T>): partition_arrays_11<T>;
    <T extends Obj<V>, U extends Obj<V>, V>(fn: (a: V) => boolean, obj: T & U): partition_objects_11<T, U, V>;
    <T, U extends Obj<T>>(fn: (a: T) => boolean, obj: U): partition_objects__alternative_notation_11<T, U>;
    <T>(fn: (a: T) => boolean): partition_arrays_10<T>;
    <V>(fn: (a: V) => boolean): partition_objects_10<V>;
    <$SEL extends "11", $KIND extends "arrays">(): <T>(fn: (a: T) => boolean, list: List<T>) => partition_arrays_11<T>;
    <$SEL extends "1", $KIND extends "arrays">(): <T>(fn: (a: T) => boolean) => partition_arrays_10<T>;
    <$SEL extends "01", $KIND extends "arrays">(): <T>(_fn: PH, list: List<T>) => partition_arrays_01<T>;
    <$SEL extends "11", $KIND extends "objects">(): <T extends Obj<V>, U extends Obj<V>, V>(fn: (a: V) => boolean, obj: T & U) => partition_objects_11<T, U, V>;
    <$SEL extends "1", $KIND extends "objects">(): <V>(fn: (a: V) => boolean) => partition_objects_10<V>;
    <$SEL extends "01", $KIND extends "objects">(): <T extends Obj<V>, U extends Obj<V>, V>(_fn: PH, obj: T & U) => partition_objects_01<T, U, V>;
    <$SEL extends "11", $KIND extends "objects__alternative_notation">(): <T, U extends Obj<T>>(fn: (a: T) => boolean, obj: U) => partition_objects__alternative_notation_11<T, U>;
    <$SEL extends "1", $KIND extends "objects__alternative_notation">(): <T>(fn: (a: T) => boolean) => partition_objects__alternative_notation_10<T>;
    <$SEL extends "01", $KIND extends "objects__alternative_notation">(): <T, U extends Obj<T>>(_fn: PH, obj: U) => partition_objects__alternative_notation_01<T, U>;
    <T>(fn: (a: T) => boolean): partition_objects__alternative_notation_10<T>;
};
export type partition_arrays_10<T> = {
    (list: List<T>): partition_arrays_11<T>;
};
export type partition_objects_10<V> = {
    <T extends Obj<V>, U extends Obj<V>>(obj: T & U): partition_objects_11<T, U, V>;
};
export type partition_objects__alternative_notation_10<T> = {
    <U extends Obj<T>>(obj: U): partition_objects__alternative_notation_11<T, U>;
};
export type partition_arrays_01<T> = {
    (fn: (a: T) => boolean): partition_arrays_11<T>;
};
export type partition_objects_01<T extends Obj<V>, U extends Obj<V>, V> = {
    (fn: (a: V) => boolean): partition_objects_11<T, U, V>;
};
export type partition_objects__alternative_notation_01<T, U extends Obj<T>> = {
    (fn: (a: T) => boolean): partition_objects__alternative_notation_11<T, U>;
};
export type partition_arrays_11<T> = [T[], T[]];
export type partition_objects_11<T extends Obj<V>, U extends Obj<V>, V> = [T, U];
export type partition_objects__alternative_notation_11<T, U extends Obj<T>> = [Partial<U>, Partial<U>];
/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
export declare function path<T1 extends string, T2 extends string, TResult>(path: [T1, T2], obj: {
        [K1 in T1]: {
            [K2 in T2]: TResult;
        };
    }): TResult;
export declare function path<T1 extends string, T2 extends string, T3 extends string, TResult>(path: [T1, T2, T3], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: TResult;
            };
        };
    }): TResult;
export declare function path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, TResult>(path: [T1, T2, T3, T4], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: TResult;
                };
            };
        };
    }): TResult;
export declare function path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, TResult>(path: [T1, T2, T3, T4, T5], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: TResult;
                    };
                };
            };
        };
    }): TResult;
export declare function path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: TResult;
                        };
                    };
                };
            };
        };
    }): TResult;
export declare function path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: {
                                [K7 in T7]: TResult;
                            };
                        };
                    };
                };
            };
        };
    }): TResult;
export declare function path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: {
                                [K7 in T7]: {
                                    [K8 in T8]: TResult;
                                };
                            };
                        };
                    };
                };
            };
        };
    }): TResult;
export declare function path<T1 extends string, T2 extends string, T3 extends string, T4 extends string, T5 extends string, T6 extends string, T7 extends string, T8 extends string, T9 extends string, TResult>(path: [T1, T2, T3, T4, T5, T6, T7, T8, T9], obj: {
        [K1 in T1]: {
            [K2 in T2]: {
                [K3 in T3]: {
                    [K4 in T4]: {
                        [K5 in T5]: {
                            [K6 in T6]: {
                                [K7 in T7]: {
                                    [K8 in T8]: {
                                        [K9 in T9]: TResult;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    }): TResult;
/**
 * Determines whether a nested path on an object has a specific value, in
 * `R.equals` terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
export declare const pathEq: pathEq_000;
export type pathEq_000 = {
    (p: Path, _v: PH, o: any): pathEq_101;
    (_p: PH, v: any, o: any): pathEq_011;
    (_p: PH, _v: PH, o: any): pathEq_001;
    (p: Path, v: any, o: any): pathEq_111;
    (_p: PH, v: any): pathEq_010;
    (p: Path, v: any): pathEq_110;
    <$SEL extends "111">(): (p: Path, v: any, o: any) => pathEq_111;
    <$SEL extends "11">(): (p: Path, v: any) => pathEq_110;
    <$SEL extends "101">(): (p: Path, _v: PH, o: any) => pathEq_101;
    <$SEL extends "1">(): (p: Path) => pathEq_100;
    <$SEL extends "011">(): (_p: PH, v: any, o: any) => pathEq_011;
    <$SEL extends "01">(): (_p: PH, v: any) => pathEq_010;
    <$SEL extends "001">(): (_p: PH, _v: PH, o: any) => pathEq_001;
    (p: Path): pathEq_100;
};
export type pathEq_100 = {
    (_v: PH, o: any): pathEq_101;
    (v: any, o: any): pathEq_111;
    <$SEL extends "11">(): (v: any, o: any) => pathEq_111;
    <$SEL extends "1">(): (v: any) => pathEq_110;
    <$SEL extends "01">(): (_v: PH, o: any) => pathEq_101;
    (v: any): pathEq_110;
};
export type pathEq_010 = {
    (_p: PH, o: any): pathEq_011;
    (p: Path, o: any): pathEq_111;
    <$SEL extends "11">(): (p: Path, o: any) => pathEq_111;
    <$SEL extends "1">(): (p: Path) => pathEq_110;
    <$SEL extends "01">(): (_p: PH, o: any) => pathEq_011;
    (p: Path): pathEq_110;
};
export type pathEq_110 = {
    (o: any): pathEq_111;
};
export type pathEq_001 = {
    (_p: PH, v: any): pathEq_011;
    (p: Path, v: any): pathEq_111;
    <$SEL extends "11">(): (p: Path, v: any) => pathEq_111;
    <$SEL extends "1">(): (p: Path) => pathEq_101;
    <$SEL extends "01">(): (_p: PH, v: any) => pathEq_011;
    (p: Path): pathEq_101;
};
export type pathEq_101 = {
    (v: any): pathEq_111;
};
export type pathEq_011 = {
    (p: Path): pathEq_111;
};
export type pathEq_111 = boolean;
/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
export declare const pathOr: pathOr_000;
export type pathOr_000 = {
    <T>(d: T, _p: PH, obj: Struct<any>): pathOr_101<T>;
    (_d: PH, p: Path, obj: Struct<any>): pathOr_011;
    (_d: PH, _p: PH, obj: Struct<any>): pathOr_001;
    <T>(d: T, p: Path, obj: Struct<any>): pathOr_111<T>;
    (_d: PH, p: Path): pathOr_010;
    <T>(d: T, p: Path): pathOr_110<T>;
    <$SEL extends "111">(): <T>(d: T, p: Path, obj: Struct<any>) => pathOr_111<T>;
    <$SEL extends "11">(): <T>(d: T, p: Path) => pathOr_110<T>;
    <$SEL extends "101">(): <T>(d: T, _p: PH, obj: Struct<any>) => pathOr_101<T>;
    <$SEL extends "1">(): <T>(d: T) => pathOr_100<T>;
    <$SEL extends "011">(): (_d: PH, p: Path, obj: Struct<any>) => pathOr_011;
    <$SEL extends "01">(): (_d: PH, p: Path) => pathOr_010;
    <$SEL extends "001">(): (_d: PH, _p: PH, obj: Struct<any>) => pathOr_001;
    <T>(d: T): pathOr_100<T>;
};
export type pathOr_100<T> = {
    (_p: PH, obj: Struct<any>): pathOr_101<T>;
    (p: Path, obj: Struct<any>): pathOr_111<T>;
    <$SEL extends "11">(): (p: Path, obj: Struct<any>) => pathOr_111<T>;
    <$SEL extends "1">(): (p: Path) => pathOr_110<T>;
    <$SEL extends "01">(): (_p: PH, obj: Struct<any>) => pathOr_101<T>;
    (p: Path): pathOr_110<T>;
};
export type pathOr_010 = {
    (_d: PH, obj: Struct<any>): pathOr_011;
    <T>(d: T, obj: Struct<any>): pathOr_111<T>;
    <$SEL extends "11">(): <T>(d: T, obj: Struct<any>) => pathOr_111<T>;
    <$SEL extends "1">(): <T>(d: T) => pathOr_110<T>;
    <$SEL extends "01">(): (_d: PH, obj: Struct<any>) => pathOr_011;
    <T>(d: T): pathOr_110<T>;
};
export type pathOr_110<T> = {
    (obj: Struct<any>): pathOr_111<T>;
};
export type pathOr_001 = {
    (_d: PH, p: Path): pathOr_011;
    <T>(d: T, p: Path): pathOr_111<T>;
    <$SEL extends "11">(): <T>(d: T, p: Path) => pathOr_111<T>;
    <$SEL extends "1">(): <T>(d: T) => pathOr_101<T>;
    <$SEL extends "01">(): (_d: PH, p: Path) => pathOr_011;
    <T>(d: T): pathOr_101<T>;
};
export type pathOr_101<T> = {
    (p: Path): pathOr_111<T>;
};
export type pathOr_011 = {
    <T>(d: T): pathOr_111<T>;
};
export type pathOr_111<T> = T | any;
/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
export declare const pathSatisfies: pathSatisfies_000;
export type pathSatisfies_000 = {
    <T>(fn: Pred<T>, _p: PH, obj: any): pathSatisfies_101<T>;
    (_fn: PH, p: Path, obj: any): pathSatisfies_011;
    (_fn: PH, _p: PH, obj: any): pathSatisfies_001;
    <T>(fn: Pred<T>, p: Path, obj: any): pathSatisfies_111<T>;
    (_fn: PH, p: Path): pathSatisfies_010;
    <T>(fn: Pred<T>, p: Path): pathSatisfies_110<T>;
    <$SEL extends "111">(): <T>(fn: Pred<T>, p: Path, obj: any) => pathSatisfies_111<T>;
    <$SEL extends "11">(): <T>(fn: Pred<T>, p: Path) => pathSatisfies_110<T>;
    <$SEL extends "101">(): <T>(fn: Pred<T>, _p: PH, obj: any) => pathSatisfies_101<T>;
    <$SEL extends "1">(): <T>(fn: Pred<T>) => pathSatisfies_100<T>;
    <$SEL extends "011">(): (_fn: PH, p: Path, obj: any) => pathSatisfies_011;
    <$SEL extends "01">(): (_fn: PH, p: Path) => pathSatisfies_010;
    <$SEL extends "001">(): (_fn: PH, _p: PH, obj: any) => pathSatisfies_001;
    <T>(fn: Pred<T>): pathSatisfies_100<T>;
};
export type pathSatisfies_100<T> = {
    (_p: PH, obj: any): pathSatisfies_101<T>;
    (p: Path, obj: any): pathSatisfies_111<T>;
    <$SEL extends "11">(): (p: Path, obj: any) => pathSatisfies_111<T>;
    <$SEL extends "1">(): (p: Path) => pathSatisfies_110<T>;
    <$SEL extends "01">(): (_p: PH, obj: any) => pathSatisfies_101<T>;
    (p: Path): pathSatisfies_110<T>;
};
export type pathSatisfies_010 = {
    (_fn: PH, obj: any): pathSatisfies_011;
    <T>(fn: Pred<T>, obj: any): pathSatisfies_111<T>;
    <$SEL extends "11">(): <T>(fn: Pred<T>, obj: any) => pathSatisfies_111<T>;
    <$SEL extends "1">(): <T>(fn: Pred<T>) => pathSatisfies_110<T>;
    <$SEL extends "01">(): (_fn: PH, obj: any) => pathSatisfies_011;
    <T>(fn: Pred<T>): pathSatisfies_110<T>;
};
export type pathSatisfies_110<T> = {
    (obj: any): pathSatisfies_111<T>;
};
export type pathSatisfies_001 = {
    (_fn: PH, p: Path): pathSatisfies_011;
    <T>(fn: Pred<T>, p: Path): pathSatisfies_111<T>;
    <$SEL extends "11">(): <T>(fn: Pred<T>, p: Path) => pathSatisfies_111<T>;
    <$SEL extends "1">(): <T>(fn: Pred<T>) => pathSatisfies_101<T>;
    <$SEL extends "01">(): (_fn: PH, p: Path) => pathSatisfies_011;
    <T>(fn: Pred<T>): pathSatisfies_101<T>;
};
export type pathSatisfies_101<T> = {
    (p: Path): pathSatisfies_111<T>;
};
export type pathSatisfies_011 = {
    <T>(fn: Pred<T>): pathSatisfies_111<T>;
};
export type pathSatisfies_111<T> = boolean;
/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
export declare const pick: pick_00;
export type pick_00 = {
    <T>(_names: PH, obj: T): pick_01<T>;
    <T, K extends keyof T>(names: List<K>, obj: T): pick_generic_1_11<T, K>;
    <T>(names: List<Prop>, obj: T): pick_generic_2_11<T>;
    <T, K extends keyof T>(names: List<K>): pick_generic_1_10<T, K>;
    <$SEL extends "11", $KIND extends "generic_1">(): <T, K extends keyof T>(names: List<K>, obj: T) => pick_generic_1_11<T, K>;
    <$SEL extends "1", $KIND extends "generic_1">(): <T, K extends keyof T>(names: List<K>) => pick_generic_1_10<T, K>;
    <$SEL extends "11", $KIND extends "generic_2">(): <T>(names: List<Prop>, obj: T) => pick_generic_2_11<T>;
    <$SEL extends "1", $KIND extends "generic_2">(): (names: List<Prop>) => pick_generic_2_10;
    <$SEL extends "01">(): <T>(_names: PH, obj: T) => pick_01<T>;
    (names: List<Prop>): pick_generic_2_10;
};
export type pick_01<T> = {
    <K extends keyof T>(names: List<K>): pick_generic_1_11<T, K>;
    <$SEL extends "1", $KIND extends "generic_1">(): <K extends keyof T>(names: List<K>) => pick_generic_1_11<T, K>;
    <$SEL extends "1", $KIND extends "generic_2">(): (names: List<Prop>) => pick_generic_2_11<T>;
    (names: List<Prop>): pick_generic_2_11<T>;
};
export type pick_generic_1_10<T, K extends keyof T> = {
    (obj: T): pick_generic_1_11<T, K>;
};
export type pick_generic_2_10 = {
    <T>(obj: T): pick_generic_2_11<T>;
};
export type pick_generic_1_11<T, K extends keyof T> = Pick<T, K>;
export type pick_generic_2_11<T> = Partial<T>;
/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
export declare const pickAll: pickAll_00;
export type pickAll_00 = {
    <T>(_names: PH, obj: T): pickAll_01<T>;
    <T, K>(names: List<K>, obj: T): pickAll_11<T, K>;
    <$SEL extends "11">(): <T, K>(names: List<K>, obj: T) => pickAll_11<T, K>;
    <$SEL extends "1">(): <K>(names: List<K>) => pickAll_10<K>;
    <$SEL extends "01">(): <T>(_names: PH, obj: T) => pickAll_01<T>;
    <K>(names: List<K>): pickAll_10<K>;
};
export type pickAll_10<K> = {
    <T>(obj: T): pickAll_11<T, K>;
};
export type pickAll_01<T> = {
    <K>(names: List<K>): pickAll_11<T, K>;
};
export type pickAll_11<T, K> = Partial<T>;
/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
export declare const pickBy: pickBy_00;
export type pickBy_00 = {
    <T>(_pred: PH, obj: T): pickBy_01<T>;
    <T>(pred: ObjPred<any>, obj: T): pickBy_11<T>;
    <$SEL extends "11">(): <T>(pred: ObjPred<any>, obj: T) => pickBy_11<T>;
    <$SEL extends "1">(): (pred: ObjPred<any>) => pickBy_10;
    <$SEL extends "01">(): <T>(_pred: PH, obj: T) => pickBy_01<T>;
    (pred: ObjPred<any>): pickBy_10;
};
export type pickBy_10 = {
    <T>(obj: T): pickBy_11<T>;
};
export type pickBy_01<T> = {
    (pred: ObjPred<any>): pickBy_11<T>;
};
export type pickBy_11<T> = Partial<T>;
/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
export declare function pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export declare function pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
export declare function pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;
export declare function pipe<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1): (x0: V0, x1: V1, x2: V2, x3: V3) => T1;
export declare function pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
export declare function pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
export declare function pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;
export declare function pipe<V0, V1, V2, V3, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2, x3: V3) => T2;
export declare function pipe<V0, T1, T2, T3>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0) => T3;
export declare function pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
export declare function pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;
export declare function pipe<V0, V1, V2, V3, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2, x3: V3) => T3;
export declare function pipe<V0, T1, T2, T3, T4>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0) => T4;
export declare function pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
export declare function pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;
export declare function pipe<V0, V1, V2, V3, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2, x3: V3) => T4;
export declare function pipe<V0, T1, T2, T3, T4, T5>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0) => T5;
export declare function pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
export declare function pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;
export declare function pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2, x3: V3) => T5;
export declare function pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0) => T6;
export declare function pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
export declare function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;
export declare function pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2, x3: V3) => T6;
export declare function pipe<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0) => T7;
export declare function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
export declare function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;
export declare function pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2, x3: V3) => T7;
export declare function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0) => T8;
export declare function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
export declare function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;
export declare function pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2, x3: V3) => T8;
export declare function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0) => T9;
export declare function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
export declare function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;
export declare function pipe<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2, x3: V3) => T9;
/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
export declare function pipeK<V, T1>(fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T1>;
export declare function pipeK<V, T1, T2>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>): (v: V) => Chain<T2>;
export declare function pipeK<V, T1, T2, T3>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>): (v: V) => Chain<T3>;
export declare function pipeK<V, T1, T2, T3, T4>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>): (v: V) => Chain<T4>;
export declare function pipeK<V, T1, T2, T3, T4, T5>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>): (v: V) => Chain<T5>;
export declare function pipeK<V, T1, T2, T3, T4, T5, T6>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>): (v: V) => Chain<T6>;
export declare function pipeK<V, T1, T2, T3, T4, T5, T6, T7>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>): (v: V) => Chain<T7>;
export declare function pipeK<V, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>, fn7: (x: T7) => Chain<T8>): (v: V) => Chain<T8>;
export declare function pipeK<V, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (v: Chain<V>) => Chain<T1>, fn1: (x: T1) => Chain<T2>, fn2: (x: T2) => Chain<T3>, fn3: (x: T3) => Chain<T4>, fn4: (x: T4) => Chain<T5>, fn5: (x: T5) => Chain<T6>, fn6: (x: T6) => Chain<T7>, fn7: (x: T7) => Chain<T8>, fn8: (x: T8) => Chain<T9>): (v: V) => Chain<T9>;
/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
export declare function pipeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
export declare function pipeP<V0, V1, T1>(fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;
export declare function pipeP<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;
export declare function pipeP<V0, V1, V2, V3, T1>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>;
export declare function pipeP<V0, T1, T2>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2): (x0: V0) => Promise<T2>;
export declare function pipeP<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2): (x0: V0, x1: V1) => Promise<T2>;
export declare function pipeP<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2): (x0: V0, x1: V1, x2: V2) => Promise<T2>;
export declare function pipeP<V0, V1, V2, V3, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T2>;
export declare function pipeP<V0, T1, T2, T3>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3): (x0: V0) => Promise<T3>;
export declare function pipeP<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3): (x0: V0, x1: V1) => Promise<T3>;
export declare function pipeP<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3): (x0: V0, x1: V1, x2: V2) => Promise<T3>;
export declare function pipeP<V0, V1, V2, V3, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T3>;
export declare function pipeP<V0, T1, T2, T3, T4>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4): (x0: V0) => Promise<T4>;
export declare function pipeP<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4): (x0: V0, x1: V1) => Promise<T4>;
export declare function pipeP<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4): (x0: V0, x1: V1, x2: V2) => Promise<T4>;
export declare function pipeP<V0, V1, V2, V3, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T4>;
export declare function pipeP<V0, T1, T2, T3, T4, T5>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5): (x0: V0) => Promise<T5>;
export declare function pipeP<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5): (x0: V0, x1: V1) => Promise<T5>;
export declare function pipeP<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5): (x0: V0, x1: V1, x2: V2) => Promise<T5>;
export declare function pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T5>;
export declare function pipeP<V0, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6): (x0: V0) => Promise<T6>;
export declare function pipeP<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6): (x0: V0, x1: V1) => Promise<T6>;
export declare function pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6): (x0: V0, x1: V1, x2: V2) => Promise<T6>;
export declare function pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T6>;
export declare function pipeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7): (x0: V0) => Promise<T7>;
export declare function pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7): (x0: V0, x1: V1) => Promise<T7>;
export declare function pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7): (x0: V0, x1: V1, x2: V2) => Promise<T7>;
export declare function pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T7>;
export declare function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8): (x0: V0) => Promise<T8>;
export declare function pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8): (x0: V0, x1: V1) => Promise<T8>;
export declare function pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8): (x0: V0, x1: V1, x2: V2) => Promise<T8>;
export declare function pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T8>;
export declare function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8, fn8: (x: T8) => Promise<T9> | T9): (x0: V0) => Promise<T9>;
export declare function pipeP<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8, fn8: (x: T8) => Promise<T9> | T9): (x0: V0, x1: V1) => Promise<T9>;
export declare function pipeP<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8, fn8: (x: T8) => Promise<T9> | T9): (x0: V0, x1: V1, x2: V2) => Promise<T9>;
export declare function pipeP<V0, V1, V2, V3, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T1>, fn1: (x: T1) => Promise<T2> | T2, fn2: (x: T2) => Promise<T3> | T3, fn3: (x: T3) => Promise<T4> | T4, fn4: (x: T4) => Promise<T5> | T5, fn5: (x: T5) => Promise<T6> | T6, fn6: (x: T6) => Promise<T7> | T7, fn7: (x: T7) => Promise<T8> | T8, fn8: (x: T8) => Promise<T9> | T9): (x0: V0, x1: V1, x2: V2, x3: V3) => Promise<T9>;
/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig k -> [{k: v}] -> [v]
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} list The array to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
export declare const pluck: pluck_00;
export type pluck_00 = {
    <T extends Struct<any>>(_p: PH, list: List<T>): pluck_infer_01<T>;
    (_p: PH, list: Struct<any>[]): pluck_supply_return_object_type_manually_when_unable_to_infer_it____01;
    <T extends Struct<any>, K extends keyof T>(p: K, list: List<T>): pluck_infer_11<T, K>;
    <T>(p: Prop, list: Struct<any>[]): pluck_supply_return_object_type_manually_when_unable_to_infer_it____11<T>;
    <T extends Struct<any>, K extends keyof T>(p: K): pluck_infer_10<T, K>;
    <$SEL extends "11", $KIND extends "infer">(): <T extends Struct<any>, K extends keyof T>(p: K, list: List<T>) => pluck_infer_11<T, K>;
    <$SEL extends "1", $KIND extends "infer">(): <T extends Struct<any>, K extends keyof T>(p: K) => pluck_infer_10<T, K>;
    <$SEL extends "01", $KIND extends "infer">(): <T extends Struct<any>>(_p: PH, list: List<T>) => pluck_infer_01<T>;
    <$SEL extends "11", $KIND extends "supply_return_object_type_manually_when_unable_to_infer_it___">(): <T>(p: Prop, list: Struct<any>[]) => pluck_supply_return_object_type_manually_when_unable_to_infer_it____11<T>;
    <$SEL extends "1", $KIND extends "supply_return_object_type_manually_when_unable_to_infer_it___">(): (p: Prop) => pluck_supply_return_object_type_manually_when_unable_to_infer_it____10;
    <$SEL extends "01", $KIND extends "supply_return_object_type_manually_when_unable_to_infer_it___">(): (_p: PH, list: Struct<any>[]) => pluck_supply_return_object_type_manually_when_unable_to_infer_it____01;
    (p: Prop): pluck_supply_return_object_type_manually_when_unable_to_infer_it____10;
};
export type pluck_infer_10<T extends Struct<any>, K extends keyof T> = {
    (list: List<T>): pluck_infer_11<T, K>;
};
export type pluck_supply_return_object_type_manually_when_unable_to_infer_it____10 = {
    <T>(list: Struct<any>[]): pluck_supply_return_object_type_manually_when_unable_to_infer_it____11<T>;
};
export type pluck_infer_01<T extends Struct<any>> = {
    <K extends keyof T>(p: K): pluck_infer_11<T, K>;
};
export type pluck_supply_return_object_type_manually_when_unable_to_infer_it____01 = {
    <T>(p: Prop): pluck_supply_return_object_type_manually_when_unable_to_infer_it____11<T>;
};
export type pluck_infer_11<T extends Struct<any>, K extends keyof T> = T[K][];
export type pluck_supply_return_object_type_manually_when_unable_to_infer_it____11<T> = T[];
/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
export declare const prepend: prepend_00;
export type prepend_00 = {
    <T>(_el: PH, list: List<T>): prepend_01<T>;
    <T>(el: T, list: List<T>): prepend_11<T>;
    <$SEL extends "11">(): <T>(el: T, list: List<T>) => prepend_11<T>;
    <$SEL extends "1">(): <T>(el: T) => prepend_10<T>;
    <$SEL extends "01">(): <T>(_el: PH, list: List<T>) => prepend_01<T>;
    <T>(el: T): prepend_10<T>;
};
export type prepend_10<T> = {
    (list: List<T>): prepend_11<T>;
};
export type prepend_01<T> = {
    (el: T): prepend_11<T>;
};
export type prepend_11<T> = T[];
/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
export declare const product: product_0;
export type product_0 = {
    (list: List<number>): product_1;
};
export type product_1 = number;
/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
export declare const project: project_00;
export type project_00 = {
    <T>(_props: PH, objs: List<T>): project_01<T>;
    <T, K extends keyof T>(props: List<K>, objs: List<T>): project_infer_11<T, K>;
    <T, U>(props: List<Prop>, objs: List<T>): project_supply_return_object_type_manually_when_unable_to_infer_it____11<T, U>;
    <T, K extends keyof T>(props: List<K>): project_infer_10<T, K>;
    <$SEL extends "11", $KIND extends "infer">(): <T, K extends keyof T>(props: List<K>, objs: List<T>) => project_infer_11<T, K>;
    <$SEL extends "1", $KIND extends "infer">(): <T, K extends keyof T>(props: List<K>) => project_infer_10<T, K>;
    <$SEL extends "11", $KIND extends "supply_return_object_type_manually_when_unable_to_infer_it___">(): <T, U>(props: List<Prop>, objs: List<T>) => project_supply_return_object_type_manually_when_unable_to_infer_it____11<T, U>;
    <$SEL extends "1", $KIND extends "supply_return_object_type_manually_when_unable_to_infer_it___">(): (props: List<Prop>) => project_supply_return_object_type_manually_when_unable_to_infer_it____10;
    <$SEL extends "01">(): <T>(_props: PH, objs: List<T>) => project_01<T>;
    (props: List<Prop>): project_supply_return_object_type_manually_when_unable_to_infer_it____10;
};
export type project_01<T> = {
    <K extends keyof T>(props: List<K>): project_infer_11<T, K>;
    <$SEL extends "1", $KIND extends "infer">(): <K extends keyof T>(props: List<K>) => project_infer_11<T, K>;
    <$SEL extends "1", $KIND extends "supply_return_object_type_manually_when_unable_to_infer_it___">(): <U>(props: List<Prop>) => project_supply_return_object_type_manually_when_unable_to_infer_it____11<T, U>;
    <U>(props: List<Prop>): project_supply_return_object_type_manually_when_unable_to_infer_it____11<T, U>;
};
export type project_infer_10<T, K extends keyof T> = {
    (objs: List<T>): project_infer_11<T, K>;
};
export type project_supply_return_object_type_manually_when_unable_to_infer_it____10 = {
    <T, U>(objs: List<T>): project_supply_return_object_type_manually_when_unable_to_infer_it____11<T, U>;
};
export type project_infer_11<T, K extends keyof T> = Pick<T, K>[];
export type project_supply_return_object_type_manually_when_unable_to_infer_it____11<T, U> = U[];
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
export declare const prop: prop_00;
export type prop_00 = {
    <J>(_p: PH, obj: J): prop_keyof_version_01<J>;
    <N extends string, V, T extends Record<N, V>>(_p: PH, obj: T): prop_Record_version__more_curry_friendly_01<N, V, T>;
    <J, K extends keyof J>(p: K, obj: J): prop_keyof_version_11<J, K>;
    <N extends string, V, T extends Record<N, V>>(p: N, obj: T): prop_Record_version__more_curry_friendly_11<N, V, T>;
    <J, K extends keyof J>(p: K): prop_keyof_version_10<J, K>;
    <$SEL extends "11", $KIND extends "keyof_version">(): <J, K extends keyof J>(p: K, obj: J) => prop_keyof_version_11<J, K>;
    <$SEL extends "1", $KIND extends "keyof_version">(): <J, K extends keyof J>(p: K) => prop_keyof_version_10<J, K>;
    <$SEL extends "01", $KIND extends "keyof_version">(): <J>(_p: PH, obj: J) => prop_keyof_version_01<J>;
    <$SEL extends "11", $KIND extends "Record_version__more_curry_friendly">(): <N extends string, V, T extends Record<N, V>>(p: N, obj: T) => prop_Record_version__more_curry_friendly_11<N, V, T>;
    <$SEL extends "1", $KIND extends "Record_version__more_curry_friendly">(): <N extends string>(p: N) => prop_Record_version__more_curry_friendly_10<N>;
    <$SEL extends "01", $KIND extends "Record_version__more_curry_friendly">(): <N extends string, V, T extends Record<N, V>>(_p: PH, obj: T) => prop_Record_version__more_curry_friendly_01<N, V, T>;
    <N extends string>(p: N): prop_Record_version__more_curry_friendly_10<N>;
};
export type prop_keyof_version_10<J, K extends keyof J> = {
    (obj: J): prop_keyof_version_11<J, K>;
};
export type prop_Record_version__more_curry_friendly_10<N extends string> = {
    <V, T extends Record<N, V>>(obj: T): prop_Record_version__more_curry_friendly_11<N, V, T>;
};
export type prop_keyof_version_01<J> = {
    <K extends keyof J>(p: K): prop_keyof_version_11<J, K>;
};
export type prop_Record_version__more_curry_friendly_01<N extends string, V, T extends Record<N, V>> = {
    (p: N): prop_Record_version__more_curry_friendly_11<N, V, T>;
};
export type prop_keyof_version_11<J, K extends keyof J> = J[K];
export type prop_Record_version__more_curry_friendly_11<N extends string, V, T extends Record<N, V>> = V;
/**
 * Returns `true` if the specified object property is equal, in `R.equals`
 * terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
export declare const propEq: propEq_000;
export type propEq_000 = {
    <T extends Struct<any>>(name: Prop, _val: PH, obj: T): propEq_101<T>;
    <T extends Struct<any>>(_name: PH, val: any, obj: T): propEq_011<T>;
    <T extends Struct<any>>(_name: PH, _val: PH, obj: T): propEq_001<T>;
    <T extends Struct<any>>(name: Prop, val: any, obj: T): propEq_111<T>;
    (_name: PH, val: any): propEq_010;
    (name: Prop, val: any): propEq_110;
    <$SEL extends "111">(): <T extends Struct<any>>(name: Prop, val: any, obj: T) => propEq_111<T>;
    <$SEL extends "11">(): (name: Prop, val: any) => propEq_110;
    <$SEL extends "101">(): <T extends Struct<any>>(name: Prop, _val: PH, obj: T) => propEq_101<T>;
    <$SEL extends "1">(): (name: Prop) => propEq_100;
    <$SEL extends "011">(): <T extends Struct<any>>(_name: PH, val: any, obj: T) => propEq_011<T>;
    <$SEL extends "01">(): (_name: PH, val: any) => propEq_010;
    <$SEL extends "001">(): <T extends Struct<any>>(_name: PH, _val: PH, obj: T) => propEq_001<T>;
    (name: Prop): propEq_100;
};
export type propEq_100 = {
    <T extends Struct<any>>(_val: PH, obj: T): propEq_101<T>;
    <T extends Struct<any>>(val: any, obj: T): propEq_111<T>;
    <$SEL extends "11">(): <T extends Struct<any>>(val: any, obj: T) => propEq_111<T>;
    <$SEL extends "1">(): (val: any) => propEq_110;
    <$SEL extends "01">(): <T extends Struct<any>>(_val: PH, obj: T) => propEq_101<T>;
    (val: any): propEq_110;
};
export type propEq_010 = {
    <T extends Struct<any>>(_name: PH, obj: T): propEq_011<T>;
    <T extends Struct<any>>(name: Prop, obj: T): propEq_111<T>;
    <$SEL extends "11">(): <T extends Struct<any>>(name: Prop, obj: T) => propEq_111<T>;
    <$SEL extends "1">(): (name: Prop) => propEq_110;
    <$SEL extends "01">(): <T extends Struct<any>>(_name: PH, obj: T) => propEq_011<T>;
    (name: Prop): propEq_110;
};
export type propEq_110 = {
    <T extends Struct<any>>(obj: T): propEq_111<T>;
};
export type propEq_001<T extends Struct<any>> = {
    (_name: PH, val: any): propEq_011<T>;
    (name: Prop, val: any): propEq_111<T>;
    <$SEL extends "11">(): (name: Prop, val: any) => propEq_111<T>;
    <$SEL extends "1">(): (name: Prop) => propEq_101<T>;
    <$SEL extends "01">(): (_name: PH, val: any) => propEq_011<T>;
    (name: Prop): propEq_101<T>;
};
export type propEq_101<T extends Struct<any>> = {
    (val: any): propEq_111<T>;
};
export type propEq_011<T extends Struct<any>> = {
    (name: Prop): propEq_111<T>;
};
export type propEq_111<T extends Struct<any>> = boolean;
/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
export declare const propIs: propIs_000;
export type propIs_000 = {
    <T extends Function, K extends string, V, U extends Record<K, V>>(type: T, _name: PH, obj: U): propIs_Record_101<T, K, V, U>;
    (type: Function, _name: PH, obj: Struct<any>): propIs_curry_friendlier_fallback_101;
    (_type: PH, _name: PH, obj: Struct<any>): propIs_curry_friendlier_fallback_001;
    (_type: PH, name: Prop, obj: Struct<any>): propIs_curry_friendlier_fallback_011;
    <K extends string, V, U extends Record<K, V>>(_type: PH, name: K, obj: U): propIs_Record_011<K, V, U>;
    <K extends string, V, U extends Record<K, V>>(_type: PH, _name: PH, obj: U): propIs_Record_001<K, V, U>;
    <T extends Function, K extends string, V, U extends Record<K, V>>(type: T, name: K, obj: U): obj is U & Record<K, V>;
    (type: Function, name: Prop, obj: Struct<any>): propIs_curry_friendlier_fallback_111;
    <K extends string>(_type: PH, name: K): propIs_Record_010<K>;
    (_type: PH, name: Prop): propIs_curry_friendlier_fallback_010;
    <T extends Function, K extends string>(type: T, name: K): propIs_Record_110<T, K>;
    (type: Function, name: Prop): propIs_curry_friendlier_fallback_110;
    (type: Function): propIs_curry_friendlier_fallback_100;
    <$SEL extends "111", $KIND extends "Record">(): <T extends Function, K extends string, V, U extends Record<K, V>>(type: T, name: K, obj: U) => obj is U & Record<K, V>;
    <$SEL extends "11", $KIND extends "Record">(): <T extends Function, K extends string>(type: T, name: K) => propIs_Record_110<T, K>;
    <$SEL extends "101", $KIND extends "Record">(): <T extends Function, K extends string, V, U extends Record<K, V>>(type: T, _name: PH, obj: U) => propIs_Record_101<T, K, V, U>;
    <$SEL extends "1", $KIND extends "Record">(): <T extends Function>(type: T) => propIs_Record_100<T>;
    <$SEL extends "011", $KIND extends "Record">(): <K extends string, V, U extends Record<K, V>>(_type: PH, name: K, obj: U) => propIs_Record_011<K, V, U>;
    <$SEL extends "01", $KIND extends "Record">(): <K extends string>(_type: PH, name: K) => propIs_Record_010<K>;
    <$SEL extends "001", $KIND extends "Record">(): <K extends string, V, U extends Record<K, V>>(_type: PH, _name: PH, obj: U) => propIs_Record_001<K, V, U>;
    <$SEL extends "111", $KIND extends "curry_friendlier_fallback">(): (type: Function, name: Prop, obj: Struct<any>) => propIs_curry_friendlier_fallback_111;
    <$SEL extends "11", $KIND extends "curry_friendlier_fallback">(): (type: Function, name: Prop) => propIs_curry_friendlier_fallback_110;
    <$SEL extends "101", $KIND extends "curry_friendlier_fallback">(): (type: Function, _name: PH, obj: Struct<any>) => propIs_curry_friendlier_fallback_101;
    <$SEL extends "1", $KIND extends "curry_friendlier_fallback">(): (type: Function) => propIs_curry_friendlier_fallback_100;
    <$SEL extends "011", $KIND extends "curry_friendlier_fallback">(): (_type: PH, name: Prop, obj: Struct<any>) => propIs_curry_friendlier_fallback_011;
    <$SEL extends "01", $KIND extends "curry_friendlier_fallback">(): (_type: PH, name: Prop) => propIs_curry_friendlier_fallback_010;
    <$SEL extends "001", $KIND extends "curry_friendlier_fallback">(): (_type: PH, _name: PH, obj: Struct<any>) => propIs_curry_friendlier_fallback_001;
    <T extends Function>(type: T): propIs_Record_100<T>;
};
export type propIs_Record_100<T extends Function> = {
    <K extends string, V, U extends Record<K, V>>(_name: PH, obj: U): propIs_Record_101<T, K, V, U>;
    <K extends string, V, U extends Record<K, V>>(name: K, obj: U): obj is U & Record<K, V>;
    <$SEL extends "11">(): <K extends string, V, U extends Record<K, V>>(name: K, obj: U) => obj is U & Record<K, V>;
    <$SEL extends "1">(): <K extends string>(name: K) => propIs_Record_110<T, K>;
    <$SEL extends "01">(): <K extends string, V, U extends Record<K, V>>(_name: PH, obj: U) => propIs_Record_101<T, K, V, U>;
    <K extends string>(name: K): propIs_Record_110<T, K>;
};
export type propIs_curry_friendlier_fallback_100 = {
    (_name: PH, obj: Struct<any>): propIs_curry_friendlier_fallback_101;
    (name: Prop, obj: Struct<any>): propIs_curry_friendlier_fallback_111;
    <$SEL extends "11">(): (name: Prop, obj: Struct<any>) => propIs_curry_friendlier_fallback_111;
    <$SEL extends "1">(): (name: Prop) => propIs_curry_friendlier_fallback_110;
    <$SEL extends "01">(): (_name: PH, obj: Struct<any>) => propIs_curry_friendlier_fallback_101;
    (name: Prop): propIs_curry_friendlier_fallback_110;
};
export type propIs_Record_010<K extends string> = {
    <V, U extends Record<K, V>>(_type: PH, obj: U): propIs_Record_011<K, V, U>;
    <T extends Function, V, U extends Record<K, V>>(type: T, obj: U): obj is U & Record<K, V>;
    <$SEL extends "11">(): <T extends Function, V, U extends Record<K, V>>(type: T, obj: U) => obj is U & Record<K, V>;
    <$SEL extends "1">(): <T extends Function>(type: T) => propIs_Record_110<T, K>;
    <$SEL extends "01">(): <V, U extends Record<K, V>>(_type: PH, obj: U) => propIs_Record_011<K, V, U>;
    <T extends Function>(type: T): propIs_Record_110<T, K>;
};
export type propIs_curry_friendlier_fallback_010 = {
    (_type: PH, obj: Struct<any>): propIs_curry_friendlier_fallback_011;
    (type: Function, obj: Struct<any>): propIs_curry_friendlier_fallback_111;
    <$SEL extends "11">(): (type: Function, obj: Struct<any>) => propIs_curry_friendlier_fallback_111;
    <$SEL extends "1">(): (type: Function) => propIs_curry_friendlier_fallback_110;
    <$SEL extends "01">(): (_type: PH, obj: Struct<any>) => propIs_curry_friendlier_fallback_011;
    (type: Function): propIs_curry_friendlier_fallback_110;
};
export type propIs_Record_110<T extends Function, K extends string> = {
    <V, U extends Record<K, V>>(obj: U): obj is U & Record<K, V>;
};
export type propIs_curry_friendlier_fallback_110 = {
    (obj: Struct<any>): propIs_curry_friendlier_fallback_111;
};
export type propIs_Record_001<K extends string, V, U extends Record<K, V>> = {
    (_type: PH, name: K): propIs_Record_011<K, V, U>;
    <T extends Function>(type: T, name: K): propIs_Record_111<T, K, V, U>;
    <$SEL extends "11">(): <T extends Function>(type: T, name: K) => propIs_Record_111<T, K, V, U>;
    <$SEL extends "1">(): <T extends Function>(type: T) => propIs_Record_101<T, K, V, U>;
    <$SEL extends "01">(): (_type: PH, name: K) => propIs_Record_011<K, V, U>;
    <T extends Function>(type: T): propIs_Record_101<T, K, V, U>;
};
export type propIs_curry_friendlier_fallback_001 = {
    (_type: PH, name: Prop): propIs_curry_friendlier_fallback_011;
    (type: Function, name: Prop): propIs_curry_friendlier_fallback_111;
    <$SEL extends "11">(): (type: Function, name: Prop) => propIs_curry_friendlier_fallback_111;
    <$SEL extends "1">(): (type: Function) => propIs_curry_friendlier_fallback_101;
    <$SEL extends "01">(): (_type: PH, name: Prop) => propIs_curry_friendlier_fallback_011;
    (type: Function): propIs_curry_friendlier_fallback_101;
};
export type propIs_Record_101<T extends Function, K extends string, V, U extends Record<K, V>> = {
    (name: K): propIs_Record_111<T, K, V, U>;
};
export type propIs_curry_friendlier_fallback_101 = {
    (name: Prop): propIs_curry_friendlier_fallback_111;
};
export type propIs_Record_011<K extends string, V, U extends Record<K, V>> = {
    <T extends Function>(type: T): propIs_Record_111<T, K, V, U>;
};
export type propIs_curry_friendlier_fallback_011 = {
    (type: Function): propIs_curry_friendlier_fallback_111;
};
export type propIs_Record_111<T extends Function, K extends string, V, U extends Record<K, V>> = boolean;
export type propIs_curry_friendlier_fallback_111 = boolean;
/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
export declare const propOr: propOr_0;
export type propOr_0 = {
    <T>(val: T): propOr_1<T>;
};
export type propOr_1<T> = [object, Object];
/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
export declare const props: props_00;
export type props_00 = {
    <T>(_ps: PH, obj: Struct<T>): props_01<T>;
    <T>(ps: List<Prop>, obj: Struct<T>): props_11<T>;
    <$SEL extends "11">(): <T>(ps: List<Prop>, obj: Struct<T>) => props_11<T>;
    <$SEL extends "1">(): (ps: List<Prop>) => props_10;
    <$SEL extends "01">(): <T>(_ps: PH, obj: Struct<T>) => props_01<T>;
    (ps: List<Prop>): props_10;
};
export type props_10 = {
    <T>(obj: Struct<T>): props_11<T>;
};
export type props_01<T> = {
    (ps: List<Prop>): props_11<T>;
};
export type props_11<T> = T[];
/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
export declare const propSatisfies: propSatisfies_000;
export type propSatisfies_000 = {
    <V, K extends string, U extends Record<K, V>>(pred: Pred<V>, _name: PH, obj: U): propSatisfies_Record_101<V, K, U>;
    <T, J>(pred: Pred<T>, _name: PH, obj: J): propSatisfies_keyof__info_too_late_on_currying_101<T, J>;
    <J>(_pred: PH, _name: PH, obj: J): propSatisfies_keyof__info_too_late_on_currying_001<J>;
    <J>(_pred: PH, name: Prop, obj: J): propSatisfies_keyof__info_too_late_on_currying_011<J>;
    <V, K extends string, U extends Record<K, V>>(_pred: PH, name: K, obj: U): propSatisfies_Record_011<V, K, U>;
    <V, K extends string, U extends Record<K, V>>(_pred: PH, _name: PH, obj: U): propSatisfies_Record_001<V, K, U>;
    <V, K extends string, U extends Record<K, V>>(pred: Pred<V>, name: K, obj: U): propSatisfies_Record_111<V, K, U>;
    <T, J>(pred: Pred<T>, name: Prop, obj: J): propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <K extends string>(_pred: PH, name: K): propSatisfies_Record_010<K>;
    (_pred: PH, name: Prop): propSatisfies_keyof__info_too_late_on_currying_010;
    <V, K extends string>(pred: Pred<V>, name: K): propSatisfies_Record_110<V, K>;
    <T>(pred: Pred<T>, name: Prop): propSatisfies_keyof__info_too_late_on_currying_110<T>;
    <T>(pred: Pred<T>): propSatisfies_keyof__info_too_late_on_currying_100<T>;
    <$SEL extends "111", $KIND extends "Record">(): <V, K extends string, U extends Record<K, V>>(pred: Pred<V>, name: K, obj: U) => propSatisfies_Record_111<V, K, U>;
    <$SEL extends "11", $KIND extends "Record">(): <V, K extends string>(pred: Pred<V>, name: K) => propSatisfies_Record_110<V, K>;
    <$SEL extends "101", $KIND extends "Record">(): <V, K extends string, U extends Record<K, V>>(pred: Pred<V>, _name: PH, obj: U) => propSatisfies_Record_101<V, K, U>;
    <$SEL extends "1", $KIND extends "Record">(): <V>(pred: Pred<V>) => propSatisfies_Record_100<V>;
    <$SEL extends "011", $KIND extends "Record">(): <V, K extends string, U extends Record<K, V>>(_pred: PH, name: K, obj: U) => propSatisfies_Record_011<V, K, U>;
    <$SEL extends "01", $KIND extends "Record">(): <K extends string>(_pred: PH, name: K) => propSatisfies_Record_010<K>;
    <$SEL extends "001", $KIND extends "Record">(): <V, K extends string, U extends Record<K, V>>(_pred: PH, _name: PH, obj: U) => propSatisfies_Record_001<V, K, U>;
    <$SEL extends "111", $KIND extends "keyof__info_too_late_on_currying">(): <T, J>(pred: Pred<T>, name: Prop, obj: J) => propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <$SEL extends "11", $KIND extends "keyof__info_too_late_on_currying">(): <T>(pred: Pred<T>, name: Prop) => propSatisfies_keyof__info_too_late_on_currying_110<T>;
    <$SEL extends "101", $KIND extends "keyof__info_too_late_on_currying">(): <T, J>(pred: Pred<T>, _name: PH, obj: J) => propSatisfies_keyof__info_too_late_on_currying_101<T, J>;
    <$SEL extends "1", $KIND extends "keyof__info_too_late_on_currying">(): <T>(pred: Pred<T>) => propSatisfies_keyof__info_too_late_on_currying_100<T>;
    <$SEL extends "011", $KIND extends "keyof__info_too_late_on_currying">(): <J>(_pred: PH, name: Prop, obj: J) => propSatisfies_keyof__info_too_late_on_currying_011<J>;
    <$SEL extends "01", $KIND extends "keyof__info_too_late_on_currying">(): (_pred: PH, name: Prop) => propSatisfies_keyof__info_too_late_on_currying_010;
    <$SEL extends "001", $KIND extends "keyof__info_too_late_on_currying">(): <J>(_pred: PH, _name: PH, obj: J) => propSatisfies_keyof__info_too_late_on_currying_001<J>;
    <V>(pred: Pred<V>): propSatisfies_Record_100<V>;
};
export type propSatisfies_Record_100<V> = {
    <K extends string, U extends Record<K, V>>(_name: PH, obj: U): propSatisfies_Record_101<V, K, U>;
    <K extends string, U extends Record<K, V>>(name: K, obj: U): propSatisfies_Record_111<V, K, U>;
    <$SEL extends "11">(): <K extends string, U extends Record<K, V>>(name: K, obj: U) => propSatisfies_Record_111<V, K, U>;
    <$SEL extends "1">(): <K extends string>(name: K) => propSatisfies_Record_110<V, K>;
    <$SEL extends "01">(): <K extends string, U extends Record<K, V>>(_name: PH, obj: U) => propSatisfies_Record_101<V, K, U>;
    <K extends string>(name: K): propSatisfies_Record_110<V, K>;
};
export type propSatisfies_keyof__info_too_late_on_currying_100<T> = {
    <J>(_name: PH, obj: J): propSatisfies_keyof__info_too_late_on_currying_101<T, J>;
    <J>(name: Prop, obj: J): propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <$SEL extends "11">(): <J>(name: Prop, obj: J) => propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <$SEL extends "1">(): (name: Prop) => propSatisfies_keyof__info_too_late_on_currying_110<T>;
    <$SEL extends "01">(): <J>(_name: PH, obj: J) => propSatisfies_keyof__info_too_late_on_currying_101<T, J>;
    (name: Prop): propSatisfies_keyof__info_too_late_on_currying_110<T>;
};
export type propSatisfies_Record_010<K extends string> = {
    <V, U extends Record<K, V>>(_pred: PH, obj: U): propSatisfies_Record_011<V, K, U>;
    <V, U extends Record<K, V>>(pred: Pred<V>, obj: U): propSatisfies_Record_111<V, K, U>;
    <$SEL extends "11">(): <V, U extends Record<K, V>>(pred: Pred<V>, obj: U) => propSatisfies_Record_111<V, K, U>;
    <$SEL extends "1">(): <V>(pred: Pred<V>) => propSatisfies_Record_110<V, K>;
    <$SEL extends "01">(): <V, U extends Record<K, V>>(_pred: PH, obj: U) => propSatisfies_Record_011<V, K, U>;
    <V>(pred: Pred<V>): propSatisfies_Record_110<V, K>;
};
export type propSatisfies_keyof__info_too_late_on_currying_010 = {
    <J>(_pred: PH, obj: J): propSatisfies_keyof__info_too_late_on_currying_011<J>;
    <T, J>(pred: Pred<T>, obj: J): propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <$SEL extends "11">(): <T, J>(pred: Pred<T>, obj: J) => propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => propSatisfies_keyof__info_too_late_on_currying_110<T>;
    <$SEL extends "01">(): <J>(_pred: PH, obj: J) => propSatisfies_keyof__info_too_late_on_currying_011<J>;
    <T>(pred: Pred<T>): propSatisfies_keyof__info_too_late_on_currying_110<T>;
};
export type propSatisfies_Record_110<V, K extends string> = {
    <U extends Record<K, V>>(obj: U): propSatisfies_Record_111<V, K, U>;
};
export type propSatisfies_keyof__info_too_late_on_currying_110<T> = {
    <J>(obj: J): propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
};
export type propSatisfies_Record_001<V, K extends string, U extends Record<K, V>> = {
    (_pred: PH, name: K): propSatisfies_Record_011<V, K, U>;
    (pred: Pred<V>, name: K): propSatisfies_Record_111<V, K, U>;
    <$SEL extends "11">(): (pred: Pred<V>, name: K) => propSatisfies_Record_111<V, K, U>;
    <$SEL extends "1">(): (pred: Pred<V>) => propSatisfies_Record_101<V, K, U>;
    <$SEL extends "01">(): (_pred: PH, name: K) => propSatisfies_Record_011<V, K, U>;
    (pred: Pred<V>): propSatisfies_Record_101<V, K, U>;
};
export type propSatisfies_keyof__info_too_late_on_currying_001<J> = {
    (_pred: PH, name: Prop): propSatisfies_keyof__info_too_late_on_currying_011<J>;
    <T>(pred: Pred<T>, name: Prop): propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <$SEL extends "11">(): <T>(pred: Pred<T>, name: Prop) => propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => propSatisfies_keyof__info_too_late_on_currying_101<T, J>;
    <$SEL extends "01">(): (_pred: PH, name: Prop) => propSatisfies_keyof__info_too_late_on_currying_011<J>;
    <T>(pred: Pred<T>): propSatisfies_keyof__info_too_late_on_currying_101<T, J>;
};
export type propSatisfies_Record_101<V, K extends string, U extends Record<K, V>> = {
    (name: K): propSatisfies_Record_111<V, K, U>;
};
export type propSatisfies_keyof__info_too_late_on_currying_101<T, J> = {
    (name: Prop): propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
};
export type propSatisfies_Record_011<V, K extends string, U extends Record<K, V>> = {
    (pred: Pred<V>): propSatisfies_Record_111<V, K, U>;
};
export type propSatisfies_keyof__info_too_late_on_currying_011<J> = {
    <T>(pred: Pred<T>): propSatisfies_keyof__info_too_late_on_currying_111<T, J>;
};
export type propSatisfies_Record_111<V, K extends string, U extends Record<K, V>> = boolean;
export type propSatisfies_keyof__info_too_late_on_currying_111<T, J> = boolean;
/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
export declare const range: range_00;
export type range_00 = {
    (_from: PH, to: number): range_01;
    (from: number, to: number): range_11;
    <$SEL extends "11">(): (from: number, to: number) => range_11;
    <$SEL extends "1">(): (from: number) => range_10;
    <$SEL extends "01">(): (_from: PH, to: number) => range_01;
    (from: number): range_10;
};
export type range_10 = {
    (to: number): range_11;
};
export type range_01 = {
    (from: number): range_11;
};
export type range_11 = number[];
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * `R.reduced` to shortcut the iteration.
 *
 * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
export declare const reduce: reduce_000;
export type reduce_000 = {
    <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, _acc: PH, list: R): reduce_101<T, TResult, R>;
    <T, TResult, R extends List<T>>(_fn: PH, acc: TResult, list: R): reduce_011<T, TResult, R>;
    <T, R extends List<T>>(_fn: PH, _acc: PH, list: R): reduce_001<T, R>;
    <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, acc: TResult, list: R): reduce_111<T, TResult, R>;
    <TResult>(_fn: PH, acc: TResult): reduce_010<TResult>;
    <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, acc: TResult): reduce_110<T, TResult, R>;
    <$SEL extends "111">(): <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, acc: TResult, list: R) => reduce_111<T, TResult, R>;
    <$SEL extends "11">(): <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, acc: TResult) => reduce_110<T, TResult, R>;
    <$SEL extends "101">(): <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, _acc: PH, list: R) => reduce_101<T, TResult, R>;
    <$SEL extends "1">(): <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced) => reduce_100<T, TResult, R>;
    <$SEL extends "011">(): <T, TResult, R extends List<T>>(_fn: PH, acc: TResult, list: R) => reduce_011<T, TResult, R>;
    <$SEL extends "01">(): <TResult>(_fn: PH, acc: TResult) => reduce_010<TResult>;
    <$SEL extends "001">(): <T, R extends List<T>>(_fn: PH, _acc: PH, list: R) => reduce_001<T, R>;
    <T, TResult, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced): reduce_100<T, TResult, R>;
};
export type reduce_100<T, TResult, R extends List<T>> = {
    (_acc: PH, list: R): reduce_101<T, TResult, R>;
    (acc: TResult, list: R): reduce_111<T, TResult, R>;
    <$SEL extends "11">(): (acc: TResult, list: R) => reduce_111<T, TResult, R>;
    <$SEL extends "1">(): (acc: TResult) => reduce_110<T, TResult, R>;
    <$SEL extends "01">(): (_acc: PH, list: R) => reduce_101<T, TResult, R>;
    (acc: TResult): reduce_110<T, TResult, R>;
};
export type reduce_010<TResult> = {
    <T, R extends List<T>>(_fn: PH, list: R): reduce_011<T, TResult, R>;
    <T, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, list: R): reduce_111<T, TResult, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, list: R) => reduce_111<T, TResult, R>;
    <$SEL extends "1">(): <T, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced) => reduce_110<T, TResult, R>;
    <$SEL extends "01">(): <T, R extends List<T>>(_fn: PH, list: R) => reduce_011<T, TResult, R>;
    <T, R extends List<T>>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced): reduce_110<T, TResult, R>;
};
export type reduce_110<T, TResult, R extends List<T>> = {
    (list: R): reduce_111<T, TResult, R>;
};
export type reduce_001<T, R extends List<T>> = {
    <TResult>(_fn: PH, acc: TResult): reduce_011<T, TResult, R>;
    <TResult>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, acc: TResult): reduce_111<T, TResult, R>;
    <$SEL extends "11">(): <TResult>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced, acc: TResult) => reduce_111<T, TResult, R>;
    <$SEL extends "1">(): <TResult>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced) => reduce_101<T, TResult, R>;
    <$SEL extends "01">(): <TResult>(_fn: PH, acc: TResult) => reduce_011<T, TResult, R>;
    <TResult>(fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced): reduce_101<T, TResult, R>;
};
export type reduce_101<T, TResult, R extends List<T>> = {
    (acc: TResult): reduce_111<T, TResult, R>;
};
export type reduce_011<T, TResult, R extends List<T>> = {
    (fn: (acc: TResult, elem: T, idx: number, list: R) => TResult | Reduced): reduce_111<T, TResult, R>;
};
export type reduce_111<T, TResult, R extends List<T>> = TResult;
/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general `groupBy` function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
export declare const reduceBy: reduceBy_0000;
export type reduceBy_0000 = {
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, _keyFn: PH, list: R): reduceBy_1101<T, TResult, R>;
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, keyFn: (elem: T) => string, list: R): reduceBy_1011<T, TResult, R>;
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, _keyFn: PH, list: R): reduceBy_1001<T, TResult, R>;
    <T, R extends List<T>>(_valueFn: PH, _acc: PH, _keyFn: PH, list: R): reduceBy_0001<T, R>;
    <T, R extends List<T>>(_valueFn: PH, _acc: PH, keyFn: (elem: T) => string, list: R): reduceBy_0011<T, R>;
    <T, TResult, R extends List<T>>(_valueFn: PH, acc: TResult | any, _keyFn: PH, list: R): reduceBy_0101<T, TResult, R>;
    <T, TResult, R extends List<T>>(_valueFn: PH, acc: TResult | any, keyFn: (elem: T) => string, list: R): reduceBy_0111<T, TResult, R>;
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, keyFn: (elem: T) => string, list: R): reduceBy_1111<T, TResult, R>;
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, keyFn: (elem: T) => string): reduceBy_1010<T, TResult, R>;
    <T, TResult>(_valueFn: PH, acc: TResult | any, keyFn: (elem: T) => string): reduceBy_0110<T, TResult>;
    <T>(_valueFn: PH, _acc: PH, keyFn: (elem: T) => string): reduceBy_0010<T>;
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, keyFn: (elem: T) => string): reduceBy_1110<T, TResult, R>;
    <TResult>(_valueFn: PH, acc: TResult | any): reduceBy_0100<TResult>;
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any): reduceBy_1100<T, TResult, R>;
    <$SEL extends "1111">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, keyFn: (elem: T) => string, list: R) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "111">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, keyFn: (elem: T) => string) => reduceBy_1110<T, TResult, R>;
    <$SEL extends "1101">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, _keyFn: PH, list: R) => reduceBy_1101<T, TResult, R>;
    <$SEL extends "11">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any) => reduceBy_1100<T, TResult, R>;
    <$SEL extends "1011">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, keyFn: (elem: T) => string, list: R) => reduceBy_1011<T, TResult, R>;
    <$SEL extends "101">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, keyFn: (elem: T) => string) => reduceBy_1010<T, TResult, R>;
    <$SEL extends "1001">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, _keyFn: PH, list: R) => reduceBy_1001<T, TResult, R>;
    <$SEL extends "1">(): <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult) => reduceBy_1000<T, TResult, R>;
    <$SEL extends "0111">(): <T, TResult, R extends List<T>>(_valueFn: PH, acc: TResult | any, keyFn: (elem: T) => string, list: R) => reduceBy_0111<T, TResult, R>;
    <$SEL extends "011">(): <T, TResult>(_valueFn: PH, acc: TResult | any, keyFn: (elem: T) => string) => reduceBy_0110<T, TResult>;
    <$SEL extends "0101">(): <T, TResult, R extends List<T>>(_valueFn: PH, acc: TResult | any, _keyFn: PH, list: R) => reduceBy_0101<T, TResult, R>;
    <$SEL extends "01">(): <TResult>(_valueFn: PH, acc: TResult | any) => reduceBy_0100<TResult>;
    <$SEL extends "0011">(): <T, R extends List<T>>(_valueFn: PH, _acc: PH, keyFn: (elem: T) => string, list: R) => reduceBy_0011<T, R>;
    <$SEL extends "001">(): <T>(_valueFn: PH, _acc: PH, keyFn: (elem: T) => string) => reduceBy_0010<T>;
    <$SEL extends "0001">(): <T, R extends List<T>>(_valueFn: PH, _acc: PH, _keyFn: PH, list: R) => reduceBy_0001<T, R>;
    <T, TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1000<T, TResult, R>;
};
export type reduceBy_1000<T, TResult, R extends List<T>> = {
    (acc: TResult | any, _keyFn: PH, list: R): reduceBy_1101<T, TResult, R>;
    (_acc: PH, keyFn: (elem: T) => string, list: R): reduceBy_1011<T, TResult, R>;
    (_acc: PH, _keyFn: PH, list: R): reduceBy_1001<T, TResult, R>;
    (acc: TResult | any, keyFn: (elem: T) => string, list: R): reduceBy_1111<T, TResult, R>;
    (_acc: PH, keyFn: (elem: T) => string): reduceBy_1010<T, TResult, R>;
    (acc: TResult | any, keyFn: (elem: T) => string): reduceBy_1110<T, TResult, R>;
    <$SEL extends "111">(): (acc: TResult | any, keyFn: (elem: T) => string, list: R) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): (acc: TResult | any, keyFn: (elem: T) => string) => reduceBy_1110<T, TResult, R>;
    <$SEL extends "101">(): (acc: TResult | any, _keyFn: PH, list: R) => reduceBy_1101<T, TResult, R>;
    <$SEL extends "1">(): (acc: TResult | any) => reduceBy_1100<T, TResult, R>;
    <$SEL extends "011">(): (_acc: PH, keyFn: (elem: T) => string, list: R) => reduceBy_1011<T, TResult, R>;
    <$SEL extends "01">(): (_acc: PH, keyFn: (elem: T) => string) => reduceBy_1010<T, TResult, R>;
    <$SEL extends "001">(): (_acc: PH, _keyFn: PH, list: R) => reduceBy_1001<T, TResult, R>;
    (acc: TResult | any): reduceBy_1100<T, TResult, R>;
};
export type reduceBy_0100<TResult> = {
    <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _keyFn: PH, list: R): reduceBy_1101<T, TResult, R>;
    <T, R extends List<T>>(_valueFn: PH, keyFn: (elem: T) => string, list: R): reduceBy_0111<T, TResult, R>;
    <T, R extends List<T>>(_valueFn: PH, _keyFn: PH, list: R): reduceBy_0101<T, TResult, R>;
    <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, keyFn: (elem: T) => string, list: R): reduceBy_1111<T, TResult, R>;
    <T>(_valueFn: PH, keyFn: (elem: T) => string): reduceBy_0110<T, TResult>;
    <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, keyFn: (elem: T) => string): reduceBy_1110<T, TResult, R>;
    <$SEL extends "111">(): <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, keyFn: (elem: T) => string, list: R) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, keyFn: (elem: T) => string) => reduceBy_1110<T, TResult, R>;
    <$SEL extends "101">(): <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _keyFn: PH, list: R) => reduceBy_1101<T, TResult, R>;
    <$SEL extends "1">(): <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult) => reduceBy_1100<T, TResult, R>;
    <$SEL extends "011">(): <T, R extends List<T>>(_valueFn: PH, keyFn: (elem: T) => string, list: R) => reduceBy_0111<T, TResult, R>;
    <$SEL extends "01">(): <T>(_valueFn: PH, keyFn: (elem: T) => string) => reduceBy_0110<T, TResult>;
    <$SEL extends "001">(): <T, R extends List<T>>(_valueFn: PH, _keyFn: PH, list: R) => reduceBy_0101<T, TResult, R>;
    <T, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1100<T, TResult, R>;
};
export type reduceBy_1100<T, TResult, R extends List<T>> = {
    (_keyFn: PH, list: R): reduceBy_1101<T, TResult, R>;
    (keyFn: (elem: T) => string, list: R): reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): (keyFn: (elem: T) => string, list: R) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "1">(): (keyFn: (elem: T) => string) => reduceBy_1110<T, TResult, R>;
    <$SEL extends "01">(): (_keyFn: PH, list: R) => reduceBy_1101<T, TResult, R>;
    (keyFn: (elem: T) => string): reduceBy_1110<T, TResult, R>;
};
export type reduceBy_0010<T> = {
    <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, list: R): reduceBy_1011<T, TResult, R>;
    <TResult, R extends List<T>>(_valueFn: PH, acc: TResult | any, list: R): reduceBy_0111<T, TResult, R>;
    <R extends List<T>>(_valueFn: PH, _acc: PH, list: R): reduceBy_0011<T, R>;
    <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, list: R): reduceBy_1111<T, TResult, R>;
    <TResult>(_valueFn: PH, acc: TResult | any): reduceBy_0110<T, TResult>;
    <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any): reduceBy_1110<T, TResult, R>;
    <$SEL extends "111">(): <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, list: R) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any) => reduceBy_1110<T, TResult, R>;
    <$SEL extends "101">(): <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, list: R) => reduceBy_1011<T, TResult, R>;
    <$SEL extends "1">(): <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult) => reduceBy_1010<T, TResult, R>;
    <$SEL extends "011">(): <TResult, R extends List<T>>(_valueFn: PH, acc: TResult | any, list: R) => reduceBy_0111<T, TResult, R>;
    <$SEL extends "01">(): <TResult>(_valueFn: PH, acc: TResult | any) => reduceBy_0110<T, TResult>;
    <$SEL extends "001">(): <R extends List<T>>(_valueFn: PH, _acc: PH, list: R) => reduceBy_0011<T, R>;
    <TResult, R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1010<T, TResult, R>;
};
export type reduceBy_1010<T, TResult, R extends List<T>> = {
    (_acc: PH, list: R): reduceBy_1011<T, TResult, R>;
    (acc: TResult | any, list: R): reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): (acc: TResult | any, list: R) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "1">(): (acc: TResult | any) => reduceBy_1110<T, TResult, R>;
    <$SEL extends "01">(): (_acc: PH, list: R) => reduceBy_1011<T, TResult, R>;
    (acc: TResult | any): reduceBy_1110<T, TResult, R>;
};
export type reduceBy_0110<T, TResult> = {
    <R extends List<T>>(_valueFn: PH, list: R): reduceBy_0111<T, TResult, R>;
    <R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, list: R): reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): <R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, list: R) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "1">(): <R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult) => reduceBy_1110<T, TResult, R>;
    <$SEL extends "01">(): <R extends List<T>>(_valueFn: PH, list: R) => reduceBy_0111<T, TResult, R>;
    <R extends List<T>>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1110<T, TResult, R>;
};
export type reduceBy_1110<T, TResult, R extends List<T>> = {
    (list: R): reduceBy_1111<T, TResult, R>;
};
export type reduceBy_0001<T, R extends List<T>> = {
    <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, keyFn: (elem: T) => string): reduceBy_1011<T, TResult, R>;
    <TResult>(_valueFn: PH, acc: TResult | any, keyFn: (elem: T) => string): reduceBy_0111<T, TResult, R>;
    (_valueFn: PH, _acc: PH, keyFn: (elem: T) => string): reduceBy_0011<T, R>;
    <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, keyFn: (elem: T) => string): reduceBy_1111<T, TResult, R>;
    <TResult>(_valueFn: PH, acc: TResult | any): reduceBy_0101<T, TResult, R>;
    <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any): reduceBy_1101<T, TResult, R>;
    <$SEL extends "111">(): <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any, keyFn: (elem: T) => string) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any) => reduceBy_1101<T, TResult, R>;
    <$SEL extends "101">(): <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, _acc: PH, keyFn: (elem: T) => string) => reduceBy_1011<T, TResult, R>;
    <$SEL extends "1">(): <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult) => reduceBy_1001<T, TResult, R>;
    <$SEL extends "011">(): <TResult>(_valueFn: PH, acc: TResult | any, keyFn: (elem: T) => string) => reduceBy_0111<T, TResult, R>;
    <$SEL extends "01">(): <TResult>(_valueFn: PH, acc: TResult | any) => reduceBy_0101<T, TResult, R>;
    <$SEL extends "001">(): (_valueFn: PH, _acc: PH, keyFn: (elem: T) => string) => reduceBy_0011<T, R>;
    <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1001<T, TResult, R>;
};
export type reduceBy_1001<T, TResult, R extends List<T>> = {
    (_acc: PH, keyFn: (elem: T) => string): reduceBy_1011<T, TResult, R>;
    (acc: TResult | any, keyFn: (elem: T) => string): reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): (acc: TResult | any, keyFn: (elem: T) => string) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "1">(): (acc: TResult | any) => reduceBy_1101<T, TResult, R>;
    <$SEL extends "01">(): (_acc: PH, keyFn: (elem: T) => string) => reduceBy_1011<T, TResult, R>;
    (acc: TResult | any): reduceBy_1101<T, TResult, R>;
};
export type reduceBy_0101<T, TResult, R extends List<T>> = {
    (_valueFn: PH, keyFn: (elem: T) => string): reduceBy_0111<T, TResult, R>;
    (valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, keyFn: (elem: T) => string): reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): (valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, keyFn: (elem: T) => string) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "1">(): (valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult) => reduceBy_1101<T, TResult, R>;
    <$SEL extends "01">(): (_valueFn: PH, keyFn: (elem: T) => string) => reduceBy_0111<T, TResult, R>;
    (valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1101<T, TResult, R>;
};
export type reduceBy_1101<T, TResult, R extends List<T>> = {
    (keyFn: (elem: T) => string): reduceBy_1111<T, TResult, R>;
};
export type reduceBy_0011<T, R extends List<T>> = {
    <TResult>(_valueFn: PH, acc: TResult | any): reduceBy_0111<T, TResult, R>;
    <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any): reduceBy_1111<T, TResult, R>;
    <$SEL extends "11">(): <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult, acc: TResult | any) => reduceBy_1111<T, TResult, R>;
    <$SEL extends "1">(): <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult) => reduceBy_1011<T, TResult, R>;
    <$SEL extends "01">(): <TResult>(_valueFn: PH, acc: TResult | any) => reduceBy_0111<T, TResult, R>;
    <TResult>(valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1011<T, TResult, R>;
};
export type reduceBy_1011<T, TResult, R extends List<T>> = {
    (acc: TResult | any): reduceBy_1111<T, TResult, R>;
};
export type reduceBy_0111<T, TResult, R extends List<T>> = {
    (valueFn: (acc: TResult, elem: T, idx: number, list: R) => TResult): reduceBy_1111<T, TResult, R>;
};
export type reduceBy_1111<T, TResult, R extends List<T>> = TResult;
/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by reduceRight.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *      R.reduce(
 *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
 *        0,
 *        [1, 2, 3, 4, 5]) // 10
 */
export declare const reduced: reduced_0;
export type reduced_0 = {
    <T>(el: T): reduced_1<T>;
};
export type reduced_1<T> = Reduced;
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to `reduce`, except moves through the input list from the right to
 * the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
export declare const reduceRight: reduceRight_000;
export type reduceRight_000 = {
    <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, _acc: PH, list: List<T>): reduceRight_101<T, TResult>;
    <T, TResult>(_fn: PH, acc: TResult | any, list: List<T>): reduceRight_011<T, TResult>;
    <T>(_fn: PH, _acc: PH, list: List<T>): reduceRight_001<T>;
    <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, acc: TResult | any, list: List<T>): reduceRight_111<T, TResult>;
    <TResult>(_fn: PH, acc: TResult | any): reduceRight_010<TResult>;
    <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, acc: TResult | any): reduceRight_110<T, TResult>;
    <$SEL extends "111">(): <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, acc: TResult | any, list: List<T>) => reduceRight_111<T, TResult>;
    <$SEL extends "11">(): <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, acc: TResult | any) => reduceRight_110<T, TResult>;
    <$SEL extends "101">(): <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, _acc: PH, list: List<T>) => reduceRight_101<T, TResult>;
    <$SEL extends "1">(): <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced) => reduceRight_100<T, TResult>;
    <$SEL extends "011">(): <T, TResult>(_fn: PH, acc: TResult | any, list: List<T>) => reduceRight_011<T, TResult>;
    <$SEL extends "01">(): <TResult>(_fn: PH, acc: TResult | any) => reduceRight_010<TResult>;
    <$SEL extends "001">(): <T>(_fn: PH, _acc: PH, list: List<T>) => reduceRight_001<T>;
    <T, TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced): reduceRight_100<T, TResult>;
};
export type reduceRight_100<T, TResult> = {
    (_acc: PH, list: List<T>): reduceRight_101<T, TResult>;
    (acc: TResult | any, list: List<T>): reduceRight_111<T, TResult>;
    <$SEL extends "11">(): (acc: TResult | any, list: List<T>) => reduceRight_111<T, TResult>;
    <$SEL extends "1">(): (acc: TResult | any) => reduceRight_110<T, TResult>;
    <$SEL extends "01">(): (_acc: PH, list: List<T>) => reduceRight_101<T, TResult>;
    (acc: TResult | any): reduceRight_110<T, TResult>;
};
export type reduceRight_010<TResult> = {
    <T>(_fn: PH, list: List<T>): reduceRight_011<T, TResult>;
    <T>(fn: (elem: T, acc: TResult) => TResult | Reduced, list: List<T>): reduceRight_111<T, TResult>;
    <$SEL extends "11">(): <T>(fn: (elem: T, acc: TResult) => TResult | Reduced, list: List<T>) => reduceRight_111<T, TResult>;
    <$SEL extends "1">(): <T>(fn: (elem: T, acc: TResult) => TResult | Reduced) => reduceRight_110<T, TResult>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => reduceRight_011<T, TResult>;
    <T>(fn: (elem: T, acc: TResult) => TResult | Reduced): reduceRight_110<T, TResult>;
};
export type reduceRight_110<T, TResult> = {
    (list: List<T>): reduceRight_111<T, TResult>;
};
export type reduceRight_001<T> = {
    <TResult>(_fn: PH, acc: TResult | any): reduceRight_011<T, TResult>;
    <TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, acc: TResult | any): reduceRight_111<T, TResult>;
    <$SEL extends "11">(): <TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced, acc: TResult | any) => reduceRight_111<T, TResult>;
    <$SEL extends "1">(): <TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced) => reduceRight_101<T, TResult>;
    <$SEL extends "01">(): <TResult>(_fn: PH, acc: TResult | any) => reduceRight_011<T, TResult>;
    <TResult>(fn: (elem: T, acc: TResult) => TResult | Reduced): reduceRight_101<T, TResult>;
};
export type reduceRight_101<T, TResult> = {
    (acc: TResult | any): reduceRight_111<T, TResult>;
};
export type reduceRight_011<T, TResult> = {
    (fn: (elem: T, acc: TResult) => TResult | Reduced): reduceRight_111<T, TResult>;
};
export type reduceRight_111<T, TResult> = TResult;
/**
 * Like `reduce`, `reduceWhile` returns a single item by iterating through
 * the list, successively calling the iterator function. `reduceWhile` also
 * takes a predicate that is evaluated before each step. If the predicate returns
 * `false`, it "short-circuits" the iteration and returns the current value
 * of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
export declare const reduceWhile: reduceWhile_0000;
export type reduceWhile_0000 = {
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>): reduceWhile_1101<T, TResult>;
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, acc: TResult, list: List<T>): reduceWhile_1011<T, TResult>;
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, _acc: PH, list: List<T>): reduceWhile_1001<T, TResult>;
    <T>(_pred: PH, _fn: PH, _acc: PH, list: List<T>): reduceWhile_0001<T>;
    <T, TResult>(_pred: PH, _fn: PH, acc: TResult, list: List<T>): reduceWhile_0011<T, TResult>;
    <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>): reduceWhile_0101<T, TResult>;
    <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>): reduceWhile_0111<T, TResult>;
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>): reduceWhile_1111<T, TResult>;
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, acc: TResult): reduceWhile_1010<T, TResult>;
    <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): reduceWhile_0110<T, TResult>;
    <TResult>(_pred: PH, _fn: PH, acc: TResult): reduceWhile_0010<TResult>;
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): reduceWhile_1110<T, TResult>;
    <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_0100<T, TResult>;
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1100<T, TResult>;
    <$SEL extends "1111">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>) => reduceWhile_1111<T, TResult>;
    <$SEL extends "111">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => reduceWhile_1110<T, TResult>;
    <$SEL extends "1101">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>) => reduceWhile_1101<T, TResult>;
    <$SEL extends "11">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_1100<T, TResult>;
    <$SEL extends "1011">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, acc: TResult, list: List<T>) => reduceWhile_1011<T, TResult>;
    <$SEL extends "101">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, acc: TResult) => reduceWhile_1010<T, TResult>;
    <$SEL extends "1001">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, _acc: PH, list: List<T>) => reduceWhile_1001<T, TResult>;
    <$SEL extends "1">(): <T, TResult>(pred: (acc: TResult, elem: T) => boolean) => reduceWhile_1000<T, TResult>;
    <$SEL extends "0111">(): <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>) => reduceWhile_0111<T, TResult>;
    <$SEL extends "011">(): <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => reduceWhile_0110<T, TResult>;
    <$SEL extends "0101">(): <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>) => reduceWhile_0101<T, TResult>;
    <$SEL extends "01">(): <T, TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_0100<T, TResult>;
    <$SEL extends "0011">(): <T, TResult>(_pred: PH, _fn: PH, acc: TResult, list: List<T>) => reduceWhile_0011<T, TResult>;
    <$SEL extends "001">(): <TResult>(_pred: PH, _fn: PH, acc: TResult) => reduceWhile_0010<TResult>;
    <$SEL extends "0001">(): <T>(_pred: PH, _fn: PH, _acc: PH, list: List<T>) => reduceWhile_0001<T>;
    <T, TResult>(pred: (acc: TResult, elem: T) => boolean): reduceWhile_1000<T, TResult>;
};
export type reduceWhile_1000<T, TResult> = {
    (fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>): reduceWhile_1101<T, TResult>;
    (_fn: PH, acc: TResult, list: List<T>): reduceWhile_1011<T, TResult>;
    (_fn: PH, _acc: PH, list: List<T>): reduceWhile_1001<T, TResult>;
    (fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>): reduceWhile_1111<T, TResult>;
    (_fn: PH, acc: TResult): reduceWhile_1010<T, TResult>;
    (fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): reduceWhile_1110<T, TResult>;
    <$SEL extends "111">(): (fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>) => reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => reduceWhile_1110<T, TResult>;
    <$SEL extends "101">(): (fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>) => reduceWhile_1101<T, TResult>;
    <$SEL extends "1">(): (fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_1100<T, TResult>;
    <$SEL extends "011">(): (_fn: PH, acc: TResult, list: List<T>) => reduceWhile_1011<T, TResult>;
    <$SEL extends "01">(): (_fn: PH, acc: TResult) => reduceWhile_1010<T, TResult>;
    <$SEL extends "001">(): (_fn: PH, _acc: PH, list: List<T>) => reduceWhile_1001<T, TResult>;
    (fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1100<T, TResult>;
};
export type reduceWhile_0100<T, TResult> = {
    (pred: (acc: TResult, elem: T) => boolean, _acc: PH, list: List<T>): reduceWhile_1101<T, TResult>;
    (_pred: PH, acc: TResult, list: List<T>): reduceWhile_0111<T, TResult>;
    (_pred: PH, _acc: PH, list: List<T>): reduceWhile_0101<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean, acc: TResult, list: List<T>): reduceWhile_1111<T, TResult>;
    (_pred: PH, acc: TResult): reduceWhile_0110<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean, acc: TResult): reduceWhile_1110<T, TResult>;
    <$SEL extends "111">(): (pred: (acc: TResult, elem: T) => boolean, acc: TResult, list: List<T>) => reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (pred: (acc: TResult, elem: T) => boolean, acc: TResult) => reduceWhile_1110<T, TResult>;
    <$SEL extends "101">(): (pred: (acc: TResult, elem: T) => boolean, _acc: PH, list: List<T>) => reduceWhile_1101<T, TResult>;
    <$SEL extends "1">(): (pred: (acc: TResult, elem: T) => boolean) => reduceWhile_1100<T, TResult>;
    <$SEL extends "011">(): (_pred: PH, acc: TResult, list: List<T>) => reduceWhile_0111<T, TResult>;
    <$SEL extends "01">(): (_pred: PH, acc: TResult) => reduceWhile_0110<T, TResult>;
    <$SEL extends "001">(): (_pred: PH, _acc: PH, list: List<T>) => reduceWhile_0101<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean): reduceWhile_1100<T, TResult>;
};
export type reduceWhile_1100<T, TResult> = {
    (_acc: PH, list: List<T>): reduceWhile_1101<T, TResult>;
    (acc: TResult, list: List<T>): reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (acc: TResult, list: List<T>) => reduceWhile_1111<T, TResult>;
    <$SEL extends "1">(): (acc: TResult) => reduceWhile_1110<T, TResult>;
    <$SEL extends "01">(): (_acc: PH, list: List<T>) => reduceWhile_1101<T, TResult>;
    (acc: TResult): reduceWhile_1110<T, TResult>;
};
export type reduceWhile_0010<TResult> = {
    <T>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, list: List<T>): reduceWhile_1011<T, TResult>;
    <T>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>): reduceWhile_0111<T, TResult>;
    <T>(_pred: PH, _fn: PH, list: List<T>): reduceWhile_0011<T, TResult>;
    <T>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>): reduceWhile_1111<T, TResult>;
    <T>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_0110<T, TResult>;
    <T>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1110<T, TResult>;
    <$SEL extends "111">(): <T>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>) => reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): <T>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_1110<T, TResult>;
    <$SEL extends "101">(): <T>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, list: List<T>) => reduceWhile_1011<T, TResult>;
    <$SEL extends "1">(): <T>(pred: (acc: TResult, elem: T) => boolean) => reduceWhile_1010<T, TResult>;
    <$SEL extends "011">(): <T>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>) => reduceWhile_0111<T, TResult>;
    <$SEL extends "01">(): <T>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_0110<T, TResult>;
    <$SEL extends "001">(): <T>(_pred: PH, _fn: PH, list: List<T>) => reduceWhile_0011<T, TResult>;
    <T>(pred: (acc: TResult, elem: T) => boolean): reduceWhile_1010<T, TResult>;
};
export type reduceWhile_1010<T, TResult> = {
    (_fn: PH, list: List<T>): reduceWhile_1011<T, TResult>;
    (fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>): reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>) => reduceWhile_1111<T, TResult>;
    <$SEL extends "1">(): (fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_1110<T, TResult>;
    <$SEL extends "01">(): (_fn: PH, list: List<T>) => reduceWhile_1011<T, TResult>;
    (fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1110<T, TResult>;
};
export type reduceWhile_0110<T, TResult> = {
    (_pred: PH, list: List<T>): reduceWhile_0111<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean, list: List<T>): reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (pred: (acc: TResult, elem: T) => boolean, list: List<T>) => reduceWhile_1111<T, TResult>;
    <$SEL extends "1">(): (pred: (acc: TResult, elem: T) => boolean) => reduceWhile_1110<T, TResult>;
    <$SEL extends "01">(): (_pred: PH, list: List<T>) => reduceWhile_0111<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean): reduceWhile_1110<T, TResult>;
};
export type reduceWhile_1110<T, TResult> = {
    (list: List<T>): reduceWhile_1111<T, TResult>;
};
export type reduceWhile_0001<T> = {
    <TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, acc: TResult): reduceWhile_1011<T, TResult>;
    <TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): reduceWhile_0111<T, TResult>;
    <TResult>(_pred: PH, _fn: PH, acc: TResult): reduceWhile_0011<T, TResult>;
    <TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): reduceWhile_1111<T, TResult>;
    <TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_0101<T, TResult>;
    <TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1101<T, TResult>;
    <$SEL extends "111">(): <TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): <TResult>(pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_1101<T, TResult>;
    <$SEL extends "101">(): <TResult>(pred: (acc: TResult, elem: T) => boolean, _fn: PH, acc: TResult) => reduceWhile_1011<T, TResult>;
    <$SEL extends "1">(): <TResult>(pred: (acc: TResult, elem: T) => boolean) => reduceWhile_1001<T, TResult>;
    <$SEL extends "011">(): <TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => reduceWhile_0111<T, TResult>;
    <$SEL extends "01">(): <TResult>(_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_0101<T, TResult>;
    <$SEL extends "001">(): <TResult>(_pred: PH, _fn: PH, acc: TResult) => reduceWhile_0011<T, TResult>;
    <TResult>(pred: (acc: TResult, elem: T) => boolean): reduceWhile_1001<T, TResult>;
};
export type reduceWhile_1001<T, TResult> = {
    (_fn: PH, acc: TResult): reduceWhile_1011<T, TResult>;
    (fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => reduceWhile_1111<T, TResult>;
    <$SEL extends "1">(): (fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_1101<T, TResult>;
    <$SEL extends "01">(): (_fn: PH, acc: TResult) => reduceWhile_1011<T, TResult>;
    (fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1101<T, TResult>;
};
export type reduceWhile_0101<T, TResult> = {
    (_pred: PH, acc: TResult): reduceWhile_0111<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean, acc: TResult): reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (pred: (acc: TResult, elem: T) => boolean, acc: TResult) => reduceWhile_1111<T, TResult>;
    <$SEL extends "1">(): (pred: (acc: TResult, elem: T) => boolean) => reduceWhile_1101<T, TResult>;
    <$SEL extends "01">(): (_pred: PH, acc: TResult) => reduceWhile_0111<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean): reduceWhile_1101<T, TResult>;
};
export type reduceWhile_1101<T, TResult> = {
    (acc: TResult): reduceWhile_1111<T, TResult>;
};
export type reduceWhile_0011<T, TResult> = {
    (_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_0111<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1111<T, TResult>;
    <$SEL extends "11">(): (pred: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_1111<T, TResult>;
    <$SEL extends "1">(): (pred: (acc: TResult, elem: T) => boolean) => reduceWhile_1011<T, TResult>;
    <$SEL extends "01">(): (_pred: PH, fn: (acc: TResult, elem: T) => TResult | Reduced) => reduceWhile_0111<T, TResult>;
    (pred: (acc: TResult, elem: T) => boolean): reduceWhile_1011<T, TResult>;
};
export type reduceWhile_1011<T, TResult> = {
    (fn: (acc: TResult, elem: T) => TResult | Reduced): reduceWhile_1111<T, TResult>;
};
export type reduceWhile_0111<T, TResult> = {
    (pred: (acc: TResult, elem: T) => boolean): reduceWhile_1111<T, TResult>;
};
export type reduceWhile_1111<T, TResult> = TResult;
/**
 * The complement of `filter`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
export declare const reject: reject_00;
export type reject_00 = {
    <T>(_pred: PH, list: List<T>): reject_array_01<T>;
    <T>(_pred: PH, list: Functor<T>): reject_functor_to_functor_01<T>;
    <T>(_pred: PH, list: Functor<T>): reject_functor_to_array_01<T>;
    <T, U extends Obj<T>>(_pred: PH, obj: U): reject_object_01<T, U>;
    <T>(pred: Pred<T>, list: List<T>): reject_array_11<T>;
    <T>(pred: Pred<T>, list: Functor<T>): reject_functor_to_functor_11<T>;
    <T>(pred: Pred<T>, list: Functor<T>): reject_functor_to_array_11<T>;
    <T, U extends Obj<T>>(pred: Pred<T>, obj: U): reject_object_11<T, U>;
    <$SEL extends "11", $KIND extends "array">(): <T>(pred: Pred<T>, list: List<T>) => reject_array_11<T>;
    <$SEL extends "01", $KIND extends "array">(): <T>(_pred: PH, list: List<T>) => reject_array_01<T>;
    <$SEL extends "11", $KIND extends "functor_to_functor">(): <T>(pred: Pred<T>, list: Functor<T>) => reject_functor_to_functor_11<T>;
    <$SEL extends "01", $KIND extends "functor_to_functor">(): <T>(_pred: PH, list: Functor<T>) => reject_functor_to_functor_01<T>;
    <$SEL extends "11", $KIND extends "functor_to_array">(): <T>(pred: Pred<T>, list: Functor<T>) => reject_functor_to_array_11<T>;
    <$SEL extends "01", $KIND extends "functor_to_array">(): <T>(_pred: PH, list: Functor<T>) => reject_functor_to_array_01<T>;
    <$SEL extends "11", $KIND extends "object">(): <T, U extends Obj<T>>(pred: Pred<T>, obj: U) => reject_object_11<T, U>;
    <$SEL extends "01", $KIND extends "object">(): <T, U extends Obj<T>>(_pred: PH, obj: U) => reject_object_01<T, U>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => reject_10<T>;
    <T>(pred: Pred<T>): reject_10<T>;
};
export type reject_10<T> = {
    (list: List<T>): reject_array_11<T>;
    (list: Functor<T>): reject_functor_to_functor_11<T>;
    (list: Functor<T>): reject_functor_to_array_11<T>;
    <$SEL extends "1", $KIND extends "array">(): (list: List<T>) => reject_array_11<T>;
    <$SEL extends "1", $KIND extends "functor_to_functor">(): (list: Functor<T>) => reject_functor_to_functor_11<T>;
    <$SEL extends "1", $KIND extends "functor_to_array">(): (list: Functor<T>) => reject_functor_to_array_11<T>;
    <$SEL extends "1", $KIND extends "object">(): <U extends Obj<T>>(obj: U) => reject_object_11<T, U>;
    <U extends Obj<T>>(obj: U): reject_object_11<T, U>;
};
export type reject_array_01<T> = {
    (pred: Pred<T>): reject_array_11<T>;
};
export type reject_functor_to_functor_01<T> = {
    (pred: Pred<T>): reject_functor_to_functor_11<T>;
};
export type reject_functor_to_array_01<T> = {
    (pred: Pred<T>): reject_functor_to_array_11<T>;
};
export type reject_object_01<T, U extends Obj<T>> = {
    (pred: Pred<T>): reject_object_11<T, U>;
};
export type reject_array_11<T> = T[];
export type reject_functor_to_functor_11<T> = Functor<T>;
export type reject_functor_to_array_11<T> = T[];
export type reject_object_11<T, U extends Obj<T>> = Partial<U>;
/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
export declare const remove: remove_000;
export type remove_000 = {
    <T>(start: number, _count: PH, list: List<T>): remove_101<T>;
    <T>(_start: PH, count: number, list: List<T>): remove_011<T>;
    <T>(_start: PH, _count: PH, list: List<T>): remove_001<T>;
    <T>(start: number, count: number, list: List<T>): remove_111<T>;
    (_start: PH, count: number): remove_010;
    (start: number, count: number): remove_110;
    <$SEL extends "111">(): <T>(start: number, count: number, list: List<T>) => remove_111<T>;
    <$SEL extends "11">(): (start: number, count: number) => remove_110;
    <$SEL extends "101">(): <T>(start: number, _count: PH, list: List<T>) => remove_101<T>;
    <$SEL extends "1">(): (start: number) => remove_100;
    <$SEL extends "011">(): <T>(_start: PH, count: number, list: List<T>) => remove_011<T>;
    <$SEL extends "01">(): (_start: PH, count: number) => remove_010;
    <$SEL extends "001">(): <T>(_start: PH, _count: PH, list: List<T>) => remove_001<T>;
    (start: number): remove_100;
};
export type remove_100 = {
    <T>(_count: PH, list: List<T>): remove_101<T>;
    <T>(count: number, list: List<T>): remove_111<T>;
    <$SEL extends "11">(): <T>(count: number, list: List<T>) => remove_111<T>;
    <$SEL extends "1">(): (count: number) => remove_110;
    <$SEL extends "01">(): <T>(_count: PH, list: List<T>) => remove_101<T>;
    (count: number): remove_110;
};
export type remove_010 = {
    <T>(_start: PH, list: List<T>): remove_011<T>;
    <T>(start: number, list: List<T>): remove_111<T>;
    <$SEL extends "11">(): <T>(start: number, list: List<T>) => remove_111<T>;
    <$SEL extends "1">(): (start: number) => remove_110;
    <$SEL extends "01">(): <T>(_start: PH, list: List<T>) => remove_011<T>;
    (start: number): remove_110;
};
export type remove_110 = {
    <T>(list: List<T>): remove_111<T>;
};
export type remove_001<T> = {
    (_start: PH, count: number): remove_011<T>;
    (start: number, count: number): remove_111<T>;
    <$SEL extends "11">(): (start: number, count: number) => remove_111<T>;
    <$SEL extends "1">(): (start: number) => remove_101<T>;
    <$SEL extends "01">(): (_start: PH, count: number) => remove_011<T>;
    (start: number): remove_101<T>;
};
export type remove_101<T> = {
    (count: number): remove_111<T>;
};
export type remove_011<T> = {
    (start: number): remove_111<T>;
};
export type remove_111<T> = T[];
/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
export declare const repeat: repeat_00;
export type repeat_00 = {
    (_a: PH, n: number): repeat_01;
    <T>(a: T, n: number): repeat_11<T>;
    <$SEL extends "11">(): <T>(a: T, n: number) => repeat_11<T>;
    <$SEL extends "1">(): <T>(a: T) => repeat_10<T>;
    <$SEL extends "01">(): (_a: PH, n: number) => repeat_01;
    <T>(a: T): repeat_10<T>;
};
export type repeat_10<T> = {
    (n: number): repeat_11<T>;
};
export type repeat_01 = {
    <T>(a: T): repeat_11<T>;
};
export type repeat_11<T> = T[];
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
    (pattern: RegExp | Prop, _replacement: PH, str: string): replace_101;
    (_pattern: PH, replacement: Prop, str: string): replace_011;
    (_pattern: PH, _replacement: PH, str: string): replace_001;
    (pattern: RegExp | Prop, replacement: Prop, str: string): replace_111;
    (_pattern: PH, replacement: Prop): replace_010;
    (pattern: RegExp | Prop, replacement: Prop): replace_110;
    <$SEL extends "111">(): (pattern: RegExp | Prop, replacement: Prop, str: string) => replace_111;
    <$SEL extends "11">(): (pattern: RegExp | Prop, replacement: Prop) => replace_110;
    <$SEL extends "101">(): (pattern: RegExp | Prop, _replacement: PH, str: string) => replace_101;
    <$SEL extends "1">(): (pattern: RegExp | Prop) => replace_100;
    <$SEL extends "011">(): (_pattern: PH, replacement: Prop, str: string) => replace_011;
    <$SEL extends "01">(): (_pattern: PH, replacement: Prop) => replace_010;
    <$SEL extends "001">(): (_pattern: PH, _replacement: PH, str: string) => replace_001;
    (pattern: RegExp | Prop): replace_100;
};
export type replace_100 = {
    (_replacement: PH, str: string): replace_101;
    (replacement: Prop, str: string): replace_111;
    <$SEL extends "11">(): (replacement: Prop, str: string) => replace_111;
    <$SEL extends "1">(): (replacement: Prop) => replace_110;
    <$SEL extends "01">(): (_replacement: PH, str: string) => replace_101;
    (replacement: Prop): replace_110;
};
export type replace_010 = {
    (_pattern: PH, str: string): replace_011;
    (pattern: RegExp | Prop, str: string): replace_111;
    <$SEL extends "11">(): (pattern: RegExp | Prop, str: string) => replace_111;
    <$SEL extends "1">(): (pattern: RegExp | Prop) => replace_110;
    <$SEL extends "01">(): (_pattern: PH, str: string) => replace_011;
    (pattern: RegExp | Prop): replace_110;
};
export type replace_110 = {
    (str: string): replace_111;
};
export type replace_001 = {
    (_pattern: PH, replacement: Prop): replace_011;
    (pattern: RegExp | Prop, replacement: Prop): replace_111;
    <$SEL extends "11">(): (pattern: RegExp | Prop, replacement: Prop) => replace_111;
    <$SEL extends "1">(): (pattern: RegExp | Prop) => replace_101;
    <$SEL extends "01">(): (_pattern: PH, replacement: Prop) => replace_011;
    (pattern: RegExp | Prop): replace_101;
};
export type replace_101 = {
    (replacement: Prop): replace_111;
};
export type replace_011 = {
    (pattern: RegExp | Prop): replace_111;
};
export type replace_111 = string;
/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
export declare const reverse: reverse_0;
export type reverse_0 = {
    <T>(list: List<T>): reverse_1<T>;
};
export type reverse_1<T> = T[];
/**
 * Scan is similar to reduce, but returns a list of successively reduced values
 * from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
export declare const scan: scan_000;
export type scan_000 = {
    <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>): scan_101<T, TResult>;
    <T, TResult>(_fn: PH, acc: TResult, list: List<T>): scan_011<T, TResult>;
    <T>(_fn: PH, _acc: PH, list: List<T>): scan_001<T>;
    <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>): scan_111<T, TResult>;
    <TResult>(_fn: PH, acc: TResult): scan_010<TResult>;
    <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): scan_110<T, TResult>;
    <$SEL extends "111">(): <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: List<T>) => scan_111<T, TResult>;
    <$SEL extends "11">(): <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => scan_110<T, TResult>;
    <$SEL extends "101">(): <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, _acc: PH, list: List<T>) => scan_101<T, TResult>;
    <$SEL extends "1">(): <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced) => scan_100<T, TResult>;
    <$SEL extends "011">(): <T, TResult>(_fn: PH, acc: TResult, list: List<T>) => scan_011<T, TResult>;
    <$SEL extends "01">(): <TResult>(_fn: PH, acc: TResult) => scan_010<TResult>;
    <$SEL extends "001">(): <T>(_fn: PH, _acc: PH, list: List<T>) => scan_001<T>;
    <T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced): scan_100<T, TResult>;
};
export type scan_100<T, TResult> = {
    (_acc: PH, list: List<T>): scan_101<T, TResult>;
    (acc: TResult, list: List<T>): scan_111<T, TResult>;
    <$SEL extends "11">(): (acc: TResult, list: List<T>) => scan_111<T, TResult>;
    <$SEL extends "1">(): (acc: TResult) => scan_110<T, TResult>;
    <$SEL extends "01">(): (_acc: PH, list: List<T>) => scan_101<T, TResult>;
    (acc: TResult): scan_110<T, TResult>;
};
export type scan_010<TResult> = {
    <T>(_fn: PH, list: List<T>): scan_011<T, TResult>;
    <T>(fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>): scan_111<T, TResult>;
    <$SEL extends "11">(): <T>(fn: (acc: TResult, elem: T) => TResult | Reduced, list: List<T>) => scan_111<T, TResult>;
    <$SEL extends "1">(): <T>(fn: (acc: TResult, elem: T) => TResult | Reduced) => scan_110<T, TResult>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => scan_011<T, TResult>;
    <T>(fn: (acc: TResult, elem: T) => TResult | Reduced): scan_110<T, TResult>;
};
export type scan_110<T, TResult> = {
    (list: List<T>): scan_111<T, TResult>;
};
export type scan_001<T> = {
    <TResult>(_fn: PH, acc: TResult): scan_011<T, TResult>;
    <TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult): scan_111<T, TResult>;
    <$SEL extends "11">(): <TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult) => scan_111<T, TResult>;
    <$SEL extends "1">(): <TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced) => scan_101<T, TResult>;
    <$SEL extends "01">(): <TResult>(_fn: PH, acc: TResult) => scan_011<T, TResult>;
    <TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced): scan_101<T, TResult>;
};
export type scan_101<T, TResult> = {
    (acc: TResult): scan_111<T, TResult>;
};
export type scan_011<T, TResult> = {
    (fn: (acc: TResult, elem: T) => TResult | Reduced): scan_111<T, TResult>;
};
export type scan_111<T, TResult> = TResult[];
/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
export declare const sequence: sequence_00;
export type sequence_00 = {
    <T>(_fn: PH, traversable: List<Applicative<T>>): sequence_common_case_of_array_as_traversable_01<T>;
    <T>(_fn: PH, traversable: Traversable<Applicative<T>>): sequence_general_ADT_case__01<T>;
    <T>(fn: (v: T) => Applicative<T>, traversable: List<Applicative<T>>): sequence_common_case_of_array_as_traversable_11<T>;
    <T>(fn: (v: T) => Applicative<T>, traversable: Traversable<Applicative<T>>): sequence_general_ADT_case__11<T>;
    <$SEL extends "11", $KIND extends "common_case_of_array_as_traversable">(): <T>(fn: (v: T) => Applicative<T>, traversable: List<Applicative<T>>) => sequence_common_case_of_array_as_traversable_11<T>;
    <$SEL extends "01", $KIND extends "common_case_of_array_as_traversable">(): <T>(_fn: PH, traversable: List<Applicative<T>>) => sequence_common_case_of_array_as_traversable_01<T>;
    <$SEL extends "11", $KIND extends "general_ADT_case_">(): <T>(fn: (v: T) => Applicative<T>, traversable: Traversable<Applicative<T>>) => sequence_general_ADT_case__11<T>;
    <$SEL extends "01", $KIND extends "general_ADT_case_">(): <T>(_fn: PH, traversable: Traversable<Applicative<T>>) => sequence_general_ADT_case__01<T>;
    <$SEL extends "1">(): <T>(fn: (v: T) => Applicative<T>) => sequence_10<T>;
    <T>(fn: (v: T) => Applicative<T>): sequence_10<T>;
};
export type sequence_10<T> = {
    (traversable: List<Applicative<T>>): sequence_common_case_of_array_as_traversable_11<T>;
    <$SEL extends "1", $KIND extends "common_case_of_array_as_traversable">(): (traversable: List<Applicative<T>>) => sequence_common_case_of_array_as_traversable_11<T>;
    <$SEL extends "1", $KIND extends "general_ADT_case_">(): (traversable: Traversable<Applicative<T>>) => sequence_general_ADT_case__11<T>;
    (traversable: Traversable<Applicative<T>>): sequence_general_ADT_case__11<T>;
};
export type sequence_common_case_of_array_as_traversable_01<T> = {
    (fn: (v: T) => Applicative<T>): sequence_common_case_of_array_as_traversable_11<T>;
};
export type sequence_general_ADT_case__01<T> = {
    (fn: (v: T) => Applicative<T>): sequence_general_ADT_case__11<T>;
};
export type sequence_common_case_of_array_as_traversable_11<T> = Applicative<Array<T>>;
export type sequence_general_ADT_case__11<T> = Applicative<Traversable<T>>;
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
export declare const set: set_000;
export type set_000 = {
    <T, U>(lens: Lens<T, U>, _a: PH, obj: T): set_base_101<T, U>;
    <T>(lens: UnknownLens, _a: PH, obj: T): set_unknown_101<T>;
    <T>(_lens: PH, _a: PH, obj: T): set_001<T>;
    <T>(_lens: PH, a: any, obj: T): set_unknown_011<T>;
    <T, U>(_lens: PH, a: U, obj: T): set_base_011<T, U>;
    <T, U>(lens: Lens<T, U>, a: U, obj: T): set_base_111<T, U>;
    <T>(lens: UnknownLens, a: any, obj: T): set_unknown_111<T>;
    <U>(_lens: PH, a: U): set_base_010<U>;
    (_lens: PH, a: any): set_unknown_010;
    <T, U>(lens: Lens<T, U>, a: U): set_base_110<T, U>;
    (lens: UnknownLens, a: any): set_unknown_110;
    (lens: UnknownLens): set_unknown_100;
    <$SEL extends "111", $KIND extends "base">(): <T, U>(lens: Lens<T, U>, a: U, obj: T) => set_base_111<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <T, U>(lens: Lens<T, U>, a: U) => set_base_110<T, U>;
    <$SEL extends "101", $KIND extends "base">(): <T, U>(lens: Lens<T, U>, _a: PH, obj: T) => set_base_101<T, U>;
    <$SEL extends "1", $KIND extends "base">(): <T, U>(lens: Lens<T, U>) => set_base_100<T, U>;
    <$SEL extends "011", $KIND extends "base">(): <T, U>(_lens: PH, a: U, obj: T) => set_base_011<T, U>;
    <$SEL extends "01", $KIND extends "base">(): <U>(_lens: PH, a: U) => set_base_010<U>;
    <$SEL extends "111", $KIND extends "unknown">(): <T>(lens: UnknownLens, a: any, obj: T) => set_unknown_111<T>;
    <$SEL extends "11", $KIND extends "unknown">(): (lens: UnknownLens, a: any) => set_unknown_110;
    <$SEL extends "101", $KIND extends "unknown">(): <T>(lens: UnknownLens, _a: PH, obj: T) => set_unknown_101<T>;
    <$SEL extends "1", $KIND extends "unknown">(): (lens: UnknownLens) => set_unknown_100;
    <$SEL extends "011", $KIND extends "unknown">(): <T>(_lens: PH, a: any, obj: T) => set_unknown_011<T>;
    <$SEL extends "01", $KIND extends "unknown">(): (_lens: PH, a: any) => set_unknown_010;
    <$SEL extends "001">(): <T>(_lens: PH, _a: PH, obj: T) => set_001<T>;
    <T, U>(lens: Lens<T, U>): set_base_100<T, U>;
};
export type set_001<T> = {
    <U>(_lens: PH, a: U): set_base_011<T, U>;
    (_lens: PH, a: any): set_unknown_011<T>;
    <U>(lens: Lens<T, U>, a: U): set_base_111<T, U>;
    (lens: UnknownLens, a: any): set_unknown_111<T>;
    <U>(lens: Lens<T, U>): set_base_101<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <U>(lens: Lens<T, U>, a: U) => set_base_111<T, U>;
    <$SEL extends "1", $KIND extends "base">(): <U>(lens: Lens<T, U>) => set_base_101<T, U>;
    <$SEL extends "01", $KIND extends "base">(): <U>(_lens: PH, a: U) => set_base_011<T, U>;
    <$SEL extends "11", $KIND extends "unknown">(): (lens: UnknownLens, a: any) => set_unknown_111<T>;
    <$SEL extends "1", $KIND extends "unknown">(): (lens: UnknownLens) => set_unknown_101<T>;
    <$SEL extends "01", $KIND extends "unknown">(): (_lens: PH, a: any) => set_unknown_011<T>;
    (lens: UnknownLens): set_unknown_101<T>;
};
export type set_base_100<T, U> = {
    (_a: PH, obj: T): set_base_101<T, U>;
    (a: U, obj: T): set_base_111<T, U>;
    <$SEL extends "11">(): (a: U, obj: T) => set_base_111<T, U>;
    <$SEL extends "1">(): (a: U) => set_base_110<T, U>;
    <$SEL extends "01">(): (_a: PH, obj: T) => set_base_101<T, U>;
    (a: U): set_base_110<T, U>;
};
export type set_unknown_100 = {
    <T>(_a: PH, obj: T): set_unknown_101<T>;
    <T>(a: any, obj: T): set_unknown_111<T>;
    <$SEL extends "11">(): <T>(a: any, obj: T) => set_unknown_111<T>;
    <$SEL extends "1">(): (a: any) => set_unknown_110;
    <$SEL extends "01">(): <T>(_a: PH, obj: T) => set_unknown_101<T>;
    (a: any): set_unknown_110;
};
export type set_base_010<U> = {
    <T>(_lens: PH, obj: T): set_base_011<T, U>;
    <T>(lens: Lens<T, U>, obj: T): set_base_111<T, U>;
    <$SEL extends "11">(): <T>(lens: Lens<T, U>, obj: T) => set_base_111<T, U>;
    <$SEL extends "1">(): <T>(lens: Lens<T, U>) => set_base_110<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, obj: T) => set_base_011<T, U>;
    <T>(lens: Lens<T, U>): set_base_110<T, U>;
};
export type set_unknown_010 = {
    <T>(_lens: PH, obj: T): set_unknown_011<T>;
    <T>(lens: UnknownLens, obj: T): set_unknown_111<T>;
    <$SEL extends "11">(): <T>(lens: UnknownLens, obj: T) => set_unknown_111<T>;
    <$SEL extends "1">(): (lens: UnknownLens) => set_unknown_110;
    <$SEL extends "01">(): <T>(_lens: PH, obj: T) => set_unknown_011<T>;
    (lens: UnknownLens): set_unknown_110;
};
export type set_base_110<T, U> = {
    (obj: T): set_base_111<T, U>;
};
export type set_unknown_110 = {
    <T>(obj: T): set_unknown_111<T>;
};
export type set_base_101<T, U> = {
    (a: U): set_base_111<T, U>;
};
export type set_unknown_101<T> = {
    (a: any): set_unknown_111<T>;
};
export type set_base_011<T, U> = {
    (lens: Lens<T, U>): set_base_111<T, U>;
};
export type set_unknown_011<T> = {
    (lens: UnknownLens): set_unknown_111<T>;
};
export type set_base_111<T, U> = T;
export type set_unknown_111<T> = T;
/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
export declare const slice: slice_000;
export type slice_000 = {
    <T extends List<any>>(a: number, _b: PH, list: T): slice_101<T>;
    <T extends List<any>>(_a: PH, b: number, list: T): slice_011<T>;
    <T extends List<any>>(_a: PH, _b: PH, list: T): slice_001<T>;
    <T extends List<any>>(a: number, b: number, list: T): slice_111<T>;
    (_a: PH, b: number): slice_010;
    (a: number, b: number): slice_110;
    <$SEL extends "111">(): <T extends List<any>>(a: number, b: number, list: T) => slice_111<T>;
    <$SEL extends "11">(): (a: number, b: number) => slice_110;
    <$SEL extends "101">(): <T extends List<any>>(a: number, _b: PH, list: T) => slice_101<T>;
    <$SEL extends "1">(): (a: number) => slice_100;
    <$SEL extends "011">(): <T extends List<any>>(_a: PH, b: number, list: T) => slice_011<T>;
    <$SEL extends "01">(): (_a: PH, b: number) => slice_010;
    <$SEL extends "001">(): <T extends List<any>>(_a: PH, _b: PH, list: T) => slice_001<T>;
    (a: number): slice_100;
};
export type slice_100 = {
    <T extends List<any>>(_b: PH, list: T): slice_101<T>;
    <T extends List<any>>(b: number, list: T): slice_111<T>;
    <$SEL extends "11">(): <T extends List<any>>(b: number, list: T) => slice_111<T>;
    <$SEL extends "1">(): (b: number) => slice_110;
    <$SEL extends "01">(): <T extends List<any>>(_b: PH, list: T) => slice_101<T>;
    (b: number): slice_110;
};
export type slice_010 = {
    <T extends List<any>>(_a: PH, list: T): slice_011<T>;
    <T extends List<any>>(a: number, list: T): slice_111<T>;
    <$SEL extends "11">(): <T extends List<any>>(a: number, list: T) => slice_111<T>;
    <$SEL extends "1">(): (a: number) => slice_110;
    <$SEL extends "01">(): <T extends List<any>>(_a: PH, list: T) => slice_011<T>;
    (a: number): slice_110;
};
export type slice_110 = {
    <T extends List<any>>(list: T): slice_111<T>;
};
export type slice_001<T extends List<any>> = {
    (_a: PH, b: number): slice_011<T>;
    (a: number, b: number): slice_111<T>;
    <$SEL extends "11">(): (a: number, b: number) => slice_111<T>;
    <$SEL extends "1">(): (a: number) => slice_101<T>;
    <$SEL extends "01">(): (_a: PH, b: number) => slice_011<T>;
    (a: number): slice_101<T>;
};
export type slice_101<T extends List<any>> = {
    (b: number): slice_111<T>;
};
export type slice_011<T extends List<any>> = {
    (a: number): slice_111<T>;
};
export type slice_111<T extends List<any>> = T;
/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
export declare const sort: sort_00;
export type sort_00 = {
    <T>(_fn: PH, list: List<T>): sort_01<T>;
    <T>(fn: (a: T, b: T) => number, list: List<T>): sort_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T, b: T) => number, list: List<T>) => sort_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T, b: T) => number) => sort_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => sort_01<T>;
    <T>(fn: (a: T, b: T) => number): sort_10<T>;
};
export type sort_10<T> = {
    (list: List<T>): sort_11<T>;
};
export type sort_01<T> = {
    (fn: (a: T, b: T) => number): sort_11<T>;
};
export type sort_11<T> = T[];
/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
export declare const sortBy: sortBy_00;
export type sortBy_00 = {
    <T>(_fn: PH, list: List<T>): sortBy_01<T>;
    <T>(fn: (a: T) => string, list: List<T>): sortBy_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => string, list: List<T>) => sortBy_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => string) => sortBy_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => sortBy_01<T>;
    <T>(fn: (a: T) => string): sortBy_10<T>;
};
export type sortBy_10<T> = {
    (list: List<T>): sortBy_11<T>;
};
export type sortBy_01<T> = {
    (fn: (a: T) => string): sortBy_11<T>;
};
export type sortBy_11<T> = T[];
/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
export declare const sortWith: sortWith_00;
export type sortWith_00 = {
    <T>(_comparators: PH, list: List<T>): sortWith_01<T>;
    <T>(comparators: List<((a: T, b: T) => number)>, list: List<T>): sortWith_11<T>;
    <$SEL extends "11">(): <T>(comparators: List<((a: T, b: T) => number)>, list: List<T>) => sortWith_11<T>;
    <$SEL extends "1">(): <T>(comparators: List<((a: T, b: T) => number)>) => sortWith_10<T>;
    <$SEL extends "01">(): <T>(_comparators: PH, list: List<T>) => sortWith_01<T>;
    <T>(comparators: List<((a: T, b: T) => number)>): sortWith_10<T>;
};
export type sortWith_10<T> = {
    (list: List<T>): sortWith_11<T>;
};
export type sortWith_01<T> = {
    (comparators: List<((a: T, b: T) => number)>): sortWith_11<T>;
};
export type sortWith_11<T> = T[];
/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
export declare const split: split_00;
export type split_00 = {
    (_sep: PH, str: string): split_01;
    (sep: RegExp | Prop, str: string): split_11;
    <$SEL extends "11">(): (sep: RegExp | Prop, str: string) => split_11;
    <$SEL extends "1">(): (sep: RegExp | Prop) => split_10;
    <$SEL extends "01">(): (_sep: PH, str: string) => split_01;
    (sep: RegExp | Prop): split_10;
};
export type split_10 = {
    (str: string): split_11;
};
export type split_01 = {
    (sep: RegExp | Prop): split_11;
};
export type split_11 = string[];
/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
export declare const splitAt: splitAt_00;
export type splitAt_00 = {
    (_index: PH, list: string): splitAt_string_01;
    <T>(_index: PH, list: List<T>): splitAt_array_01<T>;
    (index: number, list: string): splitAt_string_11;
    <T>(index: number, list: List<T>): splitAt_array_11<T>;
    <$SEL extends "11", $KIND extends "string">(): (index: number, list: string) => splitAt_string_11;
    <$SEL extends "01", $KIND extends "string">(): (_index: PH, list: string) => splitAt_string_01;
    <$SEL extends "11", $KIND extends "array">(): <T>(index: number, list: List<T>) => splitAt_array_11<T>;
    <$SEL extends "01", $KIND extends "array">(): <T>(_index: PH, list: List<T>) => splitAt_array_01<T>;
    <$SEL extends "1">(): (index: number) => splitAt_10;
    (index: number): splitAt_10;
};
export type splitAt_10 = {
    (list: string): splitAt_string_11;
    <$SEL extends "1", $KIND extends "string">(): (list: string) => splitAt_string_11;
    <$SEL extends "1", $KIND extends "array">(): <T>(list: List<T>) => splitAt_array_11<T>;
    <T>(list: List<T>): splitAt_array_11<T>;
};
export type splitAt_string_01 = {
    (index: number): splitAt_string_11;
};
export type splitAt_array_01<T> = {
    (index: number): splitAt_array_11<T>;
};
export type splitAt_string_11 = string[];
export type splitAt_array_11<T> = T[][];
/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
export declare const splitEvery: splitEvery_00;
export type splitEvery_00 = {
    <T, R extends List<T>>(_a: PH, list: R): splitEvery_01<T, R>;
    <T, R extends List<T>>(a: number, list: R): splitEvery_11<T, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(a: number, list: R) => splitEvery_11<T, R>;
    <$SEL extends "1">(): (a: number) => splitEvery_10;
    <$SEL extends "01">(): <T, R extends List<T>>(_a: PH, list: R) => splitEvery_01<T, R>;
    (a: number): splitEvery_10;
};
export type splitEvery_10 = {
    <T, R extends List<T>>(list: R): splitEvery_11<T, R>;
};
export type splitEvery_01<T, R extends List<T>> = {
    (a: number): splitEvery_11<T, R>;
};
export type splitEvery_11<T, R extends List<T>> = R[];
/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
export declare const splitWhen: splitWhen_00;
export type splitWhen_00 = {
    <T, R extends List<T>>(_pred: PH, list: R): splitWhen_01<T, R>;
    <T, R extends List<T>>(pred: Pred<T>, list: R): splitWhen_11<T, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(pred: Pred<T>, list: R) => splitWhen_11<T, R>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => splitWhen_10<T>;
    <$SEL extends "01">(): <T, R extends List<T>>(_pred: PH, list: R) => splitWhen_01<T, R>;
    <T>(pred: Pred<T>): splitWhen_10<T>;
};
export type splitWhen_10<T> = {
    <R extends List<T>>(list: R): splitWhen_11<T, R>;
};
export type splitWhen_01<T, R extends List<T>> = {
    (pred: Pred<T>): splitWhen_11<T, R>;
};
export type splitWhen_11<T, R extends List<T>> = R[];
/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
export declare const subtract: subtract_00;
export type subtract_00 = {
    (_a: PH, b: number): subtract_01;
    (a: number, b: number): subtract_11;
    <$SEL extends "11">(): (a: number, b: number) => subtract_11;
    <$SEL extends "1">(): (a: number) => subtract_10;
    <$SEL extends "01">(): (_a: PH, b: number) => subtract_01;
    (a: number): subtract_10;
};
export type subtract_10 = {
    (b: number): subtract_11;
};
export type subtract_01 = {
    (a: number): subtract_11;
};
export type subtract_11 = number;
/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
export declare const sum: sum_0;
export type sum_0 = {
    (list: List<number>): sum_1;
};
export type sum_1 = number;
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
export declare const symmetricDifference: symmetricDifference_00;
export type symmetricDifference_00 = {
    <T>(_list1: PH, list2: List<T>): symmetricDifference_01<T>;
    <T>(list1: List<T>, list2: List<T>): symmetricDifference_11<T>;
    <$SEL extends "11">(): <T>(list1: List<T>, list2: List<T>) => symmetricDifference_11<T>;
    <$SEL extends "1">(): <T>(list1: List<T>) => symmetricDifference_10<T>;
    <$SEL extends "01">(): <T>(_list1: PH, list2: List<T>) => symmetricDifference_01<T>;
    <T>(list1: List<T>): symmetricDifference_10<T>;
};
export type symmetricDifference_10<T> = {
    (list2: List<T>): symmetricDifference_11<T>;
};
export type symmetricDifference_01<T> = {
    (list1: List<T>): symmetricDifference_11<T>;
};
export type symmetricDifference_11<T> = T[];
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
export declare const symmetricDifferenceWith: symmetricDifferenceWith_000;
export type symmetricDifferenceWith_000 = {
    <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>): symmetricDifferenceWith_101<T>;
    <T>(_pred: PH, list1: List<T>, list2: List<T>): symmetricDifferenceWith_011<T>;
    <T>(_pred: PH, _list1: PH, list2: List<T>): symmetricDifferenceWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): symmetricDifferenceWith_111<T>;
    <T>(_pred: PH, list1: List<T>): symmetricDifferenceWith_010<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>): symmetricDifferenceWith_110<T>;
    <$SEL extends "111">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>) => symmetricDifferenceWith_111<T>;
    <$SEL extends "11">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>) => symmetricDifferenceWith_110<T>;
    <$SEL extends "101">(): <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>) => symmetricDifferenceWith_101<T>;
    <$SEL extends "1">(): <T>(pred: (a: T, b: T) => boolean) => symmetricDifferenceWith_100<T>;
    <$SEL extends "011">(): <T>(_pred: PH, list1: List<T>, list2: List<T>) => symmetricDifferenceWith_011<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list1: List<T>) => symmetricDifferenceWith_010<T>;
    <$SEL extends "001">(): <T>(_pred: PH, _list1: PH, list2: List<T>) => symmetricDifferenceWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean): symmetricDifferenceWith_100<T>;
};
export type symmetricDifferenceWith_100<T> = {
    (_list1: PH, list2: List<T>): symmetricDifferenceWith_101<T>;
    (list1: List<T>, list2: List<T>): symmetricDifferenceWith_111<T>;
    <$SEL extends "11">(): (list1: List<T>, list2: List<T>) => symmetricDifferenceWith_111<T>;
    <$SEL extends "1">(): (list1: List<T>) => symmetricDifferenceWith_110<T>;
    <$SEL extends "01">(): (_list1: PH, list2: List<T>) => symmetricDifferenceWith_101<T>;
    (list1: List<T>): symmetricDifferenceWith_110<T>;
};
export type symmetricDifferenceWith_010<T> = {
    (_pred: PH, list2: List<T>): symmetricDifferenceWith_011<T>;
    (pred: (a: T, b: T) => boolean, list2: List<T>): symmetricDifferenceWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list2: List<T>) => symmetricDifferenceWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => symmetricDifferenceWith_110<T>;
    <$SEL extends "01">(): (_pred: PH, list2: List<T>) => symmetricDifferenceWith_011<T>;
    (pred: (a: T, b: T) => boolean): symmetricDifferenceWith_110<T>;
};
export type symmetricDifferenceWith_110<T> = {
    (list2: List<T>): symmetricDifferenceWith_111<T>;
};
export type symmetricDifferenceWith_001<T> = {
    (_pred: PH, list1: List<T>): symmetricDifferenceWith_011<T>;
    (pred: (a: T, b: T) => boolean, list1: List<T>): symmetricDifferenceWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list1: List<T>) => symmetricDifferenceWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => symmetricDifferenceWith_101<T>;
    <$SEL extends "01">(): (_pred: PH, list1: List<T>) => symmetricDifferenceWith_011<T>;
    (pred: (a: T, b: T) => boolean): symmetricDifferenceWith_101<T>;
};
export type symmetricDifferenceWith_101<T> = {
    (list1: List<T>): symmetricDifferenceWith_111<T>;
};
export type symmetricDifferenceWith_011<T> = {
    (pred: (a: T, b: T) => boolean): symmetricDifferenceWith_111<T>;
};
export type symmetricDifferenceWith_111<T> = T[];
/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
export declare const T: () => true;
/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
export declare const tail: tail_0;
export type tail_0 = {
    <T extends List<any>>(list: T): tail_1<T>;
};
export type tail_1<T extends List<any>> = T;
/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
export declare const take: take_00;
export type take_00 = {
    <T extends List<any>>(_n: PH, xs: T): take_01<T>;
    <T extends List<any>>(n: number, xs: T): take_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, xs: T) => take_11<T>;
    <$SEL extends "1">(): (n: number) => take_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, xs: T) => take_01<T>;
    (n: number): take_10;
};
export type take_10 = {
    <T extends List<any>>(xs: T): take_11<T>;
};
export type take_01<T extends List<any>> = {
    (n: number): take_11<T>;
};
export type take_11<T extends List<any>> = T;
/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
export declare const takeLast: takeLast_00;
export type takeLast_00 = {
    <T extends List<any>>(_n: PH, xs: T): takeLast_01<T>;
    <T extends List<any>>(n: number, xs: T): takeLast_11<T>;
    <$SEL extends "11">(): <T extends List<any>>(n: number, xs: T) => takeLast_11<T>;
    <$SEL extends "1">(): (n: number) => takeLast_10;
    <$SEL extends "01">(): <T extends List<any>>(_n: PH, xs: T) => takeLast_01<T>;
    (n: number): takeLast_10;
};
export type takeLast_10 = {
    <T extends List<any>>(xs: T): takeLast_11<T>;
};
export type takeLast_01<T extends List<any>> = {
    (n: number): takeLast_11<T>;
};
export type takeLast_11<T extends List<any>> = T;
/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
export declare const takeLastWhile: takeLastWhile_00;
export type takeLastWhile_00 = {
    <T, R extends List<T>>(_pred: PH, list: R): takeLastWhile_01<T, R>;
    <T, R extends List<T>>(pred: Pred<T>, list: R): takeLastWhile_11<T, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(pred: Pred<T>, list: R) => takeLastWhile_11<T, R>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => takeLastWhile_10<T>;
    <$SEL extends "01">(): <T, R extends List<T>>(_pred: PH, list: R) => takeLastWhile_01<T, R>;
    <T>(pred: Pred<T>): takeLastWhile_10<T>;
};
export type takeLastWhile_10<T> = {
    <R extends List<T>>(list: R): takeLastWhile_11<T, R>;
};
export type takeLastWhile_01<T, R extends List<T>> = {
    (pred: Pred<T>): takeLastWhile_11<T, R>;
};
export type takeLastWhile_11<T, R extends List<T>> = R;
/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
export declare const takeWhile: takeWhile_00;
export type takeWhile_00 = {
    <T, R extends List<T>>(_pred: PH, list: R): takeWhile_01<T, R>;
    <T, R extends List<T>>(pred: Pred<T>, list: R): takeWhile_11<T, R>;
    <$SEL extends "11">(): <T, R extends List<T>>(pred: Pred<T>, list: R) => takeWhile_11<T, R>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => takeWhile_10<T>;
    <$SEL extends "01">(): <T, R extends List<T>>(_pred: PH, list: R) => takeWhile_01<T, R>;
    <T>(pred: Pred<T>): takeWhile_10<T>;
};
export type takeWhile_10<T> = {
    <R extends List<T>>(list: R): takeWhile_11<T, R>;
};
export type takeWhile_01<T, R extends List<T>> = {
    (pred: Pred<T>): takeWhile_11<T, R>;
};
export type takeWhile_11<T, R extends List<T>> = R;
/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
export declare const tap: tap_00;
export type tap_00 = {
    <T>(_fn: PH, value: T): tap_01<T>;
    <T>(fn: (a: T) => any, value: T): tap_11<T>;
    <$SEL extends "11">(): <T>(fn: (a: T) => any, value: T) => tap_11<T>;
    <$SEL extends "1">(): <T>(fn: (a: T) => any) => tap_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, value: T) => tap_01<T>;
    <T>(fn: (a: T) => any): tap_10<T>;
};
export type tap_10<T> = {
    (value: T): tap_11<T>;
};
export type tap_01<T> = {
    (fn: (a: T) => any): tap_11<T>;
};
export type tap_11<T> = T;
/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
export declare const test: test_00;
export type test_00 = {
    (_regexp: PH, str: Prop): test_01;
    (regexp: RegExp, str: Prop): test_11;
    <$SEL extends "11">(): (regexp: RegExp, str: Prop) => test_11;
    <$SEL extends "1">(): (regexp: RegExp) => test_10;
    <$SEL extends "01">(): (_regexp: PH, str: Prop) => test_01;
    (regexp: RegExp): test_10;
};
export type test_10 = {
    (str: Prop): test_11;
};
export type test_01 = {
    (regexp: RegExp): test_11;
};
export type test_11 = boolean;
/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
export declare const times: times_00;
export type times_00 = {
    (_fn: PH, n: number): times_01;
    <T>(fn: (i: number) => T, n: number): times_11<T>;
    <$SEL extends "11">(): <T>(fn: (i: number) => T, n: number) => times_11<T>;
    <$SEL extends "1">(): <T>(fn: (i: number) => T) => times_10<T>;
    <$SEL extends "01">(): (_fn: PH, n: number) => times_01;
    <T>(fn: (i: number) => T): times_10<T>;
};
export type times_10<T> = {
    (n: number): times_11<T>;
};
export type times_01 = {
    <T>(fn: (i: number) => T): times_11<T>;
};
export type times_11<T> = T[];
/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
export declare const toLower: toLower_0;
export type toLower_0 = {
    (str: string): toLower_1;
};
export type toLower_1 = string;
/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
export declare const toPairs: toPairs_0;
export type toPairs_0 = {
    <T>(obj: Obj<T>): toPairs_1<T>;
};
export type toPairs_1<T> = [string, T][];
/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
export declare const toPairsIn: toPairsIn_0;
export type toPairsIn_0 = {
    <T>(obj: Obj<T>): toPairsIn_generics_1<T>;
    <$SEL extends "1", $KIND extends "generics">(): <T>(obj: Obj<T>) => toPairsIn_generics_1<T>;
    <$SEL extends "1", $KIND extends "non_generic">(): (obj: Object) => toPairsIn_non_generic_1;
    (obj: Object): toPairsIn_non_generic_1;
};
export type toPairsIn_generics_1<T> = [string, T][];
export type toPairsIn_non_generic_1 = [string, any][];
/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
export declare const toString: toString_0;
export type toString_0 = {
    (val: StringRepresentable<string> | any): toString_1;
};
export type toString_1 = string;
/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
export declare const toUpper: toUpper_0;
export type toUpper_0 = {
    (str: string): toUpper_1;
};
export type toUpper_1 = string;
/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the `R.reduced` function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is R.identity. The init
 * function can be used to provide an initial accumulator, but is ignored by
 * transduce.
 *
 * The iteration is performed with R.reduce after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 */
export declare const transduce: transduce_0000;
export type transduce_0000 = {
    <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, _acc: PH, list: List<T>): transduce_1101<T, U>;
    <T>(xf: (arg: List<T>) => List<T>, _fn: PH, acc: List<T>, list: List<T>): transduce_1011<T>;
    <T>(xf: (arg: List<T>) => List<T>, _fn: PH, _acc: PH, list: List<T>): transduce_1001<T>;
    <T>(_xf: PH, _fn: PH, _acc: PH, list: List<T>): transduce_0001<T>;
    <T>(_xf: PH, _fn: PH, acc: List<T>, list: List<T>): transduce_0011<T>;
    <T, U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, _acc: PH, list: List<T>): transduce_0101<T, U>;
    <T, U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>, list: List<T>): transduce_0111<T, U>;
    <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>, list: List<T>): transduce_1111<T, U>;
    <T>(xf: (arg: List<T>) => List<T>, _fn: PH, acc: List<T>): transduce_1010<T>;
    <T, U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>): transduce_0110<T, U>;
    <T>(_xf: PH, _fn: PH, acc: List<T>): transduce_0010<T>;
    <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>): transduce_1110<T, U>;
    <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>): transduce_0100<U>;
    <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>): transduce_1100<T, U>;
    <$SEL extends "1111">(): <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>, list: List<T>) => transduce_1111<T, U>;
    <$SEL extends "111">(): <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>) => transduce_1110<T, U>;
    <$SEL extends "1101">(): <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, _acc: PH, list: List<T>) => transduce_1101<T, U>;
    <$SEL extends "11">(): <T, U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>) => transduce_1100<T, U>;
    <$SEL extends "1011">(): <T>(xf: (arg: List<T>) => List<T>, _fn: PH, acc: List<T>, list: List<T>) => transduce_1011<T>;
    <$SEL extends "101">(): <T>(xf: (arg: List<T>) => List<T>, _fn: PH, acc: List<T>) => transduce_1010<T>;
    <$SEL extends "1001">(): <T>(xf: (arg: List<T>) => List<T>, _fn: PH, _acc: PH, list: List<T>) => transduce_1001<T>;
    <$SEL extends "1">(): <T>(xf: (arg: List<T>) => List<T>) => transduce_1000<T>;
    <$SEL extends "0111">(): <T, U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>, list: List<T>) => transduce_0111<T, U>;
    <$SEL extends "011">(): <T, U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>) => transduce_0110<T, U>;
    <$SEL extends "0101">(): <T, U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, _acc: PH, list: List<T>) => transduce_0101<T, U>;
    <$SEL extends "01">(): <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>) => transduce_0100<U>;
    <$SEL extends "0011">(): <T>(_xf: PH, _fn: PH, acc: List<T>, list: List<T>) => transduce_0011<T>;
    <$SEL extends "001">(): <T>(_xf: PH, _fn: PH, acc: List<T>) => transduce_0010<T>;
    <$SEL extends "0001">(): <T>(_xf: PH, _fn: PH, _acc: PH, list: List<T>) => transduce_0001<T>;
    <T>(xf: (arg: List<T>) => List<T>): transduce_1000<T>;
};
export type transduce_1000<T> = {
    <U>(fn: (acc: List<U>, val: U) => List<U>, _acc: PH, list: List<T>): transduce_1101<T, U>;
    (_fn: PH, acc: List<T>, list: List<T>): transduce_1011<T>;
    (_fn: PH, _acc: PH, list: List<T>): transduce_1001<T>;
    <U>(fn: (acc: List<U>, val: U) => List<U>, acc: List<T>, list: List<T>): transduce_1111<T, U>;
    (_fn: PH, acc: List<T>): transduce_1010<T>;
    <U>(fn: (acc: List<U>, val: U) => List<U>, acc: List<T>): transduce_1110<T, U>;
    <$SEL extends "111">(): <U>(fn: (acc: List<U>, val: U) => List<U>, acc: List<T>, list: List<T>) => transduce_1111<T, U>;
    <$SEL extends "11">(): <U>(fn: (acc: List<U>, val: U) => List<U>, acc: List<T>) => transduce_1110<T, U>;
    <$SEL extends "101">(): <U>(fn: (acc: List<U>, val: U) => List<U>, _acc: PH, list: List<T>) => transduce_1101<T, U>;
    <$SEL extends "1">(): <U>(fn: (acc: List<U>, val: U) => List<U>) => transduce_1100<T, U>;
    <$SEL extends "011">(): (_fn: PH, acc: List<T>, list: List<T>) => transduce_1011<T>;
    <$SEL extends "01">(): (_fn: PH, acc: List<T>) => transduce_1010<T>;
    <$SEL extends "001">(): (_fn: PH, _acc: PH, list: List<T>) => transduce_1001<T>;
    <U>(fn: (acc: List<U>, val: U) => List<U>): transduce_1100<T, U>;
};
export type transduce_0100<U> = {
    <T>(xf: (arg: List<T>) => List<T>, _acc: PH, list: List<T>): transduce_1101<T, U>;
    <T>(_xf: PH, acc: List<T>, list: List<T>): transduce_0111<T, U>;
    <T>(_xf: PH, _acc: PH, list: List<T>): transduce_0101<T, U>;
    <T>(xf: (arg: List<T>) => List<T>, acc: List<T>, list: List<T>): transduce_1111<T, U>;
    <T>(_xf: PH, acc: List<T>): transduce_0110<T, U>;
    <T>(xf: (arg: List<T>) => List<T>, acc: List<T>): transduce_1110<T, U>;
    <$SEL extends "111">(): <T>(xf: (arg: List<T>) => List<T>, acc: List<T>, list: List<T>) => transduce_1111<T, U>;
    <$SEL extends "11">(): <T>(xf: (arg: List<T>) => List<T>, acc: List<T>) => transduce_1110<T, U>;
    <$SEL extends "101">(): <T>(xf: (arg: List<T>) => List<T>, _acc: PH, list: List<T>) => transduce_1101<T, U>;
    <$SEL extends "1">(): <T>(xf: (arg: List<T>) => List<T>) => transduce_1100<T, U>;
    <$SEL extends "011">(): <T>(_xf: PH, acc: List<T>, list: List<T>) => transduce_0111<T, U>;
    <$SEL extends "01">(): <T>(_xf: PH, acc: List<T>) => transduce_0110<T, U>;
    <$SEL extends "001">(): <T>(_xf: PH, _acc: PH, list: List<T>) => transduce_0101<T, U>;
    <T>(xf: (arg: List<T>) => List<T>): transduce_1100<T, U>;
};
export type transduce_1100<T, U> = {
    (_acc: PH, list: List<T>): transduce_1101<T, U>;
    (acc: List<T>, list: List<T>): transduce_1111<T, U>;
    <$SEL extends "11">(): (acc: List<T>, list: List<T>) => transduce_1111<T, U>;
    <$SEL extends "1">(): (acc: List<T>) => transduce_1110<T, U>;
    <$SEL extends "01">(): (_acc: PH, list: List<T>) => transduce_1101<T, U>;
    (acc: List<T>): transduce_1110<T, U>;
};
export type transduce_0010<T> = {
    (xf: (arg: List<T>) => List<T>, _fn: PH, list: List<T>): transduce_1011<T>;
    <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, list: List<T>): transduce_0111<T, U>;
    (_xf: PH, _fn: PH, list: List<T>): transduce_0011<T>;
    <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, list: List<T>): transduce_1111<T, U>;
    <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>): transduce_0110<T, U>;
    <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>): transduce_1110<T, U>;
    <$SEL extends "111">(): <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, list: List<T>) => transduce_1111<T, U>;
    <$SEL extends "11">(): <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>) => transduce_1110<T, U>;
    <$SEL extends "101">(): (xf: (arg: List<T>) => List<T>, _fn: PH, list: List<T>) => transduce_1011<T>;
    <$SEL extends "1">(): (xf: (arg: List<T>) => List<T>) => transduce_1010<T>;
    <$SEL extends "011">(): <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, list: List<T>) => transduce_0111<T, U>;
    <$SEL extends "01">(): <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>) => transduce_0110<T, U>;
    <$SEL extends "001">(): (_xf: PH, _fn: PH, list: List<T>) => transduce_0011<T>;
    (xf: (arg: List<T>) => List<T>): transduce_1010<T>;
};
export type transduce_1010<T> = {
    (_fn: PH, list: List<T>): transduce_1011<T>;
    <U>(fn: (acc: List<U>, val: U) => List<U>, list: List<T>): transduce_1111<T, U>;
    <$SEL extends "11">(): <U>(fn: (acc: List<U>, val: U) => List<U>, list: List<T>) => transduce_1111<T, U>;
    <$SEL extends "1">(): <U>(fn: (acc: List<U>, val: U) => List<U>) => transduce_1110<T, U>;
    <$SEL extends "01">(): (_fn: PH, list: List<T>) => transduce_1011<T>;
    <U>(fn: (acc: List<U>, val: U) => List<U>): transduce_1110<T, U>;
};
export type transduce_0110<T, U> = {
    (_xf: PH, list: List<T>): transduce_0111<T, U>;
    (xf: (arg: List<T>) => List<T>, list: List<T>): transduce_1111<T, U>;
    <$SEL extends "11">(): (xf: (arg: List<T>) => List<T>, list: List<T>) => transduce_1111<T, U>;
    <$SEL extends "1">(): (xf: (arg: List<T>) => List<T>) => transduce_1110<T, U>;
    <$SEL extends "01">(): (_xf: PH, list: List<T>) => transduce_0111<T, U>;
    (xf: (arg: List<T>) => List<T>): transduce_1110<T, U>;
};
export type transduce_1110<T, U> = {
    (list: List<T>): transduce_1111<T, U>;
};
export type transduce_0001<T> = {
    (xf: (arg: List<T>) => List<T>, _fn: PH, acc: List<T>): transduce_1011<T>;
    <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>): transduce_0111<T, U>;
    (_xf: PH, _fn: PH, acc: List<T>): transduce_0011<T>;
    <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>): transduce_1111<T, U>;
    <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>): transduce_0101<T, U>;
    <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>): transduce_1101<T, U>;
    <$SEL extends "111">(): <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>) => transduce_1111<T, U>;
    <$SEL extends "11">(): <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>) => transduce_1101<T, U>;
    <$SEL extends "101">(): (xf: (arg: List<T>) => List<T>, _fn: PH, acc: List<T>) => transduce_1011<T>;
    <$SEL extends "1">(): (xf: (arg: List<T>) => List<T>) => transduce_1001<T>;
    <$SEL extends "011">(): <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>, acc: List<T>) => transduce_0111<T, U>;
    <$SEL extends "01">(): <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>) => transduce_0101<T, U>;
    <$SEL extends "001">(): (_xf: PH, _fn: PH, acc: List<T>) => transduce_0011<T>;
    (xf: (arg: List<T>) => List<T>): transduce_1001<T>;
};
export type transduce_1001<T> = {
    (_fn: PH, acc: List<T>): transduce_1011<T>;
    <U>(fn: (acc: List<U>, val: U) => List<U>, acc: List<T>): transduce_1111<T, U>;
    <$SEL extends "11">(): <U>(fn: (acc: List<U>, val: U) => List<U>, acc: List<T>) => transduce_1111<T, U>;
    <$SEL extends "1">(): <U>(fn: (acc: List<U>, val: U) => List<U>) => transduce_1101<T, U>;
    <$SEL extends "01">(): (_fn: PH, acc: List<T>) => transduce_1011<T>;
    <U>(fn: (acc: List<U>, val: U) => List<U>): transduce_1101<T, U>;
};
export type transduce_0101<T, U> = {
    (_xf: PH, acc: List<T>): transduce_0111<T, U>;
    (xf: (arg: List<T>) => List<T>, acc: List<T>): transduce_1111<T, U>;
    <$SEL extends "11">(): (xf: (arg: List<T>) => List<T>, acc: List<T>) => transduce_1111<T, U>;
    <$SEL extends "1">(): (xf: (arg: List<T>) => List<T>) => transduce_1101<T, U>;
    <$SEL extends "01">(): (_xf: PH, acc: List<T>) => transduce_0111<T, U>;
    (xf: (arg: List<T>) => List<T>): transduce_1101<T, U>;
};
export type transduce_1101<T, U> = {
    (acc: List<T>): transduce_1111<T, U>;
};
export type transduce_0011<T> = {
    <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>): transduce_0111<T, U>;
    <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>): transduce_1111<T, U>;
    <$SEL extends "11">(): <U>(xf: (arg: List<T>) => List<T>, fn: (acc: List<U>, val: U) => List<U>) => transduce_1111<T, U>;
    <$SEL extends "1">(): (xf: (arg: List<T>) => List<T>) => transduce_1011<T>;
    <$SEL extends "01">(): <U>(_xf: PH, fn: (acc: List<U>, val: U) => List<U>) => transduce_0111<T, U>;
    (xf: (arg: List<T>) => List<T>): transduce_1011<T>;
};
export type transduce_1011<T> = {
    <U>(fn: (acc: List<U>, val: U) => List<U>): transduce_1111<T, U>;
};
export type transduce_0111<T, U> = {
    (xf: (arg: List<T>) => List<T>): transduce_1111<T, U>;
};
export type transduce_1111<T, U> = U;
/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 * If some of the rows are shorter than the following rows, their elements are skipped:
 *
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
export declare const transpose: transpose_0;
export type transpose_0 = {
    <T>(list: List<List<T>>): transpose_generics_1_1<T>;
    <$SEL extends "1", $KIND extends "generics_1">(): <T>(list: List<List<T>>) => transpose_generics_1_1<T>;
    <$SEL extends "1", $KIND extends "generics_2">(): (list: List<List<any>>) => transpose_generics_2_1;
    (list: List<List<any>>): transpose_generics_2_1;
};
export type transpose_generics_1_1<T> = T[][];
export type transpose_generics_2_1 = any[][];
/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
export declare const traverse: traverse_000;
export type traverse_000 = {
    <T>(ap: (v: T) => Applicative<T>, _fn: PH, traversable: List<T>): traverse_101<T>;
    <T, U>(_ap: PH, fn: (v: T) => Applicative<U>, traversable: List<T>): traverse_011<T, U>;
    <T>(_ap: PH, _fn: PH, traversable: List<T>): traverse_001<T>;
    <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>): traverse_base_111<T, U>;
    <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>): traverse_general_ADT_case_111<T, U>;
    <T, U>(_ap: PH, fn: (v: T) => Applicative<U>): traverse_010<T, U>;
    <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): traverse_110<T, U>;
    <$SEL extends "111", $KIND extends "base">(): <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>) => traverse_base_111<T, U>;
    <$SEL extends "111", $KIND extends "general_ADT_case">(): <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>, traversable: List<T>) => traverse_general_ADT_case_111<T, U>;
    <$SEL extends "11">(): <T, U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>) => traverse_110<T, U>;
    <$SEL extends "101">(): <T>(ap: (v: T) => Applicative<T>, _fn: PH, traversable: List<T>) => traverse_101<T>;
    <$SEL extends "1">(): <T>(ap: (v: T) => Applicative<T>) => traverse_100<T>;
    <$SEL extends "011">(): <T, U>(_ap: PH, fn: (v: T) => Applicative<U>, traversable: List<T>) => traverse_011<T, U>;
    <$SEL extends "01">(): <T, U>(_ap: PH, fn: (v: T) => Applicative<U>) => traverse_010<T, U>;
    <$SEL extends "001">(): <T>(_ap: PH, _fn: PH, traversable: List<T>) => traverse_001<T>;
    <T>(ap: (v: T) => Applicative<T>): traverse_100<T>;
};
export type traverse_100<T> = {
    (_fn: PH, traversable: List<T>): traverse_101<T>;
    <U>(fn: (v: T) => Applicative<U>, traversable: List<T>): traverse_base_111<T, U>;
    <U>(fn: (v: T) => Applicative<U>, traversable: List<T>): traverse_general_ADT_case_111<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <U>(fn: (v: T) => Applicative<U>, traversable: List<T>) => traverse_base_111<T, U>;
    <$SEL extends "11", $KIND extends "general_ADT_case">(): <U>(fn: (v: T) => Applicative<U>, traversable: List<T>) => traverse_general_ADT_case_111<T, U>;
    <$SEL extends "1">(): <U>(fn: (v: T) => Applicative<U>) => traverse_110<T, U>;
    <$SEL extends "01">(): (_fn: PH, traversable: List<T>) => traverse_101<T>;
    <U>(fn: (v: T) => Applicative<U>): traverse_110<T, U>;
};
export type traverse_010<T, U> = {
    (_ap: PH, traversable: List<T>): traverse_011<T, U>;
    (ap: (v: T) => Applicative<T>, traversable: List<T>): traverse_base_111<T, U>;
    (ap: (v: T) => Applicative<T>, traversable: List<T>): traverse_general_ADT_case_111<T, U>;
    <$SEL extends "11", $KIND extends "base">(): (ap: (v: T) => Applicative<T>, traversable: List<T>) => traverse_base_111<T, U>;
    <$SEL extends "11", $KIND extends "general_ADT_case">(): (ap: (v: T) => Applicative<T>, traversable: List<T>) => traverse_general_ADT_case_111<T, U>;
    <$SEL extends "1">(): (ap: (v: T) => Applicative<T>) => traverse_110<T, U>;
    <$SEL extends "01">(): (_ap: PH, traversable: List<T>) => traverse_011<T, U>;
    (ap: (v: T) => Applicative<T>): traverse_110<T, U>;
};
export type traverse_110<T, U> = {
    (traversable: List<T>): traverse_base_111<T, U>;
    <$SEL extends "1", $KIND extends "base">(): (traversable: List<T>) => traverse_base_111<T, U>;
    <$SEL extends "1", $KIND extends "general_ADT_case">(): (traversable: List<T>) => traverse_general_ADT_case_111<T, U>;
    (traversable: List<T>): traverse_general_ADT_case_111<T, U>;
};
export type traverse_001<T> = {
    <U>(_ap: PH, fn: (v: T) => Applicative<U>): traverse_011<T, U>;
    <U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): traverse_base_111<T, U>;
    <U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>): traverse_general_ADT_case_111<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>) => traverse_base_111<T, U>;
    <$SEL extends "11", $KIND extends "general_ADT_case">(): <U>(ap: (v: T) => Applicative<T>, fn: (v: T) => Applicative<U>) => traverse_general_ADT_case_111<T, U>;
    <$SEL extends "1">(): (ap: (v: T) => Applicative<T>) => traverse_101<T>;
    <$SEL extends "01">(): <U>(_ap: PH, fn: (v: T) => Applicative<U>) => traverse_011<T, U>;
    (ap: (v: T) => Applicative<T>): traverse_101<T>;
};
export type traverse_101<T> = {
    <U>(fn: (v: T) => Applicative<U>): traverse_base_111<T, U>;
    <$SEL extends "1", $KIND extends "base">(): <U>(fn: (v: T) => Applicative<U>) => traverse_base_111<T, U>;
    <$SEL extends "1", $KIND extends "general_ADT_case">(): <U>(fn: (v: T) => Applicative<U>) => traverse_general_ADT_case_111<T, U>;
    <U>(fn: (v: T) => Applicative<U>): traverse_general_ADT_case_111<T, U>;
};
export type traverse_011<T, U> = {
    (ap: (v: T) => Applicative<T>): traverse_base_111<T, U>;
    <$SEL extends "1", $KIND extends "base">(): (ap: (v: T) => Applicative<T>) => traverse_base_111<T, U>;
    <$SEL extends "1", $KIND extends "general_ADT_case">(): (ap: (v: T) => Applicative<T>) => traverse_general_ADT_case_111<T, U>;
    (ap: (v: T) => Applicative<T>): traverse_general_ADT_case_111<T, U>;
};
export type traverse_base_111<T, U> = Applicative<Array<U>>;
export type traverse_general_ADT_case_111<T, U> = Applicative<Traversable<U>>;
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
export declare const trim: trim_0;
export type trim_0 = {
    (str: string): trim_1;
};
export type trim_1 = string;
/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
export declare const tryCatch: tryCatch_00;
export type tryCatch_00 = {
    <T>(_tryer: PH, catcher: Variadic<T>): tryCatch_01<T>;
    <T>(tryer: Variadic<T>, catcher: Variadic<T>): tryCatch_11<T>;
    <$SEL extends "11">(): <T>(tryer: Variadic<T>, catcher: Variadic<T>) => tryCatch_11<T>;
    <$SEL extends "1">(): <T>(tryer: Variadic<T>) => tryCatch_10<T>;
    <$SEL extends "01">(): <T>(_tryer: PH, catcher: Variadic<T>) => tryCatch_01<T>;
    <T>(tryer: Variadic<T>): tryCatch_10<T>;
};
export type tryCatch_10<T> = {
    (catcher: Variadic<T>): tryCatch_11<T>;
};
export type tryCatch_01<T> = {
    (tryer: Variadic<T>): tryCatch_11<T>;
};
export type tryCatch_11<T> = Variadic<T>;
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 */
export declare const type: type_0;
export type type_0 = {
    (val: any): type_1;
};
export type type_1 = string;
/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, R.unapply derives a variadic function from a function which
 * takes an array. R.unapply is the inverse of R.apply.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
export declare const unapply: unapply_0;
export type unapply_0 = {
    <T>(fn: (args: any[]) => T): unapply_1<T>;
};
export type unapply_1<T> = Variadic<T>;
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
export declare const unary: unary_0;
export type unary_0 = {
    <T, U>(fn: (a: T, ...args: any[]) => U): unary_1<T, U>;
};
export type unary_1<T, U> = (a: T) => U;
/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
export declare const uncurryN: uncurryN_00;
export type uncurryN_00 = {
    (_len: PH, fn: (a: any) => any): uncurryN_01;
    <T>(len: number, fn: (a: any) => any): uncurryN_11<T>;
    <$SEL extends "11">(): <T>(len: number, fn: (a: any) => any) => uncurryN_11<T>;
    <$SEL extends "1">(): (len: number) => uncurryN_10;
    <$SEL extends "01">(): (_len: PH, fn: (a: any) => any) => uncurryN_01;
    (len: number): uncurryN_10;
};
export type uncurryN_10 = {
    <T>(fn: (a: any) => any): uncurryN_11<T>;
};
export type uncurryN_01 = {
    <T>(len: number): uncurryN_11<T>;
};
export type uncurryN_11<T> = Variadic<T>;
/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
export declare const unfold: unfold_00;
export type unfold_00 = {
    <T>(_fn: PH, seed: T): unfold_01<T>;
    <T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T): unfold_11<T, TResult>;
    <$SEL extends "11">(): <T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T) => unfold_11<T, TResult>;
    <$SEL extends "1">(): <T, TResult>(fn: (seed: T) => [TResult, T] | false) => unfold_10<T, TResult>;
    <$SEL extends "01">(): <T>(_fn: PH, seed: T) => unfold_01<T>;
    <T, TResult>(fn: (seed: T) => [TResult, T] | false): unfold_10<T, TResult>;
};
export type unfold_10<T, TResult> = {
    (seed: T): unfold_11<T, TResult>;
};
export type unfold_01<T> = {
    <TResult>(fn: (seed: T) => [TResult, T] | false): unfold_11<T, TResult>;
};
export type unfold_11<T, TResult> = TResult[];
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
export declare const union: union_00;
export type union_00 = {
    <T>(_as: PH, bs: List<T>): union_01<T>;
    <T>(as: List<T>, bs: List<T>): union_11<T>;
    <$SEL extends "11">(): <T>(as: List<T>, bs: List<T>) => union_11<T>;
    <$SEL extends "1">(): <T>(as: List<T>) => union_10<T>;
    <$SEL extends "01">(): <T>(_as: PH, bs: List<T>) => union_01<T>;
    <T>(as: List<T>): union_10<T>;
};
export type union_10<T> = {
    (bs: List<T>): union_11<T>;
};
export type union_01<T> = {
    (as: List<T>): union_11<T>;
};
export type union_11<T> = T[];
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
export declare const unionWith: unionWith_000;
export type unionWith_000 = {
    <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>): unionWith_101<T>;
    <T>(_pred: PH, list1: List<T>, list2: List<T>): unionWith_011<T>;
    <T>(_pred: PH, _list1: PH, list2: List<T>): unionWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>): unionWith_111<T>;
    <T>(_pred: PH, list1: List<T>): unionWith_010<T>;
    <T>(pred: (a: T, b: T) => boolean, list1: List<T>): unionWith_110<T>;
    <$SEL extends "111">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>, list2: List<T>) => unionWith_111<T>;
    <$SEL extends "11">(): <T>(pred: (a: T, b: T) => boolean, list1: List<T>) => unionWith_110<T>;
    <$SEL extends "101">(): <T>(pred: (a: T, b: T) => boolean, _list1: PH, list2: List<T>) => unionWith_101<T>;
    <$SEL extends "1">(): <T>(pred: (a: T, b: T) => boolean) => unionWith_100<T>;
    <$SEL extends "011">(): <T>(_pred: PH, list1: List<T>, list2: List<T>) => unionWith_011<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list1: List<T>) => unionWith_010<T>;
    <$SEL extends "001">(): <T>(_pred: PH, _list1: PH, list2: List<T>) => unionWith_001<T>;
    <T>(pred: (a: T, b: T) => boolean): unionWith_100<T>;
};
export type unionWith_100<T> = {
    (_list1: PH, list2: List<T>): unionWith_101<T>;
    (list1: List<T>, list2: List<T>): unionWith_111<T>;
    <$SEL extends "11">(): (list1: List<T>, list2: List<T>) => unionWith_111<T>;
    <$SEL extends "1">(): (list1: List<T>) => unionWith_110<T>;
    <$SEL extends "01">(): (_list1: PH, list2: List<T>) => unionWith_101<T>;
    (list1: List<T>): unionWith_110<T>;
};
export type unionWith_010<T> = {
    (_pred: PH, list2: List<T>): unionWith_011<T>;
    (pred: (a: T, b: T) => boolean, list2: List<T>): unionWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list2: List<T>) => unionWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => unionWith_110<T>;
    <$SEL extends "01">(): (_pred: PH, list2: List<T>) => unionWith_011<T>;
    (pred: (a: T, b: T) => boolean): unionWith_110<T>;
};
export type unionWith_110<T> = {
    (list2: List<T>): unionWith_111<T>;
};
export type unionWith_001<T> = {
    (_pred: PH, list1: List<T>): unionWith_011<T>;
    (pred: (a: T, b: T) => boolean, list1: List<T>): unionWith_111<T>;
    <$SEL extends "11">(): (pred: (a: T, b: T) => boolean, list1: List<T>) => unionWith_111<T>;
    <$SEL extends "1">(): (pred: (a: T, b: T) => boolean) => unionWith_101<T>;
    <$SEL extends "01">(): (_pred: PH, list1: List<T>) => unionWith_011<T>;
    (pred: (a: T, b: T) => boolean): unionWith_101<T>;
};
export type unionWith_101<T> = {
    (list1: List<T>): unionWith_111<T>;
};
export type unionWith_011<T> = {
    (pred: (a: T, b: T) => boolean): unionWith_111<T>;
};
export type unionWith_111<T> = T[];
/**
 * Returns a new list containing only one copy of each element in the original
 * list. `R.equals` is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
export declare const uniq: uniq_0;
export type uniq_0 = {
    <T>(list: List<T>): uniq_1<T>;
};
export type uniq_1<T> = T[];
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. `R.equals` is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
export declare const uniqBy: uniqBy_00;
export type uniqBy_00 = {
    <T>(_fn: PH, list: List<T>): uniqBy_01<T>;
    <T, U>(fn: (a: T) => U, list: List<T>): uniqBy_11<T, U>;
    <$SEL extends "11">(): <T, U>(fn: (a: T) => U, list: List<T>) => uniqBy_11<T, U>;
    <$SEL extends "1">(): <T, U>(fn: (a: T) => U) => uniqBy_10<T, U>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => uniqBy_01<T>;
    <T, U>(fn: (a: T) => U): uniqBy_10<T, U>;
};
export type uniqBy_10<T, U> = {
    (list: List<T>): uniqBy_11<T, U>;
};
export type uniqBy_01<T> = {
    <U>(fn: (a: T) => U): uniqBy_11<T, U>;
};
export type uniqBy_11<T, U> = T[];
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
export declare const uniqWith: uniqWith_00;
export type uniqWith_00 = {
    <T>(_pred: PH, list: List<T>): uniqWith_01<T>;
    <T>(pred: (x: T, y: T) => boolean, list: List<T>): uniqWith_11<T>;
    <$SEL extends "11">(): <T>(pred: (x: T, y: T) => boolean, list: List<T>) => uniqWith_11<T>;
    <$SEL extends "1">(): <T>(pred: (x: T, y: T) => boolean) => uniqWith_10<T>;
    <$SEL extends "01">(): <T>(_pred: PH, list: List<T>) => uniqWith_01<T>;
    <T>(pred: (x: T, y: T) => boolean): uniqWith_10<T>;
};
export type uniqWith_10<T> = {
    (list: List<T>): uniqWith_11<T>;
};
export type uniqWith_01<T> = {
    (pred: (x: T, y: T) => boolean): uniqWith_11<T>;
};
export type uniqWith_11<T> = T[];
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      // coerceArray :: (a|[a]) -> [a]
 *      var coerceArray = R.unless(R.isArrayLike, R.of);
 *      coerceArray([1, 2, 3]); //=> [1, 2, 3]
 *      coerceArray(1);         //=> [1]
 */
export declare const unless: unless_000;
export type unless_000 = {
    <T>(pred: Pred<T>, _whenFalseFn: PH, obj: T): unless_101<T>;
    <T, U>(_pred: PH, whenFalseFn: (a: T) => U, obj: T): unless_011<T, U>;
    <T>(_pred: PH, _whenFalseFn: PH, obj: T): unless_001<T>;
    <T, U>(pred: Pred<T>, whenFalseFn: (a: T) => U, obj: T): unless_111<T, U>;
    <T, U>(_pred: PH, whenFalseFn: (a: T) => U): unless_010<T, U>;
    <T, U>(pred: Pred<T>, whenFalseFn: (a: T) => U): unless_110<T, U>;
    <$SEL extends "111">(): <T, U>(pred: Pred<T>, whenFalseFn: (a: T) => U, obj: T) => unless_111<T, U>;
    <$SEL extends "11">(): <T, U>(pred: Pred<T>, whenFalseFn: (a: T) => U) => unless_110<T, U>;
    <$SEL extends "101">(): <T>(pred: Pred<T>, _whenFalseFn: PH, obj: T) => unless_101<T>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => unless_100<T>;
    <$SEL extends "011">(): <T, U>(_pred: PH, whenFalseFn: (a: T) => U, obj: T) => unless_011<T, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, whenFalseFn: (a: T) => U) => unless_010<T, U>;
    <$SEL extends "001">(): <T>(_pred: PH, _whenFalseFn: PH, obj: T) => unless_001<T>;
    <T>(pred: Pred<T>): unless_100<T>;
};
export type unless_100<T> = {
    (_whenFalseFn: PH, obj: T): unless_101<T>;
    <U>(whenFalseFn: (a: T) => U, obj: T): unless_111<T, U>;
    <$SEL extends "11">(): <U>(whenFalseFn: (a: T) => U, obj: T) => unless_111<T, U>;
    <$SEL extends "1">(): <U>(whenFalseFn: (a: T) => U) => unless_110<T, U>;
    <$SEL extends "01">(): (_whenFalseFn: PH, obj: T) => unless_101<T>;
    <U>(whenFalseFn: (a: T) => U): unless_110<T, U>;
};
export type unless_010<T, U> = {
    (_pred: PH, obj: T): unless_011<T, U>;
    (pred: Pred<T>, obj: T): unless_111<T, U>;
    <$SEL extends "11">(): (pred: Pred<T>, obj: T) => unless_111<T, U>;
    <$SEL extends "1">(): (pred: Pred<T>) => unless_110<T, U>;
    <$SEL extends "01">(): (_pred: PH, obj: T) => unless_011<T, U>;
    (pred: Pred<T>): unless_110<T, U>;
};
export type unless_110<T, U> = {
    (obj: T): unless_111<T, U>;
};
export type unless_001<T> = {
    <U>(_pred: PH, whenFalseFn: (a: T) => U): unless_011<T, U>;
    <U>(pred: Pred<T>, whenFalseFn: (a: T) => U): unless_111<T, U>;
    <$SEL extends "11">(): <U>(pred: Pred<T>, whenFalseFn: (a: T) => U) => unless_111<T, U>;
    <$SEL extends "1">(): (pred: Pred<T>) => unless_101<T>;
    <$SEL extends "01">(): <U>(_pred: PH, whenFalseFn: (a: T) => U) => unless_011<T, U>;
    (pred: Pred<T>): unless_101<T>;
};
export type unless_101<T> = {
    <U>(whenFalseFn: (a: T) => U): unless_111<T, U>;
};
export type unless_011<T, U> = {
    (pred: Pred<T>): unless_111<T, U>;
};
export type unless_111<T, U> = U;
/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
export declare const unnest: unnest_0;
export type unnest_0 = {
    <T>(x: List<List<T>>): unnest_1<T>;
};
export type unnest_1<T> = T[];
/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
export declare const until: until_000;
export type until_000 = {
    <T, U>(pred: Pred<T>, _fn: PH, init: U): until_101<T, U>;
    <T, U>(_pred: PH, fn: (val: T) => U, init: U): until_011<T, U>;
    <U>(_pred: PH, _fn: PH, init: U): until_001<U>;
    <T, U>(pred: Pred<T>, fn: (val: T) => U, init: U): until_111<T, U>;
    <T, U>(_pred: PH, fn: (val: T) => U): until_010<T, U>;
    <T, U>(pred: Pred<T>, fn: (val: T) => U): until_110<T, U>;
    <$SEL extends "111">(): <T, U>(pred: Pred<T>, fn: (val: T) => U, init: U) => until_111<T, U>;
    <$SEL extends "11">(): <T, U>(pred: Pred<T>, fn: (val: T) => U) => until_110<T, U>;
    <$SEL extends "101">(): <T, U>(pred: Pred<T>, _fn: PH, init: U) => until_101<T, U>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => until_100<T>;
    <$SEL extends "011">(): <T, U>(_pred: PH, fn: (val: T) => U, init: U) => until_011<T, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, fn: (val: T) => U) => until_010<T, U>;
    <$SEL extends "001">(): <U>(_pred: PH, _fn: PH, init: U) => until_001<U>;
    <T>(pred: Pred<T>): until_100<T>;
};
export type until_100<T> = {
    <U>(_fn: PH, init: U): until_101<T, U>;
    <U>(fn: (val: T) => U, init: U): until_111<T, U>;
    <$SEL extends "11">(): <U>(fn: (val: T) => U, init: U) => until_111<T, U>;
    <$SEL extends "1">(): <U>(fn: (val: T) => U) => until_110<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, init: U) => until_101<T, U>;
    <U>(fn: (val: T) => U): until_110<T, U>;
};
export type until_010<T, U> = {
    (_pred: PH, init: U): until_011<T, U>;
    (pred: Pred<T>, init: U): until_111<T, U>;
    <$SEL extends "11">(): (pred: Pred<T>, init: U) => until_111<T, U>;
    <$SEL extends "1">(): (pred: Pred<T>) => until_110<T, U>;
    <$SEL extends "01">(): (_pred: PH, init: U) => until_011<T, U>;
    (pred: Pred<T>): until_110<T, U>;
};
export type until_110<T, U> = {
    (init: U): until_111<T, U>;
};
export type until_001<U> = {
    <T>(_pred: PH, fn: (val: T) => U): until_011<T, U>;
    <T>(pred: Pred<T>, fn: (val: T) => U): until_111<T, U>;
    <$SEL extends "11">(): <T>(pred: Pred<T>, fn: (val: T) => U) => until_111<T, U>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => until_101<T, U>;
    <$SEL extends "01">(): <T>(_pred: PH, fn: (val: T) => U) => until_011<T, U>;
    <T>(pred: Pred<T>): until_101<T, U>;
};
export type until_101<T, U> = {
    (fn: (val: T) => U): until_111<T, U>;
};
export type until_011<T, U> = {
    (pred: Pred<T>): until_111<T, U>;
};
export type until_111<T, U> = U;
/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
export declare const update: update_000;
export type update_000 = {
    <T>(index: number, _value: PH, list: List<T>): update_101<T>;
    <T>(_index: PH, value: T, list: List<T>): update_011<T>;
    <T>(_index: PH, _value: PH, list: List<T>): update_001<T>;
    <T>(index: number, value: T, list: List<T>): update_111<T>;
    <T>(_index: PH, value: T): update_010<T>;
    <T>(index: number, value: T): update_110<T>;
    <$SEL extends "111">(): <T>(index: number, value: T, list: List<T>) => update_111<T>;
    <$SEL extends "11">(): <T>(index: number, value: T) => update_110<T>;
    <$SEL extends "101">(): <T>(index: number, _value: PH, list: List<T>) => update_101<T>;
    <$SEL extends "1">(): (index: number) => update_100;
    <$SEL extends "011">(): <T>(_index: PH, value: T, list: List<T>) => update_011<T>;
    <$SEL extends "01">(): <T>(_index: PH, value: T) => update_010<T>;
    <$SEL extends "001">(): <T>(_index: PH, _value: PH, list: List<T>) => update_001<T>;
    (index: number): update_100;
};
export type update_100 = {
    <T>(_value: PH, list: List<T>): update_101<T>;
    <T>(value: T, list: List<T>): update_111<T>;
    <$SEL extends "11">(): <T>(value: T, list: List<T>) => update_111<T>;
    <$SEL extends "1">(): <T>(value: T) => update_110<T>;
    <$SEL extends "01">(): <T>(_value: PH, list: List<T>) => update_101<T>;
    <T>(value: T): update_110<T>;
};
export type update_010<T> = {
    (_index: PH, list: List<T>): update_011<T>;
    (index: number, list: List<T>): update_111<T>;
    <$SEL extends "11">(): (index: number, list: List<T>) => update_111<T>;
    <$SEL extends "1">(): (index: number) => update_110<T>;
    <$SEL extends "01">(): (_index: PH, list: List<T>) => update_011<T>;
    (index: number): update_110<T>;
};
export type update_110<T> = {
    (list: List<T>): update_111<T>;
};
export type update_001<T> = {
    (_index: PH, value: T): update_011<T>;
    (index: number, value: T): update_111<T>;
    <$SEL extends "11">(): (index: number, value: T) => update_111<T>;
    <$SEL extends "1">(): (index: number) => update_101<T>;
    <$SEL extends "01">(): (_index: PH, value: T) => update_011<T>;
    (index: number): update_101<T>;
};
export type update_101<T> = {
    (value: T): update_111<T>;
};
export type update_011<T> = {
    (index: number): update_111<T>;
};
export type update_111<T> = T[];
/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
export declare const useWith: useWith_00;
export type useWith_00 = {
    (_fn: PH, transformers: List<Function>): useWith_01;
    <T>(fn: Variadic<T>, transformers: List<Function>): useWith_11<T>;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, transformers: List<Function>) => useWith_11<T>;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => useWith_10<T>;
    <$SEL extends "01">(): (_fn: PH, transformers: List<Function>) => useWith_01;
    <T>(fn: Variadic<T>): useWith_10<T>;
};
export type useWith_10<T> = {
    (transformers: List<Function>): useWith_11<T>;
};
export type useWith_01 = {
    <T>(fn: Variadic<T>): useWith_11<T>;
};
export type useWith_11<T> = Variadic<T>;
/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
export declare const values: values_0;
export type values_0 = {
    <T>(obj: Struct<T>): values_Struct_1<T>;
    <$SEL extends "1", $KIND extends "Struct">(): <T>(obj: Struct<T>) => values_Struct_1<T>;
    <$SEL extends "1", $KIND extends "Object">(): (obj: Object) => values_Object_1;
    (obj: Object): values_Object_1;
};
export type values_Struct_1<T> = T[];
export type values_Object_1 = any[];
/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
export declare const valuesIn: valuesIn_0;
export type valuesIn_0 = {
    <T>(obj: Struct<T>): valuesIn_Struct_1<T>;
    <$SEL extends "1", $KIND extends "Struct">(): <T>(obj: Struct<T>) => valuesIn_Struct_1<T>;
    <$SEL extends "1", $KIND extends "Object">(): (obj: Object) => valuesIn_Object_1;
    (obj: Object): valuesIn_Object_1;
};
export type valuesIn_Struct_1<T> = T[];
export type valuesIn_Object_1 = any[];
/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
export declare const view: view_00;
export type view_00 = {
    <T>(_lens: PH, obj: T): view_smart_approach__unreliable_01<T>;
    (_lens: PH, obj: Struct<any>): view_lens_with_type_manually_set_01;
    (_lens: PH, obj: Struct<any>): view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__01;
    <T, U>(lens: Lens<T, U>, obj: T): view_smart_approach__unreliable_11<T, U>;
    <T>(lens: ManualLens<T>, obj: Struct<any>): view_lens_with_type_manually_set_11<T>;
    (lens: UnknownLens, obj: Struct<any>): view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__11;
    <T, U>(lens: Lens<T, U>): view_smart_approach__unreliable_10<T, U>;
    <T>(lens: ManualLens<T>): view_lens_with_type_manually_set_10<T>;
    <$SEL extends "11", $KIND extends "smart_approach__unreliable">(): <T, U>(lens: Lens<T, U>, obj: T) => view_smart_approach__unreliable_11<T, U>;
    <$SEL extends "1", $KIND extends "smart_approach__unreliable">(): <T, U>(lens: Lens<T, U>) => view_smart_approach__unreliable_10<T, U>;
    <$SEL extends "01", $KIND extends "smart_approach__unreliable">(): <T>(_lens: PH, obj: T) => view_smart_approach__unreliable_01<T>;
    <$SEL extends "11", $KIND extends "lens_with_type_manually_set">(): <T>(lens: ManualLens<T>, obj: Struct<any>) => view_lens_with_type_manually_set_11<T>;
    <$SEL extends "1", $KIND extends "lens_with_type_manually_set">(): <T>(lens: ManualLens<T>) => view_lens_with_type_manually_set_10<T>;
    <$SEL extends "01", $KIND extends "lens_with_type_manually_set">(): (_lens: PH, obj: Struct<any>) => view_lens_with_type_manually_set_01;
    <$SEL extends "11", $KIND extends "unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case_">(): (lens: UnknownLens, obj: Struct<any>) => view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__11;
    <$SEL extends "1", $KIND extends "unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case_">(): (lens: UnknownLens) => view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__10;
    <$SEL extends "01", $KIND extends "unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case_">(): (_lens: PH, obj: Struct<any>) => view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__01;
    (lens: UnknownLens): view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__10;
};
export type view_smart_approach__unreliable_10<T, U> = {
    (obj: T): view_smart_approach__unreliable_11<T, U>;
};
export type view_lens_with_type_manually_set_10<T> = {
    (obj: Struct<any>): view_lens_with_type_manually_set_11<T>;
};
export type view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__10 = {
    (obj: Struct<any>): view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__11;
};
export type view_smart_approach__unreliable_01<T> = {
    <U>(lens: Lens<T, U>): view_smart_approach__unreliable_11<T, U>;
};
export type view_lens_with_type_manually_set_01 = {
    <T>(lens: ManualLens<T>): view_lens_with_type_manually_set_11<T>;
};
export type view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__01 = {
    (lens: UnknownLens): view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__11;
};
export type view_smart_approach__unreliable_11<T, U> = U;
export type view_lens_with_type_manually_set_11<T> = T;
export type view_unknown_lens__manually_supply_return_type__does_this_add_to_the_above_case__11 = any;
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
export declare const when: when_000;
export type when_000 = {
    <T>(pred: Pred<T>, _whenTrueFn: PH, obj: T): when_101<T>;
    <T, U>(_pred: PH, whenTrueFn: (a: T) => U, obj: T): when_011<T, U>;
    <T>(_pred: PH, _whenTrueFn: PH, obj: T): when_001<T>;
    <T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U, obj: T): when_111<T, U>;
    <T, U>(_pred: PH, whenTrueFn: (a: T) => U): when_010<T, U>;
    <T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U): when_110<T, U>;
    <$SEL extends "111">(): <T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U, obj: T) => when_111<T, U>;
    <$SEL extends "11">(): <T, U>(pred: Pred<T>, whenTrueFn: (a: T) => U) => when_110<T, U>;
    <$SEL extends "101">(): <T>(pred: Pred<T>, _whenTrueFn: PH, obj: T) => when_101<T>;
    <$SEL extends "1">(): <T>(pred: Pred<T>) => when_100<T>;
    <$SEL extends "011">(): <T, U>(_pred: PH, whenTrueFn: (a: T) => U, obj: T) => when_011<T, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, whenTrueFn: (a: T) => U) => when_010<T, U>;
    <$SEL extends "001">(): <T>(_pred: PH, _whenTrueFn: PH, obj: T) => when_001<T>;
    <T>(pred: Pred<T>): when_100<T>;
};
export type when_100<T> = {
    (_whenTrueFn: PH, obj: T): when_101<T>;
    <U>(whenTrueFn: (a: T) => U, obj: T): when_111<T, U>;
    <$SEL extends "11">(): <U>(whenTrueFn: (a: T) => U, obj: T) => when_111<T, U>;
    <$SEL extends "1">(): <U>(whenTrueFn: (a: T) => U) => when_110<T, U>;
    <$SEL extends "01">(): (_whenTrueFn: PH, obj: T) => when_101<T>;
    <U>(whenTrueFn: (a: T) => U): when_110<T, U>;
};
export type when_010<T, U> = {
    (_pred: PH, obj: T): when_011<T, U>;
    (pred: Pred<T>, obj: T): when_111<T, U>;
    <$SEL extends "11">(): (pred: Pred<T>, obj: T) => when_111<T, U>;
    <$SEL extends "1">(): (pred: Pred<T>) => when_110<T, U>;
    <$SEL extends "01">(): (_pred: PH, obj: T) => when_011<T, U>;
    (pred: Pred<T>): when_110<T, U>;
};
export type when_110<T, U> = {
    (obj: T): when_111<T, U>;
};
export type when_001<T> = {
    <U>(_pred: PH, whenTrueFn: (a: T) => U): when_011<T, U>;
    <U>(pred: Pred<T>, whenTrueFn: (a: T) => U): when_111<T, U>;
    <$SEL extends "11">(): <U>(pred: Pred<T>, whenTrueFn: (a: T) => U) => when_111<T, U>;
    <$SEL extends "1">(): (pred: Pred<T>) => when_101<T>;
    <$SEL extends "01">(): <U>(_pred: PH, whenTrueFn: (a: T) => U) => when_011<T, U>;
    (pred: Pred<T>): when_101<T>;
};
export type when_101<T> = {
    <U>(whenTrueFn: (a: T) => U): when_111<T, U>;
};
export type when_011<T, U> = {
    (pred: Pred<T>): when_111<T, U>;
};
export type when_111<T, U> = U;
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as `filter` and `find`.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(__, 10),
 *        y: R.lt(__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
export declare const where: where_00;
export type where_00 = {
    <T>(_spec: PH, testObj: Obj<T>): where_homogeneous_version_01<T>;
    <U>(_spec: PH, testObj: U): where_DIY__fill_in_the_type_params_yourself__version_01<U>;
    <T>(spec: Obj<Pred<T>>, testObj: Obj<T>): where_homogeneous_version_11<T>;
    <T, U>(spec: T, testObj: U): where_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
    <T>(spec: Obj<Pred<T>>): where_homogeneous_version_10<T>;
    <$SEL extends "11", $KIND extends "homogeneous_version">(): <T>(spec: Obj<Pred<T>>, testObj: Obj<T>) => where_homogeneous_version_11<T>;
    <$SEL extends "1", $KIND extends "homogeneous_version">(): <T>(spec: Obj<Pred<T>>) => where_homogeneous_version_10<T>;
    <$SEL extends "01", $KIND extends "homogeneous_version">(): <T>(_spec: PH, testObj: Obj<T>) => where_homogeneous_version_01<T>;
    <$SEL extends "11", $KIND extends "DIY__fill_in_the_type_params_yourself__version">(): <T, U>(spec: T, testObj: U) => where_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
    <$SEL extends "1", $KIND extends "DIY__fill_in_the_type_params_yourself__version">(): <T>(spec: T) => where_DIY__fill_in_the_type_params_yourself__version_10<T>;
    <$SEL extends "01", $KIND extends "DIY__fill_in_the_type_params_yourself__version">(): <U>(_spec: PH, testObj: U) => where_DIY__fill_in_the_type_params_yourself__version_01<U>;
    <T>(spec: T): where_DIY__fill_in_the_type_params_yourself__version_10<T>;
};
export type where_homogeneous_version_10<T> = {
    (testObj: Obj<T>): where_homogeneous_version_11<T>;
};
export type where_DIY__fill_in_the_type_params_yourself__version_10<T> = {
    <U>(testObj: U): where_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
};
export type where_homogeneous_version_01<T> = {
    (spec: Obj<Pred<T>>): where_homogeneous_version_11<T>;
};
export type where_DIY__fill_in_the_type_params_yourself__version_01<U> = {
    <T>(spec: T): where_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
};
export type where_homogeneous_version_11<T> = boolean;
export type where_DIY__fill_in_the_type_params_yourself__version_11<T, U> = boolean;
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in `R.equals` terms) as accessing that property of the spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
export declare const whereEq: whereEq_00;
export type whereEq_00 = {
    <T extends Obj<any>>(_spec: PH, testObj: T): whereEq_heterogeneous_version_01<T>;
    <T>(_spec: PH, testObj: Obj<T>): whereEq_homogeneous_version_01<T>;
    <U>(_spec: PH, testObj: U): whereEq_DIY__fill_in_the_type_params_yourself__version_01<U>;
    <T extends Obj<any>>(spec: Partial<T>, testObj: T): whereEq_heterogeneous_version_11<T>;
    <T>(spec: Obj<T>, testObj: Obj<T>): whereEq_homogeneous_version_11<T>;
    <T, U>(spec: T, testObj: U): whereEq_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
    <T extends Obj<any>>(spec: Partial<T>): whereEq_heterogeneous_version_10<T>;
    <T>(spec: Obj<T>): whereEq_homogeneous_version_10<T>;
    <$SEL extends "11", $KIND extends "heterogeneous_version">(): <T extends Obj<any>>(spec: Partial<T>, testObj: T) => whereEq_heterogeneous_version_11<T>;
    <$SEL extends "1", $KIND extends "heterogeneous_version">(): <T extends Obj<any>>(spec: Partial<T>) => whereEq_heterogeneous_version_10<T>;
    <$SEL extends "01", $KIND extends "heterogeneous_version">(): <T extends Obj<any>>(_spec: PH, testObj: T) => whereEq_heterogeneous_version_01<T>;
    <$SEL extends "11", $KIND extends "homogeneous_version">(): <T>(spec: Obj<T>, testObj: Obj<T>) => whereEq_homogeneous_version_11<T>;
    <$SEL extends "1", $KIND extends "homogeneous_version">(): <T>(spec: Obj<T>) => whereEq_homogeneous_version_10<T>;
    <$SEL extends "01", $KIND extends "homogeneous_version">(): <T>(_spec: PH, testObj: Obj<T>) => whereEq_homogeneous_version_01<T>;
    <$SEL extends "11", $KIND extends "DIY__fill_in_the_type_params_yourself__version">(): <T, U>(spec: T, testObj: U) => whereEq_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
    <$SEL extends "1", $KIND extends "DIY__fill_in_the_type_params_yourself__version">(): <T>(spec: T) => whereEq_DIY__fill_in_the_type_params_yourself__version_10<T>;
    <$SEL extends "01", $KIND extends "DIY__fill_in_the_type_params_yourself__version">(): <U>(_spec: PH, testObj: U) => whereEq_DIY__fill_in_the_type_params_yourself__version_01<U>;
    <T>(spec: T): whereEq_DIY__fill_in_the_type_params_yourself__version_10<T>;
};
export type whereEq_heterogeneous_version_10<T extends Obj<any>> = {
    (testObj: T): whereEq_heterogeneous_version_11<T>;
};
export type whereEq_homogeneous_version_10<T> = {
    (testObj: Obj<T>): whereEq_homogeneous_version_11<T>;
};
export type whereEq_DIY__fill_in_the_type_params_yourself__version_10<T> = {
    <U>(testObj: U): whereEq_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
};
export type whereEq_heterogeneous_version_01<T extends Obj<any>> = {
    (spec: Partial<T>): whereEq_heterogeneous_version_11<T>;
};
export type whereEq_homogeneous_version_01<T> = {
    (spec: Obj<T>): whereEq_homogeneous_version_11<T>;
};
export type whereEq_DIY__fill_in_the_type_params_yourself__version_01<U> = {
    <T>(spec: T): whereEq_DIY__fill_in_the_type_params_yourself__version_11<T, U>;
};
export type whereEq_heterogeneous_version_11<T extends Obj<any>> = boolean;
export type whereEq_homogeneous_version_11<T> = boolean;
export type whereEq_DIY__fill_in_the_type_params_yourself__version_11<T, U> = boolean;
/**
 * Returns a new list without values in the first argument.
 * `R.equals` is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
export declare const without: without_00;
export type without_00 = {
    <T>(_list1: PH, list2: List<T>): without_01<T>;
    <T>(list1: List<T>, list2: List<T>): without_11<T>;
    <$SEL extends "11">(): <T>(list1: List<T>, list2: List<T>) => without_11<T>;
    <$SEL extends "1">(): <T>(list1: List<T>) => without_10<T>;
    <$SEL extends "01">(): <T>(_list1: PH, list2: List<T>) => without_01<T>;
    <T>(list1: List<T>): without_10<T>;
};
export type without_10<T> = {
    (list2: List<T>): without_11<T>;
};
export type without_01<T> = {
    (list1: List<T>): without_11<T>;
};
export type without_11<T> = T[];
/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
export declare const xprod: xprod_00;
export type xprod_00 = {
    <V>(_as: PH, bs: List<V>): xprod_01<V>;
    <K, V>(as: List<K>, bs: List<V>): xprod_11<K, V>;
    <$SEL extends "11">(): <K, V>(as: List<K>, bs: List<V>) => xprod_11<K, V>;
    <$SEL extends "1">(): <K>(as: List<K>) => xprod_10<K>;
    <$SEL extends "01">(): <V>(_as: PH, bs: List<V>) => xprod_01<V>;
    <K>(as: List<K>): xprod_10<K>;
};
export type xprod_10<K> = {
    <V>(bs: List<V>): xprod_11<K, V>;
};
export type xprod_01<V> = {
    <K>(as: List<K>): xprod_11<K, V>;
};
export type xprod_11<K, V> = KeyValuePair<K, V>[];
/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
export declare const zip: zip_00;
export type zip_00 = {
    <V>(_list1: PH, list2: List<V>): zip_01<V>;
    <K, V>(list1: List<K>, list2: List<V>): zip_11<K, V>;
    <$SEL extends "11">(): <K, V>(list1: List<K>, list2: List<V>) => zip_11<K, V>;
    <$SEL extends "1">(): <K>(list1: List<K>) => zip_10<K>;
    <$SEL extends "01">(): <V>(_list1: PH, list2: List<V>) => zip_01<V>;
    <K>(list1: List<K>): zip_10<K>;
};
export type zip_10<K> = {
    <V>(list2: List<V>): zip_11<K, V>;
};
export type zip_01<V> = {
    <K>(list1: List<K>): zip_11<K, V>;
};
export type zip_11<K, V> = KeyValuePair<K, V>[];
/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
export declare const zipObj: zipObj_00;
export type zipObj_00 = {
    <T>(_keys: PH, values: List<T>): zipObj_01<T>;
    <T>(keys: List<Prop>, values: List<T>): zipObj_11<T>;
    <$SEL extends "11">(): <T>(keys: List<Prop>, values: List<T>) => zipObj_11<T>;
    <$SEL extends "1">(): (keys: List<Prop>) => zipObj_10;
    <$SEL extends "01">(): <T>(_keys: PH, values: List<T>) => zipObj_01<T>;
    (keys: List<Prop>): zipObj_10;
};
export type zipObj_10 = {
    <T>(values: List<T>): zipObj_11<T>;
};
export type zipObj_01<T> = {
    (keys: List<Prop>): zipObj_11<T>;
};
export type zipObj_11<T> = Obj<T>;
/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
export declare const zipWith: zipWith_000;
export type zipWith_000 = {
    <T, U, TResult>(fn: (x: T, y: U) => TResult, _list1: PH, list2: List<U>): zipWith_101<T, U, TResult>;
    <T, U>(_fn: PH, list1: List<T>, list2: List<U>): zipWith_011<T, U>;
    <U>(_fn: PH, _list1: PH, list2: List<U>): zipWith_001<U>;
    <T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>, list2: List<U>): zipWith_111<T, U, TResult>;
    <T>(_fn: PH, list1: List<T>): zipWith_010<T>;
    <T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>): zipWith_110<T, U, TResult>;
    <$SEL extends "111">(): <T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>, list2: List<U>) => zipWith_111<T, U, TResult>;
    <$SEL extends "11">(): <T, U, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>) => zipWith_110<T, U, TResult>;
    <$SEL extends "101">(): <T, U, TResult>(fn: (x: T, y: U) => TResult, _list1: PH, list2: List<U>) => zipWith_101<T, U, TResult>;
    <$SEL extends "1">(): <T, U, TResult>(fn: (x: T, y: U) => TResult) => zipWith_100<T, U, TResult>;
    <$SEL extends "011">(): <T, U>(_fn: PH, list1: List<T>, list2: List<U>) => zipWith_011<T, U>;
    <$SEL extends "01">(): <T>(_fn: PH, list1: List<T>) => zipWith_010<T>;
    <$SEL extends "001">(): <U>(_fn: PH, _list1: PH, list2: List<U>) => zipWith_001<U>;
    <T, U, TResult>(fn: (x: T, y: U) => TResult): zipWith_100<T, U, TResult>;
};
export type zipWith_100<T, U, TResult> = {
    (_list1: PH, list2: List<U>): zipWith_101<T, U, TResult>;
    (list1: List<T>, list2: List<U>): zipWith_111<T, U, TResult>;
    <$SEL extends "11">(): (list1: List<T>, list2: List<U>) => zipWith_111<T, U, TResult>;
    <$SEL extends "1">(): (list1: List<T>) => zipWith_110<T, U, TResult>;
    <$SEL extends "01">(): (_list1: PH, list2: List<U>) => zipWith_101<T, U, TResult>;
    (list1: List<T>): zipWith_110<T, U, TResult>;
};
export type zipWith_010<T> = {
    <U>(_fn: PH, list2: List<U>): zipWith_011<T, U>;
    <U, TResult>(fn: (x: T, y: U) => TResult, list2: List<U>): zipWith_111<T, U, TResult>;
    <$SEL extends "11">(): <U, TResult>(fn: (x: T, y: U) => TResult, list2: List<U>) => zipWith_111<T, U, TResult>;
    <$SEL extends "1">(): <U, TResult>(fn: (x: T, y: U) => TResult) => zipWith_110<T, U, TResult>;
    <$SEL extends "01">(): <U>(_fn: PH, list2: List<U>) => zipWith_011<T, U>;
    <U, TResult>(fn: (x: T, y: U) => TResult): zipWith_110<T, U, TResult>;
};
export type zipWith_110<T, U, TResult> = {
    (list2: List<U>): zipWith_111<T, U, TResult>;
};
export type zipWith_001<U> = {
    <T>(_fn: PH, list1: List<T>): zipWith_011<T, U>;
    <T, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>): zipWith_111<T, U, TResult>;
    <$SEL extends "11">(): <T, TResult>(fn: (x: T, y: U) => TResult, list1: List<T>) => zipWith_111<T, U, TResult>;
    <$SEL extends "1">(): <T, TResult>(fn: (x: T, y: U) => TResult) => zipWith_101<T, U, TResult>;
    <$SEL extends "01">(): <T>(_fn: PH, list1: List<T>) => zipWith_011<T, U>;
    <T, TResult>(fn: (x: T, y: U) => TResult): zipWith_101<T, U, TResult>;
};
export type zipWith_101<T, U, TResult> = {
    (list1: List<T>): zipWith_111<T, U, TResult>;
};
export type zipWith_011<T, U> = {
    <TResult>(fn: (x: T, y: U) => TResult): zipWith_111<T, U, TResult>;
};
export type zipWith_111<T, U, TResult> = TResult[];

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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const allPass: allPass_0;
export type allPass_0 = {
    <T>(pred: Pred<T>[]): allPass_1<T>;
};
export type allPass_1<T> = Pred<T>;
/**
 * TODO
 */
export declare const always: always_0;
export type always_0 = {
    <T>(val: T): always_1<T>;
};
export type always_1<T> = () => T;
/**
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const anyPass: anyPass_0;
export type anyPass_0 = {
    <T>(preds: Pred<T>[]): anyPass_1<T>;
};
export type anyPass_1<T> = Pred<T>;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const applySpec: applySpec_0;
export type applySpec_0 = {
    <T>(obj: any): applySpec_1<T>;
};
export type applySpec_1<T> = Variadic<T>;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const comparator: comparator_0;
export type comparator_0 = {
    <T>(pred: (a: T, b: T) => boolean): comparator_1<T>;
};
export type comparator_1<T> = (x: T, y: T) => number;
/**
 * TODO
 */
export declare const complement: complement_0;
export type complement_0 = {
    (pred: Variadic<boolean>): complement_1;
};
export type complement_1 = Variadic<boolean>;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const cond: cond_0;
export type cond_0 = {
    <T, U>(fns: [Pred<T>, (v: T) => U][]): cond_1<T, U>;
};
export type cond_1<T, U> = (v: T) => U;
/**
 * TODO
 */
export declare const construct: construct_0;
export type construct_0 = {
    (fn: Function): construct_1;
};
export type construct_1 = Function;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare function curry<T1, TResult>(fn: (a: T1) => TResult): CurriedFunction1<T1, TResult>;
export declare function curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
export declare function curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
export declare function curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
export declare function curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1, T2, T3, T4, T5, TResult>;
export declare function curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;
/**
 * TODO
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
 * TODO
 */
export declare const dec: dec_0;
export type dec_0 = {
    (n: number): dec_1;
};
export type dec_1 = number;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const dropRepeats: dropRepeats_0;
export type dropRepeats_0 = {
    <T>(list: List<T>): dropRepeats_1<T>;
};
export type dropRepeats_1<T> = T[];
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const empty: empty_0;
export type empty_0 = {
    <T>(x: T): empty_1<T>;
};
export type empty_1<T> = T;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const F: () => false;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const flatten: flatten_0;
export type flatten_0 = {
    <T>(x: NestedArray<T>): flatten_1<T>;
};
export type flatten_1<T> = T[];
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const fromPairs: fromPairs_0;
export type fromPairs_0 = {
    <V>(pairs: List<KeyValuePair<Prop, V>>): fromPairs_1<V>;
};
export type fromPairs_1<V> = Obj<V>;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const identity: identity_0;
export type identity_0 = {
    <T>(a: T): identity_1<T>;
};
export type identity_1<T> = T;
/**
 * TODO
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
 * TODO
 */
export declare const inc: inc_0;
export type inc_0 = {
    (n: number): inc_1;
};
export type inc_1 = number;
/**
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const init: init_0;
export type init_0 = {
    <T extends List<any>>(list: T): init_1<T>;
};
export type init_1<T extends List<any>> = T;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const invert: invert_0;
export type invert_0 = {
    (obj: Struct<Prop>): invert_1;
};
export type invert_1 = Obj<List<string>>;
/**
 * TODO
 */
export declare const invertObj: invertObj_0;
export type invertObj_0 = {
    (obj: Struct<Prop>): invertObj_1;
};
export type invertObj_1 = Obj<string>;
/**
 * TODO
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
 * TODO
 */
export declare const is: is_00;
export type is_00 = {
    (_ctor: PH, val: any): is_01;
    <T>(ctor: Type<T>, val: any): is_11<T>;
    <$SEL extends "11">(): <T>(ctor: Type<T>, val: any) => is_11<T>;
    <$SEL extends "1">(): <T>(ctor: Type<T>) => is_10<T>;
    <$SEL extends "01">(): (_ctor: PH, val: any) => is_01;
    <T>(ctor: Type<T>): is_10<T>;
};
export type is_10<T> = {
    (val: any): is_11<T>;
};
export type is_01 = {
    <T>(ctor: Type<T>): is_11<T>;
};
export type is_11<T> = boolean;
/**
 * TODO
 */
export declare const isArrayLike: isArrayLike_0;
export type isArrayLike_0 = {
    (val: any): isArrayLike_1;
};
export type isArrayLike_1 = boolean;
/**
 * TODO
 */
export declare const isEmpty: isEmpty_0;
export type isEmpty_0 = {
    (val: any): isEmpty_1;
};
export type isEmpty_1 = boolean;
/**
 * TODO
 */
export declare const isNil: isNil_0;
export type isNil_0 = {
    (val: any): isNil_1;
};
export type isNil_1 = boolean;
/**
 * TODO
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
 * TODO
 */
export declare const juxt: juxt_0;
export type juxt_0 = {
    <T, U>(fns: {
            (...args: T[]): U;
        }[]): juxt_1<T, U>;
};
export type juxt_1<T, U> = (...args: T[]) => U[];
/**
 * TODO
 */
export declare const keys: keys_0;
export type keys_0 = {
    (x: Struct<any>): keys_1;
};
export type keys_1 = string[];
/**
 * TODO
 */
export declare const keysIn: keysIn_0;
export type keysIn_0 = {
    (obj: Struct<any>): keysIn_1;
};
export type keysIn_1 = string[];
/**
 * TODO
 */
export declare const last: last_0;
export type last_0 = {
    <T, R extends List<T>>(list: R): last_1<T, R>;
};
export type last_1<T, R extends List<T>> = T;
/**
 * TODO
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
 * TODO
 */
export declare const length: length_0;
export type length_0 = {
    (list: List<any>): length_1;
};
export type length_1 = number;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const map: map_0;
export type map_0 = {
    <T, U>(fn: (value: T) => U): map_1<T, U>;
};
export type map_1<T, U> = [object, Object];
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const mean: mean_0;
export type mean_0 = {
    (list: List<number>): mean_1;
};
export type mean_1 = number;
/**
 * TODO
 */
export declare const median: median_0;
export type median_0 = {
    (list: List<number>): median_1;
};
export type median_1 = number;
/**
 * TODO
 */
export declare const memoize: memoize_0;
export type memoize_0 = {
    <T>(fn: Variadic<T>): memoize_1<T>;
};
export type memoize_1<T> = Variadic<T>;
/**
 * TODO
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
 * TODO
 */
export declare const mergeAll: mergeAll_0;
export type mergeAll_0 = {
    <T>(list: List<any>): mergeAll_1<T>;
};
export type mergeAll_1<T> = T;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const negate: negate_0;
export type negate_0 = {
    (n: number): negate_1;
};
export type negate_1 = number;
/**
 * TODO
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
 * TODO
 */
export declare const not: not_0;
export type not_0 = {
    (value: any): not_1;
};
export type not_1 = boolean;
/**
 * TODO
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
 * TODO
 */
export declare const nthArg: nthArg_0;
export type nthArg_0 = {
    (n: number): nthArg_1;
};
export type nthArg_1 = <T>(...a: T[]) => T;
/**
 * TODO
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
 * TODO
 */
export declare const of: of_0;
export type of_0 = {
    <T>(x: T): of_1<T>;
};
export type of_1<T> = T[];
/**
 * TODO
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
 * TODO
 */
export declare const once: once_0;
export type once_0 = {
    <T>(fn: Variadic<T>): once_1<T>;
};
export type once_1<T> = Variadic<T>;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const product: product_0;
export type product_0 = {
    (list: List<number>): product_1;
};
export type product_1 = number;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const propIs: propIs_000;
export type propIs_000 = {
    <T extends Function, K extends string, V, U extends Record<K, V>>(type: T, _name: PH, obj: U): propIs_Record_101<T, K, V, U>;
    (type: Function, _name: PH, obj: Struct<any>): propIs_curry_friendlier_fallback_101;
    (_type: PH, _name: PH, obj: Struct<any>): propIs_curry_friendlier_fallback_001;
    (_type: PH, name: Prop, obj: Struct<any>): propIs_curry_friendlier_fallback_011;
    <K extends string, V, U extends Record<K, V>>(_type: PH, name: K, obj: U): propIs_Record_011<K, V, U>;
    <K extends string, V, U extends Record<K, V>>(_type: PH, _name: PH, obj: U): propIs_Record_001<K, V, U>;
    <T extends Function, K extends string, V, U extends Record<K, V>>(type: T, name: K, obj: U): propIs_Record_111<T, K, V, U>;
    (type: Function, name: Prop, obj: Struct<any>): propIs_curry_friendlier_fallback_111;
    <K extends string>(_type: PH, name: K): propIs_Record_010<K>;
    (_type: PH, name: Prop): propIs_curry_friendlier_fallback_010;
    <T extends Function, K extends string>(type: T, name: K): propIs_Record_110<T, K>;
    (type: Function, name: Prop): propIs_curry_friendlier_fallback_110;
    (type: Function): propIs_curry_friendlier_fallback_100;
    <$SEL extends "111", $KIND extends "Record">(): <T extends Function, K extends string, V, U extends Record<K, V>>(type: T, name: K, obj: U) => propIs_Record_111<T, K, V, U>;
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
    <K extends string, V, U extends Record<K, V>>(name: K, obj: U): propIs_Record_111<T, K, V, U>;
    <$SEL extends "11">(): <K extends string, V, U extends Record<K, V>>(name: K, obj: U) => propIs_Record_111<T, K, V, U>;
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
    <T extends Function, V, U extends Record<K, V>>(type: T, obj: U): propIs_Record_111<T, K, V, U>;
    <$SEL extends "11">(): <T extends Function, V, U extends Record<K, V>>(type: T, obj: U) => propIs_Record_111<T, K, V, U>;
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
    <V, U extends Record<K, V>>(obj: U): propIs_Record_111<T, K, V, U>;
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
 * TODO
 */
export declare const propOr: propOr_0;
export type propOr_0 = {
    <T>(val: T): propOr_1<T>;
};
export type propOr_1<T> = [object, Object];
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const reduced: reduced_0;
export type reduced_0 = {
    <T>(el: T): reduced_1<T>;
};
export type reduced_1<T> = Reduced;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const reverse: reverse_0;
export type reverse_0 = {
    <T>(list: List<T>): reverse_1<T>;
};
export type reverse_1<T> = T[];
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const sum: sum_0;
export type sum_0 = {
    (list: List<number>): sum_1;
};
export type sum_1 = number;
/**
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const T: () => true;
/**
 * TODO
 */
export declare const tail: tail_0;
export type tail_0 = {
    <T extends List<any>>(list: T): tail_1<T>;
};
export type tail_1<T extends List<any>> = T;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const toLower: toLower_0;
export type toLower_0 = {
    (str: string): toLower_1;
};
export type toLower_1 = string;
/**
 * TODO
 */
export declare const toPairs: toPairs_0;
export type toPairs_0 = {
    <T>(obj: Obj<T>): toPairs_1<T>;
};
export type toPairs_1<T> = [string, T][];
/**
 * TODO
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
 * TODO
 */
export declare const toString: toString_0;
export type toString_0 = {
    (val: StringRepresentable<string> | any): toString_1;
};
export type toString_1 = string;
/**
 * TODO
 */
export declare const toUpper: toUpper_0;
export type toUpper_0 = {
    (str: string): toUpper_1;
};
export type toUpper_1 = string;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const trim: trim_0;
export type trim_0 = {
    (str: string): trim_1;
};
export type trim_1 = string;
/**
 * TODO
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
 * TODO
 */
export declare const type: type_0;
export type type_0 = {
    (val: any): type_1;
};
export type type_1 = string;
/**
 * TODO
 */
export declare const unapply: unapply_0;
export type unapply_0 = {
    <T>(fn: (args: any[]) => T): unapply_1<T>;
};
export type unapply_1<T> = Variadic<T>;
/**
 * TODO
 */
export declare const unary: unary_0;
export type unary_0 = {
    <T, U>(fn: (a: T, ...args: any[]) => U): unary_1<T, U>;
};
export type unary_1<T, U> = (a: T) => U;
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const uniq: uniq_0;
export type uniq_0 = {
    <T>(list: List<T>): uniq_1<T>;
};
export type uniq_1<T> = T[];
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
 */
export declare const unnest: unnest_0;
export type unnest_0 = {
    <T>(x: List<List<T>>): unnest_1<T>;
};
export type unnest_1<T> = T[];
/**
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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
 * TODO
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

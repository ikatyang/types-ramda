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

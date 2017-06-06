import * as dts from 'dts-element';

export default dts.parse(`

interface Setoid<T> {
  equals(b: Setoid<T>): boolean;
}

interface Semigroup<T> {
  concat(b: Semigroup<T>): Semigroup<T>;
}

interface Monoid<T> extends Semigroup<T> {
  /* static */ empty<T>(): Monoid<T>;
}

interface Functor<T> {
  map<U>(fn: (t: T) => U): Functor<U>;
}

interface Apply<T> extends Functor<T> {
  apply<U>(fn: Apply<(t: T) => U>): Apply<U>;
}

interface Applicative<T> extends Apply<T> {
  /* static */ of<U>(a: U): Applicative<U>;
}

interface Alt<T> extends Functor<T> {
  alt(b: T): Alt<T>;
}

interface Plus<T> extends Alt<T> {
  /* static */ zero<T>(): Plus<T>;
}

interface Alternative<T> extends Plus<T>, Applicative<T> {
}

interface Foldable<T> {
  reduce<U>(fn: (u: U, t: T) => U, u: U): U;
}

interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse<U, V>(fn: (t: T) => Applicative<U>, of: (v: V) => Applicative<V>): Applicative<Traversable<U>>;
}

interface Chain<T> extends Apply<T> {
  chain<U>(fn: (t: T) => Chain<U>): Chain<U>;
}

interface ChainRec<T> extends Chain<T> {
  /* static */ chainRec<A,B,C>(f: (next: (a: A) => C, done: (b: B) => C, value: A) => ChainRec<C>, i: A): ChainRec<B>;
}

interface Monad<T> extends Applicative<T>, Chain<T> {
}

interface Extend<T> {
  extend<U>(f: (v: Extend<T>) => U): Extend<U>;
}

interface Comonad<T> extends Functor<T>, Extend<T> {
  extract<U>(): U; // 'same U as in extend's f -- how to bind?
}

interface Bifunctor<T,U> extends Functor<T> /*, Functor<U>*/ {
  bimap<B,D>(f: (v: T) => B, g: (v: U) => D): Bifunctor<B,D>;
}

interface Profunctor<T,U> extends Functor<T> /*, Functor<U>*/ {
  promap<B,D>(f: (v: T) => B, g: (v: U) => D): Profunctor<B,D>;
}

`).members;

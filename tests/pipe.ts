import * as R from 'ramda';

{
  const double = (x: number): number => x + x;
  const triple = (x: number): number => x * 3;
  const square = (x: number): number => x * x;
  const squareThenDoubleThenTriple = R.pipe(square, double, triple);
  // @dts-jest
  squareThenDoubleThenTriple(5); // => 150
}

{
  const double = (x: number): number => x + x;
  const shout = (x: number): string =>
    x >= 10
      ? 'big'
      : 'small';

  // @dts-jest
  R.pipe(double, double, shout);
  // @dts-jest
  R.pipe(double, double, shout)(10);

  // @dts-jest:skip string
  (str: string) => R.pipe(
    R.split(''),
    R.adjust(R.toUpper, 0),
    R.join(''),
  )(str);

  const f = R.pipe(Math.pow, R.negate, R.inc);
  // @dts-jest
  f(3, 4); // -(3^4) + 1

  // test for type degeneration if the first function has generics
  // @dts-jest:skip (x0: number) => number
  R.pipe(R.identity, double);
}

import * as R from 'ramda';

{
  const fn = (a: string, b: number, c: string) => [a, b, c];
  const gn = R.compose(R.length, fn);
  // @dts-jest
  gn('Hello', 4, 'world');
}

{
  let double = (x: number): number => x + x;
  let limit10 = function(x: number): boolean {
      return x >= 10;
  };
  // @dts-jest
  R.compose(limit10, double);
  // @dts-jest
  R.compose(limit10, double)(10);

  const f0 = (s: string) => +s;      // string -> number
  const f1 = (n: number) => n === 1; // number -> boolean
  const f2 = R.compose(f1, f0);      // string -> boolean

  // akward example that bounces types between number and string
  const g0 = (list: number[]) => R.map(R.inc, list);
  const g1 = R.dropWhile(R.gt(10));
  const g2 = R.map((i: number) => i > 5 ? 'bigger' : 'smaller');
  const g3 = R.all((i: string) => i === 'smaller');
  const g = R.compose(g3, g2, g1, g0);
  // @dts-jest:skip (list: number[]) => boolean
  g;
  // @dts-jest:skip boolean
  g([1, 2, 10, 13]);
}

{
  const f0 = R.compose(Math.pow);
  const f1 = R.compose(R.negate, Math.pow);
  const f2 = R.compose(R.inc, R.negate, Math.pow);
  const f3 = R.compose(R.inc, R.inc, R.negate, Math.pow);
  const f4 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
  const f5 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
  // @dts-jest
  f0(3, 4); // -(3^4) + 1
  // @dts-jest
  f1(3, 4); // -(3^4) + 1
  // @dts-jest
  f2(3, 4); // -(3^4) + 1
  // @dts-jest
  f3(3, 4); // -(3^4) + 1
  // @dts-jest
  f4(3, 4); // -(3^4) + 1
  // @dts-jest
  f5(3, 4); // -(3^4) + 1

  let double = (x: number): number => x + x;
  // test for type degeneration if the first function has generics
  // @dts-jest:skip (x0: number) => number
  R.compose(double, R.identity);
}

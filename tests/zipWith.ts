import * as R from 'ramda';

let f = function(x: number, y: string) {
    // ...
};
// @dts-jest:skip any[]
R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
// @dts-jest:skip any[]
R.zipWith(f)([1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
// @dts-jest:skip any[]
R.zipWith(f, [1, 2, 3])(['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]

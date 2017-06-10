import * as R from 'ramda';

class Point {
  constructor(public x: number, public y: number) {
      this.x = x;
      this.y = y;
  }
  toStringn() {
        return 'new Point(' + this.x + ', ' + this.y + ')';
  }
};
// @dts-jest
R.toString(new Point(1, 2)); // => 'new Point(1, 2)'
// @dts-jest
R.toString(42); // => '42'
// @dts-jest
R.toString('abc'); // => ''abc''
// @dts-jest
R.toString([1, 2, 3]); // => '[1, 2, 3]'
// @dts-jest
R.toString({foo: 1, bar: 2, baz: 3}); // => '{'bar': 2, 'baz': 3, 'foo': 1}'
// @dts-jest
R.toString(new Date('2001-02-03T04: 05: 06Z')); // => 'new Date('2001-02-03T04: 05: 06.000Z')'

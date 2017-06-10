import * as R from 'ramda';

class Rectangle {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  public area(): number {
    return this.width * this.height;
  }
}
const square = new Rectangle(2, 2);
// @dts-jest
R.hasIn('width', square);  // => true
// @dts-jest
R.hasIn('area', square);  // => true
// @dts-jest
R.flip(R.hasIn)(square)('area');  // => true

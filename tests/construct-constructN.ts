import * as R from 'ramda';

class Circle {
  public r: number;
  public colors: string[];
  constructor(r: number, ...colors: string[]) {
    this.r = r;
    this.colors = colors;
  }
  public area() {
    return Math.PI * Math.pow(this.r, 2);
  }
}

const circleN = R.constructN(2, Circle);
// @dts-jest:skip circle
circleN(1, 'red');

const circle = R.construct(Circle);
// @dts-jest:skip circle
circle(1, 'red');

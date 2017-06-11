import * as R from 'ramda';

type circle = { r: number, colors: string[] };
let Circle = function(r: number) {
    this.r = r;
    this.colors = Array.prototype.slice.call(arguments, 1);
};
Circle.prototype.area = function() {return Math.PI * Math.pow(this.r, 2);};
let circleN = R.constructN(2, Circle);
// @dts-jest:skip circle
circleN(1, 'red');
let circle = R.construct(Circle);
// @dts-jest:skip circle
circle(1, 'red');

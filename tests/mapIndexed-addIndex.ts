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
const mapIndexed = R.addIndex<string, string>(R.map);
// @dts-jest
mapIndexed((val: string, idx: number) => `${idx}-${val}`)(['f', 'o', 'o', 'b', 'a', 'r']);
// @dts-jest:skip string[]
mapIndexed((val: string, idx: number) => `${idx}-${val}`)(['f', 'o', 'o', 'b', 'a', 'r']);
// => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
// @dts-jest:skip number[]
mapIndexed(
  (rectangle: Rectangle, idx: number): number => rectangle.area() * idx,
  [new Rectangle(1, 2), new Rectangle(4, 7)],
);
// => [2, 56]

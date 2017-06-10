import * as R from 'ramda';

class Rectangle {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
}
let square = new Rectangle(2, 2);
// @dts-jest
R.hasIn('width', square);  // => true
// @dts-jest
R.hasIn('area', square);  // => true
// @dts-jest
R.flip(R.hasIn)(square)('area');  // => true

import * as R from 'ramda';

{
    let xs: {[key: string]: string} = {a: '1', b: '0'};
    // @dts-jest
    R.propEq('a', '1', xs);// => true
    // @dts-jest
    R.propEq('a', '4', xs); // => false
}
{
    let xs: {[key: string]: number} = {a: 1, b: 0};
    // @dts-jest
    R.propEq('a', 1, xs);// => true
    // @dts-jest
    R.propEq('a', 4, xs); // => false
}
{
    let xs = {a: '1', b: '0'};
    // @dts-jest
    R.propEq('a', '1', xs);// => true
    // @dts-jest
    R.propEq('a', '4', xs); // => false
}
{
    let xs = {a: 1, b: 0};
    // @dts-jest
    R.propEq('a', 1, xs);// => true
    // @dts-jest
    R.propEq('a', 4, xs); // => false
}
{
    interface Obj { a: number; b: number; };
    let xs: Obj = {a: 1, b: 0};
    // @dts-jest
    R.propEq('a', 1, xs);// => true
    // @dts-jest
    R.propEq('a', 4, xs); // => false
}

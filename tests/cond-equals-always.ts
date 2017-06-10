import * as R from 'ramda';

const fn = R.cond([
    [R.equals(0),   R.always('water freezes at 0°C')],
    [R.equals(100), R.always('water boils at 100°C')],
    [R.T,           (temp: number) => 'nothing special happens at ' + temp + '°C']
]);
// @dts-jest
fn(0); // => 'water freezes at 0°C'
// @dts-jest
fn(50); // => 'nothing special happens at 50°C'
// @dts-jest
fn(100); // => 'water boils at 100°C'

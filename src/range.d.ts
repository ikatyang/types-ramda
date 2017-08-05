import { Placeholder as PH } from "./$placeholder";
declare const range: range_00;
type range_00 = {
    (from: number): range_10;
    (_from: PH, to: number): range_01;
    (from: number, to: number): range_11;
};
type range_10 = {
    (to: number): range_11;
};
type range_01 = {
    (from: number): range_11;
};
type range_11 = number[];
export = range;

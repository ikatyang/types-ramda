declare const range: range_00;
type range_00 = {
    (from: number): range_10;
    <$SEL extends "1">(): (from: number) => range_10;
    <$SEL extends "11">(): (from: number, to: number) => range_11;
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

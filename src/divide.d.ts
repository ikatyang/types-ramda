declare const divide: divide_00;
type divide_00 = {
    (a: number): divide_10;
    <$SEL extends "1">(): (a: number) => divide_10;
    <$SEL extends "11">(): (a: number, b: number) => divide_11;
    (a: number, b: number): divide_11;
};
type divide_10 = {
    (b: number): divide_11;
};
type divide_01 = {
    (a: number): divide_11;
};
type divide_11 = number;
export = divide;

declare const multiply: multiply_00;
type multiply_00 = {
    (a: number): multiply_10;
    <$SEL extends "1">(): (a: number) => multiply_10;
    <$SEL extends "11">(): (a: number, b: number) => multiply_11;
    (a: number, b: number): multiply_11;
};
type multiply_10 = {
    (b: number): multiply_11;
};
type multiply_01 = {
    (a: number): multiply_11;
};
type multiply_11 = number;
export = multiply;

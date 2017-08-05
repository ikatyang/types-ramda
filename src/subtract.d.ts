import { Placeholder as PH } from "./$placeholder";
declare const subtract: subtract_00;
type subtract_00 = {
    (a: number): subtract_10;
    (_a: PH, b: number): subtract_01;
    <$SEL extends "1">(): (a: number) => subtract_10;
    <$SEL extends "01">(): (_a: PH, b: number) => subtract_01;
    <$SEL extends "11">(): (a: number, b: number) => subtract_11;
    (a: number, b: number): subtract_11;
};
type subtract_10 = {
    (b: number): subtract_11;
};
type subtract_01 = {
    (a: number): subtract_11;
};
type subtract_11 = number;
export = subtract;

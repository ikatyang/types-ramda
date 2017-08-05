import { Placeholder as PH } from "./$placeholder";
declare const add: add_00;
type add_00 = {
    (a: number): add_10;
    (_a: PH, b: number): add_01;
    <$SEL extends "1">(): (a: number) => add_10;
    <$SEL extends "01">(): (_a: PH, b: number) => add_01;
    <$SEL extends "11">(): (a: number, b: number) => add_11;
    (a: number, b: number): add_11;
};
type add_10 = {
    (b: number): add_11;
};
type add_01 = {
    (a: number): add_11;
};
type add_11 = number;
export = add;

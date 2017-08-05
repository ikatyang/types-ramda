import { Placeholder as PH } from "./$placeholder";
declare const modulo: modulo_00;
type modulo_00 = {
    (a: number): modulo_10;
    (_a: PH, b: number): modulo_01;
    (a: number, b: number): modulo_11;
};
type modulo_10 = {
    (b: number): modulo_11;
};
type modulo_01 = {
    (a: number): modulo_11;
};
type modulo_11 = number;
export = modulo;

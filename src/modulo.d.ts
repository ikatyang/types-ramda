declare const modulo: modulo_00;
type modulo_00 = {
    (a: number): modulo_10;
    <$SEL extends "1">(): (a: number) => modulo_10;
    <$SEL extends "11">(): (a: number, b: number) => modulo_11;
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

declare const add: add_00;
type add_00 = {
    (a: number): add_10;
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

declare const test: test_00;
type test_00 = {
    (pattern: RegExp): test_10;
    (pattern: RegExp, str: string): test_11;
};
type test_10 = {
    (str: string): test_11;
};
type test_01 = {
    (pattern: RegExp): test_11;
};
type test_11 = boolean;
export = test;

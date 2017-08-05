declare const split: split_00;
type split_00 = {
    (separator: RegExp | string): split_10;
    (separator: RegExp | string, str: string): split_11;
};
type split_10 = {
    (str: string): split_11;
};
type split_01 = {
    (separator: RegExp | string): split_11;
};
type split_11 = string[];
export = split;

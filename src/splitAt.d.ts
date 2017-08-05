import { List } from "./$types";
declare const splitAt: splitAt_00;
type splitAt_00 = {
    (index: number): splitAt_10;
    (index: number, str: string): splitAt_string_11;
    <T>(index: number, list: List<T>): splitAt_list_11<T>;
    <T>(index: number, list: string | List<T>): splitAt_mixed_11<T>;
};
type splitAt_10 = {
    (str: string): splitAt_string_11;
    <T>(list: List<T>): splitAt_list_11<T>;
    <T>(list: string | List<T>): splitAt_mixed_11<T>;
};
type splitAt_string_01 = {
    (index: number): splitAt_string_11;
};
type splitAt_list_01<T> = {
    (index: number): splitAt_list_11<T>;
};
type splitAt_mixed_01<T> = {
    (index: number): splitAt_mixed_11<T>;
};
type splitAt_string_11 = [string, string];
type splitAt_list_11<T> = [T[], T[]];
type splitAt_mixed_11<T> = [string, string] | [T[], T[]];
export = splitAt;

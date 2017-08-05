import { List } from "./$types";
declare const slice: slice_000;
type slice_000 = {
    (from: number): slice_100;
    (from: number, to: number): slice_110;
    (from: number, to: number, str: string): slice_string_111;
    <T>(from: number, to: number, list: List<T>): slice_list_111<T>;
    <T>(from: number, to: number, list: string | List<T>): slice_mixed_111<T>;
};
type slice_100 = {
    (to: number): slice_110;
    (to: number, str: string): slice_string_111;
    <T>(to: number, list: List<T>): slice_list_111<T>;
    <T>(to: number, list: string | List<T>): slice_mixed_111<T>;
};
type slice_010 = {
    (from: number): slice_110;
    (from: number, str: string): slice_string_111;
    <T>(from: number, list: List<T>): slice_list_111<T>;
    <T>(from: number, list: string | List<T>): slice_mixed_111<T>;
};
type slice_110 = {
    (str: string): slice_string_111;
    <T>(list: List<T>): slice_list_111<T>;
    <T>(list: string | List<T>): slice_mixed_111<T>;
};
type slice_string_001 = {
    (from: number): slice_string_101;
    (from: number, to: number): slice_string_111;
};
type slice_list_001<T> = {
    (from: number): slice_list_101<T>;
    (from: number, to: number): slice_list_111<T>;
};
type slice_mixed_001<T> = {
    (from: number): slice_mixed_101<T>;
    (from: number, to: number): slice_mixed_111<T>;
};
type slice_string_101 = {
    (to: number): slice_string_111;
};
type slice_list_101<T> = {
    (to: number): slice_list_111<T>;
};
type slice_mixed_101<T> = {
    (to: number): slice_mixed_111<T>;
};
type slice_string_011 = {
    (from: number): slice_string_111;
};
type slice_list_011<T> = {
    (from: number): slice_list_111<T>;
};
type slice_mixed_011<T> = {
    (from: number): slice_mixed_111<T>;
};
type slice_string_111 = string;
type slice_list_111<T> = T[];
type slice_mixed_111<T> = string | T[];
export = slice;

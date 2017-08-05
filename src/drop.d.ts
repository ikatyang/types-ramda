import { List } from "./$types";
declare const drop: drop_00;
type drop_00 = {
    (n: number): drop_10;
    (n: number, str: string): drop_string_11;
    <T>(n: number, list: List<T>): drop_list_11<T>;
    <T>(n: number, list: string | List<T>): drop_mixed_11<T>;
};
type drop_10 = {
    (str: string): drop_string_11;
    <T>(list: List<T>): drop_list_11<T>;
    <T>(list: string | List<T>): drop_mixed_11<T>;
};
type drop_string_01 = {
    (n: number): drop_string_11;
};
type drop_list_01<T> = {
    (n: number): drop_list_11<T>;
};
type drop_mixed_01<T> = {
    (n: number): drop_mixed_11<T>;
};
type drop_string_11 = string;
type drop_list_11<T> = T[];
type drop_mixed_11<T> = string | T[];
export = drop;

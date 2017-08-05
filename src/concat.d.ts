import { List } from "./$types";
declare const concat: concat_00;
type concat_00 = {
    (a: string): concat_string_10;
    <T>(a: T[]): concat_list_10<T>;
    <T>(a: T[] | string): concat_mixed_10<T>;
    (a: string, b: string): concat_string_11;
    <T, U>(a: T[], b: U[]): concat_list_11<T, U>;
    <$SEL extends "1", $KIND extends "string">(): (a: string) => concat_string_10;
    <$SEL extends "1", $KIND extends "list">(): <T>(a: T[]) => concat_list_10<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(a: T[] | string) => concat_mixed_10<T>;
    <$SEL extends "11", $KIND extends "string">(): (a: string, b: string) => concat_string_11;
    <$SEL extends "11", $KIND extends "list">(): <T, U>(a: T[], b: U[]) => concat_list_11<T, U>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U>(a: T[] | string, b: U[] | string) => concat_mixed_11<T, U>;
    <T, U>(a: T[] | string, b: U[] | string): concat_mixed_11<T, U>;
};
type concat_string_10 = {
    (b: string): concat_string_11;
};
type concat_list_10<T> = {
    <U>(b: U[]): concat_list_11<T, U>;
};
type concat_mixed_10<T> = {
    <U>(b: U[] | string): concat_mixed_11<T, U>;
};
type concat_string_01 = {
    (a: string): concat_string_11;
};
type concat_list_01<U> = {
    <T>(a: T[]): concat_list_11<T, U>;
};
type concat_mixed_01<U> = {
    <T>(a: T[] | string): concat_mixed_11<T, U>;
};
type concat_string_11 = string;
type concat_list_11<T, U> = (T | U)[];
type concat_mixed_11<T, U> = (T | U)[] | string;
export = concat;

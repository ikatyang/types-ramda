import { List } from "./$types";
declare const dropLast: dropLast_00;
type dropLast_00 = {
    (n: number): dropLast_10;
    (n: number, str: string): dropLast_string_11;
    <T>(n: number, list: List<T>): dropLast_list_11<T>;
    <$SEL extends "1">(): (n: number) => dropLast_10;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => dropLast_string_11;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => dropLast_list_11<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(n: number, list: string | List<T>) => dropLast_mixed_11<T>;
    <T>(n: number, list: string | List<T>): dropLast_mixed_11<T>;
};
type dropLast_10 = {
    (str: string): dropLast_string_11;
    <T>(list: List<T>): dropLast_list_11<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => dropLast_string_11;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => dropLast_list_11<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => dropLast_mixed_11<T>;
    <T>(list: string | List<T>): dropLast_mixed_11<T>;
};
type dropLast_string_01 = {
    (n: number): dropLast_string_11;
};
type dropLast_list_01<T> = {
    (n: number): dropLast_list_11<T>;
};
type dropLast_mixed_01<T> = {
    (n: number): dropLast_mixed_11<T>;
};
type dropLast_string_11 = string;
type dropLast_list_11<T> = T[];
type dropLast_mixed_11<T> = string | T[];
export = dropLast;

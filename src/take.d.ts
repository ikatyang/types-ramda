import { List } from "./$types";
declare const take: take_00;
type take_00 = {
    (n: number): take_10;
    (n: number, str: string): take_string_11;
    <T>(n: number, list: List<T>): take_list_11<T>;
    <$SEL extends "1">(): (n: number) => take_10;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => take_string_11;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => take_list_11<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(n: number, list: string | List<T>) => take_mixed_11<T>;
    <T>(n: number, list: string | List<T>): take_mixed_11<T>;
};
type take_10 = {
    (str: string): take_string_11;
    <T>(list: List<T>): take_list_11<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => take_string_11;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => take_list_11<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => take_mixed_11<T>;
    <T>(list: string | List<T>): take_mixed_11<T>;
};
type take_string_01 = {
    (n: number): take_string_11;
};
type take_list_01<T> = {
    (n: number): take_list_11<T>;
};
type take_mixed_01<T> = {
    (n: number): take_mixed_11<T>;
};
type take_string_11 = string;
type take_list_11<T> = T[];
type take_mixed_11<T> = string | T[];
export = take;

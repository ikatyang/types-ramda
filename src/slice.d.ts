import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const slice: slice_000;
type slice_000 = {
    (from: number): slice_100;
    (_from: PH, to: number): slice_010;
    (from: number, to: number): slice_110;
    (_from: PH, _to: PH, str: string): slice_string_001;
    <T>(_from: PH, _to: PH, list: List<T>): slice_list_001<T>;
    <T>(_from: PH, _to: PH, list: string | List<T>): slice_mixed_001<T>;
    (_from: PH, to: number, str: string): slice_string_011;
    <T>(_from: PH, to: number, list: List<T>): slice_list_011<T>;
    <T>(_from: PH, to: number, list: string | List<T>): slice_mixed_011<T>;
    (from: number, _to: PH, str: string): slice_string_101;
    <T>(from: number, _to: PH, list: List<T>): slice_list_101<T>;
    <T>(from: number, _to: PH, list: string | List<T>): slice_mixed_101<T>;
    (from: number, to: number, str: string): slice_string_111;
    <T>(from: number, to: number, list: List<T>): slice_list_111<T>;
    <$SEL extends "1">(): (from: number) => slice_100;
    <$SEL extends "01">(): (_from: PH, to: number) => slice_010;
    <$SEL extends "11">(): (from: number, to: number) => slice_110;
    <$SEL extends "001", $KIND extends "string">(): (_from: PH, _to: PH, str: string) => slice_string_001;
    <$SEL extends "001", $KIND extends "list">(): <T>(_from: PH, _to: PH, list: List<T>) => slice_list_001<T>;
    <$SEL extends "001", $KIND extends "mixed">(): <T>(_from: PH, _to: PH, list: string | List<T>) => slice_mixed_001<T>;
    <$SEL extends "011", $KIND extends "string">(): (_from: PH, to: number, str: string) => slice_string_011;
    <$SEL extends "011", $KIND extends "list">(): <T>(_from: PH, to: number, list: List<T>) => slice_list_011<T>;
    <$SEL extends "011", $KIND extends "mixed">(): <T>(_from: PH, to: number, list: string | List<T>) => slice_mixed_011<T>;
    <$SEL extends "101", $KIND extends "string">(): (from: number, _to: PH, str: string) => slice_string_101;
    <$SEL extends "101", $KIND extends "list">(): <T>(from: number, _to: PH, list: List<T>) => slice_list_101<T>;
    <$SEL extends "101", $KIND extends "mixed">(): <T>(from: number, _to: PH, list: string | List<T>) => slice_mixed_101<T>;
    <$SEL extends "111", $KIND extends "string">(): (from: number, to: number, str: string) => slice_string_111;
    <$SEL extends "111", $KIND extends "list">(): <T>(from: number, to: number, list: List<T>) => slice_list_111<T>;
    <$SEL extends "111", $KIND extends "mixed">(): <T>(from: number, to: number, list: string | List<T>) => slice_mixed_111<T>;
    <T>(from: number, to: number, list: string | List<T>): slice_mixed_111<T>;
};
type slice_100 = {
    (to: number): slice_110;
    (_to: PH, str: string): slice_string_101;
    <T>(_to: PH, list: List<T>): slice_list_101<T>;
    <T>(_to: PH, list: string | List<T>): slice_mixed_101<T>;
    (to: number, str: string): slice_string_111;
    <T>(to: number, list: List<T>): slice_list_111<T>;
    <$SEL extends "1">(): (to: number) => slice_110;
    <$SEL extends "01", $KIND extends "string">(): (_to: PH, str: string) => slice_string_101;
    <$SEL extends "01", $KIND extends "list">(): <T>(_to: PH, list: List<T>) => slice_list_101<T>;
    <$SEL extends "01", $KIND extends "mixed">(): <T>(_to: PH, list: string | List<T>) => slice_mixed_101<T>;
    <$SEL extends "11", $KIND extends "string">(): (to: number, str: string) => slice_string_111;
    <$SEL extends "11", $KIND extends "list">(): <T>(to: number, list: List<T>) => slice_list_111<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(to: number, list: string | List<T>) => slice_mixed_111<T>;
    <T>(to: number, list: string | List<T>): slice_mixed_111<T>;
};
type slice_010 = {
    (from: number): slice_110;
    (_from: PH, str: string): slice_string_011;
    <T>(_from: PH, list: List<T>): slice_list_011<T>;
    <T>(_from: PH, list: string | List<T>): slice_mixed_011<T>;
    (from: number, str: string): slice_string_111;
    <T>(from: number, list: List<T>): slice_list_111<T>;
    <$SEL extends "1">(): (from: number) => slice_110;
    <$SEL extends "01", $KIND extends "string">(): (_from: PH, str: string) => slice_string_011;
    <$SEL extends "01", $KIND extends "list">(): <T>(_from: PH, list: List<T>) => slice_list_011<T>;
    <$SEL extends "01", $KIND extends "mixed">(): <T>(_from: PH, list: string | List<T>) => slice_mixed_011<T>;
    <$SEL extends "11", $KIND extends "string">(): (from: number, str: string) => slice_string_111;
    <$SEL extends "11", $KIND extends "list">(): <T>(from: number, list: List<T>) => slice_list_111<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(from: number, list: string | List<T>) => slice_mixed_111<T>;
    <T>(from: number, list: string | List<T>): slice_mixed_111<T>;
};
type slice_110 = {
    (str: string): slice_string_111;
    <T>(list: List<T>): slice_list_111<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => slice_string_111;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => slice_list_111<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => slice_mixed_111<T>;
    <T>(list: string | List<T>): slice_mixed_111<T>;
};
type slice_string_001 = {
    (from: number): slice_string_101;
    (_from: PH, to: number): slice_string_011;
    <$SEL extends "1">(): (from: number) => slice_string_101;
    <$SEL extends "01">(): (_from: PH, to: number) => slice_string_011;
    <$SEL extends "11">(): (from: number, to: number) => slice_string_111;
    (from: number, to: number): slice_string_111;
};
type slice_list_001<T> = {
    (from: number): slice_list_101<T>;
    (_from: PH, to: number): slice_list_011<T>;
    <$SEL extends "1">(): (from: number) => slice_list_101<T>;
    <$SEL extends "01">(): (_from: PH, to: number) => slice_list_011<T>;
    <$SEL extends "11">(): (from: number, to: number) => slice_list_111<T>;
    (from: number, to: number): slice_list_111<T>;
};
type slice_mixed_001<T> = {
    (from: number): slice_mixed_101<T>;
    (_from: PH, to: number): slice_mixed_011<T>;
    <$SEL extends "1">(): (from: number) => slice_mixed_101<T>;
    <$SEL extends "01">(): (_from: PH, to: number) => slice_mixed_011<T>;
    <$SEL extends "11">(): (from: number, to: number) => slice_mixed_111<T>;
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

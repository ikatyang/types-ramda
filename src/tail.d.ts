import { List } from "./$types";
declare const tail: tail_0;
type tail_0 = {
    (str: string): tail_string_1;
    <T>(list: List<T>): tail_list_1<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => tail_string_1;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => tail_list_1<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => tail_mixed_1<T>;
    <T>(list: string | List<T>): tail_mixed_1<T>;
};
type tail_string_1 = string;
type tail_list_1<T> = T[];
type tail_mixed_1<T> = string | T[];
export = tail;

import { List } from "./$types";
declare const reverse: reverse_0;
type reverse_0 = {
    (str: string): reverse_string_1;
    <T>(list: List<T>): reverse_list_1<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => reverse_string_1;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => reverse_list_1<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => reverse_mixed_1<T>;
    <T>(list: string | List<T>): reverse_mixed_1<T>;
};
type reverse_string_1 = string;
type reverse_list_1<T> = T[];
type reverse_mixed_1<T> = string | T[];
export = reverse;

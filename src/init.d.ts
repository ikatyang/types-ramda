import { List } from "./$types";
declare const init: init_0;
type init_0 = {
    (str: string): init_string_1;
    <T>(list: List<T>): init_list_1<T>;
    <T>(list: string | List<T>): init_mixed_1<T>;
};
type init_string_1 = string;
type init_list_1<T> = T[];
type init_mixed_1<T> = string | T[];
export = init;

import { List } from "./$types";
declare const head: head_0;
type head_0 = {
    (str: string): head_string_1;
    <T extends [any]>(list: T): head_tuple_1<T>;
    <T extends List<any>>(list: T): head_general_1<T>;
};
type head_string_1 = string;
type head_tuple_1<T extends [any]> = T[0];
type head_general_1<T extends List<any>> = T[0] | undefined;
export = head;

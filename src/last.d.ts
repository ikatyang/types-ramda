import { List } from "./$types";
declare const last: last_0;
type last_0 = {
    (str: string): last_string_1;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => last_string_1;
    <$SEL extends "1", $KIND extends "general">(): <T extends List<any>>(list: T) => last_general_1<T>;
    <T extends List<any>>(list: T): last_general_1<T>;
};
type last_string_1 = string;
type last_general_1<T extends List<any>> = T[number] | undefined;
export = last;

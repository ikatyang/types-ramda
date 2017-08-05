declare const empty: empty_0;
type empty_0 = {
    <T>(container: T[]): empty_list_1<T>;
    (container: string): empty_string_1;
    (container: object): empty_object_1;
    <$SEL extends "1", $KIND extends "list">(): <T>(container: T[]) => empty_list_1<T>;
    <$SEL extends "1", $KIND extends "string">(): (container: string) => empty_string_1;
    <$SEL extends "1", $KIND extends "object">(): (container: object) => empty_object_1;
    <$SEL extends "1", $KIND extends "general">(): (container: any) => empty_general_1;
    (container: any): empty_general_1;
};
type empty_list_1<T> = T[];
type empty_string_1 = string;
type empty_object_1 = {};
type empty_general_1 = any;
export = empty;

import { NestedList } from "./$types";
declare const flatten: flatten_0;
type flatten_0 = {
    <T>(list: NestedList<T>): flatten_1<T>;
};
type flatten_1<T> = T[];
export = flatten;

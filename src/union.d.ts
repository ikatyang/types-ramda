import { List } from "./$types";
declare const union: union_00;
type union_00 = {
    <T>(a: List<T>): union_10<T>;
    <T>(a: List<T>, b: List<T>): union_11<T>;
};
type union_10<T> = {
    (b: List<T>): union_11<T>;
};
type union_01<T> = {
    (a: List<T>): union_11<T>;
};
type union_11<T> = T[];
export = union;

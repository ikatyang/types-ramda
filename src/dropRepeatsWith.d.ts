import { List, Morphism } from "./$types";
declare const dropRepeatsWith: dropRepeatsWith_00;
type dropRepeatsWith_00 = {
    <T>(fn: Morphism<T, any>): dropRepeatsWith_10<T>;
    <T>(fn: Morphism<T, any>, list: List<T>): dropRepeatsWith_11<T>;
};
type dropRepeatsWith_10<T> = {
    (list: List<T>): dropRepeatsWith_11<T>;
};
type dropRepeatsWith_01<T> = {
    (fn: Morphism<T, any>): dropRepeatsWith_11<T>;
};
type dropRepeatsWith_11<T> = T[];
export = dropRepeatsWith;

import { List, Morphism } from "./$types";
declare const uniqBy: uniqBy_00;
type uniqBy_00 = {
    <T>(fn: Morphism<T, any>): uniqBy_10<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, any>) => uniqBy_10<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, any>, list: List<T>) => uniqBy_11<T>;
    <T>(fn: Morphism<T, any>, list: List<T>): uniqBy_11<T>;
};
type uniqBy_10<T> = {
    (list: List<T>): uniqBy_11<T>;
};
type uniqBy_01<T> = {
    (fn: Morphism<T, any>): uniqBy_11<T>;
};
type uniqBy_11<T> = T[];
export = uniqBy;

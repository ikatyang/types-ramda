import { List, Morphism, Ordered } from "./$types";
declare const sortBy: sortBy_00;
type sortBy_00 = {
    <T>(fn: Morphism<T, Ordered>): sortBy_10<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => sortBy_10<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, list: List<T>) => sortBy_11<T>;
    <T>(fn: Morphism<T, Ordered>, list: List<T>): sortBy_11<T>;
};
type sortBy_10<T> = {
    (list: List<T>): sortBy_11<T>;
};
type sortBy_01<T> = {
    (fn: Morphism<T, Ordered>): sortBy_11<T>;
};
type sortBy_11<T> = T[];
export = sortBy;

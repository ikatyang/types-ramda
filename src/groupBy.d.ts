import { Dictionary, List, Morphism, Property } from "./$types";
declare const groupBy: groupBy_00;
type groupBy_00 = {
    <T>(fn: Morphism<T, Property>): groupBy_10<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Property>) => groupBy_10<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Property>, list: List<T>) => groupBy_11<T>;
    <T>(fn: Morphism<T, Property>, list: List<T>): groupBy_11<T>;
};
type groupBy_10<T> = {
    (list: List<T>): groupBy_11<T>;
};
type groupBy_01<T> = {
    (fn: Morphism<T, Property>): groupBy_11<T>;
};
type groupBy_11<T> = Dictionary<T[]>;
export = groupBy;

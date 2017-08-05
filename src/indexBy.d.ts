import { Dictionary, List, Morphism, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const indexBy: indexBy_00;
type indexBy_00 = {
    <T>(fn: Morphism<T, Property>): indexBy_10<T>;
    <T>(_fn: PH, list: List<T>): indexBy_01<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Property>) => indexBy_10<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => indexBy_01<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Property>, list: List<T>) => indexBy_11<T>;
    <T>(fn: Morphism<T, Property>, list: List<T>): indexBy_11<T>;
};
type indexBy_10<T> = {
    (list: List<T>): indexBy_11<T>;
};
type indexBy_01<T> = {
    (fn: Morphism<T, Property>): indexBy_11<T>;
};
type indexBy_11<T> = Dictionary<T>;
export = indexBy;

import { List, Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const sortBy: sortBy_00;
type sortBy_00 = {
    <T>(fn: Morphism<T, Ordered>): sortBy_10<T>;
    <T>(_fn: PH, list: List<T>): sortBy_01<T>;
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

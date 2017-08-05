import { Dictionary, Filterable, List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const filter: filter_00;
type filter_00 = {
    <T>(fn: Predicate<T>): filter_10<T>;
    <T>(_fn: PH, list: List<T>): filter_list_01<T>;
    <T, U extends Filterable<T>>(_fn: PH, filterable: U): filter_filterable_01<T, U>;
    <T, U extends Dictionary<T>>(_fn: PH, object: U): filter_object_01<T, U>;
    <T, U extends List<T> | Filterable<T> | Dictionary<T>>(_fn: PH, target: U): filter_mixed_01<T, U>;
    <T>(fn: Predicate<T>, list: List<T>): filter_list_11<T>;
    <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U): filter_filterable_11<T, U>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, object: U): filter_object_11<T, U>;
    <T, U extends List<T> | Filterable<T> | Dictionary<T>>(fn: Predicate<T>, target: U): filter_mixed_11<T, U>;
};
type filter_10<T> = {
    (list: List<T>): filter_list_11<T>;
    <U extends Filterable<T>>(filterable: U): filter_filterable_11<T, U>;
    <U extends Dictionary<T>>(object: U): filter_object_11<T, U>;
    <U extends List<T> | Filterable<T> | Dictionary<T>>(target: U): filter_mixed_11<T, U>;
};
type filter_list_01<T> = {
    (fn: Predicate<T>): filter_list_11<T>;
};
type filter_filterable_01<T, U extends Filterable<T>> = {
    (fn: Predicate<T>): filter_filterable_11<T, U>;
};
type filter_object_01<T, U extends Dictionary<T>> = {
    (fn: Predicate<T>): filter_object_11<T, U>;
};
type filter_mixed_01<T, U extends List<T> | Filterable<T> | Dictionary<T>> = {
    (fn: Predicate<T>): filter_mixed_11<T, U>;
};
type filter_list_11<T> = T[];
type filter_filterable_11<T, U extends Filterable<T>> = U;
type filter_object_11<T, U extends Dictionary<T>> = Partial<U>;
type filter_mixed_11<T, U extends List<T> | Filterable<T> | Dictionary<T>> = T[] | U | Partial<U>;
export = filter;

import { Dictionary, Filterable, List, Predicate } from "./$types";
declare const filter: filter_00;
type filter_00 = {
    <T>(fn: Predicate<T>): filter_10<T>;
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

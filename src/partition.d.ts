import { Dictionary, List, Predicate } from "./$types";
declare const partition: partition_00;
type partition_00 = {
    <T>(fn: Predicate<T>): partition_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): partition_list_11<T>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, dictionary: U): partition_object_11<T, U>;
    <T, U extends List<T> | Dictionary<T>>(fn: Predicate<T>, target: U): partition_mixed_11<T, U>;
};
type partition_10<T> = {
    (list: List<T>): partition_list_11<T>;
    <U extends Dictionary<T>>(dictionary: U): partition_object_11<T, U>;
    <U extends List<T> | Dictionary<T>>(target: U): partition_mixed_11<T, U>;
};
type partition_list_01<T> = {
    (fn: Predicate<T>): partition_list_11<T>;
};
type partition_object_01<T, U extends Dictionary<T>> = {
    (fn: Predicate<T>): partition_object_11<T, U>;
};
type partition_mixed_01<T, U extends List<T> | Dictionary<T>> = {
    (fn: Predicate<T>): partition_mixed_11<T, U>;
};
type partition_list_11<T> = [T[], T[]];
type partition_object_11<T, U extends Dictionary<T>> = [Partial<U>, Partial<U>];
type partition_mixed_11<T, U extends List<T> | Dictionary<T>> = [T[], T[]] | [Partial<U>, Partial<U>];
export = partition;

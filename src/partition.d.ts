import { Dictionary, List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const partition: partition_00;
type partition_00 = {
    <T>(fn: Predicate<T>): partition_10<T>;
    <T>(_fn: PH, list: List<T>): partition_list_01<T>;
    <T, U extends Dictionary<T>>(_fn: PH, dictionary: U): partition_object_01<T, U>;
    <T, U extends List<T> | Dictionary<T>>(_fn: PH, target: U): partition_mixed_01<T, U>;
    <T>(fn: Predicate<T>, list: List<T>): partition_list_11<T>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, dictionary: U): partition_object_11<T, U>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => partition_10<T>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_fn: PH, list: List<T>) => partition_list_01<T>;
    <$SEL extends "01", $KIND extends "object">(): <T, U extends Dictionary<T>>(_fn: PH, dictionary: U) => partition_object_01<T, U>;
    <$SEL extends "01", $KIND extends "mixed">(): <T, U extends List<T> | Dictionary<T>>(_fn: PH, target: U) => partition_mixed_01<T, U>;
    <$SEL extends "11", $KIND extends "list">(): <T>(fn: Predicate<T>, list: List<T>) => partition_list_11<T>;
    <$SEL extends "11", $KIND extends "object">(): <T, U extends Dictionary<T>>(fn: Predicate<T>, dictionary: U) => partition_object_11<T, U>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U extends List<T> | Dictionary<T>>(fn: Predicate<T>, target: U) => partition_mixed_11<T, U>;
    <T, U extends List<T> | Dictionary<T>>(fn: Predicate<T>, target: U): partition_mixed_11<T, U>;
};
type partition_10<T> = {
    (list: List<T>): partition_list_11<T>;
    <U extends Dictionary<T>>(dictionary: U): partition_object_11<T, U>;
    <$SEL extends "1", $KIND extends "list">(): (list: List<T>) => partition_list_11<T>;
    <$SEL extends "1", $KIND extends "object">(): <U extends Dictionary<T>>(dictionary: U) => partition_object_11<T, U>;
    <$SEL extends "1", $KIND extends "mixed">(): <U extends List<T> | Dictionary<T>>(target: U) => partition_mixed_11<T, U>;
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

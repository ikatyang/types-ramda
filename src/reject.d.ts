import { Dictionary, Filterable, List, Predicate } from "./$types";
declare const reject: reject_00;
type reject_00 = {
    <T>(fn: Predicate<T>): reject_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): reject_list_11<T>;
    <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U): reject_filterable_11<T, U>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, object: U): reject_object_11<T, U>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => reject_10<T>;
    <$SEL extends "11", $KIND extends "list">(): <T>(fn: Predicate<T>, list: List<T>) => reject_list_11<T>;
    <$SEL extends "11", $KIND extends "filterable">(): <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U) => reject_filterable_11<T, U>;
    <$SEL extends "11", $KIND extends "object">(): <T, U extends Dictionary<T>>(fn: Predicate<T>, object: U) => reject_object_11<T, U>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U extends List<T> | Filterable<T> | Dictionary<T>>(fn: Predicate<T>, target: U) => reject_mixed_11<T, U>;
    <T, U extends List<T> | Filterable<T> | Dictionary<T>>(fn: Predicate<T>, target: U): reject_mixed_11<T, U>;
};
type reject_10<T> = {
    (list: List<T>): reject_list_11<T>;
    <U extends Filterable<T>>(filterable: U): reject_filterable_11<T, U>;
    <U extends Dictionary<T>>(object: U): reject_object_11<T, U>;
    <$SEL extends "1", $KIND extends "list">(): (list: List<T>) => reject_list_11<T>;
    <$SEL extends "1", $KIND extends "filterable">(): <U extends Filterable<T>>(filterable: U) => reject_filterable_11<T, U>;
    <$SEL extends "1", $KIND extends "object">(): <U extends Dictionary<T>>(object: U) => reject_object_11<T, U>;
    <$SEL extends "1", $KIND extends "mixed">(): <U extends List<T> | Filterable<T> | Dictionary<T>>(target: U) => reject_mixed_11<T, U>;
    <U extends List<T> | Filterable<T> | Dictionary<T>>(target: U): reject_mixed_11<T, U>;
};
type reject_list_01<T> = {
    (fn: Predicate<T>): reject_list_11<T>;
};
type reject_filterable_01<T, U extends Filterable<T>> = {
    (fn: Predicate<T>): reject_filterable_11<T, U>;
};
type reject_object_01<T, U extends Dictionary<T>> = {
    (fn: Predicate<T>): reject_object_11<T, U>;
};
type reject_mixed_01<T, U extends List<T> | Filterable<T> | Dictionary<T>> = {
    (fn: Predicate<T>): reject_mixed_11<T, U>;
};
type reject_list_11<T> = T[];
type reject_filterable_11<T, U extends Filterable<T>> = U;
type reject_object_11<T, U extends Dictionary<T>> = Partial<U>;
type reject_mixed_11<T, U extends List<T> | Filterable<T> | Dictionary<T>> = T[] | U | Partial<U>;
export = reject;

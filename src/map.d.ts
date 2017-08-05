import { Functor, List, Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const map: map_00;
type map_00 = {
    <T, U>(fn: Morphism<T, U>): map_10<T, U>;
    <T>(_fn: PH, list: List<T>): map_list_01<T>;
    <T>(_fn: PH, functor: Functor<T>): map_functor_01<T>;
    <T, K extends string>(_fn: PH, object: Record<K, T>): map_object_01<T, K>;
    <T, K extends string>(_fn: PH, target: List<T> | Functor<T> | Record<K, T>): map_mixed_01<T, K>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): map_list_11<U>;
    <T, U>(fn: Morphism<T, U>, functor: Functor<T>): map_functor_11<U>;
    <T, U, K extends string>(fn: Morphism<T, U>, object: Record<K, T>): map_object_11<U, K>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => map_10<T, U>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_fn: PH, list: List<T>) => map_list_01<T>;
    <$SEL extends "01", $KIND extends "functor">(): <T>(_fn: PH, functor: Functor<T>) => map_functor_01<T>;
    <$SEL extends "01", $KIND extends "object">(): <T, K extends string>(_fn: PH, object: Record<K, T>) => map_object_01<T, K>;
    <$SEL extends "01", $KIND extends "mixed">(): <T, K extends string>(_fn: PH, target: List<T> | Functor<T> | Record<K, T>) => map_mixed_01<T, K>;
    <$SEL extends "11", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>, list: List<T>) => map_list_11<U>;
    <$SEL extends "11", $KIND extends "functor">(): <T, U>(fn: Morphism<T, U>, functor: Functor<T>) => map_functor_11<U>;
    <$SEL extends "11", $KIND extends "object">(): <T, U, K extends string>(fn: Morphism<T, U>, object: Record<K, T>) => map_object_11<U, K>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U, K extends string>(fn: Morphism<T, U>, target: List<T> | Functor<T> | Record<K, T>) => map_mixed_11<U, K>;
    <T, U, K extends string>(fn: Morphism<T, U>, target: List<T> | Functor<T> | Record<K, T>): map_mixed_11<U, K>;
};
type map_10<T, U> = {
    (list: List<T>): map_list_11<U>;
    (functor: Functor<T>): map_functor_11<U>;
    <K extends string>(object: Record<K, T>): map_object_11<U, K>;
    <$SEL extends "1", $KIND extends "list">(): (list: List<T>) => map_list_11<U>;
    <$SEL extends "1", $KIND extends "functor">(): (functor: Functor<T>) => map_functor_11<U>;
    <$SEL extends "1", $KIND extends "object">(): <K extends string>(object: Record<K, T>) => map_object_11<U, K>;
    <$SEL extends "1", $KIND extends "mixed">(): <K extends string>(target: List<T> | Functor<T> | Record<K, T>) => map_mixed_11<U, K>;
    <K extends string>(target: List<T> | Functor<T> | Record<K, T>): map_mixed_11<U, K>;
};
type map_list_01<T> = {
    <U>(fn: Morphism<T, U>): map_list_11<U>;
};
type map_functor_01<T> = {
    <U>(fn: Morphism<T, U>): map_functor_11<U>;
};
type map_object_01<T, K extends string> = {
    <U>(fn: Morphism<T, U>): map_object_11<U, K>;
};
type map_mixed_01<T, K extends string> = {
    <U>(fn: Morphism<T, U>): map_mixed_11<U, K>;
};
type map_list_11<U> = U[];
type map_functor_11<U> = Functor<U>;
type map_object_11<U, K extends string> = Record<K, U>;
type map_mixed_11<U, K extends string> = U[] | Functor<U> | Record<K, U>;
export = map;

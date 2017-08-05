import { KeyedObjectMorphism } from "./$types";
declare const mapObjIndexed: mapObjIndexed_00;
type mapObjIndexed_00 = {
    <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>): mapObjIndexed_10<T, U, K>;
    <$SEL extends "1">(): <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>) => mapObjIndexed_10<T, U, K>;
    <$SEL extends "11">(): <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>, object: Record<K, T>) => mapObjIndexed_11<U, K>;
    <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>, object: Record<K, T>): mapObjIndexed_11<U, K>;
};
type mapObjIndexed_10<T, U, K extends string> = {
    (object: Record<K, T>): mapObjIndexed_11<U, K>;
};
type mapObjIndexed_01<T, K extends string> = {
    <U>(fn: KeyedObjectMorphism<T, U, K>): mapObjIndexed_11<U, K>;
};
type mapObjIndexed_11<U, K extends string> = Record<K, U>;
export = mapObjIndexed;

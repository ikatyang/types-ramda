import { KeyedObjectMorphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const mapObjIndexed: mapObjIndexed_00;
type mapObjIndexed_00 = {
    <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>): mapObjIndexed_10<T, U, K>;
    <T, K extends string>(_fn: PH, object: Record<K, T>): mapObjIndexed_01<T, K>;
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

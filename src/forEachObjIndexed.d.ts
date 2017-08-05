import { Dictionary, KeyedObjectTap } from "./$types";
declare const forEachObjIndexed: forEachObjIndexed_00;
type forEachObjIndexed_00 = {
    <T, U extends Dictionary<T>>(fn: KeyedObjectTap<T, U>): forEachObjIndexed_10<T, U>;
    <T, U extends Dictionary<T>>(fn: KeyedObjectTap<T, U>, list: U): forEachObjIndexed_11<T, U>;
};
type forEachObjIndexed_10<T, U extends Dictionary<T>> = {
    (list: U): forEachObjIndexed_11<T, U>;
};
type forEachObjIndexed_01<T, U extends Dictionary<T>> = {
    (fn: KeyedObjectTap<T, U>): forEachObjIndexed_11<T, U>;
};
type forEachObjIndexed_11<T, U extends Dictionary<T>> = U;
export = forEachObjIndexed;

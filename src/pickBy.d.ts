import { Dictionary, KeyedObjectMorphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pickBy: pickBy_00;
type pickBy_00 = {
    <T extends {}, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>): pickBy_10<T, U>;
    <T extends {}, U extends Dictionary<T>>(_fn: PH, object: U): pickBy_01<T, U>;
    <T extends {}, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>, object: U): pickBy_11<T, U>;
};
type pickBy_10<T extends {}, U extends Dictionary<T>> = {
    (object: U): pickBy_11<T, U>;
};
type pickBy_01<T extends {}, U extends Dictionary<T>> = {
    (fn: KeyedObjectMorphism<T, boolean, keyof U>): pickBy_11<T, U>;
};
type pickBy_11<T extends {}, U extends Dictionary<T>> = Partial<U>;
export = pickBy;

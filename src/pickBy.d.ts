import { Dictionary, KeyedObjectMorphism } from "./$types";
declare const pickBy: pickBy_00;
type pickBy_00 = {
    <T extends {}, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>): pickBy_10<T, U>;
    <$SEL extends "1">(): <T extends {}, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>) => pickBy_10<T, U>;
    <$SEL extends "11">(): <T extends {}, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>, object: U) => pickBy_11<T, U>;
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

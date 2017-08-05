import { Placeholder as PH } from "./$placeholder";
declare const objOf: objOf_00;
type objOf_00 = {
    <K extends string>(key: K): objOf_10<K>;
    <V>(_key: PH, value: V): objOf_01<V>;
    <K extends string, V>(key: K, value: V): objOf_11<K, V>;
};
type objOf_10<K extends string> = {
    <V>(value: V): objOf_11<K, V>;
};
type objOf_01<V> = {
    <K extends string>(key: K): objOf_11<K, V>;
};
type objOf_11<K extends string, V> = Record<K, V>;
export = objOf;

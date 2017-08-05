import { KeyValuePair, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pair: pair_00;
type pair_00 = {
    <K extends Property>(key: K): pair_10<K>;
    <V>(_key: PH, value: V): pair_01<V>;
    <K extends Property, V>(key: K, value: V): pair_11<K, V>;
};
type pair_10<K extends Property> = {
    <V>(value: V): pair_11<K, V>;
};
type pair_01<V> = {
    <K extends Property>(key: K): pair_11<K, V>;
};
type pair_11<K extends Property, V> = KeyValuePair<K, V>;
export = pair;

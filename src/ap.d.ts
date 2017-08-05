import { List, Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const ap: ap_00;
type ap_00 = {
    <T, U>(fns: Morphism<T, U>[]): ap_10<T, U>;
    <T>(_fns: PH, list: List<T>): ap_01<T>;
    <$SEL extends "1">(): <T, U>(fns: Morphism<T, U>[]) => ap_10<T, U>;
    <$SEL extends "01">(): <T>(_fns: PH, list: List<T>) => ap_01<T>;
    <$SEL extends "11">(): <T, U>(fns: Morphism<T, U>[], list: List<T>) => ap_11<U>;
    <T, U>(fns: Morphism<T, U>[], list: List<T>): ap_11<U>;
};
type ap_10<T, U> = {
    (list: List<T>): ap_11<U>;
};
type ap_01<T> = {
    <U>(fns: Morphism<T, U>[]): ap_11<U>;
};
type ap_11<U> = U[];
export = ap;

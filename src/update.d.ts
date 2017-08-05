import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const update: update_000;
type update_000 = {
    (index: number): update_100;
    <T>(_index: PH, value: T): update_010<T>;
    <T>(index: number, value: T): update_110<T>;
    <U>(_index: PH, _value: PH, list: List<U>): update_001<U>;
    <T, U>(_index: PH, value: T, list: List<U>): update_011<T, U>;
    <U>(index: number, _value: PH, list: List<U>): update_101<U>;
    <$SEL extends "1">(): (index: number) => update_100;
    <$SEL extends "01">(): <T>(_index: PH, value: T) => update_010<T>;
    <$SEL extends "11">(): <T>(index: number, value: T) => update_110<T>;
    <$SEL extends "001">(): <U>(_index: PH, _value: PH, list: List<U>) => update_001<U>;
    <$SEL extends "011">(): <T, U>(_index: PH, value: T, list: List<U>) => update_011<T, U>;
    <$SEL extends "101">(): <U>(index: number, _value: PH, list: List<U>) => update_101<U>;
    <$SEL extends "111">(): <T, U>(index: number, value: T, list: List<U>) => update_111<T, U>;
    <T, U>(index: number, value: T, list: List<U>): update_111<T, U>;
};
type update_100 = {
    <T>(value: T): update_110<T>;
    <U>(_value: PH, list: List<U>): update_101<U>;
    <$SEL extends "1">(): <T>(value: T) => update_110<T>;
    <$SEL extends "01">(): <U>(_value: PH, list: List<U>) => update_101<U>;
    <$SEL extends "11">(): <T, U>(value: T, list: List<U>) => update_111<T, U>;
    <T, U>(value: T, list: List<U>): update_111<T, U>;
};
type update_010<T> = {
    (index: number): update_110<T>;
    <U>(_index: PH, list: List<U>): update_011<T, U>;
    <$SEL extends "1">(): (index: number) => update_110<T>;
    <$SEL extends "01">(): <U>(_index: PH, list: List<U>) => update_011<T, U>;
    <$SEL extends "11">(): <U>(index: number, list: List<U>) => update_111<T, U>;
    <U>(index: number, list: List<U>): update_111<T, U>;
};
type update_110<T> = {
    <U>(list: List<U>): update_111<T, U>;
};
type update_001<U> = {
    (index: number): update_101<U>;
    <T>(_index: PH, value: T): update_011<T, U>;
    <$SEL extends "1">(): (index: number) => update_101<U>;
    <$SEL extends "01">(): <T>(_index: PH, value: T) => update_011<T, U>;
    <$SEL extends "11">(): <T>(index: number, value: T) => update_111<T, U>;
    <T>(index: number, value: T): update_111<T, U>;
};
type update_101<U> = {
    <T>(value: T): update_111<T, U>;
};
type update_011<T, U> = {
    (index: number): update_111<T, U>;
};
type update_111<T, U> = (T | U)[];
export = update;

import { Lens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const set: set_000;
type set_000 = {
    <T, U>(lens: Lens<T, U>): set_100<T, U>;
    <T>(_lens: PH, value: T): set_010<T>;
    <T, U>(lens: Lens<T, U>, value: T): set_110<T, U>;
    <U>(_lens: PH, _value: PH, target: U): set_001<U>;
    <T, U>(_lens: PH, value: T, target: U): set_011<T, U>;
    <T, U>(lens: Lens<T, U>, _value: PH, target: U): set_101<T, U>;
    <$SEL extends "1">(): <T, U>(lens: Lens<T, U>) => set_100<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, value: T) => set_010<T>;
    <$SEL extends "11">(): <T, U>(lens: Lens<T, U>, value: T) => set_110<T, U>;
    <$SEL extends "001">(): <U>(_lens: PH, _value: PH, target: U) => set_001<U>;
    <$SEL extends "011">(): <T, U>(_lens: PH, value: T, target: U) => set_011<T, U>;
    <$SEL extends "101">(): <T, U>(lens: Lens<T, U>, _value: PH, target: U) => set_101<T, U>;
    <$SEL extends "111">(): <T, U>(lens: Lens<T, U>, value: T, target: U) => set_111<U>;
    <T, U>(lens: Lens<T, U>, value: T, target: U): set_111<U>;
};
type set_100<T, U> = {
    (value: T): set_110<T, U>;
    (_value: PH, target: U): set_101<T, U>;
    <$SEL extends "1">(): (value: T) => set_110<T, U>;
    <$SEL extends "01">(): (_value: PH, target: U) => set_101<T, U>;
    <$SEL extends "11">(): (value: T, target: U) => set_111<U>;
    (value: T, target: U): set_111<U>;
};
type set_010<T> = {
    <U>(lens: Lens<T, U>): set_110<T, U>;
    <U>(_lens: PH, target: U): set_011<T, U>;
    <$SEL extends "1">(): <U>(lens: Lens<T, U>) => set_110<T, U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => set_011<T, U>;
    <$SEL extends "11">(): <U>(lens: Lens<T, U>, target: U) => set_111<U>;
    <U>(lens: Lens<T, U>, target: U): set_111<U>;
};
type set_110<T, U> = {
    (target: U): set_111<U>;
};
type set_001<U> = {
    <T>(lens: Lens<T, U>): set_101<T, U>;
    <T>(_lens: PH, value: T): set_011<T, U>;
    <$SEL extends "1">(): <T>(lens: Lens<T, U>) => set_101<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, value: T) => set_011<T, U>;
    <$SEL extends "11">(): <T>(lens: Lens<T, U>, value: T) => set_111<U>;
    <T>(lens: Lens<T, U>, value: T): set_111<U>;
};
type set_101<T, U> = {
    (value: T): set_111<U>;
};
type set_011<T, U> = {
    (lens: Lens<T, U>): set_111<U>;
};
type set_111<U> = U;
export = set;

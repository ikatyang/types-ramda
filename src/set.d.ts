import { Lens } from "./$types";
declare const set: set_000;
type set_000 = {
    <T, U>(lens: Lens<T, U>): set_100<T, U>;
    <T, U>(lens: Lens<T, U>, value: T): set_110<T, U>;
    <$SEL extends "1">(): <T, U>(lens: Lens<T, U>) => set_100<T, U>;
    <$SEL extends "11">(): <T, U>(lens: Lens<T, U>, value: T) => set_110<T, U>;
    <$SEL extends "111">(): <T, U>(lens: Lens<T, U>, value: T, target: U) => set_111<U>;
    <T, U>(lens: Lens<T, U>, value: T, target: U): set_111<U>;
};
type set_100<T, U> = {
    (value: T): set_110<T, U>;
    <$SEL extends "1">(): (value: T) => set_110<T, U>;
    <$SEL extends "11">(): (value: T, target: U) => set_111<U>;
    (value: T, target: U): set_111<U>;
};
type set_010<T> = {
    <U>(lens: Lens<T, U>): set_110<T, U>;
    <$SEL extends "1">(): <U>(lens: Lens<T, U>) => set_110<T, U>;
    <$SEL extends "11">(): <U>(lens: Lens<T, U>, target: U) => set_111<U>;
    <U>(lens: Lens<T, U>, target: U): set_111<U>;
};
type set_110<T, U> = {
    (target: U): set_111<U>;
};
type set_001<U> = {
    <T>(lens: Lens<T, U>): set_101<T, U>;
    <$SEL extends "1">(): <T>(lens: Lens<T, U>) => set_101<T, U>;
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

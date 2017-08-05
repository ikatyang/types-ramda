import { Placeholder as PH } from "./$placeholder";
declare const unfold: unfold_00;
type unfold_00 = {
    <T, R>(fn: (seed: T) => [R, T] | false): unfold_10<T, R>;
    <T>(_fn: PH, initial: T): unfold_01<T>;
    <$SEL extends "1">(): <T, R>(fn: (seed: T) => [R, T] | false) => unfold_10<T, R>;
    <$SEL extends "01">(): <T>(_fn: PH, initial: T) => unfold_01<T>;
    <$SEL extends "11">(): <T, R>(fn: (seed: T) => [R, T] | false, initial: T) => unfold_11<R>;
    <T, R>(fn: (seed: T) => [R, T] | false, initial: T): unfold_11<R>;
};
type unfold_10<T, R> = {
    (initial: T): unfold_11<R>;
};
type unfold_01<T> = {
    <R>(fn: (seed: T) => [R, T] | false): unfold_11<R>;
};
type unfold_11<R> = R[];
export = unfold;

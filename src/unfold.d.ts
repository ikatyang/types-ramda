declare const unfold: unfold_00;
type unfold_00 = {
    <T, R>(fn: (seed: T) => [R, T] | false): unfold_10<T, R>;
    <$SEL extends "1">(): <T, R>(fn: (seed: T) => [R, T] | false) => unfold_10<T, R>;
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

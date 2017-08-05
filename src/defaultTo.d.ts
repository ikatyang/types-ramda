declare const defaultTo: defaultTo_00;
type defaultTo_00 = {
    <T>(defaults: T): defaultTo_10<T>;
    <T>(defaults: T, value: null | undefined): defaultTo_void_11<T>;
    <$SEL extends "1">(): <T>(defaults: T) => defaultTo_10<T>;
    <$SEL extends "11", $KIND extends "void">(): <T>(defaults: T, value: null | undefined) => defaultTo_void_11<T>;
    <$SEL extends "11", $KIND extends "general">(): <T, U>(defaults: T, value: U | null | undefined) => defaultTo_general_11<T, U>;
    <T, U>(defaults: T, value: U | null | undefined): defaultTo_general_11<T, U>;
};
type defaultTo_10<T> = {
    (value: null | undefined): defaultTo_void_11<T>;
    <$SEL extends "1", $KIND extends "void">(): (value: null | undefined) => defaultTo_void_11<T>;
    <$SEL extends "1", $KIND extends "general">(): <U>(value: U | null | undefined) => defaultTo_general_11<T, U>;
    <U>(value: U | null | undefined): defaultTo_general_11<T, U>;
};
type defaultTo_void_01 = {
    <T>(defaults: T): defaultTo_void_11<T>;
};
type defaultTo_general_01<U> = {
    <T>(defaults: T): defaultTo_general_11<T, U>;
};
type defaultTo_void_11<T> = T;
type defaultTo_general_11<T, U> = T | U;
export = defaultTo;

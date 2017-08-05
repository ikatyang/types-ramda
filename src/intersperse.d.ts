import { List } from "./$types";
declare const intersperse: intersperse_00;
type intersperse_00 = {
    <T>(separator: T): intersperse_10<T>;
    <$SEL extends "1">(): <T>(separator: T) => intersperse_10<T>;
    <$SEL extends "11">(): <T, U>(separator: T, list: List<U>) => intersperse_11<T, U>;
    <T, U>(separator: T, list: List<U>): intersperse_11<T, U>;
};
type intersperse_10<T> = {
    <U>(list: List<U>): intersperse_11<T, U>;
};
type intersperse_01<U> = {
    <T>(separator: T): intersperse_11<T, U>;
};
type intersperse_11<T, U> = (T | U)[];
export = intersperse;

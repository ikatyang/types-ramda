import { List } from "./$types";
declare const zip: zip_00;
type zip_00 = {
    <T>(a: List<T>): zip_10<T>;
    <$SEL extends "1">(): <T>(a: List<T>) => zip_10<T>;
    <$SEL extends "11">(): <T, U>(a: List<T>, b: List<U>) => zip_11<T, U>;
    <T, U>(a: List<T>, b: List<U>): zip_11<T, U>;
};
type zip_10<T> = {
    <U>(b: List<U>): zip_11<T, U>;
};
type zip_01<U> = {
    <T>(a: List<T>): zip_11<T, U>;
};
type zip_11<T, U> = [T, U][];
export = zip;

import { List } from "./$types";
declare const intersection: intersection_00;
type intersection_00 = {
    <T>(a: List<T>): intersection_10<T>;
    <$SEL extends "1">(): <T>(a: List<T>) => intersection_10<T>;
    <$SEL extends "11">(): <T>(a: List<T>, b: List<T>) => intersection_11<T>;
    <T>(a: List<T>, b: List<T>): intersection_11<T>;
};
type intersection_10<T> = {
    (b: List<T>): intersection_11<T>;
};
type intersection_01<T> = {
    (a: List<T>): intersection_11<T>;
};
type intersection_11<T> = T[];
export = intersection;

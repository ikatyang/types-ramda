import { Comparator, List } from "./$types";
declare const intersectionWith: intersectionWith_000;
type intersectionWith_000 = {
    <T>(fn: Comparator<T, boolean>): intersectionWith_100<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): intersectionWith_110<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => intersectionWith_100<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, a: List<T>) => intersectionWith_110<T>;
    <$SEL extends "111">(): <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>) => intersectionWith_111<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_100<T> = {
    (a: List<T>): intersectionWith_110<T>;
    <$SEL extends "1">(): (a: List<T>) => intersectionWith_110<T>;
    <$SEL extends "11">(): (a: List<T>, b: List<T>) => intersectionWith_111<T>;
    (a: List<T>, b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_010<T> = {
    (fn: Comparator<T, boolean>): intersectionWith_110<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => intersectionWith_110<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, b: List<T>) => intersectionWith_111<T>;
    (fn: Comparator<T, boolean>, b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_110<T> = {
    (b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_001<T> = {
    (fn: Comparator<T, boolean>): intersectionWith_101<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => intersectionWith_101<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => intersectionWith_111<T>;
    (fn: Comparator<T, boolean>, a: List<T>): intersectionWith_111<T>;
};
type intersectionWith_101<T> = {
    (a: List<T>): intersectionWith_111<T>;
};
type intersectionWith_011<T> = {
    (fn: Comparator<T, boolean>): intersectionWith_111<T>;
};
type intersectionWith_111<T> = T[];
export = intersectionWith;

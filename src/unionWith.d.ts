import { Comparator, List } from "./$types";
declare const unionWith: unionWith_000;
type unionWith_000 = {
    <T>(fn: Comparator<T, boolean>): unionWith_100<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): unionWith_110<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => unionWith_100<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, a: List<T>) => unionWith_110<T>;
    <$SEL extends "111">(): <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>) => unionWith_111<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): unionWith_111<T>;
};
type unionWith_100<T> = {
    (a: List<T>): unionWith_110<T>;
    <$SEL extends "1">(): (a: List<T>) => unionWith_110<T>;
    <$SEL extends "11">(): (a: List<T>, b: List<T>) => unionWith_111<T>;
    (a: List<T>, b: List<T>): unionWith_111<T>;
};
type unionWith_010<T> = {
    (fn: Comparator<T, boolean>): unionWith_110<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => unionWith_110<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, b: List<T>) => unionWith_111<T>;
    (fn: Comparator<T, boolean>, b: List<T>): unionWith_111<T>;
};
type unionWith_110<T> = {
    (b: List<T>): unionWith_111<T>;
};
type unionWith_001<T> = {
    (fn: Comparator<T, boolean>): unionWith_101<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => unionWith_101<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => unionWith_111<T>;
    (fn: Comparator<T, boolean>, a: List<T>): unionWith_111<T>;
};
type unionWith_101<T> = {
    (a: List<T>): unionWith_111<T>;
};
type unionWith_011<T> = {
    (fn: Comparator<T, boolean>): unionWith_111<T>;
};
type unionWith_111<T> = T[];
export = unionWith;

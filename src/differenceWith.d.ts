import { Comparator, List } from "./$types";
declare const differenceWith: differenceWith_000;
type differenceWith_000 = {
    <T>(fn: Comparator<T, boolean>): differenceWith_100<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): differenceWith_110<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => differenceWith_100<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, a: List<T>) => differenceWith_110<T>;
    <$SEL extends "111">(): <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>) => differenceWith_111<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_100<T> = {
    (a: List<T>): differenceWith_110<T>;
    <$SEL extends "1">(): (a: List<T>) => differenceWith_110<T>;
    <$SEL extends "11">(): (a: List<T>, b: List<T>) => differenceWith_111<T>;
    (a: List<T>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_010<T> = {
    (fn: Comparator<T, boolean>): differenceWith_110<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => differenceWith_110<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, b: List<T>) => differenceWith_111<T>;
    (fn: Comparator<T, boolean>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_110<T> = {
    (b: List<T>): differenceWith_111<T>;
};
type differenceWith_001<T> = {
    (fn: Comparator<T, boolean>): differenceWith_101<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => differenceWith_101<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => differenceWith_111<T>;
    (fn: Comparator<T, boolean>, a: List<T>): differenceWith_111<T>;
};
type differenceWith_101<T> = {
    (a: List<T>): differenceWith_111<T>;
};
type differenceWith_011<T> = {
    (fn: Comparator<T, boolean>): differenceWith_111<T>;
};
type differenceWith_111<T> = T[];
export = differenceWith;

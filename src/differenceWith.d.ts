import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const differenceWith: differenceWith_000;
type differenceWith_000 = {
    <T>(fn: Comparator<T, boolean>): differenceWith_100<T>;
    <T>(_fn: PH, a: List<T>): differenceWith_010<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): differenceWith_110<T>;
    <T>(_fn: PH, _a: PH, b: List<T>): differenceWith_001<T>;
    <T>(_fn: PH, a: List<T>, b: List<T>): differenceWith_011<T>;
    <T>(fn: Comparator<T, boolean>, _a: PH, b: List<T>): differenceWith_101<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_100<T> = {
    (a: List<T>): differenceWith_110<T>;
    (_a: PH, b: List<T>): differenceWith_101<T>;
    (a: List<T>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_010<T> = {
    (fn: Comparator<T, boolean>): differenceWith_110<T>;
    (_fn: PH, b: List<T>): differenceWith_011<T>;
    (fn: Comparator<T, boolean>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_110<T> = {
    (b: List<T>): differenceWith_111<T>;
};
type differenceWith_001<T> = {
    (fn: Comparator<T, boolean>): differenceWith_101<T>;
    (_fn: PH, a: List<T>): differenceWith_011<T>;
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

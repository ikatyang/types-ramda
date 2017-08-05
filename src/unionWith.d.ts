import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const unionWith: unionWith_000;
type unionWith_000 = {
    <T>(fn: Comparator<T, boolean>): unionWith_100<T>;
    <T>(_fn: PH, a: List<T>): unionWith_010<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): unionWith_110<T>;
    <T>(_fn: PH, _a: PH, b: List<T>): unionWith_001<T>;
    <T>(_fn: PH, a: List<T>, b: List<T>): unionWith_011<T>;
    <T>(fn: Comparator<T, boolean>, _a: PH, b: List<T>): unionWith_101<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): unionWith_111<T>;
};
type unionWith_100<T> = {
    (a: List<T>): unionWith_110<T>;
    (_a: PH, b: List<T>): unionWith_101<T>;
    (a: List<T>, b: List<T>): unionWith_111<T>;
};
type unionWith_010<T> = {
    (fn: Comparator<T, boolean>): unionWith_110<T>;
    (_fn: PH, b: List<T>): unionWith_011<T>;
    (fn: Comparator<T, boolean>, b: List<T>): unionWith_111<T>;
};
type unionWith_110<T> = {
    (b: List<T>): unionWith_111<T>;
};
type unionWith_001<T> = {
    (fn: Comparator<T, boolean>): unionWith_101<T>;
    (_fn: PH, a: List<T>): unionWith_011<T>;
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

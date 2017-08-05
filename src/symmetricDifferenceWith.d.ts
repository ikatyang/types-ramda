import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const symmetricDifferenceWith: symmetricDifferenceWith_000;
type symmetricDifferenceWith_000 = {
    <T>(fn: Comparator<T, boolean>): symmetricDifferenceWith_100<T>;
    <T>(_fn: PH, a: List<T>): symmetricDifferenceWith_010<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): symmetricDifferenceWith_110<T>;
    <T>(_fn: PH, _a: PH, b: List<T>): symmetricDifferenceWith_001<T>;
    <T>(_fn: PH, a: List<T>, b: List<T>): symmetricDifferenceWith_011<T>;
    <T>(fn: Comparator<T, boolean>, _a: PH, b: List<T>): symmetricDifferenceWith_101<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_100<T> = {
    (a: List<T>): symmetricDifferenceWith_110<T>;
    (_a: PH, b: List<T>): symmetricDifferenceWith_101<T>;
    (a: List<T>, b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_010<T> = {
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_110<T>;
    (_fn: PH, b: List<T>): symmetricDifferenceWith_011<T>;
    (fn: Comparator<T, boolean>, b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_110<T> = {
    (b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_001<T> = {
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_101<T>;
    (_fn: PH, a: List<T>): symmetricDifferenceWith_011<T>;
    (fn: Comparator<T, boolean>, a: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_101<T> = {
    (a: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_011<T> = {
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_111<T> = T[];
export = symmetricDifferenceWith;

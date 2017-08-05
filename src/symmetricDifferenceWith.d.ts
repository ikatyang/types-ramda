import { Comparator, List } from "./$types";
declare const symmetricDifferenceWith: symmetricDifferenceWith_000;
type symmetricDifferenceWith_000 = {
    <T>(fn: Comparator<T, boolean>): symmetricDifferenceWith_100<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): symmetricDifferenceWith_110<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_100<T> = {
    (a: List<T>): symmetricDifferenceWith_110<T>;
    (a: List<T>, b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_010<T> = {
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_110<T>;
    (fn: Comparator<T, boolean>, b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_110<T> = {
    (b: List<T>): symmetricDifferenceWith_111<T>;
};
type symmetricDifferenceWith_001<T> = {
    (fn: Comparator<T, boolean>): symmetricDifferenceWith_101<T>;
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

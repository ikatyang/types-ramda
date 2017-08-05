import { Comparator } from "./$types";
declare const comparator: comparator_0;
type comparator_0 = {
    <T>(fn: Comparator<T, boolean>): comparator_1<T>;
};
type comparator_1<T> = Comparator<T, number>;
export = comparator;

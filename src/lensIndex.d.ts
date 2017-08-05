import { Lens, List } from "./$types";
declare const lensIndex: lensIndex_0;
type lensIndex_0 = {
    <T, U extends List<T>>(index: number): lensIndex_1<T, U>;
};
type lensIndex_1<T, U extends List<T>> = Lens<T, U>;
export = lensIndex;

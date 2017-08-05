import { Predicate } from "./$types";
declare const allPass: allPass_0;
type allPass_0 = {
    <T>(fns: Predicate<T>[]): allPass_1<T>;
};
type allPass_1<T> = Predicate<T>;
export = allPass;

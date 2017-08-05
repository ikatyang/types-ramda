import { Predicate } from "./$types";
declare const anyPass: anyPass_0;
type anyPass_0 = {
    <T>(fns: Predicate<T>[]): anyPass_1<T>;
};
type anyPass_1<T> = Predicate<T>;
export = anyPass;

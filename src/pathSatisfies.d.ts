import { Path, Predicate } from "./$types";
declare const pathSatisfies: pathSatisfies_000;
type pathSatisfies_000 = {
    (fn: Predicate<any>): pathSatisfies_100;
    (fn: Predicate<any>, path: Path): pathSatisfies_110;
    <$SEL extends "1">(): (fn: Predicate<any>) => pathSatisfies_100;
    <$SEL extends "11">(): (fn: Predicate<any>, path: Path) => pathSatisfies_110;
    <$SEL extends "111">(): (fn: Predicate<any>, path: Path, object: {}) => pathSatisfies_111;
    (fn: Predicate<any>, path: Path, object: {}): pathSatisfies_111;
};
type pathSatisfies_100 = {
    (path: Path): pathSatisfies_110;
    <$SEL extends "1">(): (path: Path) => pathSatisfies_110;
    <$SEL extends "11">(): (path: Path, object: {}) => pathSatisfies_111;
    (path: Path, object: {}): pathSatisfies_111;
};
type pathSatisfies_010 = {
    (fn: Predicate<any>): pathSatisfies_110;
    <$SEL extends "1">(): (fn: Predicate<any>) => pathSatisfies_110;
    <$SEL extends "11">(): (fn: Predicate<any>, object: {}) => pathSatisfies_111;
    (fn: Predicate<any>, object: {}): pathSatisfies_111;
};
type pathSatisfies_110 = {
    (object: {}): pathSatisfies_111;
};
type pathSatisfies_001 = {
    (fn: Predicate<any>): pathSatisfies_101;
    <$SEL extends "1">(): (fn: Predicate<any>) => pathSatisfies_101;
    <$SEL extends "11">(): (fn: Predicate<any>, path: Path) => pathSatisfies_111;
    (fn: Predicate<any>, path: Path): pathSatisfies_111;
};
type pathSatisfies_101 = {
    (path: Path): pathSatisfies_111;
};
type pathSatisfies_011 = {
    (fn: Predicate<any>): pathSatisfies_111;
};
type pathSatisfies_111 = boolean;
export = pathSatisfies;

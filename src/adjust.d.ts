import { List, Morphism } from "./$types";
declare const adjust: adjust_000;
type adjust_000 = {
    <T, U>(fn: Morphism<T, U>): adjust_100<T, U>;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_110<T, U>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_100<T, U>;
    <$SEL extends "11">(): <T, U>(fn: Morphism<T, U>, index: number) => adjust_110<T, U>;
    <$SEL extends "111">(): <T, U>(fn: Morphism<T, U>, index: number, list: List<T>) => adjust_111<T, U>;
    <T, U>(fn: Morphism<T, U>, index: number, list: List<T>): adjust_111<T, U>;
};
type adjust_100<T, U> = {
    (index: number): adjust_110<T, U>;
    <$SEL extends "1">(): (index: number) => adjust_110<T, U>;
    <$SEL extends "11">(): (index: number, list: List<T>) => adjust_111<T, U>;
    (index: number, list: List<T>): adjust_111<T, U>;
};
type adjust_010 = {
    <T, U>(fn: Morphism<T, U>): adjust_110<T, U>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_110<T, U>;
    <$SEL extends "11">(): <T, U>(fn: Morphism<T, U>, list: List<T>) => adjust_111<T, U>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): adjust_111<T, U>;
};
type adjust_110<T, U> = {
    (list: List<T>): adjust_111<T, U>;
};
type adjust_001<T> = {
    <U>(fn: Morphism<T, U>): adjust_101<T, U>;
    <$SEL extends "1">(): <U>(fn: Morphism<T, U>) => adjust_101<T, U>;
    <$SEL extends "11">(): <U>(fn: Morphism<T, U>, index: number) => adjust_111<T, U>;
    <U>(fn: Morphism<T, U>, index: number): adjust_111<T, U>;
};
type adjust_101<T, U> = {
    (index: number): adjust_111<T, U>;
};
type adjust_011<T> = {
    <U>(fn: Morphism<T, U>): adjust_111<T, U>;
};
type adjust_111<T, U> = (T | U)[];
export = adjust;

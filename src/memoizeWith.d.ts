import { Property, Variadic } from "./$types";
declare const memoizeWith: memoizeWith_00;
type memoizeWith_00 = {
    (cacheKey: Variadic<Property>): memoizeWith_10;
    <$SEL extends "1">(): (cacheKey: Variadic<Property>) => memoizeWith_10;
    <$SEL extends "11">(): <T extends Function>(cacheKey: Variadic<Property>, fn: T) => memoizeWith_11<T>;
    <T extends Function>(cacheKey: Variadic<Property>, fn: T): memoizeWith_11<T>;
};
type memoizeWith_10 = {
    <T extends Function>(fn: T): memoizeWith_11<T>;
};
type memoizeWith_01<T extends Function> = {
    (cacheKey: Variadic<Property>): memoizeWith_11<T>;
};
type memoizeWith_11<T extends Function> = T;
export = memoizeWith;

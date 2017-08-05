import { List } from "./$types";
declare const startsWith: startsWith_00;
type startsWith_00 = {
    <T extends List<any>>(prefix: T): startsWith_10<T>;
    <$SEL extends "1">(): <T extends List<any>>(prefix: T) => startsWith_10<T>;
    <$SEL extends "11">(): <T extends List<any>>(prefix: T, list: T) => startsWith_11;
    <T extends List<any>>(prefix: T, list: T): startsWith_11;
};
type startsWith_10<T extends List<any>> = {
    (list: T): startsWith_11;
};
type startsWith_01<T extends List<any>> = {
    (prefix: T): startsWith_11;
};
type startsWith_11 = boolean;
export = startsWith;

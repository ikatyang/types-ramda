import { List } from "./$types";
declare const endsWith: endsWith_00;
type endsWith_00 = {
    <T extends List<any>>(suffix: T): endsWith_10<T>;
    <$SEL extends "1">(): <T extends List<any>>(suffix: T) => endsWith_10<T>;
    <$SEL extends "11">(): <T extends List<any>>(suffix: T, list: T) => endsWith_11;
    <T extends List<any>>(suffix: T, list: T): endsWith_11;
};
type endsWith_10<T extends List<any>> = {
    (list: T): endsWith_11;
};
type endsWith_01<T extends List<any>> = {
    (suffix: T): endsWith_11;
};
type endsWith_11 = boolean;
export = endsWith;

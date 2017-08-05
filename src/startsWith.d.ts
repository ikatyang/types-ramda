import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const startsWith: startsWith_00;
type startsWith_00 = {
    <T extends List<any>>(prefix: T): startsWith_10<T>;
    <T extends List<any>>(_prefix: PH, list: T): startsWith_01<T>;
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

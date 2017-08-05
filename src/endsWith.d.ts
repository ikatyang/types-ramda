import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const endsWith: endsWith_00;
type endsWith_00 = {
    <T extends List<any>>(suffix: T): endsWith_10<T>;
    <T extends List<any>>(_suffix: PH, list: T): endsWith_01<T>;
    <$SEL extends "1">(): <T extends List<any>>(suffix: T) => endsWith_10<T>;
    <$SEL extends "01">(): <T extends List<any>>(_suffix: PH, list: T) => endsWith_01<T>;
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

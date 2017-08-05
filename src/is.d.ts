import { Constructor } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const is: is_00;
type is_00 = {
    <T>(constructor: Constructor<T>): is_10<T>;
    (_constructor: PH, value: any): is_01;
    <$SEL extends "1">(): <T>(constructor: Constructor<T>) => is_10<T>;
    <$SEL extends "01">(): (_constructor: PH, value: any) => is_01;
    <$SEL extends "11">(): <T>(constructor: Constructor<T>, value: any) => value is T;
    <T>(constructor: Constructor<T>, value: any): value is T;
};
type is_10<T> = {
    (value: any): value is T;
};
type is_01 = {
    <T>(constructor: Constructor<T>): is_11<T>;
};
type is_11<T> = boolean;
export = is;

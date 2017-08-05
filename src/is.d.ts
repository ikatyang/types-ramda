import { Constructor } from "./$types";
declare const is: is_00;
type is_00 = {
    <T>(constructor: Constructor<T>): is_10<T>;
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

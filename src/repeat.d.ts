import { Placeholder as PH } from "./$placeholder";
declare const repeat: repeat_00;
type repeat_00 = {
    <T>(value: T): repeat_10<T>;
    (_value: PH, count: number): repeat_01;
    <T>(value: T, count: number): repeat_11<T>;
};
type repeat_10<T> = {
    (count: number): repeat_11<T>;
};
type repeat_01 = {
    <T>(value: T): repeat_11<T>;
};
type repeat_11<T> = T[];
export = repeat;

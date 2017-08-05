declare const repeat: repeat_00;
type repeat_00 = {
    <T>(value: T): repeat_10<T>;
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

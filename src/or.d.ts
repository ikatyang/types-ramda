declare const or: or_00;
type or_00 = {
    <T>(a: T): or_10<T>;
    <T, U>(a: T, b: U): or_11<T, U>;
};
type or_10<T> = {
    <U>(b: U): or_11<T, U>;
};
type or_01<U> = {
    <T>(a: T): or_11<T, U>;
};
type or_11<T, U> = T | U;
export = or;

import { Lens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const lens: lens_00;
type lens_00 = {
    <T, U>(getter: (target: U) => T): lens_10<T, U>;
    <T, U>(_getter: PH, setter: (focus: T, target: U) => U): lens_01<T, U>;
    <T, U>(getter: (target: U) => T, setter: (focus: T, target: U) => U): lens_11<T, U>;
};
type lens_10<T, U> = {
    (setter: (focus: T, target: U) => U): lens_11<T, U>;
};
type lens_01<T, U> = {
    (getter: (target: U) => T): lens_11<T, U>;
};
type lens_11<T, U> = Lens<T, U>;
export = lens;

import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const symmetricDifference: symmetricDifference_00;
type symmetricDifference_00 = {
    <T>(a: List<T>): symmetricDifference_10<T>;
    <T>(_a: PH, b: List<T>): symmetricDifference_01<T>;
    <$SEL extends "1">(): <T>(a: List<T>) => symmetricDifference_10<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: List<T>) => symmetricDifference_01<T>;
    <$SEL extends "11">(): <T>(a: List<T>, b: List<T>) => symmetricDifference_11<T>;
    <T>(a: List<T>, b: List<T>): symmetricDifference_11<T>;
};
type symmetricDifference_10<T> = {
    (b: List<T>): symmetricDifference_11<T>;
};
type symmetricDifference_01<T> = {
    (a: List<T>): symmetricDifference_11<T>;
};
type symmetricDifference_11<T> = T[];
export = symmetricDifference;

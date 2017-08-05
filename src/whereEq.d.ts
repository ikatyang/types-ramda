import { Dictionary } from "./$types";
declare const whereEq: whereEq_00;
type whereEq_00 = {
    <T>(spec: Dictionary<T>): whereEq_10<T>;
    <$SEL extends "1">(): <T>(spec: Dictionary<T>) => whereEq_10<T>;
    <$SEL extends "11">(): <T>(spec: Dictionary<T>, object: Dictionary<T>) => whereEq_11;
    <T>(spec: Dictionary<T>, object: Dictionary<T>): whereEq_11;
};
type whereEq_10<T> = {
    (object: Dictionary<T>): whereEq_11;
};
type whereEq_01<T> = {
    (spec: Dictionary<T>): whereEq_11;
};
type whereEq_11 = boolean;
export = whereEq;

import { Dictionary, Predicate } from "./$types";
declare const where: where_00;
type where_00 = {
    <T>(spec: Dictionary<Predicate<T>>): where_10<T>;
    <T>(spec: Dictionary<Predicate<T>>, object: Dictionary<T>): where_11;
};
type where_10<T> = {
    (object: Dictionary<T>): where_11;
};
type where_01<T> = {
    (spec: Dictionary<Predicate<T>>): where_11;
};
type where_11 = boolean;
export = where;

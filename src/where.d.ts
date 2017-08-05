import { Dictionary, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const where: where_00;
type where_00 = {
    <T>(spec: Dictionary<Predicate<T>>): where_10<T>;
    <T>(_spec: PH, object: Dictionary<T>): where_01<T>;
    <$SEL extends "1">(): <T>(spec: Dictionary<Predicate<T>>) => where_10<T>;
    <$SEL extends "01">(): <T>(_spec: PH, object: Dictionary<T>) => where_01<T>;
    <$SEL extends "11">(): <T>(spec: Dictionary<Predicate<T>>, object: Dictionary<T>) => where_11;
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

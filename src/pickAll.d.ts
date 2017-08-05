import { List, Property } from "./$types";
declare const pickAll: pickAll_00;
type pickAll_00 = {
    <T extends {}, K extends keyof T>(keys: List<K>): pickAll_pick_10<T, K>;
    (keys: List<Property>): pickAll_general_10;
    <T extends {}, K extends keyof T>(keys: List<K>, object: T): pickAll_pick_11<T, K>;
    <$SEL extends "1", $KIND extends "pick">(): <T extends {}, K extends keyof T>(keys: List<K>) => pickAll_pick_10<T, K>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => pickAll_general_10;
    <$SEL extends "11", $KIND extends "pick">(): <T extends {}, K extends keyof T>(keys: List<K>, object: T) => pickAll_pick_11<T, K>;
    <$SEL extends "11", $KIND extends "general">(): <T extends {}>(keys: List<Property>, object: T) => pickAll_general_11<T>;
    <T extends {}>(keys: List<Property>, object: T): pickAll_general_11<T>;
};
type pickAll_01<T extends {}> = {
    <K extends keyof T>(keys: List<K>): pickAll_pick_11<T, K>;
    <$SEL extends "1", $KIND extends "pick">(): <K extends keyof T>(keys: List<K>) => pickAll_pick_11<T, K>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => pickAll_general_11<T>;
    (keys: List<Property>): pickAll_general_11<T>;
};
type pickAll_pick_10<T extends {}, K extends keyof T> = {
    (object: T): pickAll_pick_11<T, K>;
};
type pickAll_general_10 = {
    <T extends {}>(object: T): pickAll_general_11<T>;
};
type pickAll_pick_11<T extends {}, K extends keyof T> = Pick<T, K>;
type pickAll_general_11<T extends {}> = Partial<T>;
export = pickAll;

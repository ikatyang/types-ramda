import { Property } from "./$types";
declare const eqProps: eqProps_000;
type eqProps_000 = {
    (property: Property): eqProps_100;
    <T>(property: Property, a: T): eqProps_110<T>;
    <$SEL extends "1">(): (property: Property) => eqProps_100;
    <$SEL extends "11">(): <T>(property: Property, a: T) => eqProps_110<T>;
    <$SEL extends "111">(): <T>(property: Property, a: T, b: T) => eqProps_111;
    <T>(property: Property, a: T, b: T): eqProps_111;
};
type eqProps_100 = {
    <T>(a: T): eqProps_110<T>;
    <$SEL extends "1">(): <T>(a: T) => eqProps_110<T>;
    <$SEL extends "11">(): <T>(a: T, b: T) => eqProps_111;
    <T>(a: T, b: T): eqProps_111;
};
type eqProps_010<T> = {
    (property: Property): eqProps_110<T>;
    <$SEL extends "1">(): (property: Property) => eqProps_110<T>;
    <$SEL extends "11">(): (property: Property, b: T) => eqProps_111;
    (property: Property, b: T): eqProps_111;
};
type eqProps_110<T> = {
    (b: T): eqProps_111;
};
type eqProps_001<T> = {
    (property: Property): eqProps_101<T>;
    <$SEL extends "1">(): (property: Property) => eqProps_101<T>;
    <$SEL extends "11">(): (property: Property, a: T) => eqProps_111;
    (property: Property, a: T): eqProps_111;
};
type eqProps_101<T> = {
    (a: T): eqProps_111;
};
type eqProps_011<T> = {
    (property: Property): eqProps_111;
};
type eqProps_111 = boolean;
export = eqProps;

import { Property } from "./$types";
declare const propEq: propEq_000;
type propEq_000 = {
    (key: Property): propEq_100;
    (key: Property, value: any): propEq_110;
    <$SEL extends "1">(): (key: Property) => propEq_100;
    <$SEL extends "11">(): (key: Property, value: any) => propEq_110;
    <$SEL extends "111">(): (key: Property, value: any, object: {}) => propEq_111;
    (key: Property, value: any, object: {}): propEq_111;
};
type propEq_100 = {
    (value: any): propEq_110;
    <$SEL extends "1">(): (value: any) => propEq_110;
    <$SEL extends "11">(): (value: any, object: {}) => propEq_111;
    (value: any, object: {}): propEq_111;
};
type propEq_010 = {
    (key: Property): propEq_110;
    <$SEL extends "1">(): (key: Property) => propEq_110;
    <$SEL extends "11">(): (key: Property, object: {}) => propEq_111;
    (key: Property, object: {}): propEq_111;
};
type propEq_110 = {
    (object: {}): propEq_111;
};
type propEq_001 = {
    (key: Property): propEq_101;
    <$SEL extends "1">(): (key: Property) => propEq_101;
    <$SEL extends "11">(): (key: Property, value: any) => propEq_111;
    (key: Property, value: any): propEq_111;
};
type propEq_101 = {
    (value: any): propEq_111;
};
type propEq_011 = {
    (key: Property): propEq_111;
};
type propEq_111 = boolean;
export = propEq;

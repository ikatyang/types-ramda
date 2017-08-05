import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propEq: propEq_000;
type propEq_000 = {
    (key: Property): propEq_100;
    (_key: PH, value: any): propEq_010;
    (key: Property, value: any): propEq_110;
    (_key: PH, _value: PH, object: {}): propEq_001;
    (_key: PH, value: any, object: {}): propEq_011;
    (key: Property, _value: PH, object: {}): propEq_101;
    (key: Property, value: any, object: {}): propEq_111;
};
type propEq_100 = {
    (value: any): propEq_110;
    (_value: PH, object: {}): propEq_101;
    (value: any, object: {}): propEq_111;
};
type propEq_010 = {
    (key: Property): propEq_110;
    (_key: PH, object: {}): propEq_011;
    (key: Property, object: {}): propEq_111;
};
type propEq_110 = {
    (object: {}): propEq_111;
};
type propEq_001 = {
    (key: Property): propEq_101;
    (_key: PH, value: any): propEq_011;
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

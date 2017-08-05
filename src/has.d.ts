import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const has: has_00;
type has_00 = {
    (property: Property): has_10;
    (_property: PH, object: {}): has_01;
    <$SEL extends "1">(): (property: Property) => has_10;
    <$SEL extends "01">(): (_property: PH, object: {}) => has_01;
    <$SEL extends "11">(): (property: Property, object: {}) => has_11;
    (property: Property, object: {}): has_11;
};
type has_10 = {
    (object: {}): has_11;
};
type has_01 = {
    (property: Property): has_11;
};
type has_11 = boolean;
export = has;

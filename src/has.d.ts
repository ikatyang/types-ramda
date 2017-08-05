import { Property } from "./$types";
declare const has: has_00;
type has_00 = {
    (property: Property): has_10;
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

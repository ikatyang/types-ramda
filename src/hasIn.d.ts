import { Property } from "./$types";
declare const hasIn: hasIn_00;
type hasIn_00 = {
    (property: Property): hasIn_10;
    <$SEL extends "1">(): (property: Property) => hasIn_10;
    <$SEL extends "11">(): (property: Property, object: {}) => hasIn_11;
    (property: Property, object: {}): hasIn_11;
};
type hasIn_10 = {
    (object: {}): hasIn_11;
};
type hasIn_01 = {
    (property: Property): hasIn_11;
};
type hasIn_11 = boolean;
export = hasIn;

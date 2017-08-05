import { Placeholder as PH } from "./$placeholder";
declare const mergeDeepLeft: mergeDeepLeft_00;
type mergeDeepLeft_00 = {
    (left: object): mergeDeepLeft_10;
    (_left: PH, right: object): mergeDeepLeft_01;
    (left: object, right: object): mergeDeepLeft_11;
};
type mergeDeepLeft_10 = {
    (right: object): mergeDeepLeft_11;
};
type mergeDeepLeft_01 = {
    (left: object): mergeDeepLeft_11;
};
type mergeDeepLeft_11 = object;
export = mergeDeepLeft;

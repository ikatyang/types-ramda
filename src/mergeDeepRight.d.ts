declare const mergeDeepRight: mergeDeepRight_00;
type mergeDeepRight_00 = {
    (left: object): mergeDeepRight_10;
    <$SEL extends "1">(): (left: object) => mergeDeepRight_10;
    <$SEL extends "11">(): (left: object, right: object) => mergeDeepRight_11;
    (left: object, right: object): mergeDeepRight_11;
};
type mergeDeepRight_10 = {
    (right: object): mergeDeepRight_11;
};
type mergeDeepRight_01 = {
    (left: object): mergeDeepRight_11;
};
type mergeDeepRight_11 = object;
export = mergeDeepRight;

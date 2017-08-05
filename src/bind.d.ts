import { Placeholder as PH } from "./$placeholder";
declare const bind: bind_00;
type bind_00 = {
    <T extends Function>(fn: T): bind_10<T>;
    (_fn: PH, context: any): bind_01;
    <$SEL extends "1">(): <T extends Function>(fn: T) => bind_10<T>;
    <$SEL extends "01">(): (_fn: PH, context: any) => bind_01;
    <$SEL extends "11">(): <T extends Function>(fn: T, context: any) => bind_11<T>;
    <T extends Function>(fn: T, context: any): bind_11<T>;
};
type bind_10<T extends Function> = {
    (context: any): bind_11<T>;
};
type bind_01 = {
    <T extends Function>(fn: T): bind_11<T>;
};
type bind_11<T extends Function> = T;
export = bind;

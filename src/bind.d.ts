declare const bind: bind_00;
type bind_00 = {
    <T extends Function>(fn: T): bind_10<T>;
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

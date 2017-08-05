declare const nthArg: nthArg_0;
type nthArg_0 = {
    (n: number): nthArg_1;
};
type nthArg_1 = <T>(...args: T[]) => T;
export = nthArg;

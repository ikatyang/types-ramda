declare const memoize: memoize_0;
type memoize_0 = {
    <T extends Function>(fn: T): memoize_1<T>;
};
type memoize_1<T extends Function> = T;
export = memoize;

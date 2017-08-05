declare const once: once_0;
type once_0 = {
    <T extends Function>(fn: T): once_1<T>;
};
type once_1<T extends Function> = T;
export = once;

declare const toPairs: toPairs_0;
type toPairs_0 = {
    <T>(object: T): toPairs_1<T>;
};
type toPairs_1<T> = [keyof T, T[keyof T]][];
export = toPairs;

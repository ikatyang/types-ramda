declare const toPairsIn: toPairsIn_0;
type toPairsIn_0 = {
    <T>(object: T): toPairsIn_1<T>;
};
type toPairsIn_1<T> = [keyof T, T[keyof T]][];
export = toPairsIn;

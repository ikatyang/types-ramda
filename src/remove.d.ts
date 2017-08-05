declare const remove: remove_000;
type remove_000 = {
    (start: number): remove_100;
    (start: number, counter: number): remove_110;
    <T>(start: number, counter: number, list: T[]): remove_111<T>;
};
type remove_100 = {
    (counter: number): remove_110;
    <T>(counter: number, list: T[]): remove_111<T>;
};
type remove_010 = {
    (start: number): remove_110;
    <T>(start: number, list: T[]): remove_111<T>;
};
type remove_110 = {
    <T>(list: T[]): remove_111<T>;
};
type remove_001<T> = {
    (start: number): remove_101<T>;
    (start: number, counter: number): remove_111<T>;
};
type remove_101<T> = {
    (counter: number): remove_111<T>;
};
type remove_011<T> = {
    (start: number): remove_111<T>;
};
type remove_111<T> = T[];
export = remove;

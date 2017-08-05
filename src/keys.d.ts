declare const keys: keys_0;
type keys_0 = {
    <T, K extends keyof T>(object: T): keys_1<T, K>;
};
type keys_1<T, K extends keyof T> = K[];
export = keys;

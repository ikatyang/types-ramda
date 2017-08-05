declare const keysIn: keysIn_0;
type keysIn_0 = {
    <T, K extends keyof T>(object: T): keysIn_1<T, K>;
};
type keysIn_1<T, K extends keyof T> = K[];
export = keysIn;

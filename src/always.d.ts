declare const always: always_0;
type always_0 = {
    <T>(value: T): always_1<T>;
};
type always_1<T> = () => T;
export = always;

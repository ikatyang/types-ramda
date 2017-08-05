declare const valuesIn: valuesIn_0;
type valuesIn_0 = {
    <T extends {}>(value: T): valuesIn_1<T>;
};
type valuesIn_1<T extends {}> = T[keyof T][];
export = valuesIn;

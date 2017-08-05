declare const values: values_0;
type values_0 = {
    <T extends {}>(value: T): values_1<T>;
};
type values_1<T extends {}> = T[keyof T][];
export = values;

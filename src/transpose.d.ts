import { List } from "./$types";
declare const transpose: transpose_0;
type transpose_0 = {
    <T>(list: List<List<T>>): transpose_1<T>;
};
type transpose_1<T> = T[][];
export = transpose;

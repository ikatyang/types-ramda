import { List } from "./$types";
declare const clone: clone_0;
type clone_0 = {
    <T>(value: T): clone_1<T>;
};
type clone_1<T> = T;
export = clone;

import { List } from "./$types";
declare const uniq: uniq_0;
type uniq_0 = {
    <T>(list: List<T>): uniq_1<T>;
};
type uniq_1<T> = T[];
export = uniq;

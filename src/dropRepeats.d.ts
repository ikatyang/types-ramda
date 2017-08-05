import { List } from "./$types";
declare const dropRepeats: dropRepeats_0;
type dropRepeats_0 = {
    <T>(list: List<T>): dropRepeats_1<T>;
};
type dropRepeats_1<T> = T[];
export = dropRepeats;

import { Dictionary } from "./$types";
declare const invert: invert_0;
type invert_0 = {
    (object: Dictionary<any>): invert_1;
};
type invert_1 = Dictionary<string[]>;
export = invert;

import { Dictionary } from "./$types";
declare const invertObj: invertObj_0;
type invertObj_0 = {
    (object: Dictionary<any>): invertObj_1;
};
type invertObj_1 = Dictionary<string>;
export = invertObj;

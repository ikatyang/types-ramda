import { Reduced } from "./$types";
declare const reduced: reduced_0;
type reduced_0 = {
    <T>(value: Reduced<T> | T): reduced_1<T>;
};
type reduced_1<T> = Reduced<T>;
export = reduced;

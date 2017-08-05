import { Dictionary, KeyValuePair, List, Property } from "./$types";
declare const fromPairs: fromPairs_0;
type fromPairs_0 = {
    <T>(pairs: List<KeyValuePair<Property, T>>): fromPairs_1<T>;
};
type fromPairs_1<T> = Dictionary<T>;
export = fromPairs;

import { NestedDictionary, Variadic } from "./$types";
declare const applySpec: applySpec_0;
type applySpec_0 = {
    <T>(spec: NestedDictionary<Variadic<any>>): applySpec_1<T>;
};
type applySpec_1<T> = Variadic<T>;
export = applySpec;

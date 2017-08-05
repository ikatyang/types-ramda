import { Lens, Property } from "./$types";
declare const lensProp: lensProp_0;
type lensProp_0 = {
    <T, U>(property: Property): lensProp_1<T, U>;
};
type lensProp_1<T, U> = Lens<T, U>;
export = lensProp;

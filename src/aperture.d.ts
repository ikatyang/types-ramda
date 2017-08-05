import { List } from "./$types";
declare const aperture: aperture_00;
type aperture_00 = {
    (n: number): aperture_10;
    <T>(n: number, list: List<T>): aperture_11<T>;
};
type aperture_10 = {
    <T>(list: List<T>): aperture_11<T>;
};
type aperture_01<T> = {
    (n: number): aperture_11<T>;
};
type aperture_11<T> = T[][];
export = aperture;

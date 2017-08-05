import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const aperture: aperture_00;
type aperture_00 = {
    (n: number): aperture_10;
    <T>(_n: PH, list: List<T>): aperture_01<T>;
    <$SEL extends "1">(): (n: number) => aperture_10;
    <$SEL extends "01">(): <T>(_n: PH, list: List<T>) => aperture_01<T>;
    <$SEL extends "11">(): <T>(n: number, list: List<T>) => aperture_11<T>;
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

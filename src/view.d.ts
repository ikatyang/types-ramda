import { Lens } from "./$types";
declare const view: view_00;
type view_00 = {
    <T, U>(lens: Lens<T, U>): view_10<T, U>;
    <$SEL extends "1">(): <T, U>(lens: Lens<T, U>) => view_10<T, U>;
    <$SEL extends "11">(): <T, U>(lens: Lens<T, U>, target: U) => view_11<T>;
    <T, U>(lens: Lens<T, U>, target: U): view_11<T>;
};
type view_10<T, U> = {
    (target: U): view_11<T>;
};
type view_01<U> = {
    <T>(lens: Lens<T, U>): view_11<T>;
};
type view_11<T> = T;
export = view;

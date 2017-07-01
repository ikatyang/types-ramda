import { Lens } from "./$types";
/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
declare const view: view_00;
type view_00 = {
    <T, U>(lens: Lens<T, U>): view_10<T, U>;
    <$SEL extends "11">(): <T, U>(lens: Lens<T, U>, target: U) => view_11<T>;
    <$SEL extends "1">(): <T, U>(lens: Lens<T, U>) => view_10<T, U>;
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

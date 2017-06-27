import { Lens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
    <U>(_lens: PH, target: U): view_01<U>;
    <T, U>(lens: Lens<T, U>, target: U): view_11<T, U>;
    <T, U>(lens: Lens<T, U>): view_10<T, U>;
};
type view_10<T, U> = {
    (target: U): view_11<T, U>;
};
type view_01<U> = {
    <T>(lens: Lens<T, U>): view_11<T, U>;
};
type view_11<T, U> = T;
export = view;

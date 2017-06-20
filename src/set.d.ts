import { Lens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
declare const set: set_000;
type set_000 = {
    <T, U>(lens: Lens<T, U>, _value: PH, target: U): set_101<T, U>;
    <T, U>(_lens: PH, value: T, target: U): set_011<T, U>;
    <U>(_lens: PH, _value: PH, target: U): set_001<U>;
    <T, U>(lens: Lens<T, U>, value: T, target: U): set_111<T, U>;
    <T>(_lens: PH, value: T): set_010<T>;
    <T, U>(lens: Lens<T, U>, value: T): set_110<T, U>;
    <$SEL extends "111">(): <T, U>(lens: Lens<T, U>, value: T, target: U) => set_111<T, U>;
    <$SEL extends "11">(): <T, U>(lens: Lens<T, U>, value: T) => set_110<T, U>;
    <$SEL extends "101">(): <T, U>(lens: Lens<T, U>, _value: PH, target: U) => set_101<T, U>;
    <$SEL extends "1">(): <T, U>(lens: Lens<T, U>) => set_100<T, U>;
    <$SEL extends "011">(): <T, U>(_lens: PH, value: T, target: U) => set_011<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, value: T) => set_010<T>;
    <$SEL extends "001">(): <U>(_lens: PH, _value: PH, target: U) => set_001<U>;
    <T, U>(lens: Lens<T, U>): set_100<T, U>;
};
type set_100<T, U> = {
    (_value: PH, target: U): set_101<T, U>;
    (value: T, target: U): set_111<T, U>;
    <$SEL extends "11">(): (value: T, target: U) => set_111<T, U>;
    <$SEL extends "1">(): (value: T) => set_110<T, U>;
    <$SEL extends "01">(): (_value: PH, target: U) => set_101<T, U>;
    (value: T): set_110<T, U>;
};
type set_010<T> = {
    <U>(_lens: PH, target: U): set_011<T, U>;
    <U>(lens: Lens<T, U>, target: U): set_111<T, U>;
    <$SEL extends "11">(): <U>(lens: Lens<T, U>, target: U) => set_111<T, U>;
    <$SEL extends "1">(): <U>(lens: Lens<T, U>) => set_110<T, U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => set_011<T, U>;
    <U>(lens: Lens<T, U>): set_110<T, U>;
};
type set_110<T, U> = {
    (target: U): set_111<T, U>;
};
type set_001<U> = {
    <T>(_lens: PH, value: T): set_011<T, U>;
    <T>(lens: Lens<T, U>, value: T): set_111<T, U>;
    <$SEL extends "11">(): <T>(lens: Lens<T, U>, value: T) => set_111<T, U>;
    <$SEL extends "1">(): <T>(lens: Lens<T, U>) => set_101<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, value: T) => set_011<T, U>;
    <T>(lens: Lens<T, U>): set_101<T, U>;
};
type set_101<T, U> = {
    (value: T): set_111<T, U>;
};
type set_011<T, U> = {
    (lens: Lens<T, U>): set_111<T, U>;
};
type set_111<T, U> = U;
export = set;
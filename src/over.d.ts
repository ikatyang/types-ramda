import { Lens, Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
declare const over: over_000;
type over_000 = {
    <T, U>(lens: Lens<T, U>): over_100<T, U>;
    <T>(_lens: PH, fn: Morphism<T, T>): over_010<T>;
    <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>): over_110<T, U>;
    <U>(_lens: PH, _fn: PH, target: U): over_001<U>;
    <T, U>(_lens: PH, fn: Morphism<T, T>, target: U): over_011<T, U>;
    <T, U>(lens: Lens<T, U>, _fn: PH, target: U): over_101<T, U>;
    <$SEL extends "111">(): <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>, target: U) => over_111<U>;
    <$SEL extends "11">(): <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>) => over_110<T, U>;
    <$SEL extends "101">(): <T, U>(lens: Lens<T, U>, _fn: PH, target: U) => over_101<T, U>;
    <$SEL extends "1">(): <T, U>(lens: Lens<T, U>) => over_100<T, U>;
    <$SEL extends "011">(): <T, U>(_lens: PH, fn: Morphism<T, T>, target: U) => over_011<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, fn: Morphism<T, T>) => over_010<T>;
    <$SEL extends "001">(): <U>(_lens: PH, _fn: PH, target: U) => over_001<U>;
    <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>, target: U): over_111<U>;
};
type over_100<T, U> = {
    (fn: Morphism<T, T>): over_110<T, U>;
    (_fn: PH, target: U): over_101<T, U>;
    <$SEL extends "11">(): (fn: Morphism<T, T>, target: U) => over_111<U>;
    <$SEL extends "1">(): (fn: Morphism<T, T>) => over_110<T, U>;
    <$SEL extends "01">(): (_fn: PH, target: U) => over_101<T, U>;
    (fn: Morphism<T, T>, target: U): over_111<U>;
};
type over_010<T> = {
    <U>(lens: Lens<T, U>): over_110<T, U>;
    <U>(_lens: PH, target: U): over_011<T, U>;
    <$SEL extends "11">(): <U>(lens: Lens<T, U>, target: U) => over_111<U>;
    <$SEL extends "1">(): <U>(lens: Lens<T, U>) => over_110<T, U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => over_011<T, U>;
    <U>(lens: Lens<T, U>, target: U): over_111<U>;
};
type over_110<T, U> = {
    (target: U): over_111<U>;
};
type over_001<U> = {
    <T>(lens: Lens<T, U>): over_101<T, U>;
    <T>(_lens: PH, fn: Morphism<T, T>): over_011<T, U>;
    <$SEL extends "11">(): <T>(lens: Lens<T, U>, fn: Morphism<T, T>) => over_111<U>;
    <$SEL extends "1">(): <T>(lens: Lens<T, U>) => over_101<T, U>;
    <$SEL extends "01">(): <T>(_lens: PH, fn: Morphism<T, T>) => over_011<T, U>;
    <T>(lens: Lens<T, U>, fn: Morphism<T, T>): over_111<U>;
};
type over_101<T, U> = {
    (fn: Morphism<T, T>): over_111<U>;
};
type over_011<T, U> = {
    (lens: Lens<T, U>): over_111<U>;
};
type over_111<U> = U;
export = over;

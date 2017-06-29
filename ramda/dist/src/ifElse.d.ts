import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
declare const ifElse: ifElse_000;
type ifElse_000 = {
    <T$1, V, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, _onTrue: PH, onFalse: Morphism<T$2, V>): ifElse_101<T$2, V>;
    <T$1, U, V, T$2 extends T$1 = T$1>(_pred: PH, onTrue: Morphism<T$1, U>, onFalse: Morphism<T$2, V>): ifElse_011<T$2, U, V>;
    <T, V>(_pred: PH, _onTrue: PH, onFalse: Morphism<T, V>): ifElse_001<T, V>;
    <T$1, U, V, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: Predicate<T$1>, onTrue: Morphism<T$2, U>, onFalse: Morphism<T$3, V>): ifElse_111<T$3, U, V>;
    <T, U>(_pred: PH, onTrue: Morphism<T, U>): ifElse_010<T, U>;
    <T$1, U, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, onTrue: Morphism<T$2, U>): ifElse_110<T$2, U>;
    <$SEL extends "111">(): <T$1, U, V, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(pred: Predicate<T$1>, onTrue: Morphism<T$2, U>, onFalse: Morphism<T$3, V>) => ifElse_111<T$3, U, V>;
    <$SEL extends "11">(): <T$1, U, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, onTrue: Morphism<T$2, U>) => ifElse_110<T$2, U>;
    <$SEL extends "101">(): <T$1, V, T$2 extends T$1 = T$1>(pred: Predicate<T$1>, _onTrue: PH, onFalse: Morphism<T$2, V>) => ifElse_101<T$2, V>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => ifElse_100<T>;
    <$SEL extends "011">(): <T$1, U, V, T$2 extends T$1 = T$1>(_pred: PH, onTrue: Morphism<T$1, U>, onFalse: Morphism<T$2, V>) => ifElse_011<T$2, U, V>;
    <$SEL extends "01">(): <T, U>(_pred: PH, onTrue: Morphism<T, U>) => ifElse_010<T, U>;
    <$SEL extends "001">(): <T, V>(_pred: PH, _onTrue: PH, onFalse: Morphism<T, V>) => ifElse_001<T, V>;
    <T>(pred: Predicate<T>): ifElse_100<T>;
};
type ifElse_100<T> = {
    <V, T$1 extends T = T>(_onTrue: PH, onFalse: Morphism<T$1, V>): ifElse_101<T$1, V>;
    <U, V, T$1 extends T = T, T$2 extends T$1 = T$1>(onTrue: Morphism<T$1, U>, onFalse: Morphism<T$2, V>): ifElse_111<T$2, U, V>;
    <$SEL extends "11">(): <U, V, T$1 extends T = T, T$2 extends T$1 = T$1>(onTrue: Morphism<T$1, U>, onFalse: Morphism<T$2, V>) => ifElse_111<T$2, U, V>;
    <$SEL extends "1">(): <U, T$1 extends T = T>(onTrue: Morphism<T$1, U>) => ifElse_110<T$1, U>;
    <$SEL extends "01">(): <V, T$1 extends T = T>(_onTrue: PH, onFalse: Morphism<T$1, V>) => ifElse_101<T$1, V>;
    <U, T$1 extends T = T>(onTrue: Morphism<T$1, U>): ifElse_110<T$1, U>;
};
type ifElse_010<T, U> = {
    <V, T$1 extends T = T>(_pred: PH, onFalse: Morphism<T$1, V>): ifElse_011<T$1, U, V>;
    <V, T$1 extends T = T>(pred: Predicate<T$1>, onFalse: Morphism<T, V>): ifElse_111<T$1, U, V>;
    <$SEL extends "11">(): <V, T$1 extends T = T>(pred: Predicate<T$1>, onFalse: Morphism<T, V>) => ifElse_111<T$1, U, V>;
    <$SEL extends "1">(): (pred: Predicate<T>) => ifElse_110<T, U>;
    <$SEL extends "01">(): <V, T$1 extends T = T>(_pred: PH, onFalse: Morphism<T$1, V>) => ifElse_011<T$1, U, V>;
    (pred: Predicate<T>): ifElse_110<T, U>;
};
type ifElse_110<T, U> = {
    <V, T$1 extends T = T>(onFalse: Morphism<T$1, V>): ifElse_111<T$1, U, V>;
};
type ifElse_001<T, V> = {
    <U>(_pred: PH, onTrue: Morphism<T, U>): ifElse_011<T, U, V>;
    <U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_111<T, U, V>;
    <$SEL extends "11">(): <U>(pred: Predicate<T>, onTrue: Morphism<T, U>) => ifElse_111<T, U, V>;
    <$SEL extends "1">(): (pred: Predicate<T>) => ifElse_101<T, V>;
    <$SEL extends "01">(): <U>(_pred: PH, onTrue: Morphism<T, U>) => ifElse_011<T, U, V>;
    (pred: Predicate<T>): ifElse_101<T, V>;
};
type ifElse_101<T, V> = {
    <U>(onTrue: Morphism<T, U>): ifElse_111<T, U, V>;
};
type ifElse_011<T, U, V> = {
    (pred: Predicate<T>): ifElse_111<T, U, V>;
};
type ifElse_111<T, U, V> = Morphism<T, U | V>;
export = ifElse;

import { Applicative, List, Morphism, Traversable } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
declare const traverse: traverse_000;
type traverse_000 = {
    <T$1, T$2 extends T$1 = T$1>(of: Morphism<T$1, Applicative<T$1>>, _fn: PH, traversable: List<T$2>): traverse_list_101<T$2>;
    <T$1, T$2 extends T$1 = T$1>(of: Morphism<T$1, Applicative<T$1>>, _fn: PH, traversable: Traversable<T$2>): traverse_traversable_101<T$2>;
    <T$1, U, T$2 extends T$1 = T$1>(_of: PH, fn: Morphism<T$1, Applicative<U>>, traversable: List<T$2>): traverse_list_011<T$2, U>;
    <T>(_of: PH, _fn: PH, traversable: List<T>): traverse_list_001<T>;
    <T$1, U, T$2 extends T$1 = T$1>(_of: PH, fn: Morphism<T$1, Applicative<U>>, traversable: Traversable<T$2>): traverse_traversable_011<T$2, U>;
    <T>(_of: PH, _fn: PH, traversable: Traversable<T>): traverse_traversable_001<T>;
    <T$1, U, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(of: Morphism<T$1, Applicative<T$1>>, fn: Morphism<T$2, Applicative<U>>, traversable: List<T$3>): traverse_list_111<U>;
    <T$1, U, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(of: Morphism<T$1, Applicative<T$1>>, fn: Morphism<T$2, Applicative<U>>, traversable: Traversable<T$3>): traverse_traversable_111<U>;
    <T, U>(_of: PH, fn: Morphism<T, Applicative<U>>): traverse_010<T, U>;
    <T$1, U, T$2 extends T$1 = T$1>(of: Morphism<T$1, Applicative<T$1>>, fn: Morphism<T$2, Applicative<U>>): traverse_110<T$2, U>;
    <$SEL extends "111", $KIND extends "list">(): <T$1, U, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(of: Morphism<T$1, Applicative<T$1>>, fn: Morphism<T$2, Applicative<U>>, traversable: List<T$3>) => traverse_list_111<U>;
    <$SEL extends "101", $KIND extends "list">(): <T$1, T$2 extends T$1 = T$1>(of: Morphism<T$1, Applicative<T$1>>, _fn: PH, traversable: List<T$2>) => traverse_list_101<T$2>;
    <$SEL extends "011", $KIND extends "list">(): <T$1, U, T$2 extends T$1 = T$1>(_of: PH, fn: Morphism<T$1, Applicative<U>>, traversable: List<T$2>) => traverse_list_011<T$2, U>;
    <$SEL extends "001", $KIND extends "list">(): <T>(_of: PH, _fn: PH, traversable: List<T>) => traverse_list_001<T>;
    <$SEL extends "111", $KIND extends "traversable">(): <T$1, U, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(of: Morphism<T$1, Applicative<T$1>>, fn: Morphism<T$2, Applicative<U>>, traversable: Traversable<T$3>) => traverse_traversable_111<U>;
    <$SEL extends "101", $KIND extends "traversable">(): <T$1, T$2 extends T$1 = T$1>(of: Morphism<T$1, Applicative<T$1>>, _fn: PH, traversable: Traversable<T$2>) => traverse_traversable_101<T$2>;
    <$SEL extends "011", $KIND extends "traversable">(): <T$1, U, T$2 extends T$1 = T$1>(_of: PH, fn: Morphism<T$1, Applicative<U>>, traversable: Traversable<T$2>) => traverse_traversable_011<T$2, U>;
    <$SEL extends "001", $KIND extends "traversable">(): <T>(_of: PH, _fn: PH, traversable: Traversable<T>) => traverse_traversable_001<T>;
    <$SEL extends "11">(): <T$1, U, T$2 extends T$1 = T$1>(of: Morphism<T$1, Applicative<T$1>>, fn: Morphism<T$2, Applicative<U>>) => traverse_110<T$2, U>;
    <$SEL extends "1">(): <T>(of: Morphism<T, Applicative<T>>) => traverse_100<T>;
    <$SEL extends "01">(): <T, U>(_of: PH, fn: Morphism<T, Applicative<U>>) => traverse_010<T, U>;
    <T>(of: Morphism<T, Applicative<T>>): traverse_100<T>;
};
type traverse_100<T> = {
    <T$1 extends T = T>(_fn: PH, traversable: List<T$1>): traverse_list_101<T$1>;
    <T$1 extends T = T>(_fn: PH, traversable: Traversable<T$1>): traverse_traversable_101<T$1>;
    <U, T$1 extends T = T, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Applicative<U>>, traversable: List<T$2>): traverse_list_111<U>;
    <U, T$1 extends T = T, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Applicative<U>>, traversable: Traversable<T$2>): traverse_traversable_111<U>;
    <$SEL extends "11", $KIND extends "list">(): <U, T$1 extends T = T, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Applicative<U>>, traversable: List<T$2>) => traverse_list_111<U>;
    <$SEL extends "01", $KIND extends "list">(): <T$1 extends T = T>(_fn: PH, traversable: List<T$1>) => traverse_list_101<T$1>;
    <$SEL extends "11", $KIND extends "traversable">(): <U, T$1 extends T = T, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Applicative<U>>, traversable: Traversable<T$2>) => traverse_traversable_111<U>;
    <$SEL extends "01", $KIND extends "traversable">(): <T$1 extends T = T>(_fn: PH, traversable: Traversable<T$1>) => traverse_traversable_101<T$1>;
    <$SEL extends "1">(): <U, T$1 extends T = T>(fn: Morphism<T$1, Applicative<U>>) => traverse_110<T$1, U>;
    <U, T$1 extends T = T>(fn: Morphism<T$1, Applicative<U>>): traverse_110<T$1, U>;
};
type traverse_010<T, U> = {
    <T$1 extends T = T>(_of: PH, traversable: List<T$1>): traverse_list_011<T$1, U>;
    <T$1 extends T = T>(_of: PH, traversable: Traversable<T$1>): traverse_traversable_011<T$1, U>;
    <T$1 extends T = T>(of: Morphism<T$1, Applicative<T$1>>, traversable: List<T>): traverse_list_111<U>;
    <T$1 extends T = T>(of: Morphism<T$1, Applicative<T$1>>, traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "11", $KIND extends "list">(): <T$1 extends T = T>(of: Morphism<T$1, Applicative<T$1>>, traversable: List<T>) => traverse_list_111<U>;
    <$SEL extends "01", $KIND extends "list">(): <T$1 extends T = T>(_of: PH, traversable: List<T$1>) => traverse_list_011<T$1, U>;
    <$SEL extends "11", $KIND extends "traversable">(): <T$1 extends T = T>(of: Morphism<T$1, Applicative<T$1>>, traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "01", $KIND extends "traversable">(): <T$1 extends T = T>(_of: PH, traversable: Traversable<T$1>) => traverse_traversable_011<T$1, U>;
    <$SEL extends "1">(): (of: Morphism<T, Applicative<T>>) => traverse_110<T, U>;
    (of: Morphism<T, Applicative<T>>): traverse_110<T, U>;
};
type traverse_110<T, U> = {
    <T$1 extends T = T>(traversable: List<T$1>): traverse_list_111<U>;
    <$SEL extends "1", $KIND extends "list">(): <T$1 extends T = T>(traversable: List<T$1>) => traverse_list_111<U>;
    <$SEL extends "1", $KIND extends "traversable">(): <T$1 extends T = T>(traversable: Traversable<T$1>) => traverse_traversable_111<U>;
    <T$1 extends T = T>(traversable: Traversable<T$1>): traverse_traversable_111<U>;
};
type traverse_list_001<T> = {
    <U>(_of: PH, fn: Morphism<T, Applicative<U>>): traverse_list_011<T, U>;
    <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>): traverse_list_111<U>;
    <$SEL extends "11">(): <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>) => traverse_list_111<U>;
    <$SEL extends "1">(): (of: Morphism<T, Applicative<T>>) => traverse_list_101<T>;
    <$SEL extends "01">(): <U>(_of: PH, fn: Morphism<T, Applicative<U>>) => traverse_list_011<T, U>;
    (of: Morphism<T, Applicative<T>>): traverse_list_101<T>;
};
type traverse_traversable_001<T> = {
    <U>(_of: PH, fn: Morphism<T, Applicative<U>>): traverse_traversable_011<T, U>;
    <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>): traverse_traversable_111<U>;
    <$SEL extends "11">(): <U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>) => traverse_traversable_111<U>;
    <$SEL extends "1">(): (of: Morphism<T, Applicative<T>>) => traverse_traversable_101<T>;
    <$SEL extends "01">(): <U>(_of: PH, fn: Morphism<T, Applicative<U>>) => traverse_traversable_011<T, U>;
    (of: Morphism<T, Applicative<T>>): traverse_traversable_101<T>;
};
type traverse_list_101<T> = {
    <U>(fn: Morphism<T, Applicative<U>>): traverse_list_111<U>;
};
type traverse_traversable_101<T> = {
    <U>(fn: Morphism<T, Applicative<U>>): traverse_traversable_111<U>;
};
type traverse_list_011<T, U> = {
    (of: Morphism<T, Applicative<T>>): traverse_list_111<U>;
};
type traverse_traversable_011<T, U> = {
    (of: Morphism<T, Applicative<T>>): traverse_traversable_111<U>;
};
type traverse_list_111<U> = Applicative<U[]>;
type traverse_traversable_111<U> = Applicative<Traversable<U>>;
export = traverse;

import { List, Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
declare const sortBy: sortBy_00;
type sortBy_00 = {
    <T>(fn: Morphism<T, Ordered>, list: List<T>): sortBy_11<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, list: List<T>) => sortBy_11<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => sortBy_10<T>;
    <T>(fn: Morphism<T, Ordered>): sortBy_10<T>;
};
type sortBy_10<T> = {
    (list: List<T>): sortBy_11<T>;
};
type sortBy_01<T> = {
    (fn: Morphism<T, Ordered>): sortBy_11<T>;
};
type sortBy_11<T> = T[];
export = sortBy;

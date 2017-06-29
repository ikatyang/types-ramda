import { Dictionary, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
declare const where: where_00;
type where_00 = {
    <T>(_spec: PH, object: Dictionary<T>): where_01<T>;
    <T>(spec: Dictionary<Predicate<T>>, object: Dictionary<T>): where_11;
    <$SEL extends "11">(): <T>(spec: Dictionary<Predicate<T>>, object: Dictionary<T>) => where_11;
    <$SEL extends "1">(): <T>(spec: Dictionary<Predicate<T>>) => where_10<T>;
    <$SEL extends "01">(): <T>(_spec: PH, object: Dictionary<T>) => where_01<T>;
    <T>(spec: Dictionary<Predicate<T>>): where_10<T>;
};
type where_10<T> = {
    (object: Dictionary<T>): where_11;
};
type where_01<T> = {
    (spec: Dictionary<Predicate<T>>): where_11;
};
type where_11 = boolean;
export = where;

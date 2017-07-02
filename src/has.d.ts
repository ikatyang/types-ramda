import { Property } from "./$types";
/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
declare const has: has_00;
type has_00 = {
    (property: Property): has_10;
    <$SEL extends "1">(): (property: Property) => has_10;
    <$SEL extends "11">(): <T>(property: Property, object: T) => has_11;
    <T>(property: Property, object: T): has_11;
};
type has_10 = {
    <T>(object: T): has_11;
};
type has_01<T> = {
    (property: Property): has_11;
};
type has_11 = boolean;
export = has;

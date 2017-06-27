import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
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
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
declare const hasIn: hasIn_00;
type hasIn_00 = {
    <T>(property: Property, object: T): hasIn_11<T>;
    <$SEL extends "11">(): <T>(property: Property, object: T) => hasIn_11<T>;
    <$SEL extends "1">(): (property: Property) => hasIn_10;
    (property: Property): hasIn_10;
};
type hasIn_10 = {
    <T>(object: T): hasIn_11<T>;
};
type hasIn_01<T> = {
    (property: Property): hasIn_11<T>;
};
type hasIn_11<T> = boolean;
export = hasIn;

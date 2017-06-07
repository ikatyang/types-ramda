Tests whether or not an object is similar to an array.

@func
@memberOf R
@since v0.5.0
@category Type
@category List
@sig * -> Boolean
@param {*} x The object to test.
@return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
@deprecated since v0.23.0
@example

     R.isArrayLike([]); //=> true
     R.isArrayLike(true); //=> false
     R.isArrayLike({}); //=> false
     R.isArrayLike({length: 10}); //=> false
     R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true

Combines two lists into a set (i.e. no duplicates) composed of those
elements common to both lists.

@func
@memberOf R
@since v0.1.0
@category Relation
@sig [*] -> [*] -> [*]
@param {Array} list1 The first list.
@param {Array} list2 The second list.
@return {Array} The list of elements found in both `list1` and `list2`.
@see R.intersectionWith
@example

     R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
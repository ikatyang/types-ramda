import { List, Morphism, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
declare const reduceBy: reduceBy_0000;
type reduceBy_0000 = {
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, _keyFn: PH, values: List<T$2>): reduceBy_1101<T$2, U$2>;
    <T$1, U, K extends string, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T$2, K>, values: List<T$3>): reduceBy_1011<T$3, U, K>;
    <T$1, U, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, _keyFn: PH, values: List<T$2>): reduceBy_1001<T$2, U>;
    <T$1, U, K extends string, T$2 extends T$1 = T$1>(_valueFn: PH, initial: U, keyFn: Morphism<T$1, K>, values: List<T$2>): reduceBy_0111<T$2, U, K>;
    <T, U>(_valueFn: PH, initial: U, _keyFn: PH, values: List<T>): reduceBy_0101<T, U>;
    <T$1, K extends string, T$2 extends T$1 = T$1>(_valueFn: PH, _initial: PH, keyFn: Morphism<T$1, K>, values: List<T$2>): reduceBy_0011<T$2, K>;
    <T>(_valueFn: PH, _initial: PH, _keyFn: PH, values: List<T>): reduceBy_0001<T>;
    <T$1, U$1, K extends string, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, keyFn: Morphism<T$2, K>, values: List<T$3>): reduceBy_1111<U$2, K>;
    <T$1, U, K extends string, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T$2, K>): reduceBy_1010<T$2, U, K>;
    <T, U, K extends string>(_valueFn: PH, initial: U, keyFn: Morphism<T, K>): reduceBy_0110<T, U, K>;
    <T, K extends string>(_valueFn: PH, _initial: PH, keyFn: Morphism<T, K>): reduceBy_0010<T, K>;
    <T$1, U$1, K extends string, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, keyFn: Morphism<T$2, K>): reduceBy_1110<T$2, U$2, K>;
    <U>(_valueFn: PH, initial: U): reduceBy_0100<U>;
    <T, U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduceBy_1100<T, U$2>;
    <$SEL extends "1111">(): <T$1, U$1, K extends string, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, keyFn: Morphism<T$2, K>, values: List<T$3>) => reduceBy_1111<U$2, K>;
    <$SEL extends "111">(): <T$1, U$1, K extends string, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, keyFn: Morphism<T$2, K>) => reduceBy_1110<T$2, U$2, K>;
    <$SEL extends "1101">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, _keyFn: PH, values: List<T$2>) => reduceBy_1101<T$2, U$2>;
    <$SEL extends "11">(): <T, U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduceBy_1100<T, U$2>;
    <$SEL extends "1011">(): <T$1, U, K extends string, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T$2, K>, values: List<T$3>) => reduceBy_1011<T$3, U, K>;
    <$SEL extends "101">(): <T$1, U, K extends string, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T$2, K>) => reduceBy_1010<T$2, U, K>;
    <$SEL extends "1001">(): <T$1, U, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, _keyFn: PH, values: List<T$2>) => reduceBy_1001<T$2, U>;
    <$SEL extends "1">(): <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U) => reduceBy_1000<T, U>;
    <$SEL extends "0111">(): <T$1, U, K extends string, T$2 extends T$1 = T$1>(_valueFn: PH, initial: U, keyFn: Morphism<T$1, K>, values: List<T$2>) => reduceBy_0111<T$2, U, K>;
    <$SEL extends "011">(): <T, U, K extends string>(_valueFn: PH, initial: U, keyFn: Morphism<T, K>) => reduceBy_0110<T, U, K>;
    <$SEL extends "0101">(): <T, U>(_valueFn: PH, initial: U, _keyFn: PH, values: List<T>) => reduceBy_0101<T, U>;
    <$SEL extends "01">(): <U>(_valueFn: PH, initial: U) => reduceBy_0100<U>;
    <$SEL extends "0011">(): <T$1, K extends string, T$2 extends T$1 = T$1>(_valueFn: PH, _initial: PH, keyFn: Morphism<T$1, K>, values: List<T$2>) => reduceBy_0011<T$2, K>;
    <$SEL extends "001">(): <T, K extends string>(_valueFn: PH, _initial: PH, keyFn: Morphism<T, K>) => reduceBy_0010<T, K>;
    <$SEL extends "0001">(): <T>(_valueFn: PH, _initial: PH, _keyFn: PH, values: List<T>) => reduceBy_0001<T>;
    <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1000<T, U>;
};
type reduceBy_1000<T, U> = {
    <T$1 extends T = T, U$1 extends U = U>(initial: U$1, _keyFn: PH, values: List<T$1>): reduceBy_1101<T$1, U$1>;
    <K extends string, T$1 extends T = T, T$2 extends T$1 = T$1>(_initial: PH, keyFn: Morphism<T$1, K>, values: List<T$2>): reduceBy_1011<T$2, U, K>;
    <T$1 extends T = T>(_initial: PH, _keyFn: PH, values: List<T$1>): reduceBy_1001<T$1, U>;
    <K extends string, T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(initial: U$1, keyFn: Morphism<T$1, K>, values: List<T$2>): reduceBy_1111<U$1, K>;
    <K extends string, T$1 extends T = T>(_initial: PH, keyFn: Morphism<T$1, K>): reduceBy_1010<T$1, U, K>;
    <K extends string, T$1 extends T = T, U$1 extends U = U>(initial: U$1, keyFn: Morphism<T$1, K>): reduceBy_1110<T$1, U$1, K>;
    <$SEL extends "111">(): <K extends string, T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(initial: U$1, keyFn: Morphism<T$1, K>, values: List<T$2>) => reduceBy_1111<U$1, K>;
    <$SEL extends "11">(): <K extends string, T$1 extends T = T, U$1 extends U = U>(initial: U$1, keyFn: Morphism<T$1, K>) => reduceBy_1110<T$1, U$1, K>;
    <$SEL extends "101">(): <T$1 extends T = T, U$1 extends U = U>(initial: U$1, _keyFn: PH, values: List<T$1>) => reduceBy_1101<T$1, U$1>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => reduceBy_1100<T, U$1>;
    <$SEL extends "011">(): <K extends string, T$1 extends T = T, T$2 extends T$1 = T$1>(_initial: PH, keyFn: Morphism<T$1, K>, values: List<T$2>) => reduceBy_1011<T$2, U, K>;
    <$SEL extends "01">(): <K extends string, T$1 extends T = T>(_initial: PH, keyFn: Morphism<T$1, K>) => reduceBy_1010<T$1, U, K>;
    <$SEL extends "001">(): <T$1 extends T = T>(_initial: PH, _keyFn: PH, values: List<T$1>) => reduceBy_1001<T$1, U>;
    <U$1 extends U = U>(initial: U$1): reduceBy_1100<T, U$1>;
};
type reduceBy_0100<U> = {
    <T$1, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _keyFn: PH, values: List<T$2>): reduceBy_1101<T$2, U>;
    <T$1, K extends string, T$2 extends T$1 = T$1>(_valueFn: PH, keyFn: Morphism<T$1, K>, values: List<T$2>): reduceBy_0111<T$2, U, K>;
    <T>(_valueFn: PH, _keyFn: PH, values: List<T>): reduceBy_0101<T, U>;
    <T$1, K extends string, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, keyFn: Morphism<T$2, K>, values: List<T$3>): reduceBy_1111<U, K>;
    <T, K extends string>(_valueFn: PH, keyFn: Morphism<T, K>): reduceBy_0110<T, U, K>;
    <T$1, K extends string, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, keyFn: Morphism<T$2, K>): reduceBy_1110<T$2, U, K>;
    <$SEL extends "111">(): <T$1, K extends string, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, keyFn: Morphism<T$2, K>, values: List<T$3>) => reduceBy_1111<U, K>;
    <$SEL extends "11">(): <T$1, K extends string, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, keyFn: Morphism<T$2, K>) => reduceBy_1110<T$2, U, K>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _keyFn: PH, values: List<T$2>) => reduceBy_1101<T$2, U>;
    <$SEL extends "1">(): <T>(valueFn: (accumulator: U, value: T) => Reduced<U> | U) => reduceBy_1100<T, U>;
    <$SEL extends "011">(): <T$1, K extends string, T$2 extends T$1 = T$1>(_valueFn: PH, keyFn: Morphism<T$1, K>, values: List<T$2>) => reduceBy_0111<T$2, U, K>;
    <$SEL extends "01">(): <T, K extends string>(_valueFn: PH, keyFn: Morphism<T, K>) => reduceBy_0110<T, U, K>;
    <$SEL extends "001">(): <T>(_valueFn: PH, _keyFn: PH, values: List<T>) => reduceBy_0101<T, U>;
    <T>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1100<T, U>;
};
type reduceBy_1100<T, U> = {
    <T$1 extends T = T>(_keyFn: PH, values: List<T$1>): reduceBy_1101<T$1, U>;
    <K extends string, T$1 extends T = T, T$2 extends T$1 = T$1>(keyFn: Morphism<T$1, K>, values: List<T$2>): reduceBy_1111<U, K>;
    <$SEL extends "11">(): <K extends string, T$1 extends T = T, T$2 extends T$1 = T$1>(keyFn: Morphism<T$1, K>, values: List<T$2>) => reduceBy_1111<U, K>;
    <$SEL extends "1">(): <K extends string, T$1 extends T = T>(keyFn: Morphism<T$1, K>) => reduceBy_1110<T$1, U, K>;
    <$SEL extends "01">(): <T$1 extends T = T>(_keyFn: PH, values: List<T$1>) => reduceBy_1101<T$1, U>;
    <K extends string, T$1 extends T = T>(keyFn: Morphism<T$1, K>): reduceBy_1110<T$1, U, K>;
};
type reduceBy_0010<T, K extends string> = {
    <U, T$1 extends T = T>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T>): reduceBy_1011<T$1, U, K>;
    <U, T$1 extends T = T>(_valueFn: PH, initial: U, values: List<T$1>): reduceBy_0111<T$1, U, K>;
    <T$1 extends T = T>(_valueFn: PH, _initial: PH, values: List<T$1>): reduceBy_0011<T$1, K>;
    <U$1, T$1 extends T = T, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T>): reduceBy_1111<U$2, K>;
    <U>(_valueFn: PH, initial: U): reduceBy_0110<T, U, K>;
    <U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduceBy_1110<T, U$2, K>;
    <$SEL extends "111">(): <U$1, T$1 extends T = T, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T$1) => Reduced<U$1> | U$1, initial: U$2, values: List<T>) => reduceBy_1111<U$2, K>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduceBy_1110<T, U$2, K>;
    <$SEL extends "101">(): <U, T$1 extends T = T>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, _initial: PH, values: List<T>) => reduceBy_1011<T$1, U, K>;
    <$SEL extends "1">(): <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U) => reduceBy_1010<T, U, K>;
    <$SEL extends "011">(): <U, T$1 extends T = T>(_valueFn: PH, initial: U, values: List<T$1>) => reduceBy_0111<T$1, U, K>;
    <$SEL extends "01">(): <U>(_valueFn: PH, initial: U) => reduceBy_0110<T, U, K>;
    <$SEL extends "001">(): <T$1 extends T = T>(_valueFn: PH, _initial: PH, values: List<T$1>) => reduceBy_0011<T$1, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1010<T, U, K>;
};
type reduceBy_1010<T, U, K extends string> = {
    <T$1 extends T = T>(_initial: PH, values: List<T$1>): reduceBy_1011<T$1, U, K>;
    <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>): reduceBy_1111<U$1, K>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: List<T$1>) => reduceBy_1111<U$1, K>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => reduceBy_1110<T, U$1, K>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: List<T$1>) => reduceBy_1011<T$1, U, K>;
    <U$1 extends U = U>(initial: U$1): reduceBy_1110<T, U$1, K>;
};
type reduceBy_0110<T, U, K extends string> = {
    <T$1 extends T = T>(_valueFn: PH, values: List<T$1>): reduceBy_0111<T$1, U, K>;
    <T$1 extends T = T>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T>): reduceBy_1111<U, K>;
    <$SEL extends "11">(): <T$1 extends T = T>(valueFn: (accumulator: U, value: T$1) => Reduced<U> | U, values: List<T>) => reduceBy_1111<U, K>;
    <$SEL extends "1">(): (valueFn: (accumulator: U, value: T) => Reduced<U> | U) => reduceBy_1110<T, U, K>;
    <$SEL extends "01">(): <T$1 extends T = T>(_valueFn: PH, values: List<T$1>) => reduceBy_0111<T$1, U, K>;
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1110<T, U, K>;
};
type reduceBy_1110<T, U, K extends string> = {
    <T$1 extends T = T>(values: List<T$1>): reduceBy_1111<U, K>;
};
type reduceBy_0001<T> = {
    <U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T, K>): reduceBy_1011<T, U, K>;
    <U, K extends string>(_valueFn: PH, initial: U, keyFn: Morphism<T, K>): reduceBy_0111<T, U, K>;
    <K extends string>(_valueFn: PH, _initial: PH, keyFn: Morphism<T, K>): reduceBy_0011<T, K>;
    <U$1, K extends string, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2, keyFn: Morphism<T, K>): reduceBy_1111<U$2, K>;
    <U>(_valueFn: PH, initial: U): reduceBy_0101<T, U>;
    <U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduceBy_1101<T, U$2>;
    <$SEL extends "111">(): <U$1, K extends string, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2, keyFn: Morphism<T, K>) => reduceBy_1111<U$2, K>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduceBy_1101<T, U$2>;
    <$SEL extends "101">(): <U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, keyFn: Morphism<T, K>) => reduceBy_1011<T, U, K>;
    <$SEL extends "1">(): <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U) => reduceBy_1001<T, U>;
    <$SEL extends "011">(): <U, K extends string>(_valueFn: PH, initial: U, keyFn: Morphism<T, K>) => reduceBy_0111<T, U, K>;
    <$SEL extends "01">(): <U>(_valueFn: PH, initial: U) => reduceBy_0101<T, U>;
    <$SEL extends "001">(): <K extends string>(_valueFn: PH, _initial: PH, keyFn: Morphism<T, K>) => reduceBy_0011<T, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1001<T, U>;
};
type reduceBy_1001<T, U> = {
    <K extends string>(_initial: PH, keyFn: Morphism<T, K>): reduceBy_1011<T, U, K>;
    <K extends string, U$1 extends U = U>(initial: U$1, keyFn: Morphism<T, K>): reduceBy_1111<U$1, K>;
    <$SEL extends "11">(): <K extends string, U$1 extends U = U>(initial: U$1, keyFn: Morphism<T, K>) => reduceBy_1111<U$1, K>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => reduceBy_1101<T, U$1>;
    <$SEL extends "01">(): <K extends string>(_initial: PH, keyFn: Morphism<T, K>) => reduceBy_1011<T, U, K>;
    <U$1 extends U = U>(initial: U$1): reduceBy_1101<T, U$1>;
};
type reduceBy_0101<T, U> = {
    <K extends string>(_valueFn: PH, keyFn: Morphism<T, K>): reduceBy_0111<T, U, K>;
    <K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
    <$SEL extends "11">(): <K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>) => reduceBy_1111<U, K>;
    <$SEL extends "1">(): (valueFn: (accumulator: U, value: T) => Reduced<U> | U) => reduceBy_1101<T, U>;
    <$SEL extends "01">(): <K extends string>(_valueFn: PH, keyFn: Morphism<T, K>) => reduceBy_0111<T, U, K>;
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1101<T, U>;
};
type reduceBy_1101<T, U> = {
    <K extends string>(keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_0011<T, K extends string> = {
    <U>(_valueFn: PH, initial: U): reduceBy_0111<T, U, K>;
    <U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2): reduceBy_1111<U$2, K>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(valueFn: (accumulator: U$1, value: T) => Reduced<U$1> | U$1, initial: U$2) => reduceBy_1111<U$2, K>;
    <$SEL extends "1">(): <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U) => reduceBy_1011<T, U, K>;
    <$SEL extends "01">(): <U>(_valueFn: PH, initial: U) => reduceBy_0111<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1011<T, U, K>;
};
type reduceBy_1011<T, U, K extends string> = {
    <U$1 extends U = U>(initial: U$1): reduceBy_1111<U$1, K>;
};
type reduceBy_0111<T, U, K extends string> = {
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1111<U, K>;
};
type reduceBy_1111<U, K extends string> = Partial<Record<K, U>>;
export = reduceBy;

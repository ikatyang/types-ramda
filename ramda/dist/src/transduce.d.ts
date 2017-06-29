import { Morphism, Reduced, Transformer } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
declare const transduce: transduce_0000;
type transduce_0000 = {
    <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>, _initial: PH, values: T$3[]): transduce_1101<T$3, U$2>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, _fn: PH, initial: U$2, values: T$2[]): transduce_1011<T$2, U$2>;
    <T$1, U, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, _fn: PH, _initial: PH, values: T$2[]): transduce_1001<T$2, U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(_transducer: PH, fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, initial: U$2, values: T$2[]): transduce_0111<T$2, U$2>;
    <T$1, U, T$2 extends T$1 = T$1>(_transducer: PH, fn: (accumulator: U, value: T$1) => U | Reduced<U>, _initial: PH, values: T$2[]): transduce_0101<T$2, U>;
    <T, U>(_transducer: PH, _fn: PH, initial: U, values: T[]): transduce_0011<T, U>;
    <T>(_transducer: PH, _fn: PH, _initial: PH, values: T[]): transduce_0001<T>;
    <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>, initial: U$3, values: T$3[]): transduce_1111<U$3>;
    <T, U$1, U$2 extends U$1 = U$1>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, _fn: PH, initial: U$2): transduce_1010<T, U$2>;
    <T, U$1, U$2 extends U$1 = U$1>(_transducer: PH, fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>, initial: U$2): transduce_0110<T, U$2>;
    <U>(_transducer: PH, _fn: PH, initial: U): transduce_0010<U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>, initial: U$3): transduce_1110<T$2, U$3>;
    <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0100<T, U>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>): transduce_1100<T$2, U$2>;
    <$SEL extends "1111">(): <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>, initial: U$3, values: T$3[]) => transduce_1111<U$3>;
    <$SEL extends "111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>, initial: U$3) => transduce_1110<T$2, U$3>;
    <$SEL extends "1101">(): <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>, _initial: PH, values: T$3[]) => transduce_1101<T$3, U$2>;
    <$SEL extends "11">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, fn: (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>) => transduce_1100<T$2, U$2>;
    <$SEL extends "1011">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, _fn: PH, initial: U$2, values: T$2[]) => transduce_1011<T$2, U$2>;
    <$SEL extends "101">(): <T, U$1, U$2 extends U$1 = U$1>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, _fn: PH, initial: U$2) => transduce_1010<T, U$2>;
    <$SEL extends "1001">(): <T$1, U, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, _fn: PH, _initial: PH, values: T$2[]) => transduce_1001<T$2, U>;
    <$SEL extends "1">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1000<T, U>;
    <$SEL extends "0111">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(_transducer: PH, fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, initial: U$2, values: T$2[]) => transduce_0111<T$2, U$2>;
    <$SEL extends "011">(): <T, U$1, U$2 extends U$1 = U$1>(_transducer: PH, fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>, initial: U$2) => transduce_0110<T, U$2>;
    <$SEL extends "0101">(): <T$1, U, T$2 extends T$1 = T$1>(_transducer: PH, fn: (accumulator: U, value: T$1) => U | Reduced<U>, _initial: PH, values: T$2[]) => transduce_0101<T$2, U>;
    <$SEL extends "01">(): <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0100<T, U>;
    <$SEL extends "0011">(): <T, U>(_transducer: PH, _fn: PH, initial: U, values: T[]) => transduce_0011<T, U>;
    <$SEL extends "001">(): <U>(_transducer: PH, _fn: PH, initial: U) => transduce_0010<U>;
    <$SEL extends "0001">(): <T>(_transducer: PH, _fn: PH, _initial: PH, values: T[]) => transduce_0001<T>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1000<T, U>;
};
type transduce_1000<T, U> = {
    <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, _initial: PH, values: T$2[]): transduce_1101<T$2, U$1>;
    <T$1 extends T = T, U$1 extends U = U>(_fn: PH, initial: U$1, values: T$1[]): transduce_1011<T$1, U$1>;
    <T$1 extends T = T>(_fn: PH, _initial: PH, values: T$1[]): transduce_1001<T$1, U>;
    <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, initial: U$2, values: T$2[]): transduce_1111<U$2>;
    <U$1 extends U = U>(_fn: PH, initial: U$1): transduce_1010<T, U$1>;
    <T$1 extends T = T, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, initial: U$2): transduce_1110<T$1, U$2>;
    <$SEL extends "111">(): <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, initial: U$2, values: T$2[]) => transduce_1111<U$2>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, initial: U$2) => transduce_1110<T$1, U$2>;
    <$SEL extends "101">(): <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>, _initial: PH, values: T$2[]) => transduce_1101<T$2, U$1>;
    <$SEL extends "1">(): <T$1 extends T = T, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>) => transduce_1100<T$1, U$1>;
    <$SEL extends "011">(): <T$1 extends T = T, U$1 extends U = U>(_fn: PH, initial: U$1, values: T$1[]) => transduce_1011<T$1, U$1>;
    <$SEL extends "01">(): <U$1 extends U = U>(_fn: PH, initial: U$1) => transduce_1010<T, U$1>;
    <$SEL extends "001">(): <T$1 extends T = T>(_fn: PH, _initial: PH, values: T$1[]) => transduce_1001<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(fn: (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>): transduce_1100<T$1, U$1>;
};
type transduce_0100<T, U> = {
    <T$1 extends T = T>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, _initial: PH, values: T[]): transduce_1101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(_transducer: PH, initial: U$1, values: T$1[]): transduce_0111<T$1, U$1>;
    <T$1 extends T = T>(_transducer: PH, _initial: PH, values: T$1[]): transduce_0101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, initial: U, values: T[]): transduce_1111<U$1>;
    <U$1 extends U = U>(_transducer: PH, initial: U$1): transduce_0110<T, U$1>;
    <U$1 extends U = U>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, initial: U): transduce_1110<T, U$1>;
    <$SEL extends "111">(): <T$1 extends T = T, U$1 extends U = U>(transducer: Morphism<T$1[], U$1> | Morphism<Transformer<T$1, U$1, U$1>, Transformer<T$1, U$1, U$1>>, initial: U, values: T[]) => transduce_1111<U$1>;
    <$SEL extends "11">(): <U$1 extends U = U>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, initial: U) => transduce_1110<T, U$1>;
    <$SEL extends "101">(): <T$1 extends T = T>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, _initial: PH, values: T[]) => transduce_1101<T$1, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1100<T, U>;
    <$SEL extends "011">(): <T$1 extends T = T, U$1 extends U = U>(_transducer: PH, initial: U$1, values: T$1[]) => transduce_0111<T$1, U$1>;
    <$SEL extends "01">(): <U$1 extends U = U>(_transducer: PH, initial: U$1) => transduce_0110<T, U$1>;
    <$SEL extends "001">(): <T$1 extends T = T>(_transducer: PH, _initial: PH, values: T$1[]) => transduce_0101<T$1, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1100<T, U>;
};
type transduce_1100<T, U> = {
    <T$1 extends T = T>(_initial: PH, values: T$1[]): transduce_1101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: T$1[]): transduce_1111<U$1>;
    <$SEL extends "11">(): <T$1 extends T = T, U$1 extends U = U>(initial: U$1, values: T$1[]) => transduce_1111<U$1>;
    <$SEL extends "1">(): <U$1 extends U = U>(initial: U$1) => transduce_1110<T, U$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: T$1[]) => transduce_1101<T$1, U>;
    <U$1 extends U = U>(initial: U$1): transduce_1110<T, U$1>;
};
type transduce_0010<U> = {
    <T$1, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, _fn: PH, values: T$2[]): transduce_1011<T$2, U>;
    <T$1, T$2 extends T$1 = T$1>(_transducer: PH, fn: (accumulator: U, value: T$1) => U | Reduced<U>, values: T$2[]): transduce_0111<T$2, U>;
    <T>(_transducer: PH, _fn: PH, values: T[]): transduce_0011<T, U>;
    <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, fn: (accumulator: U, value: T$2) => U | Reduced<U>, values: T$3[]): transduce_1111<U>;
    <T>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0110<T, U>;
    <T$1, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, fn: (accumulator: U, value: T$2) => U | Reduced<U>): transduce_1110<T$2, U>;
    <$SEL extends "111">(): <T$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, fn: (accumulator: U, value: T$2) => U | Reduced<U>, values: T$3[]) => transduce_1111<U>;
    <$SEL extends "11">(): <T$1, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, fn: (accumulator: U, value: T$2) => U | Reduced<U>) => transduce_1110<T$2, U>;
    <$SEL extends "101">(): <T$1, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, _fn: PH, values: T$2[]) => transduce_1011<T$2, U>;
    <$SEL extends "1">(): <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1010<T, U>;
    <$SEL extends "011">(): <T$1, T$2 extends T$1 = T$1>(_transducer: PH, fn: (accumulator: U, value: T$1) => U | Reduced<U>, values: T$2[]) => transduce_0111<T$2, U>;
    <$SEL extends "01">(): <T>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0110<T, U>;
    <$SEL extends "001">(): <T>(_transducer: PH, _fn: PH, values: T[]) => transduce_0011<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1010<T, U>;
};
type transduce_1010<T, U> = {
    <T$1 extends T = T>(_fn: PH, values: T$1[]): transduce_1011<T$1, U>;
    <T$1 extends T = T, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => U | Reduced<U>, values: T$2[]): transduce_1111<U>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1>(fn: (accumulator: U, value: T$1) => U | Reduced<U>, values: T$2[]) => transduce_1111<U>;
    <$SEL extends "1">(): <T$1 extends T = T>(fn: (accumulator: U, value: T$1) => U | Reduced<U>) => transduce_1110<T$1, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_fn: PH, values: T$1[]) => transduce_1011<T$1, U>;
    <T$1 extends T = T>(fn: (accumulator: U, value: T$1) => U | Reduced<U>): transduce_1110<T$1, U>;
};
type transduce_0110<T, U> = {
    <T$1 extends T = T>(_transducer: PH, values: T$1[]): transduce_0111<T$1, U>;
    <T$1 extends T = T>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, values: T[]): transduce_1111<U>;
    <$SEL extends "11">(): <T$1 extends T = T>(transducer: Morphism<T$1[], U> | Morphism<Transformer<T$1, U, U>, Transformer<T$1, U, U>>, values: T[]) => transduce_1111<U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1110<T, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_transducer: PH, values: T$1[]) => transduce_0111<T$1, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1110<T, U>;
};
type transduce_1110<T, U> = {
    <T$1 extends T = T>(values: T$1[]): transduce_1111<U>;
};
type transduce_0001<T> = {
    <U$1, U$2 extends U$1 = U$1>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, _fn: PH, initial: U$2): transduce_1011<T, U$2>;
    <U$1, U$2 extends U$1 = U$1>(_transducer: PH, fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>, initial: U$2): transduce_0111<T, U$2>;
    <U>(_transducer: PH, _fn: PH, initial: U): transduce_0011<T, U>;
    <U$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, fn: (accumulator: U$2, value: T) => U$2 | Reduced<U$2>, initial: U$3): transduce_1111<U$3>;
    <U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0101<T, U>;
    <U$1, U$2 extends U$1 = U$1>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, fn: (accumulator: U$2, value: T) => U$2 | Reduced<U$2>): transduce_1101<T, U$2>;
    <$SEL extends "111">(): <U$1, U$2 extends U$1 = U$1, U$3 extends U$2 = U$2>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, fn: (accumulator: U$2, value: T) => U$2 | Reduced<U$2>, initial: U$3) => transduce_1111<U$3>;
    <$SEL extends "11">(): <U$1, U$2 extends U$1 = U$1>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, fn: (accumulator: U$2, value: T) => U$2 | Reduced<U$2>) => transduce_1101<T, U$2>;
    <$SEL extends "101">(): <U$1, U$2 extends U$1 = U$1>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, _fn: PH, initial: U$2) => transduce_1011<T, U$2>;
    <$SEL extends "1">(): <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1001<T, U>;
    <$SEL extends "011">(): <U$1, U$2 extends U$1 = U$1>(_transducer: PH, fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>, initial: U$2) => transduce_0111<T, U$2>;
    <$SEL extends "01">(): <U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0101<T, U>;
    <$SEL extends "001">(): <U>(_transducer: PH, _fn: PH, initial: U) => transduce_0011<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1001<T, U>;
};
type transduce_1001<T, U> = {
    <U$1 extends U = U>(_fn: PH, initial: U$1): transduce_1011<T, U$1>;
    <U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>, initial: U$2): transduce_1111<U$2>;
    <$SEL extends "11">(): <U$1 extends U = U, U$2 extends U$1 = U$1>(fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>, initial: U$2) => transduce_1111<U$2>;
    <$SEL extends "1">(): <U$1 extends U = U>(fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>) => transduce_1101<T, U$1>;
    <$SEL extends "01">(): <U$1 extends U = U>(_fn: PH, initial: U$1) => transduce_1011<T, U$1>;
    <U$1 extends U = U>(fn: (accumulator: U$1, value: T) => U$1 | Reduced<U$1>): transduce_1101<T, U$1>;
};
type transduce_0101<T, U> = {
    <U$1 extends U = U>(_transducer: PH, initial: U$1): transduce_0111<T, U$1>;
    <U$1 extends U = U>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, initial: U): transduce_1111<U$1>;
    <$SEL extends "11">(): <U$1 extends U = U>(transducer: Morphism<T[], U$1> | Morphism<Transformer<T, U$1, U$1>, Transformer<T, U$1, U$1>>, initial: U) => transduce_1111<U$1>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1101<T, U>;
    <$SEL extends "01">(): <U$1 extends U = U>(_transducer: PH, initial: U$1) => transduce_0111<T, U$1>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1101<T, U>;
};
type transduce_1101<T, U> = {
    <U$1 extends U = U>(initial: U$1): transduce_1111<U$1>;
};
type transduce_0011<T, U> = {
    (_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0111<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1111<U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1111<U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1011<T, U>;
    <$SEL extends "01">(): (_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0111<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1011<T, U>;
};
type transduce_1011<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1111<U>;
};
type transduce_0111<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1111<U>;
};
type transduce_1111<U> = U;
export = transduce;

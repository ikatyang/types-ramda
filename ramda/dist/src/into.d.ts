import { Morphism, Reduced, Transformer } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
declare const into: into_000;
type into_000 = {
    <T$1, U, T$2 extends T$1 = T$1>(initial: Transformer<T$1, U, U>, _transducer: PH, values: T$2[]): into_transformer_101<T$2, U>;
    <T, V extends string | object>(initial: V, _transducer: PH, values: T[]): into_base_101<T, V>;
    <T$1, U, T$2 extends T$1 = T$1>(_initial: PH, transducer: Morphism<T$1[], U> | ((transformer: Transformer<T$1, U, U>) => (accumulator: U, value: T$1) => U | Reduced<U>), values: T$2[]): into_transformer_011<T$2, U>;
    <T$1, V extends string | object, T$2 extends T$1 = T$1>(_initial: PH, transducer: Morphism<T$1[], V> | ((transformer: Transformer<T$1, V, V>) => (accumulator: V, value: T$1) => V | Reduced<V>), values: T$2[]): into_base_011<T$2, V>;
    <T>(_initial: PH, _transducer: PH, values: T[]): into_001<T>;
    <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(initial: Transformer<T$1, U$1, U$1>, transducer: Morphism<T$2[], U$2> | ((transformer: Transformer<T$2, U$2, U$2>) => (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>), values: T$3[]): into_transformer_111<U$2>;
    <T$1, V$1 extends string | object, T$2 extends T$1 = T$1, V$2 extends V$1 = V$1>(initial: V$1, transducer: Morphism<T$1[], V$2> | ((transformer: Transformer<T$1, V$2, V$2>) => (accumulator: V$2, value: T$1) => V$2 | Reduced<V$2>), values: T$2[]): into_base_111<V$2>;
    <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_010<T, U>;
    <T, V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_010<T, V>;
    <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(initial: Transformer<T$1, U$1, U$1>, transducer: Morphism<T$2[], U$2> | ((transformer: Transformer<T$2, U$2, U$2>) => (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>)): into_transformer_110<T$2, U$2>;
    <T, V$1 extends string | object, V$2 extends V$1 = V$1>(initial: V$1, transducer: Morphism<T[], V$2> | ((transformer: Transformer<T, V$2, V$2>) => (accumulator: V$2, value: T) => V$2 | Reduced<V$2>)): into_base_110<T, V$2>;
    <T, U>(initial: Transformer<T, U, U>): into_transformer_100<T, U>;
    <$SEL extends "111", $KIND extends "transformer">(): <T$1, U$1, T$2 extends T$1 = T$1, T$3 extends T$2 = T$2, U$2 extends U$1 = U$1>(initial: Transformer<T$1, U$1, U$1>, transducer: Morphism<T$2[], U$2> | ((transformer: Transformer<T$2, U$2, U$2>) => (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>), values: T$3[]) => into_transformer_111<U$2>;
    <$SEL extends "11", $KIND extends "transformer">(): <T$1, U$1, T$2 extends T$1 = T$1, U$2 extends U$1 = U$1>(initial: Transformer<T$1, U$1, U$1>, transducer: Morphism<T$2[], U$2> | ((transformer: Transformer<T$2, U$2, U$2>) => (accumulator: U$2, value: T$2) => U$2 | Reduced<U$2>)) => into_transformer_110<T$2, U$2>;
    <$SEL extends "101", $KIND extends "transformer">(): <T$1, U, T$2 extends T$1 = T$1>(initial: Transformer<T$1, U, U>, _transducer: PH, values: T$2[]) => into_transformer_101<T$2, U>;
    <$SEL extends "1", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>) => into_transformer_100<T, U>;
    <$SEL extends "011", $KIND extends "transformer">(): <T$1, U, T$2 extends T$1 = T$1>(_initial: PH, transducer: Morphism<T$1[], U> | ((transformer: Transformer<T$1, U, U>) => (accumulator: U, value: T$1) => U | Reduced<U>), values: T$2[]) => into_transformer_011<T$2, U>;
    <$SEL extends "01", $KIND extends "transformer">(): <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_010<T, U>;
    <$SEL extends "111", $KIND extends "base">(): <T$1, V$1 extends string | object, T$2 extends T$1 = T$1, V$2 extends V$1 = V$1>(initial: V$1, transducer: Morphism<T$1[], V$2> | ((transformer: Transformer<T$1, V$2, V$2>) => (accumulator: V$2, value: T$1) => V$2 | Reduced<V$2>), values: T$2[]) => into_base_111<V$2>;
    <$SEL extends "11", $KIND extends "base">(): <T, V$1 extends string | object, V$2 extends V$1 = V$1>(initial: V$1, transducer: Morphism<T[], V$2> | ((transformer: Transformer<T, V$2, V$2>) => (accumulator: V$2, value: T) => V$2 | Reduced<V$2>)) => into_base_110<T, V$2>;
    <$SEL extends "101", $KIND extends "base">(): <T, V extends string | object>(initial: V, _transducer: PH, values: T[]) => into_base_101<T, V>;
    <$SEL extends "1", $KIND extends "base">(): <V extends string | object>(initial: V) => into_base_100<V>;
    <$SEL extends "011", $KIND extends "base">(): <T$1, V extends string | object, T$2 extends T$1 = T$1>(_initial: PH, transducer: Morphism<T$1[], V> | ((transformer: Transformer<T$1, V, V>) => (accumulator: V, value: T$1) => V | Reduced<V>), values: T$2[]) => into_base_011<T$2, V>;
    <$SEL extends "01", $KIND extends "base">(): <T, V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_010<T, V>;
    <$SEL extends "001">(): <T>(_initial: PH, _transducer: PH, values: T[]) => into_001<T>;
    <V extends string | object>(initial: V): into_base_100<V>;
};
type into_001<T> = {
    <U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_011<T, U>;
    <V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_011<T, V>;
    <U$1, U$2 extends U$1 = U$1>(initial: Transformer<T, U$1, U$1>, transducer: Morphism<T[], U$2> | ((transformer: Transformer<T, U$2, U$2>) => (accumulator: U$2, value: T) => U$2 | Reduced<U$2>)): into_transformer_111<U$2>;
    <V$1 extends string | object, V$2 extends V$1 = V$1>(initial: V$1, transducer: Morphism<T[], V$2> | ((transformer: Transformer<T, V$2, V$2>) => (accumulator: V$2, value: T) => V$2 | Reduced<V$2>)): into_base_111<V$2>;
    <U>(initial: Transformer<T, U, U>): into_transformer_101<T, U>;
    <$SEL extends "11", $KIND extends "transformer">(): <U$1, U$2 extends U$1 = U$1>(initial: Transformer<T, U$1, U$1>, transducer: Morphism<T[], U$2> | ((transformer: Transformer<T, U$2, U$2>) => (accumulator: U$2, value: T) => U$2 | Reduced<U$2>)) => into_transformer_111<U$2>;
    <$SEL extends "1", $KIND extends "transformer">(): <U>(initial: Transformer<T, U, U>) => into_transformer_101<T, U>;
    <$SEL extends "01", $KIND extends "transformer">(): <U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_011<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <V$1 extends string | object, V$2 extends V$1 = V$1>(initial: V$1, transducer: Morphism<T[], V$2> | ((transformer: Transformer<T, V$2, V$2>) => (accumulator: V$2, value: T) => V$2 | Reduced<V$2>)) => into_base_111<V$2>;
    <$SEL extends "1", $KIND extends "base">(): <V extends string | object>(initial: V) => into_base_101<T, V>;
    <$SEL extends "01", $KIND extends "base">(): <V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_011<T, V>;
    <V extends string | object>(initial: V): into_base_101<T, V>;
};
type into_transformer_100<T, U> = {
    <T$1 extends T = T>(_transducer: PH, values: T$1[]): into_transformer_101<T$1, U>;
    <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(transducer: Morphism<T$1[], U$1> | ((transformer: Transformer<T$1, U$1, U$1>) => (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>), values: T$2[]): into_transformer_111<U$1>;
    <$SEL extends "11">(): <T$1 extends T = T, T$2 extends T$1 = T$1, U$1 extends U = U>(transducer: Morphism<T$1[], U$1> | ((transformer: Transformer<T$1, U$1, U$1>) => (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>), values: T$2[]) => into_transformer_111<U$1>;
    <$SEL extends "1">(): <T$1 extends T = T, U$1 extends U = U>(transducer: Morphism<T$1[], U$1> | ((transformer: Transformer<T$1, U$1, U$1>) => (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>)) => into_transformer_110<T$1, U$1>;
    <$SEL extends "01">(): <T$1 extends T = T>(_transducer: PH, values: T$1[]) => into_transformer_101<T$1, U>;
    <T$1 extends T = T, U$1 extends U = U>(transducer: Morphism<T$1[], U$1> | ((transformer: Transformer<T$1, U$1, U$1>) => (accumulator: U$1, value: T$1) => U$1 | Reduced<U$1>)): into_transformer_110<T$1, U$1>;
};
type into_base_100<V extends string | object> = {
    <T>(_transducer: PH, values: T[]): into_base_101<T, V>;
    <T$1, V$1 extends V = V, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], V$1> | ((transformer: Transformer<T$1, V$1, V$1>) => (accumulator: V$1, value: T$1) => V$1 | Reduced<V$1>), values: T$2[]): into_base_111<V$1>;
    <$SEL extends "11">(): <T$1, V$1 extends V = V, T$2 extends T$1 = T$1>(transducer: Morphism<T$1[], V$1> | ((transformer: Transformer<T$1, V$1, V$1>) => (accumulator: V$1, value: T$1) => V$1 | Reduced<V$1>), values: T$2[]) => into_base_111<V$1>;
    <$SEL extends "1">(): <T, V$1 extends V = V>(transducer: Morphism<T[], V$1> | ((transformer: Transformer<T, V$1, V$1>) => (accumulator: V$1, value: T) => V$1 | Reduced<V$1>)) => into_base_110<T, V$1>;
    <$SEL extends "01">(): <T>(_transducer: PH, values: T[]) => into_base_101<T, V>;
    <T, V$1 extends V = V>(transducer: Morphism<T[], V$1> | ((transformer: Transformer<T, V$1, V$1>) => (accumulator: V$1, value: T) => V$1 | Reduced<V$1>)): into_base_110<T, V$1>;
};
type into_transformer_010<T, U> = {
    <T$1 extends T = T>(_initial: PH, values: T$1[]): into_transformer_011<T$1, U>;
    <T$1 extends T = T>(initial: Transformer<T$1, U, U>, values: T[]): into_transformer_111<U>;
    <$SEL extends "11">(): <T$1 extends T = T>(initial: Transformer<T$1, U, U>, values: T[]) => into_transformer_111<U>;
    <$SEL extends "1">(): (initial: Transformer<T, U, U>) => into_transformer_110<T, U>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: T$1[]) => into_transformer_011<T$1, U>;
    (initial: Transformer<T, U, U>): into_transformer_110<T, U>;
};
type into_base_010<T, V extends string | object> = {
    <T$1 extends T = T>(_initial: PH, values: T$1[]): into_base_011<T$1, V>;
    <T$1 extends T = T>(initial: V, values: T$1[]): into_base_111<V>;
    <$SEL extends "11">(): <T$1 extends T = T>(initial: V, values: T$1[]) => into_base_111<V>;
    <$SEL extends "1">(): (initial: V) => into_base_110<T, V>;
    <$SEL extends "01">(): <T$1 extends T = T>(_initial: PH, values: T$1[]) => into_base_011<T$1, V>;
    (initial: V): into_base_110<T, V>;
};
type into_transformer_110<T, U> = {
    <T$1 extends T = T>(values: T$1[]): into_transformer_111<U>;
};
type into_base_110<T, V extends string | object> = {
    <T$1 extends T = T>(values: T$1[]): into_base_111<V>;
};
type into_transformer_101<T, U> = {
    <U$1 extends U = U>(transducer: Morphism<T[], U$1> | ((transformer: Transformer<T, U$1, U$1>) => (accumulator: U$1, value: T) => U$1 | Reduced<U$1>)): into_transformer_111<U$1>;
};
type into_base_101<T, V extends string | object> = {
    <V$1 extends V = V>(transducer: Morphism<T[], V$1> | ((transformer: Transformer<T, V$1, V$1>) => (accumulator: V$1, value: T) => V$1 | Reduced<V$1>)): into_base_111<V$1>;
};
type into_transformer_011<T, U> = {
    (initial: Transformer<T, U, U>): into_transformer_111<U>;
};
type into_base_011<T, V extends string | object> = {
    (initial: V): into_base_111<V>;
};
type into_transformer_111<U> = U;
type into_base_111<V extends string | object> = V;
export = into;

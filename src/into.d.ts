import { Morphism, Reduced, Transformer } from "./$types";
declare const into: into_000;
type into_000 = {
    <T, U>(initial: Transformer<T, U, U>): into_transformer_100<T, U>;
    <V extends string | object>(initial: V): into_base_100<V>;
    <T, U>(initial: Transformer<T, U, U> | U): into_mixed_100<T, U>;
    <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_110<T, U>;
    <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_110<T, V>;
    <T, U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_110<T, U>;
    <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_transformer_111<U>;
    <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]): into_base_111<V>;
    <T, U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_mixed_111<U>;
};
type into_001<T> = {
    <U>(initial: Transformer<T, U, U>): into_transformer_101<T, U>;
    <V extends string | object>(initial: V): into_base_101<T, V>;
    <U>(initial: Transformer<T, U, U> | U): into_mixed_101<T, U>;
    <U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_111<U>;
    <V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_111<V>;
    <U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_111<U>;
};
type into_transformer_100<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_110<T, U>;
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_transformer_111<U>;
};
type into_base_100<V extends string | object> = {
    <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_110<T, V>;
    <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]): into_base_111<V>;
};
type into_mixed_100<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_110<T, U>;
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_mixed_111<U>;
};
type into_transformer_010<T, U> = {
    (initial: Transformer<T, U, U>): into_transformer_110<T, U>;
    (initial: Transformer<T, U, U>, values: T[]): into_transformer_111<U>;
};
type into_base_010<T, V extends string | object> = {
    (initial: V): into_base_110<T, V>;
    (initial: V, values: T[]): into_base_111<V>;
};
type into_mixed_010<T, U> = {
    (initial: Transformer<T, U, U> | U): into_mixed_110<T, U>;
    (initial: Transformer<T, U, U> | U, values: T[]): into_mixed_111<U>;
};
type into_transformer_110<T, U> = {
    (values: T[]): into_transformer_111<U>;
};
type into_base_110<T, V extends string | object> = {
    (values: T[]): into_base_111<V>;
};
type into_mixed_110<T, U> = {
    (values: T[]): into_mixed_111<U>;
};
type into_transformer_101<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_111<U>;
};
type into_base_101<T, V extends string | object> = {
    (transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_111<V>;
};
type into_mixed_101<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_111<U>;
};
type into_transformer_011<T, U> = {
    (initial: Transformer<T, U, U>): into_transformer_111<U>;
};
type into_base_011<T, V extends string | object> = {
    (initial: V): into_base_111<V>;
};
type into_mixed_011<T, U> = {
    (initial: Transformer<T, U, U> | U): into_mixed_111<U>;
};
type into_transformer_111<U> = U;
type into_base_111<V extends string | object> = V;
type into_mixed_111<U> = U;
export = into;

import { Morphism, Reduced, Transformer } from "./$types";
declare const transduce: transduce_0000;
type transduce_0000 = {
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1000<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1100<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1110<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_1000<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1100<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1110<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_0100<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1100<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U): transduce_1110<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_1100<T, U> = {
    (initial: U): transduce_1110<T, U>;
    (initial: U, values: T[]): transduce_1111<U>;
};
type transduce_0010<U> = {
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1010<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1110<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]): transduce_1111<U>;
};
type transduce_1010<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1110<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]): transduce_1111<U>;
};
type transduce_0110<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1110<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, values: T[]): transduce_1111<U>;
};
type transduce_1110<T, U> = {
    (values: T[]): transduce_1111<U>;
};
type transduce_0001<T> = {
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1001<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1101<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1111<U>;
};
type transduce_1001<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1101<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1111<U>;
};
type transduce_0101<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1101<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U): transduce_1111<U>;
};
type transduce_1101<T, U> = {
    (initial: U): transduce_1111<U>;
};
type transduce_0011<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1011<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1111<U>;
};
type transduce_1011<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1111<U>;
};
type transduce_0111<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1111<U>;
};
type transduce_1111<U> = U;
export = transduce;

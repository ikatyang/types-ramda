import { Applicative, List, Morphism, Traversable } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const sequence: sequence_00;
type sequence_00 = {
    <T>(of: Morphism<T, Applicative<T>>): sequence_10<T>;
    <T>(_of: PH, traversable: List<Applicative<T>>): sequence_list_01<T>;
    <T>(_of: PH, traversable: Traversable<Applicative<T>>): sequence_traversable_01<T>;
    <T>(_of: PH, traversable: List<Applicative<T>> | Traversable<Applicative<T>>): sequence_mixed_01<T>;
    <T>(of: Morphism<T, Applicative<T>>, traversable: List<Applicative<T>>): sequence_list_11<T>;
    <T>(of: Morphism<T, Applicative<T>>, traversable: Traversable<Applicative<T>>): sequence_traversable_11<T>;
    <T>(of: Morphism<T, Applicative<T>>, traversable: List<Applicative<T>> | Traversable<Applicative<T>>): sequence_mixed_11<T>;
};
type sequence_10<T> = {
    (traversable: List<Applicative<T>>): sequence_list_11<T>;
    (traversable: Traversable<Applicative<T>>): sequence_traversable_11<T>;
    (traversable: List<Applicative<T>> | Traversable<Applicative<T>>): sequence_mixed_11<T>;
};
type sequence_list_01<T> = {
    (of: Morphism<T, Applicative<T>>): sequence_list_11<T>;
};
type sequence_traversable_01<T> = {
    (of: Morphism<T, Applicative<T>>): sequence_traversable_11<T>;
};
type sequence_mixed_01<T> = {
    (of: Morphism<T, Applicative<T>>): sequence_mixed_11<T>;
};
type sequence_list_11<T> = Applicative<T[]>;
type sequence_traversable_11<T> = Applicative<Traversable<T>>;
type sequence_mixed_11<T> = Applicative<T[]> | Applicative<Traversable<T>>;
export = sequence;

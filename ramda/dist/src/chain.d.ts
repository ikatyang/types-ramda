import { Chain, List, Morphism, NestedMorphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
declare const chain: chain_00;
type chain_00 = {
    <T>(_fn: PH, list: List<T>): chain_list_01<T>;
    <T>(_fn: PH, list: Chain<T>): chain_chain_01<T>;
    <T, V>(_fn: PH, monad: Morphism<List<T>, V>): chain_listFn_01<T, V>;
    <T, V>(_fn: PH, monad: Morphism<Chain<T>, V>): chain_chainFn_01<T, V>;
    <T$1, U, T$2 extends T$1 = T$1>(fn: Morphism<T$1, List<U>>, list: List<T$2>): chain_list_11<U>;
    <T$1, U, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Chain<U>>, list: Chain<T$2>): chain_chain_11<U>;
    <T$1, U, V$1, T$2 extends T$1 = T$1, V$2 extends V$1 = V$1>(fn: NestedMorphism<V$1, List<T$1>, U>, monad: Morphism<List<T$2>, V$2>): chain_listFn_11<T$2, U>;
    <T$1, U, V$1, T$2 extends T$1 = T$1, V$2 extends V$1 = V$1>(fn: NestedMorphism<V$1, Chain<T$1>, Chain<U>>, monad: Morphism<Chain<T$2>, V$2>): chain_chainFn_11<T$2, U>;
    <T, U>(fn: Morphism<T, List<U>>): chain_list_10<T, U>;
    <T, U>(fn: Morphism<T, Chain<U>>): chain_chain_10<T, U>;
    <T, U, V>(fn: NestedMorphism<V, List<T>, U>): chain_listFn_10<T, U, V>;
    <$SEL extends "11", $KIND extends "list">(): <T$1, U, T$2 extends T$1 = T$1>(fn: Morphism<T$1, List<U>>, list: List<T$2>) => chain_list_11<U>;
    <$SEL extends "1", $KIND extends "list">(): <T, U>(fn: Morphism<T, List<U>>) => chain_list_10<T, U>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_fn: PH, list: List<T>) => chain_list_01<T>;
    <$SEL extends "11", $KIND extends "chain">(): <T$1, U, T$2 extends T$1 = T$1>(fn: Morphism<T$1, Chain<U>>, list: Chain<T$2>) => chain_chain_11<U>;
    <$SEL extends "1", $KIND extends "chain">(): <T, U>(fn: Morphism<T, Chain<U>>) => chain_chain_10<T, U>;
    <$SEL extends "01", $KIND extends "chain">(): <T>(_fn: PH, list: Chain<T>) => chain_chain_01<T>;
    <$SEL extends "11", $KIND extends "listFn">(): <T$1, U, V$1, T$2 extends T$1 = T$1, V$2 extends V$1 = V$1>(fn: NestedMorphism<V$1, List<T$1>, U>, monad: Morphism<List<T$2>, V$2>) => chain_listFn_11<T$2, U>;
    <$SEL extends "1", $KIND extends "listFn">(): <T, U, V>(fn: NestedMorphism<V, List<T>, U>) => chain_listFn_10<T, U, V>;
    <$SEL extends "01", $KIND extends "listFn">(): <T, V>(_fn: PH, monad: Morphism<List<T>, V>) => chain_listFn_01<T, V>;
    <$SEL extends "11", $KIND extends "chainFn">(): <T$1, U, V$1, T$2 extends T$1 = T$1, V$2 extends V$1 = V$1>(fn: NestedMorphism<V$1, Chain<T$1>, Chain<U>>, monad: Morphism<Chain<T$2>, V$2>) => chain_chainFn_11<T$2, U>;
    <$SEL extends "1", $KIND extends "chainFn">(): <T, U, V>(fn: NestedMorphism<V, Chain<T>, Chain<U>>) => chain_chainFn_10<T, U, V>;
    <$SEL extends "01", $KIND extends "chainFn">(): <T, V>(_fn: PH, monad: Morphism<Chain<T>, V>) => chain_chainFn_01<T, V>;
    <T, U, V>(fn: NestedMorphism<V, Chain<T>, Chain<U>>): chain_chainFn_10<T, U, V>;
};
type chain_list_10<T, U> = {
    <T$1 extends T = T>(list: List<T$1>): chain_list_11<U>;
};
type chain_chain_10<T, U> = {
    <T$1 extends T = T>(list: Chain<T$1>): chain_chain_11<U>;
};
type chain_listFn_10<T, U, V> = {
    <T$1 extends T = T, V$1 extends V = V>(monad: Morphism<List<T$1>, V$1>): chain_listFn_11<T$1, U>;
};
type chain_chainFn_10<T, U, V> = {
    <T$1 extends T = T, V$1 extends V = V>(monad: Morphism<Chain<T$1>, V$1>): chain_chainFn_11<T$1, U>;
};
type chain_list_01<T> = {
    <U>(fn: Morphism<T, List<U>>): chain_list_11<U>;
};
type chain_chain_01<T> = {
    <U>(fn: Morphism<T, Chain<U>>): chain_chain_11<U>;
};
type chain_listFn_01<T, V> = {
    <U>(fn: NestedMorphism<V, List<T>, U>): chain_listFn_11<T, U>;
};
type chain_chainFn_01<T, V> = {
    <U>(fn: NestedMorphism<V, Chain<T>, Chain<U>>): chain_chainFn_11<T, U>;
};
type chain_list_11<U> = U[];
type chain_chain_11<U> = Chain<U>;
type chain_listFn_11<T, U> = Morphism<List<T>, U>;
type chain_chainFn_11<T, U> = Morphism<Chain<T>, Chain<U>>;
export = chain;

import { Chain, List, Morphism, NestedMorphism } from "./$types";
declare const chain: chain_00;
type chain_00 = {
    <T, U>(fn: Morphism<T, List<U>>): chain_list_10<T, U>;
    <T, U>(fn: Morphism<T, Chain<U>>): chain_chain_10<T, U>;
    <T, U, V>(fn: NestedMorphism<V, List<T>, U>): chain_listFn_10<T, U, V>;
    <T, U, V>(fn: NestedMorphism<V, Chain<T>, Chain<U>>): chain_chainFn_10<T, U, V>;
    <T, U, V>(fn: Morphism<T, List<U>> | Morphism<T, Chain<U>> | NestedMorphism<V, List<T>, U> | NestedMorphism<V, Chain<T>, Chain<U>>): chain_mixed_10<T, U, V>;
    <T, U>(fn: Morphism<T, List<U>>, list: List<T>): chain_list_11<U>;
    <T, U>(fn: Morphism<T, Chain<U>>, list: Chain<T>): chain_chain_11<U>;
    <T, U, V>(fn: NestedMorphism<V, List<T>, U>, monad: Morphism<List<T>, V>): chain_listFn_11<T, U>;
    <T, U, V>(fn: NestedMorphism<V, Chain<T>, Chain<U>>, monad: Morphism<Chain<T>, V>): chain_chainFn_11<T, U>;
    <T, U, V>(fn: Morphism<T, List<U>> | Morphism<T, Chain<U>> | NestedMorphism<V, List<T>, U> | NestedMorphism<V, Chain<T>, Chain<U>>, monad: List<T> | Chain<T> | Morphism<List<T>, V> | Morphism<Chain<T>, V>): chain_mixed_11<T, U>;
};
type chain_list_10<T, U> = {
    (list: List<T>): chain_list_11<U>;
};
type chain_chain_10<T, U> = {
    (list: Chain<T>): chain_chain_11<U>;
};
type chain_listFn_10<T, U, V> = {
    (monad: Morphism<List<T>, V>): chain_listFn_11<T, U>;
};
type chain_chainFn_10<T, U, V> = {
    (monad: Morphism<Chain<T>, V>): chain_chainFn_11<T, U>;
};
type chain_mixed_10<T, U, V> = {
    (monad: List<T> | Chain<T> | Morphism<List<T>, V> | Morphism<Chain<T>, V>): chain_mixed_11<T, U>;
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
type chain_mixed_01<T, V> = {
    <U>(fn: Morphism<T, List<U>> | Morphism<T, Chain<U>> | NestedMorphism<V, List<T>, U> | NestedMorphism<V, Chain<T>, Chain<U>>): chain_mixed_11<T, U>;
};
type chain_list_11<U> = U[];
type chain_chain_11<U> = Chain<U>;
type chain_listFn_11<T, U> = Morphism<List<T>, U>;
type chain_chainFn_11<T, U> = Morphism<Chain<T>, Chain<U>>;
type chain_mixed_11<T, U> = Morphism<List<T>, U> | Morphism<Chain<T>, Chain<U>>;
export = chain;

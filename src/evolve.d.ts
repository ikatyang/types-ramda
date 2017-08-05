import { Evolver } from "./$operation";
declare const evolve: evolve_00;
type evolve_00 = {
    <T>(transformations: Evolver<T>): evolve_10<T>;
    <$SEL extends "1">(): <T>(transformations: Evolver<T>) => evolve_10<T>;
    <$SEL extends "11">(): <T, U extends T>(transformations: Evolver<T>, object: U) => evolve_11<T, U>;
    <T, U extends T>(transformations: Evolver<T>, object: U): evolve_11<T, U>;
};
type evolve_10<T> = {
    <U extends T>(object: U): evolve_11<T, U>;
};
type evolve_01<T, U extends T> = {
    (transformations: Evolver<T>): evolve_11<T, U>;
};
type evolve_11<T, U extends T> = U;
export = evolve;

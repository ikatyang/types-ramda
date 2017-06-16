import {Dictionary, List, Predicate} from './$types';

export function $list<T>(fn: Predicate<T>, list: List<T>): [T[], T[]];
export function $object<T, KT extends string, KF extends string>(fn: Predicate<T>, object: Record<KT | KF, T>): [Record<KT, T>, Record<KF, T>];
export function $dictionary<T>(fn: Predicate<T>, dictionary: Dictionary<T>): [Dictionary<T>, Dictionary<T>];

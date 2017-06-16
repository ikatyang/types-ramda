import {Path, Predicate} from './$types';

export function $<T>(fn: Predicate<T>, path: Path, object: any): boolean;

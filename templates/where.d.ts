import { Dictionary, Predicate } from './$types';

export function $<T>(
  spec: Dictionary<Predicate<T>>,
  object: Dictionary<T>,
): boolean;

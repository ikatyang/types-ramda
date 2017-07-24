import { Lens } from './$types';

export function $<T, U>(
  getter: (target: U) => T,
  setter: (focus: T, target: U) => U,
): Lens<T, U>;

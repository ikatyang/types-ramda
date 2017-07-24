import { Omit } from './$operation';
import { Property } from './$types';

export function $keyof<T extends {}, K extends keyof T>(
  property: K,
  object: T,
): Omit<T, K>;
export function $record<T extends Record<K, any>, K extends string>(
  property: K,
  object: T,
): Omit<T, K>;
export function $general<T extends {}>(property: Property, object: T): T;

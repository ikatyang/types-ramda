import { Lens, Property } from './$types';

export function $<T, U>(property: Property): Lens<T, U>;

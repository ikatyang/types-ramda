import {Property} from './$types';

export function $remain<T>(property: Property, object: T): T;
export function $manual<T>(property: Property, object: object): T;

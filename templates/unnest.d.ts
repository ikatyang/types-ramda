import {List} from './$types';

// tslint:disable:unified-signatures

export function $deep<T>(list: List<List<T>>): T[];
export function $manual<T>(list: List<T>): T[];

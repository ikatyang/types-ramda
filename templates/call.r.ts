import { Variadic } from './$types';

declare const call: <T>(fn: Variadic<T>, ...args: any[]) => T;

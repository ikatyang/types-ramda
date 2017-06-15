import {Path} from './$types';

export function $remain<T>(path: Path, object: T): T;
export function $manual<T>(path: Path, object: object): T;

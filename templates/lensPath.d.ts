import {Lens, Path} from './$types';

export function $<T, U>(path: Path): Lens<T, U>;

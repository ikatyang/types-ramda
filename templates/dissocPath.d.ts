import {DeepPartial} from './$operation';
import {Path} from './$types';

export function $<T>(path: Path, object: T): DeepPartial<T>;

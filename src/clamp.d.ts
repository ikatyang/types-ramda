import { Ordered } from "./$types";
declare const clamp: clamp_000;
type clamp_000 = {
    <T extends Ordered>(min: T): clamp_100<T>;
    <T extends Ordered>(min: T, max: T): clamp_110<T>;
    <$SEL extends "1">(): <T extends Ordered>(min: T) => clamp_100<T>;
    <$SEL extends "11">(): <T extends Ordered>(min: T, max: T) => clamp_110<T>;
    <$SEL extends "111">(): <T extends Ordered>(min: T, max: T, value: T) => clamp_111<T>;
    <T extends Ordered>(min: T, max: T, value: T): clamp_111<T>;
};
type clamp_100<T extends Ordered> = {
    (max: T): clamp_110<T>;
    <$SEL extends "1">(): (max: T) => clamp_110<T>;
    <$SEL extends "11">(): (max: T, value: T) => clamp_111<T>;
    (max: T, value: T): clamp_111<T>;
};
type clamp_010<T extends Ordered> = {
    (min: T): clamp_110<T>;
    <$SEL extends "1">(): (min: T) => clamp_110<T>;
    <$SEL extends "11">(): (min: T, value: T) => clamp_111<T>;
    (min: T, value: T): clamp_111<T>;
};
type clamp_110<T extends Ordered> = {
    (value: T): clamp_111<T>;
};
type clamp_001<T extends Ordered> = {
    (min: T): clamp_101<T>;
    <$SEL extends "1">(): (min: T) => clamp_101<T>;
    <$SEL extends "11">(): (min: T, max: T) => clamp_111<T>;
    (min: T, max: T): clamp_111<T>;
};
type clamp_101<T extends Ordered> = {
    (max: T): clamp_111<T>;
};
type clamp_011<T extends Ordered> = {
    (min: T): clamp_111<T>;
};
type clamp_111<T extends Ordered> = T;
export = clamp;

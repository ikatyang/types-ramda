import { Placeholder as PH } from "./$placeholder";
declare const remove: remove_000;
type remove_000 = {
    (start: number): remove_100;
    (_start: PH, counter: number): remove_010;
    (start: number, counter: number): remove_110;
    <T>(_start: PH, _counter: PH, list: T[]): remove_001<T>;
    <T>(_start: PH, counter: number, list: T[]): remove_011<T>;
    <T>(start: number, _counter: PH, list: T[]): remove_101<T>;
    <$SEL extends "1">(): (start: number) => remove_100;
    <$SEL extends "01">(): (_start: PH, counter: number) => remove_010;
    <$SEL extends "11">(): (start: number, counter: number) => remove_110;
    <$SEL extends "001">(): <T>(_start: PH, _counter: PH, list: T[]) => remove_001<T>;
    <$SEL extends "011">(): <T>(_start: PH, counter: number, list: T[]) => remove_011<T>;
    <$SEL extends "101">(): <T>(start: number, _counter: PH, list: T[]) => remove_101<T>;
    <$SEL extends "111">(): <T>(start: number, counter: number, list: T[]) => remove_111<T>;
    <T>(start: number, counter: number, list: T[]): remove_111<T>;
};
type remove_100 = {
    (counter: number): remove_110;
    <T>(_counter: PH, list: T[]): remove_101<T>;
    <$SEL extends "1">(): (counter: number) => remove_110;
    <$SEL extends "01">(): <T>(_counter: PH, list: T[]) => remove_101<T>;
    <$SEL extends "11">(): <T>(counter: number, list: T[]) => remove_111<T>;
    <T>(counter: number, list: T[]): remove_111<T>;
};
type remove_010 = {
    (start: number): remove_110;
    <T>(_start: PH, list: T[]): remove_011<T>;
    <$SEL extends "1">(): (start: number) => remove_110;
    <$SEL extends "01">(): <T>(_start: PH, list: T[]) => remove_011<T>;
    <$SEL extends "11">(): <T>(start: number, list: T[]) => remove_111<T>;
    <T>(start: number, list: T[]): remove_111<T>;
};
type remove_110 = {
    <T>(list: T[]): remove_111<T>;
};
type remove_001<T> = {
    (start: number): remove_101<T>;
    (_start: PH, counter: number): remove_011<T>;
    <$SEL extends "1">(): (start: number) => remove_101<T>;
    <$SEL extends "01">(): (_start: PH, counter: number) => remove_011<T>;
    <$SEL extends "11">(): (start: number, counter: number) => remove_111<T>;
    (start: number, counter: number): remove_111<T>;
};
type remove_101<T> = {
    (counter: number): remove_111<T>;
};
type remove_011<T> = {
    (start: number): remove_111<T>;
};
type remove_111<T> = T[];
export = remove;

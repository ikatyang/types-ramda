import { NumberToString } from "./$operation";
import { Dictionary, ManualLens, Morphism, PseudoLens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
declare const set: set_000;
type set_000 = {
    <N extends number>(lens: PseudoLens<N>): set_number_100<N>;
    <K extends string>(lens: PseudoLens<K>): set_string_100<K>;
    <T, U>(lens: ManualLens<T, U>): set_manual_100<T, U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>): set_general_100<U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, value: U[NumberToString[N]]): set_number_010<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, value: U[K]): set_string_010<K, U>;
    <T>(_lens: PH, value: T): set_manual_010<T>;
    (_lens: PH, fn: any): set_general_010;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, value: U[NumberToString[N]]): set_number_110<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K]): set_string_110<K, U>;
    <T, U>(lens: ManualLens<T, U>, value: T): set_manual_110<T, U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: any): set_general_110<U>;
    <U>(_lens: PH, _fn: PH, target: U): set_001<U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, value: U[NumberToString[N]], target: U): set_number_011<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, value: U[K], target: U): set_string_011<K, U>;
    <T, U>(_lens: PH, value: T, target: U): set_manual_011<T, U>;
    <U>(_lens: PH, fn: any, target: U): set_general_011<U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, _value: PH, target: U): set_number_101<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, _value: PH, target: U): set_string_101<K, U>;
    <T, U>(lens: ManualLens<T, U>, _value: PH, target: U): set_manual_101<T, U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>, _fn: PH, target: U): set_general_101<U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, value: U[NumberToString[N]], target: U): set_number_111<U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K], target: U): set_string_111<K, U>;
    <T, U>(lens: ManualLens<T, U>, value: T, target: U): set_manual_111<U>;
    <$SEL extends "1", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>) => set_number_100<N>;
    <$SEL extends "1", $KIND extends "string">(): <K extends string>(lens: PseudoLens<K>) => set_string_100<K>;
    <$SEL extends "1", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>) => set_manual_100<T, U>;
    <$SEL extends "1", $KIND extends "general">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>) => set_general_100<U>;
    <$SEL extends "01", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, value: U[NumberToString[N]]) => set_number_010<N, U>;
    <$SEL extends "01", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, value: U[K]) => set_string_010<K, U>;
    <$SEL extends "01", $KIND extends "manual">(): <T>(_lens: PH, value: T) => set_manual_010<T>;
    <$SEL extends "01", $KIND extends "general">(): (_lens: PH, fn: any) => set_general_010;
    <$SEL extends "11", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, value: U[NumberToString[N]]) => set_number_110<N, U>;
    <$SEL extends "11", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K]) => set_string_110<K, U>;
    <$SEL extends "11", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, value: T) => set_manual_110<T, U>;
    <$SEL extends "11", $KIND extends "general">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: any) => set_general_110<U>;
    <$SEL extends "001">(): <U>(_lens: PH, _fn: PH, target: U) => set_001<U>;
    <$SEL extends "011", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, value: U[NumberToString[N]], target: U) => set_number_011<N, U>;
    <$SEL extends "011", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, value: U[K], target: U) => set_string_011<K, U>;
    <$SEL extends "011", $KIND extends "manual">(): <T, U>(_lens: PH, value: T, target: U) => set_manual_011<T, U>;
    <$SEL extends "011", $KIND extends "general">(): <U>(_lens: PH, fn: any, target: U) => set_general_011<U>;
    <$SEL extends "101", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, _value: PH, target: U) => set_number_101<N, U>;
    <$SEL extends "101", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, _value: PH, target: U) => set_string_101<K, U>;
    <$SEL extends "101", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, _value: PH, target: U) => set_manual_101<T, U>;
    <$SEL extends "101", $KIND extends "general">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>, _fn: PH, target: U) => set_general_101<U>;
    <$SEL extends "111", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, value: U[NumberToString[N]], target: U) => set_number_111<U>;
    <$SEL extends "111", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K], target: U) => set_string_111<K, U>;
    <$SEL extends "111", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, value: T, target: U) => set_manual_111<U>;
    <$SEL extends "111", $KIND extends "general">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: any, target: U) => set_general_111<U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: any, target: U): set_general_111<U>;
};
type set_001<U extends {
        [index: number]: any;
    }> = {
    <N extends number>(lens: PseudoLens<N>): set_number_101<N, U>;
    (lens: PseudoLens<K>): set_string_101<K, U>;
    <T>(lens: ManualLens<T, U>): set_manual_101<T, U>;
    (lens: PseudoLens<any> | ManualLens<any, U>): set_general_101<U>;
    <N extends number>(_lens: PH, value: U[NumberToString[N]]): set_number_011<N, U>;
    (_lens: PH, value: U[K]): set_string_011<K, U>;
    <T>(_lens: PH, value: T): set_manual_011<T, U>;
    (_lens: PH, fn: any): set_general_011<U>;
    <N extends number>(lens: PseudoLens<N>, value: U[NumberToString[N]]): set_number_111<U>;
    (lens: PseudoLens<K>, value: U[K]): set_string_111<K, U>;
    <T>(lens: ManualLens<T, U>, value: T): set_manual_111<U>;
    <$SEL extends "1", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>) => set_number_101<N, U>;
    <$SEL extends "1", $KIND extends "string">(): (lens: PseudoLens<K>) => set_string_101<K, U>;
    <$SEL extends "1", $KIND extends "manual">(): <T>(lens: ManualLens<T, U>) => set_manual_101<T, U>;
    <$SEL extends "1", $KIND extends "general">(): (lens: PseudoLens<any> | ManualLens<any, U>) => set_general_101<U>;
    <$SEL extends "01", $KIND extends "number">(): <N extends number>(_lens: PH, value: U[NumberToString[N]]) => set_number_011<N, U>;
    <$SEL extends "01", $KIND extends "string">(): (_lens: PH, value: U[K]) => set_string_011<K, U>;
    <$SEL extends "01", $KIND extends "manual">(): <T>(_lens: PH, value: T) => set_manual_011<T, U>;
    <$SEL extends "01", $KIND extends "general">(): (_lens: PH, fn: any) => set_general_011<U>;
    <$SEL extends "11", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>, value: U[NumberToString[N]]) => set_number_111<U>;
    <$SEL extends "11", $KIND extends "string">(): (lens: PseudoLens<K>, value: U[K]) => set_string_111<K, U>;
    <$SEL extends "11", $KIND extends "manual">(): <T>(lens: ManualLens<T, U>, value: T) => set_manual_111<U>;
    <$SEL extends "11", $KIND extends "general">(): (lens: PseudoLens<any> | ManualLens<any, U>, fn: any) => set_general_111<U>;
    (lens: PseudoLens<any> | ManualLens<any, U>, fn: any): set_general_111<U>;
};
type set_number_100<N extends number> = {
    <U extends {
            [index: number]: any;
        }>(value: U[NumberToString[N]]): set_number_110<N, U>;
    <U extends {
            [index: number]: any;
        }>(_value: PH, target: U): set_number_101<N, U>;
    <$SEL extends "1">(): <U extends {
            [index: number]: any;
        }>(value: U[NumberToString[N]]) => set_number_110<N, U>;
    <$SEL extends "01">(): <U extends {
            [index: number]: any;
        }>(_value: PH, target: U) => set_number_101<N, U>;
    <$SEL extends "11">(): <U extends {
            [index: number]: any;
        }>(value: U[NumberToString[N]], target: U) => set_number_111<U>;
    <U extends {
            [index: number]: any;
        }>(value: U[NumberToString[N]], target: U): set_number_111<U>;
};
type set_string_100<K extends string> = {
    <U extends Record<K, any>>(value: U[K]): set_string_110<K, U>;
    <U extends Record<K, any>>(_value: PH, target: U): set_string_101<K, U>;
    <$SEL extends "1">(): <U extends Record<K, any>>(value: U[K]) => set_string_110<K, U>;
    <$SEL extends "01">(): <U extends Record<K, any>>(_value: PH, target: U) => set_string_101<K, U>;
    <$SEL extends "11">(): <U extends Record<K, any>>(value: U[K], target: U) => set_string_111<K, U>;
    <U extends Record<K, any>>(value: U[K], target: U): set_string_111<K, U>;
};
type set_manual_100<T, U> = {
    (value: T): set_manual_110<T, U>;
    (_value: PH, target: U): set_manual_101<T, U>;
    <$SEL extends "1">(): (value: T) => set_manual_110<T, U>;
    <$SEL extends "01">(): (_value: PH, target: U) => set_manual_101<T, U>;
    <$SEL extends "11">(): (value: T, target: U) => set_manual_111<U>;
    (value: T, target: U): set_manual_111<U>;
};
type set_general_100<U> = {
    (fn: any): set_general_110<U>;
    (_fn: PH, target: U): set_general_101<U>;
    <$SEL extends "1">(): (fn: any) => set_general_110<U>;
    <$SEL extends "01">(): (_fn: PH, target: U) => set_general_101<U>;
    <$SEL extends "11">(): (fn: any, target: U) => set_general_111<U>;
    (fn: any, target: U): set_general_111<U>;
};
type set_number_010<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): set_number_110<N, U>;
    (_lens: PH, target: U): set_number_011<N, U>;
    <$SEL extends "1">(): (lens: PseudoLens<N>) => set_number_110<N, U>;
    <$SEL extends "01">(): (_lens: PH, target: U) => set_number_011<N, U>;
    <$SEL extends "11">(): (lens: PseudoLens<N>, target: U) => set_number_111<U>;
    (lens: PseudoLens<N>, target: U): set_number_111<U>;
};
type set_string_010<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): set_string_110<K, U>;
    (_lens: PH, target: U): set_string_011<K, U>;
    <$SEL extends "1">(): (lens: PseudoLens<K>) => set_string_110<K, U>;
    <$SEL extends "01">(): (_lens: PH, target: U) => set_string_011<K, U>;
    <$SEL extends "11">(): (lens: PseudoLens<K>, target: U) => set_string_111<K, U>;
    (lens: PseudoLens<K>, target: U): set_string_111<K, U>;
};
type set_manual_010<T> = {
    <U>(lens: ManualLens<T, U>): set_manual_110<T, U>;
    <U>(_lens: PH, target: U): set_manual_011<T, U>;
    <$SEL extends "1">(): <U>(lens: ManualLens<T, U>) => set_manual_110<T, U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => set_manual_011<T, U>;
    <$SEL extends "11">(): <U>(lens: ManualLens<T, U>, target: U) => set_manual_111<U>;
    <U>(lens: ManualLens<T, U>, target: U): set_manual_111<U>;
};
type set_general_010 = {
    <U>(lens: PseudoLens<any> | ManualLens<any, U>): set_general_110<U>;
    <U>(_lens: PH, target: U): set_general_011<U>;
    <$SEL extends "1">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>) => set_general_110<U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => set_general_011<U>;
    <$SEL extends "11">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>, target: U) => set_general_111<U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>, target: U): set_general_111<U>;
};
type set_number_110<N extends number, U extends {
        [index: number]: any;
    }> = {
    (target: U): set_number_111<U>;
};
type set_string_110<K extends string, U extends Record<K, any>> = {
    (target: U): set_string_111<K, U>;
};
type set_manual_110<T, U> = {
    (target: U): set_manual_111<U>;
};
type set_general_110<U> = {
    (target: U): set_general_111<U>;
};
type set_number_101<N extends number, U extends {
        [index: number]: any;
    }> = {
    (value: U[NumberToString[N]]): set_number_111<U>;
};
type set_string_101<K extends string, U extends Record<K, any>> = {
    (value: U[K]): set_string_111<K, U>;
};
type set_manual_101<T, U> = {
    (value: T): set_manual_111<U>;
};
type set_general_101<U> = {
    (fn: any): set_general_111<U>;
};
type set_number_011<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): set_number_111<U>;
};
type set_string_011<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): set_string_111<K, U>;
};
type set_manual_011<T, U> = {
    (lens: ManualLens<T, U>): set_manual_111<U>;
};
type set_general_011<U> = {
    (lens: PseudoLens<any> | ManualLens<any, U>): set_general_111<U>;
};
type set_number_111<U extends {
        [index: number]: any;
    }> = U;
type set_string_111<K extends string, U extends Record<K, any>> = U;
type set_manual_111<U> = U;
type set_general_111<U> = U;
export = set;

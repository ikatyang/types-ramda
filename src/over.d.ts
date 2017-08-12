import { NumberToString } from "./$operation";
import { Dictionary, ManualLens, Morphism, PseudoLens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
declare const over: over_000;
type over_000 = {
    <N extends number>(lens: PseudoLens<N>): over_number_100<N>;
    <K extends string>(lens: PseudoLens<K>): over_string_100<K>;
    <T, U>(lens: ManualLens<T, U>): over_manual_100<T, U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>): over_general_100<U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_010<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>): over_string_010<K, U>;
    <T>(_lens: PH, fn: Morphism<T, T>): over_manual_010<T>;
    <V>(_lens: PH, fn: Morphism<V, V>): over_general_010<V>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_110<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>): over_string_110<K, U>;
    <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>): over_manual_110<T, U>;
    <V, U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: Morphism<V, V>): over_general_110<V, U>;
    <U>(_lens: PH, _fn: PH, target: U): over_001<U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U): over_number_011<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>, target: U): over_string_011<K, U>;
    <T, U>(_lens: PH, fn: Morphism<T, T>, target: U): over_manual_011<T, U>;
    <V, U>(_lens: PH, fn: Morphism<V, V>, target: U): over_general_011<V, U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, _fn: PH, target: U): over_number_101<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, _fn: PH, target: U): over_string_101<K, U>;
    <T, U>(lens: ManualLens<T, U>, _fn: PH, target: U): over_manual_101<T, U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>, _fn: PH, target: U): over_general_101<U>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U): over_number_111<U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>, target: U): over_string_111<K, U>;
    <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>, target: U): over_manual_111<U>;
    <$SEL extends "1", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>) => over_number_100<N>;
    <$SEL extends "1", $KIND extends "string">(): <K extends string>(lens: PseudoLens<K>) => over_string_100<K>;
    <$SEL extends "1", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>) => over_manual_100<T, U>;
    <$SEL extends "1", $KIND extends "general">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>) => over_general_100<U>;
    <$SEL extends "01", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>) => over_number_010<N, U>;
    <$SEL extends "01", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>) => over_string_010<K, U>;
    <$SEL extends "01", $KIND extends "manual">(): <T>(_lens: PH, fn: Morphism<T, T>) => over_manual_010<T>;
    <$SEL extends "01", $KIND extends "general">(): <V>(_lens: PH, fn: Morphism<V, V>) => over_general_010<V>;
    <$SEL extends "11", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>) => over_number_110<N, U>;
    <$SEL extends "11", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>) => over_string_110<K, U>;
    <$SEL extends "11", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>) => over_manual_110<T, U>;
    <$SEL extends "11", $KIND extends "general">(): <V, U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: Morphism<V, V>) => over_general_110<V, U>;
    <$SEL extends "001">(): <U>(_lens: PH, _fn: PH, target: U) => over_001<U>;
    <$SEL extends "011", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U) => over_number_011<N, U>;
    <$SEL extends "011", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>, target: U) => over_string_011<K, U>;
    <$SEL extends "011", $KIND extends "manual">(): <T, U>(_lens: PH, fn: Morphism<T, T>, target: U) => over_manual_011<T, U>;
    <$SEL extends "011", $KIND extends "general">(): <V, U>(_lens: PH, fn: Morphism<V, V>, target: U) => over_general_011<V, U>;
    <$SEL extends "101", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, _fn: PH, target: U) => over_number_101<N, U>;
    <$SEL extends "101", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, _fn: PH, target: U) => over_string_101<K, U>;
    <$SEL extends "101", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, _fn: PH, target: U) => over_manual_101<T, U>;
    <$SEL extends "101", $KIND extends "general">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>, _fn: PH, target: U) => over_general_101<U>;
    <$SEL extends "111", $KIND extends "number">(): <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U) => over_number_111<U>;
    <$SEL extends "111", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>, target: U) => over_string_111<K, U>;
    <$SEL extends "111", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>, target: U) => over_manual_111<U>;
    <$SEL extends "111", $KIND extends "general">(): <V, U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: Morphism<V, V>, target: U) => over_general_111<U>;
    <V, U>(lens: PseudoLens<any> | ManualLens<any, U>, fn: Morphism<V, V>, target: U): over_general_111<U>;
};
type over_001<U extends {
        [index: number]: any;
    }> = {
    <N extends number>(lens: PseudoLens<N>): over_number_101<N, U>;
    (lens: PseudoLens<K>): over_string_101<K, U>;
    <T>(lens: ManualLens<T, U>): over_manual_101<T, U>;
    (lens: PseudoLens<any> | ManualLens<any, U>): over_general_101<U>;
    <N extends number>(_lens: PH, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_011<N, U>;
    (_lens: PH, fn: Morphism<U[K], U[K]>): over_string_011<K, U>;
    <T>(_lens: PH, fn: Morphism<T, T>): over_manual_011<T, U>;
    <V>(_lens: PH, fn: Morphism<V, V>): over_general_011<V, U>;
    <N extends number>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_111<U>;
    (lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>): over_string_111<K, U>;
    <T>(lens: ManualLens<T, U>, fn: Morphism<T, T>): over_manual_111<U>;
    <$SEL extends "1", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>) => over_number_101<N, U>;
    <$SEL extends "1", $KIND extends "string">(): (lens: PseudoLens<K>) => over_string_101<K, U>;
    <$SEL extends "1", $KIND extends "manual">(): <T>(lens: ManualLens<T, U>) => over_manual_101<T, U>;
    <$SEL extends "1", $KIND extends "general">(): (lens: PseudoLens<any> | ManualLens<any, U>) => over_general_101<U>;
    <$SEL extends "01", $KIND extends "number">(): <N extends number>(_lens: PH, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>) => over_number_011<N, U>;
    <$SEL extends "01", $KIND extends "string">(): (_lens: PH, fn: Morphism<U[K], U[K]>) => over_string_011<K, U>;
    <$SEL extends "01", $KIND extends "manual">(): <T>(_lens: PH, fn: Morphism<T, T>) => over_manual_011<T, U>;
    <$SEL extends "01", $KIND extends "general">(): <V>(_lens: PH, fn: Morphism<V, V>) => over_general_011<V, U>;
    <$SEL extends "11", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>) => over_number_111<U>;
    <$SEL extends "11", $KIND extends "string">(): (lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>) => over_string_111<K, U>;
    <$SEL extends "11", $KIND extends "manual">(): <T>(lens: ManualLens<T, U>, fn: Morphism<T, T>) => over_manual_111<U>;
    <$SEL extends "11", $KIND extends "general">(): <V>(lens: PseudoLens<any> | ManualLens<any, U>, fn: Morphism<V, V>) => over_general_111<U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, U>, fn: Morphism<V, V>): over_general_111<U>;
};
type over_number_100<N extends number> = {
    <U extends {
            [index: number]: any;
        }>(fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_110<N, U>;
    <U extends {
            [index: number]: any;
        }>(_fn: PH, target: U): over_number_101<N, U>;
    <$SEL extends "1">(): <U extends {
            [index: number]: any;
        }>(fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>) => over_number_110<N, U>;
    <$SEL extends "01">(): <U extends {
            [index: number]: any;
        }>(_fn: PH, target: U) => over_number_101<N, U>;
    <$SEL extends "11">(): <U extends {
            [index: number]: any;
        }>(fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U) => over_number_111<U>;
    <U extends {
            [index: number]: any;
        }>(fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U): over_number_111<U>;
};
type over_string_100<K extends string> = {
    <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>): over_string_110<K, U>;
    <U extends Record<K, any>>(_fn: PH, target: U): over_string_101<K, U>;
    <$SEL extends "1">(): <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>) => over_string_110<K, U>;
    <$SEL extends "01">(): <U extends Record<K, any>>(_fn: PH, target: U) => over_string_101<K, U>;
    <$SEL extends "11">(): <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>, target: U) => over_string_111<K, U>;
    <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>, target: U): over_string_111<K, U>;
};
type over_manual_100<T, U> = {
    (fn: Morphism<T, T>): over_manual_110<T, U>;
    (_fn: PH, target: U): over_manual_101<T, U>;
    <$SEL extends "1">(): (fn: Morphism<T, T>) => over_manual_110<T, U>;
    <$SEL extends "01">(): (_fn: PH, target: U) => over_manual_101<T, U>;
    <$SEL extends "11">(): (fn: Morphism<T, T>, target: U) => over_manual_111<U>;
    (fn: Morphism<T, T>, target: U): over_manual_111<U>;
};
type over_general_100<U> = {
    <V>(fn: Morphism<V, V>): over_general_110<V, U>;
    (_fn: PH, target: U): over_general_101<U>;
    <$SEL extends "1">(): <V>(fn: Morphism<V, V>) => over_general_110<V, U>;
    <$SEL extends "01">(): (_fn: PH, target: U) => over_general_101<U>;
    <$SEL extends "11">(): <V>(fn: Morphism<V, V>, target: U) => over_general_111<U>;
    <V>(fn: Morphism<V, V>, target: U): over_general_111<U>;
};
type over_number_010<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): over_number_110<N, U>;
    (_lens: PH, target: U): over_number_011<N, U>;
    <$SEL extends "1">(): (lens: PseudoLens<N>) => over_number_110<N, U>;
    <$SEL extends "01">(): (_lens: PH, target: U) => over_number_011<N, U>;
    <$SEL extends "11">(): (lens: PseudoLens<N>, target: U) => over_number_111<U>;
    (lens: PseudoLens<N>, target: U): over_number_111<U>;
};
type over_string_010<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): over_string_110<K, U>;
    (_lens: PH, target: U): over_string_011<K, U>;
    <$SEL extends "1">(): (lens: PseudoLens<K>) => over_string_110<K, U>;
    <$SEL extends "01">(): (_lens: PH, target: U) => over_string_011<K, U>;
    <$SEL extends "11">(): (lens: PseudoLens<K>, target: U) => over_string_111<K, U>;
    (lens: PseudoLens<K>, target: U): over_string_111<K, U>;
};
type over_manual_010<T> = {
    <U>(lens: ManualLens<T, U>): over_manual_110<T, U>;
    <U>(_lens: PH, target: U): over_manual_011<T, U>;
    <$SEL extends "1">(): <U>(lens: ManualLens<T, U>) => over_manual_110<T, U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => over_manual_011<T, U>;
    <$SEL extends "11">(): <U>(lens: ManualLens<T, U>, target: U) => over_manual_111<U>;
    <U>(lens: ManualLens<T, U>, target: U): over_manual_111<U>;
};
type over_general_010<V> = {
    <U>(lens: PseudoLens<any> | ManualLens<any, U>): over_general_110<V, U>;
    <U>(_lens: PH, target: U): over_general_011<V, U>;
    <$SEL extends "1">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>) => over_general_110<V, U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => over_general_011<V, U>;
    <$SEL extends "11">(): <U>(lens: PseudoLens<any> | ManualLens<any, U>, target: U) => over_general_111<U>;
    <U>(lens: PseudoLens<any> | ManualLens<any, U>, target: U): over_general_111<U>;
};
type over_number_110<N extends number, U extends {
        [index: number]: any;
    }> = {
    (target: U): over_number_111<U>;
};
type over_string_110<K extends string, U extends Record<K, any>> = {
    (target: U): over_string_111<K, U>;
};
type over_manual_110<T, U> = {
    (target: U): over_manual_111<U>;
};
type over_general_110<V, U> = {
    (target: U): over_general_111<U>;
};
type over_number_101<N extends number, U extends {
        [index: number]: any;
    }> = {
    (fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_111<U>;
};
type over_string_101<K extends string, U extends Record<K, any>> = {
    (fn: Morphism<U[K], U[K]>): over_string_111<K, U>;
};
type over_manual_101<T, U> = {
    (fn: Morphism<T, T>): over_manual_111<U>;
};
type over_general_101<U> = {
    <V>(fn: Morphism<V, V>): over_general_111<U>;
};
type over_number_011<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): over_number_111<U>;
};
type over_string_011<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): over_string_111<K, U>;
};
type over_manual_011<T, U> = {
    (lens: ManualLens<T, U>): over_manual_111<U>;
};
type over_general_011<V, U> = {
    (lens: PseudoLens<any> | ManualLens<any, U>): over_general_111<U>;
};
type over_number_111<U extends {
        [index: number]: any;
    }> = U;
type over_string_111<K extends string, U extends Record<K, any>> = U;
type over_manual_111<U> = U;
type over_general_111<U> = U;
export = over;

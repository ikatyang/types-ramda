import * as dts from 'dts-element';
import { max_curry_level } from './$curried-functions';
import { create_n_ary_declarations } from './utils/create-n-ary-declarations';

export default create_n_ary_declarations(
  0,
  max_curry_level - 1,
  args => `
    function $${args.curry_level}arity<${[
    'N extends string',
    'V extends Record<N, Function>',
    ...args.generics,
  ].join(',')}>(
      arity: ${args.curry_level},
      method: N
    ): CurriedFunction${args.curry_level + 1}<${[
    ...args.types,
    'V',
    args.return_type,
  ].join(',')}>;
  `,
  args => `
    import {${args.curry_levels
      .map(i => `CurriedFunction${i + 1}`)
      .join(',')}} from './$curried-functions';
    import {Property, Variadic} from './$types';
    function $variadic<N extends string, ${args.return_type}>(
      arity: number,
      method: N
    ): Variadic<${args.return_type}>;
  `,
);

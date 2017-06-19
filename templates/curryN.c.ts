import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';
import {create_n_ary_declarations} from './utils/create-n-ary-declarations';

export default create_n_ary_declarations(
  0,
  max_curry_level,
  args => `
    function $${args.curry_level}ary<${args.generics.join(',')}>(
      n: ${args.curry_level},
      fn: (${[...args.parameters, '...args: any[]'].join(',')}) => ${args.return_type}
    ): CurriedFunction${args.curry_level}<${args.generics.join(',')}>;
  `,
  args => `
    import {${args.curry_levels.map(i => `CurriedFunction${i}`).join(',')}} from './$curried-functions';
    import {Variadic} from './$types';
    function $variadic<${args.return_type}>(
      n: number,
      fn: Variadic<${args.return_type}>
    ): Variadic<${args.return_type}>;
  `,
);

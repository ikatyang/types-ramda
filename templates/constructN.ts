import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';

const generic_return = 'R';
const generics = [...new Array(max_curry_level)].map((_, index) => `T${index + 1}`);
const parameters = [...new Array(max_curry_level)].map((_, index) => `v${index + 1}`);

const declarations = [];
for (let i = 0; i <= max_curry_level; i++) {
  const current_generics = [...generics.slice(0, i), generic_return];
  const current_parameters = parameters.slice(0, i).map((parameter, index) => `${parameter}: ${generics[index]}`);
  declarations.push(`
    function $<${current_generics.join(',')}>(
      n: ${i},
      constructor: new (${[...current_parameters, '...args: any[]'].join(',')}) => ${generic_return}
    ): (${current_parameters.join(',')}) => ${generic_return};
  `);
}

export default dts.parse(`
  import {Constructor, Variadic} from './$types';
  declare const constructN: typeof $;
  ${declarations.join('\n')}
  function $<${generic_return}>(n: number, constructor: Constructor<${generic_return}>): Variadic<${generic_return}>;
`).members;

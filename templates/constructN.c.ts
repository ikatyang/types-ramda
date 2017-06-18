import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';

const generic_return = 'R';
const generics = [...new Array(max_curry_level)].map((_, index) => `T${index + 1}`);
const parameters = [...new Array(max_curry_level)].map((_, index) => `v${index + 1}`);

const import_curried_functions = [];
const declarations = [];
for (let i = 0; i <= max_curry_level; i++) {
  const current_generics = [...generics.slice(0, i), generic_return];
  const current_parameters = parameters.slice(0, i).map((parameter, index) => `${parameter}: ${generics[index]}`);
  const curried_function_name = `CurriedFunction${i}`;
  declarations.push(`
    function $${i}ary<${current_generics.join(',')}>(
      n: ${i},
      constructor: new (${[...current_parameters, '...args: any[]'].join(',')}) => ${generic_return}
    ): ${curried_function_name}<${current_generics.join(',')}>;
  `);
  import_curried_functions.push(curried_function_name);
}

export default dts.parse(`
  import {${import_curried_functions.join(',')}} from './$curried-functions';
  import {Constructor, Variadic} from './$types';
  ${declarations.join('\n')}
  function $variadic<${generic_return}>(n: number, constructor: Constructor<${generic_return}>): Variadic<${generic_return}>;
`).members;

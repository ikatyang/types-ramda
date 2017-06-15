import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';

const generic_return = 'R';
const generics = [...new Array(max_curry_level)].map((_, index) => `T${index + 1}`);
const parameters = [...new Array(max_curry_level)].map((_, index) => `v${index + 1}`);

const elements: string[] = [];
for (let i = 0; i <= max_curry_level; i++) {
  const current_generics = [...generics.slice(0, i), generic_return];
  const current_parameters = parameters.slice(0, i).map((parameter, index) => `${parameter}: ${generics[index]}`);
  elements.push(`
    function $${i}ary<${current_generics.join(',')}>(
      n: ${i},
      fn: (${[...current_parameters, '...args: any[]'].join(',')}) => ${generic_return}
    ): (${current_parameters.join(',')}) => ${generic_return};
  `);
}
elements.push(`function $variadic<${generic_return}>(n: number, fn: Variadic<${generic_return}>): Variadic<${generic_return}>`);
elements.unshift(`import {Variadic} from './$types';`);
export default dts.parse(elements.join('\n')).members;

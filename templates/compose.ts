import * as dts from 'dts-element';
import {max_curry_level} from './$curried-functions';

const return_generics = [...new Array(max_curry_level)].map((_, index) => `R${index + 1}`);
const parameter_generics = [...new Array(max_curry_level)].map((_, index) => `V${index + 1}`);
const function_names = [...new Array(max_curry_level)].map((_, index) => `fn${index + 1}`);
const parameter_names = [...new Array(max_curry_level)].map((_, index) => `v${index + 1}`);

const declarations = ['declare const compose: typeof $;'];
for (let fn_length = 1; fn_length <= max_curry_level; fn_length++) {
  for (let param_length = 1; param_length <= max_curry_level; param_length++) {
    const current_return_generics = return_generics.slice(0, fn_length);
    const reversed_current_return_generics = current_return_generics.slice().reverse();

    const reversed_current_function_names = function_names.slice(0, fn_length).reverse();
    const current_parameter_generics = parameter_generics.slice(0, param_length);
    const current_parameter_names = parameter_names.slice(0, param_length);

    const entry_parameters = current_parameter_names.map((parameter_name, param_index) => `
      ${parameter_name}: ${current_parameter_generics[param_index]}
    `).join(',');

    declarations.push(`
      declare function $<${[...current_parameter_generics, ...current_return_generics].join(',')}>(
        ${current_return_generics.map((current_return_generic, index) => {
          const function_name = reversed_current_function_names[index];
          const return_generic = reversed_current_return_generics[index];
          return (index === current_return_generics.length - 1)
            ? `${function_name}: (${entry_parameters}) => ${return_generic}`
            : `${function_name}: (v: ${reversed_current_return_generics[index + 1]}) => ${return_generic}`;
        }).join(',')}
      ): (${entry_parameters}) => ${current_return_generics[current_return_generics.length - 1]};
    `);
  }
}

export default dts.parse(declarations.join('\n')).members;

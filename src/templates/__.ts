import * as dts from 'dts-element';
import {placeholder_name, placeholder_name_abbr} from '../constants';
import {bind_jsdoc} from '../utils/bind-jsdoc';

// https://github.com/Microsoft/TypeScript/issues/15383#issuecomment-297197554
const variable_placeholder = dts.create_variable_declaration({
  const: true,
  name: '__',
  type: dts.create_general_type({
    name: placeholder_name,
  }),
});

export default bind_jsdoc(module, [
  variable_placeholder,
  ...dts.parse(`
    interface ${placeholder_name} {
      "@@functional/placeholder": true;
    }
    type ${placeholder_name_abbr} = ${placeholder_name};
  `).members,
]);

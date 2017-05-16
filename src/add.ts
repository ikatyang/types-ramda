import * as dts from 'dts-element';
import {create_curried_declarations} from './utils/create-curried-declarations';

export default create_curried_declarations(module, new dts.FunctionType({
  parameters: [
    new dts.Parameter({name: 'a', type: dts.number_type}),
    new dts.Parameter({name: 'b', type: dts.number_type}),
  ],
  return: dts.number_type,
}));

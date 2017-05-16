import * as dts from 'dts-element';
import {create_curried_declarations} from './utils/create-curried-declarations';

export default create_curried_declarations(module, new dts.FunctionType({
  parameters: [
    new dts.Parameter({
      name: 'pattern',
      type: new dts.UnionType({
        types: [
          dts.string_type,
          new dts.BasicType({name: 'RegExp'}),
        ],
      }),
    }),
    new dts.Parameter({name: 'replacement', type: dts.string_type}),
    new dts.Parameter({name: 'str', type: dts.string_type}),
  ],
  return: dts.string_type,
}));

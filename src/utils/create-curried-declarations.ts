import * as dts from 'dts-element';
import * as path from 'path';
import {placeholder} from '../__';
import {load_markdown} from './load-markdown';

export const create_curried_declarations = (the_module: NodeModule, function_type: dts.FunctionType) => {
  const module_name = path.basename(the_module.filename, '.ts');
  const type_declarations = dts.create_curried_function_types({
    name: module_name,
    type: function_type,
    placeholder,
    selectable: true,
  });
  const variable_declaration = new dts.VariableDeclaration({
    name: module_name,
    kind: dts.VariableKind.CONST,
    jsdoc: load_markdown(the_module),
    type: new dts.TypedType({owned: type_declarations[0]}),
  });
  return [variable_declaration, ...type_declarations];
};

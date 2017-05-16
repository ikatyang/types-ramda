import * as dts from 'dts-element';
import {load_markdown} from './utils/load-markdown';

const interface_declaration_placeholder = new dts.InterfaceDeclaration({
  name: 'Placeholder',
  members: [
    new dts.ObjectMember({
      owned: new dts.VariableDeclaration({
        name: '@@functional/placeholder',
        type: new dts.LiteralType({value: true}),
      }),
    }),
  ],
});

const interface_type_placeholder = new dts.InterfaceType({
  owned: interface_declaration_placeholder,
});

const variable_declaration_Placeholder = new dts.VariableDeclaration({
  name: '__',
  kind: dts.VariableKind.CONST,
  type: interface_type_placeholder,
  jsdoc: load_markdown(module),
});

const type_declaration_placeholder_abbr = new dts.TypeDeclaration({
  name: 'PH',
  type: interface_type_placeholder,
});

export default [
  variable_declaration_Placeholder,
  interface_declaration_placeholder,
  type_declaration_placeholder_abbr,
];

export const placeholder = new dts.TypedType({owned: type_declaration_placeholder_abbr});

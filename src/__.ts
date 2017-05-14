import * as dts from 'dts-element';
import {load_markdown} from './utils/load-markdown';

const type_declaration_placeholder = new dts.TypeDeclaration({
  name: 'Placeholder',
  type: new dts.ObjectType({
    members: [
      new dts.ObjectMember({
        owned: new dts.VariableDeclaration({
          name: '@@functional/placeholder',
          type: new dts.LiteralType({value: true}),
        }),
      }),
    ],
  }),
});

const typed_type_placeholder = new dts.TypedType({
  owned: type_declaration_placeholder,
});

const variable_declaration_Placeholder = new dts.VariableDeclaration({
  name: '__',
  kind: dts.VariableKind.CONST,
  type: typed_type_placeholder,
  jsdoc: load_markdown(module),
});

const type_declaration_placeholder_abbr = new dts.TypeDeclaration({
  name: 'PH',
  type: typed_type_placeholder,
});

export default [
  variable_declaration_Placeholder,
  type_declaration_placeholder,
  type_declaration_placeholder_abbr,
];

export const placeholder = new dts.TypedType({owned: type_declaration_placeholder_abbr});

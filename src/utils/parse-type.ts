import * as dts from 'dts-element';

export const parse_type = (type_string: string) =>
  (dts.parse(`type X = ${type_string};`).members[0] as dts.ITypeDeclaration).type as dts.IFunctionType;

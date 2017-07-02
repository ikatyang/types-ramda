import * as dts from 'dts-element';
import * as path from 'path';
import {bind_jsdoc} from './bind-jsdoc';
import {create_curried_types} from './create-curried-types';
import {create_various_curried_types} from './create-curried-various-types';
import {is_function_type, is_object_member, is_object_type} from './is-element';
import {sort_signatures} from './sort-signatures';

export const create_curried_declarations = (
    filename: string,
    type: dts.IFunctionType | {[kind: string]: dts.IFunctionType},
    selectable?: boolean,
    placeholder?: boolean,
    late_inference?: boolean,
    ) => {
  const name = path.basename(filename).replace(/(\.[a-z])?\.ts$/, '');
  const members = is_function_type(type)
    ? create_curried_types(name, type, selectable, placeholder, late_inference)
    : create_various_curried_types(name, type, selectable, placeholder, late_inference);
  const variable_declaration = dts.create_variable_declaration({
    name,
    const: true,
    type: dts.create_general_type({
      name: members[0].name,
    }),
  });
  bind_jsdoc(filename, variable_declaration);
  const declarations = [
    variable_declaration,
    ...members.map(member => {
      const member_type = member.type!;
      if (is_object_type(member_type) && member_type.members!.every(is_object_member)) {
        member_type.members = sort_signatures(member_type.members! as dts.IObjectMember[]);
      }
      return member;
    }),
  ];
  return declarations;
};

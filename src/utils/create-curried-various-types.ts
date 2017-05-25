import * as dts from 'dts-element';
import {isEqual} from 'lodash';
import {create_curried_types} from './create-curried-types';
import {create_masks} from './create-masks';
import {create_selectable_signatures} from './create-selectable-signatures';

const is_object_type = (element: any): element is dts.IObjectType =>
  (element.kind === dts.ElementKind.ObjectType);
const is_object_member = (element: any): element is dts.IObjectMember =>
  (element.kind === dts.ElementKind.ObjectMember);

export const create_various_curried_types = (name: string, types: {[kind: string]: dts.IFunctionType}) => {
  const keys = Object.keys(types);

  const parameters_length = keys.reduce<number>(
    (length, key) =>
      (length === -1 || length === types[key].parameters!.length)
        ? types[key].parameters!.length
        : (() => {
          throw new Error(`curried function types must be the same length`);
        })(),
    -1,
  );

  const curried_types_declarations = keys.reduce<dts.ITypeDeclaration[][]>(
    (reduced, key) => [...reduced, create_curried_types(`${name}_${key}`, types[key], false)],
    [],
  );

  const masks = create_masks(parameters_length);
  const reverse_masks = masks.reduce<{[mask: string]: number}>(
    (current_reverse_masks, mask, index) => ({...current_reverse_masks, [mask]: index}),
    {},
  );

  const types_parameters = keys.reduce<dts.IParameterDeclaration[][]>(
    (reduced, key) => [...reduced, types[key].parameters!],
    [],
  );

  const non_conflicts = [...new Array(parameters_length)].map(
    (_, index) => {
      const parameter = types_parameters[0][index];
      return types_parameters.slice(1).every(type_parameters => isEqual(type_parameters[index], parameter));
    },
  );

  const conflict_declarations: dts.ITypeDeclaration[][] = [];
  const conflict_declarations_selectables: dts.IObjectMember[][][] = [];

  const non_conflict_rebases: {[name: string]: string} = {};
  const non_conflict_declarations: dts.ITypeDeclaration[] = [];
  const non_conflict_declarations_selectables: dts.IObjectMember[][] = [];

  curried_types_declarations[0].forEach((curried_type_declaration, index) => {
    const mask = masks[index];
    if (mask.split('').every((bit, bit_index) => bit === '0' || non_conflicts[bit_index])) {
      const rebase_name = `${name}_${mask}`;
      non_conflict_declarations.push(dts.create_type_declaration({
        name: rebase_name,
        generics: curried_type_declaration.generics,
        type: dts.create_object_type({
          members: curried_types_declarations
            .map(curried_types_declaration =>
              (curried_types_declaration[index].type! as dts.IObjectType).members! as dts.IObjectMember[])
            .reduce((a, b) => [...a, ...b], []),
        }),
      }));
      non_conflict_declarations_selectables.push(
        curried_types_declarations
          .map((curried_types_declaration, type_index) =>
            create_selectable_signatures(
              (curried_types_declaration[index].type! as dts.IObjectType).members! as dts.IObjectMember[],
              keys[type_index],
            ),
          )
          .reduce((a, b) => [...a, ...b], []),
      );
      curried_types_declarations.map(x => x[index]).forEach(type_declaration => {
        non_conflict_rebases[type_declaration.name] = rebase_name;
      });
    } else {
      conflict_declarations.push(curried_types_declarations
        .map(curried_type_declarations => curried_type_declarations[index]),
      );
      conflict_declarations_selectables.push(curried_types_declarations
        .map((curried_type_declarations, type_index) => {
          const members = (curried_type_declarations[index].type as dts.IObjectType).members;
          return members !== undefined && members.every(is_object_member)
            ? create_selectable_signatures(
              (members as dts.IObjectMember[]) || [],
            )
            : [];
        }),
      );
    }
  });

  const mixed_type_declarations_selectables = [
    ...non_conflict_declarations_selectables,
    ...conflict_declarations_selectables.reduce((a, b) => [...a, ...b], []),
  ];
  const mixed_type_declarations = [
    ...non_conflict_declarations,
    ...conflict_declarations.reduce((a, b) => [...a, ...b], []),
  ].map((type_declaration, index) => {
    const object_type = type_declaration.type;
    if (!is_object_type(object_type) || object_type.members!.some(member => !is_object_member(member))) {
      return type_declaration;
    }
    const repeated_function_types: {[name: string]: dts.IFunctionType} = {};
    const members: dts.IObjectMember[] = [];
    object_type.members!.forEach((member: dts.IObjectMember, member_index, origin_members) => {
      const function_type = (member.owned as dts.IFunctionDeclaration).type!;
      const function_return_type = function_type.return! as dts.IGeneralType;
      if (function_return_type.name in non_conflict_rebases) {
        repeated_function_types[non_conflict_rebases[function_return_type.name]] = function_type;
      } else {
        members.push(
          member,
          ...(
            (origin_members.length > 1)
              ? [mixed_type_declarations_selectables[index][member_index]]
              : []
          ),
        );
      }
    });
    const non_conflict_merged_members = Object.keys(repeated_function_types).map(key => {
      const function_type = repeated_function_types[key];
      const function_return_type = function_type.return as dts.IGeneralType;
      return dts.create_object_member({
        owned: dts.create_function_declaration({
          name: undefined,
          type: dts.create_function_type({
            ...function_type,
            return: dts.create_general_type({
              name: key,
              generics: function_return_type.generics,
            }),
          }),
        }),
      });
    });
    members.push(
      ...non_conflict_merged_members,
      ...create_selectable_signatures(non_conflict_merged_members),
    );
    object_type.members = members;
    return type_declaration;
  });

  return mixed_type_declarations;
};

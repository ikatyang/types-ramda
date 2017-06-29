import * as dts from 'dts-element';
import {
  get_curried_function_selectable_group_name,
  get_curried_function_selectable_name,
  placeholder_name_abbr,
} from './constants';

export const create_selectable_signatures = (signatures: dts.IObjectMember[], group?: string) =>
  signatures.map(signature => {
    const function_type = (signature.owned as dts.IFunctionDeclaration).type as dts.IFunctionType;
    // istanbul ignore next
    const {parameters = []} = function_type;
    const selectable_type = parameters
      .map(parameter =>
        ((parameter.type! as dts.IGeneralType).name === placeholder_name_abbr)
          ? '0'
          : '1',
      )
      .join('');
    return dts.create_object_member({
      owned: dts.create_function_declaration({
        name: undefined,
        type: dts.create_function_type({
          parameters: [],
          generics: [
            dts.create_generic_declaration({
              name: get_curried_function_selectable_name(),
              extends: dts.create_literal_type({value: selectable_type}),
            }),
            ...(
              (group === undefined)
                ? []
                : [
                  dts.create_generic_declaration({
                    name: get_curried_function_selectable_group_name(),
                    extends: dts.create_literal_type({value: group}),
                  }),
                ]
            ),
          ],
          return: function_type,
        }),
      }),
    });
  });

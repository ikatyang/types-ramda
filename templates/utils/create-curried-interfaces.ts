import * as dts from 'dts-element';
import {
  get_curried_interface_generic_name,
  get_curried_interface_generic_return_name,
  get_curried_interface_name,
  get_curried_interface_parameter_name,
  get_curried_interface_parameter_placeholder_name,
  placeholder_name_abbr,
} from './constants';
import {create_selectable_signatures} from './create-selectable-signatures';
import {push_signatures} from './push-signatures';
import {sort_signatures} from './sort-signatures';

export const create_curried_interfaces = (
  max_curry_level: number,
  // istanbul ignore next
  selectable = true,
  // istanbul ignore next
  placeholder = true,
  ) => {
  const generics = [...new Array(max_curry_level)].map((_, index) =>
    dts.create_generic_declaration({
      name: get_curried_interface_generic_name(index),
    }),
  );

  const generic_return = dts.create_generic_declaration({
    name: get_curried_interface_generic_return_name(),
  });

  const parameters = generics.map((generic, index) =>
    dts.create_parameter_declaration({
      name: get_curried_interface_parameter_name(index),
      type: dts.create_general_type({name: generic.name}),
    }),
  );
  const placeholders = parameters.map((_, index) =>
    dts.create_parameter_declaration({
      name: get_curried_interface_parameter_placeholder_name(index),
      type: dts.create_general_type({name: placeholder_name_abbr}),
    }),
  );

  const interfaces = generics.map((_, index) =>
    dts.create_interface_declaration({
      name: get_curried_interface_name(index),
      generics: [...generics.slice(0, index + 1), generic_return],
      type: dts.create_object_type({
        members: [],
      }),
    }),
  );

  interfaces.forEach((the_interface, index) => {
    push_signatures(
      parameters.slice(0, index + 1),
      placeholder
        ? placeholders.slice(0, index + 1)
        : [],
      (used_parameters, return_parameters) => {
        the_interface.type!.members!.push(dts.create_object_member({
          owned: dts.create_function_declaration({
            name: undefined,
            type: dts.create_function_type({
              parameters: used_parameters,
              return: (return_parameters.length === 0)
                ? dts.create_general_type({name: generic_return.name})
                : dts.create_general_type({
                  name: interfaces[return_parameters.length - 1].name,
                  generics: [
                    ...return_parameters.map(parameter => parameter.type!),
                    dts.create_general_type({name: generic_return.name}),
                  ],
                }),
            }),
          }),
        }));
      },
    );
    const object_type = interfaces[index].type!;
    object_type.members = sort_signatures(object_type.members as dts.IObjectMember[]);

    if (selectable && object_type.members.length > 1) {
      object_type.members.splice(-1, 0, ...create_selectable_signatures(object_type.members as dts.IObjectMember[]));
    }
  });

  return interfaces;

};

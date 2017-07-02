import * as dts from 'dts-element';
import * as R from 'ramda';
import {match} from './match';

export const create_late_inference = (
  mask: string,
  generics: dts.IGenericDeclaration[],
  parameters_generics: dts.IGenericDeclaration[][],
  current_generics: dts.IGenericDeclaration[],
  target_function: dts.IFunctionType,
  ) => {
  const new_function_type = R.clone(target_function);

  const unused_parameter_indexes = mask.split('').map((x, index) => x === '1' ? -1 : index).filter(x => x !== -1);

  current_generics.forEach(generic => {
    const filtered_parameters_generics = parameters_generics.reduce<{[index: number]: dts.IGenericDeclaration[]}>(
      (current, parameter_generics, index) => {
        if (mask[index] === '1') {
          current[index] = parameter_generics;
        }
        return current;
      },
      {},
    );
    const last_parameter_index_of_generic = R.defaultTo(
      -1,
      R.pipe(
        R.keys,
        R.map(Number),
        R.reverse,
        R.find(key => filtered_parameters_generics[key].indexOf(generic) !== -1),
      )(filtered_parameters_generics),
    );
    replace_generic(new_function_type, generic, unused_parameter_indexes, last_parameter_index_of_generic, false);
  });

  const replace_map: Record<string, string> = {};
  target_function.generics!.forEach(generic => {
    const new_generic_name_0 = replace_generic(new_function_type, generic, unused_parameter_indexes, -1, true);
    if (new_generic_name_0 !== undefined) {
      replace_map[generic.name] = new_generic_name_0;
    }
  });

  R.keys(replace_map).forEach(generic_name => {
    const new_generic_name_0 = replace_map[generic_name];
    get_matches(new_function_type.generics, {
      kind: dts.ElementKind.GeneralType,
      name: generic_name,
    }).forEach(matched => {
      const parent = matched.path[0];
      const key = matched.keys[0];
      parent[key] = dts.create_general_type({
        name: new_generic_name_0,
      });
    });
  });

  return new_function_type;
};

function replace_generic(function_type: dts.IFunctionType, generic: dts.IGenericDeclaration, unused_parameter_indexes: number[], last_parameter_index_of_generic: number, is_inside: boolean) {
  const target = {
    kind: dts.ElementKind.GeneralType,
    name: generic.name,
  };
  const matches = get_matches(function_type.parameters!, target);
  const grouped_matches = matches.reduce<{[index: number]: typeof matches}>(
    (current_grouped_matches, matched) => {
      const parameter = matched.path[matched.path.length - 2];
      const index = unused_parameter_indexes[function_type.parameters!.indexOf(parameter)];
      if (!(index in current_grouped_matches)) {
        current_grouped_matches[index] = [];
      }
      current_grouped_matches[index].push(matched);
      return current_grouped_matches;
    },
    {},
  );

  const matched_parameter_indexes = Object.keys(grouped_matches).map(Number);
  if (is_inside && matched_parameter_indexes.length < 2) {
    return;
  }

  const new_generics = matched_parameter_indexes
    .filter(parameter_index => parameter_index > last_parameter_index_of_generic)
    .map((parameter_index, index) =>
      (index === 0)
        ? is_inside
          ? {
            ...R.clone(generic),
            name: `${generic.name}$${index + 1}`,
          }
          : dts.create_generic_declaration({
            name: `${generic.name}$${index + 1}`,
            extends: dts.create_general_type({
              name: generic.name,
            }),
            defalut: dts.create_general_type({
              name: generic.name,
            }),
          })
        : dts.create_generic_declaration({
          name: `${generic.name}$${index + 1}`,
          extends: dts.create_general_type({
            name: `${generic.name}$${index}`,
          }),
          defalut: dts.create_general_type({
            name: `${generic.name}$${index}`,
          }),
        }),
    );

  if (new_generics.length === 0) {
    // already pass lastest one
    return;
  }

  const return_matches = get_matches(function_type.return, target);

  get_matches(function_type.generics, target).forEach(matched => {
    const parent = matched.path[0];
    const key = matched.keys[0];
    parent[key] = dts.create_general_type({
      name: new_generics[0].name,
    });
  });

  if (is_inside) {

    const inside_generic_index = function_type.generics!.findIndex(current_generic => generic.name === current_generic.name);
    function_type.generics!.splice(inside_generic_index, 1, ...new_generics.slice(0, 1));
    function_type.generics!.push(...new_generics.slice(1));

  } else {
    function_type.generics!.push(...new_generics);
  }

  new_generics.forEach((new_generic, new_generic_index) => {
    const group_index = matched_parameter_indexes[new_generic_index];
    grouped_matches[group_index].forEach(matched => {
      const parent = matched.path[0];
      const key = matched.keys[0];
      parent[key] = dts.create_general_type({
        name: new_generic.name,
      });
    });
  });

  return_matches.forEach(matched => {
    const parent = matched.path[0];
    const key = matched.keys[0];
    parent[key] = dts.create_general_type({
      name: new_generics[new_generics.length - 1].name,
    });
  });

  return new_generics[0].name;
}

function get_matches(source: any, target: any) {
  const matches: {keys: string[], path: any[], value: any}[] = [];
  for_each_matched(source, target, (matched, keys, path) => {
    matches.push({
      keys,
      path,
      value: matched,
    });
  });
  return matches;
}

function for_each_matched(source: any, target: any, callback: (matched: any, keys: string[], path: any[]) => void, keys: string[] = [], path: any[] = []) {
  if (path.indexOf(source) !== -1) {
    return;
  }
  if (match(source, target)) {
    callback(source, keys, path);
  }
  if (source === undefined || source === null) {
    return;
  }
  Object.keys(source).forEach(key => for_each_matched(source[key], target, callback, [key, ...keys], [source, ...path]));
}

import * as dts from 'dts-element';
import * as R from 'ramda';
import {match} from './match';

// TODO: improve while generic is not used in return typec
// ● eqProps › R.eqProps('c')(o1)

//     expect(value).toMatchSnapshot()

//     Received value does not match stored snapshot 1.

//     - "(b: { a: number; b: number; c: number; d: number; }) => boolean"
//     + "<T$1 extends { a: number; b: number; c: number; d: number; } = { a: number; b: number; c
// : number; d: number; }>(b: T$1) => boolean"

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
  // TODO: index + 00101010 consider those used, offset
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
  // if (return_matches.length === 0) {
  //   console.log('return_matches.length === 0');
  //   if (new_generics.length === 1) {
  //     console.log('new_generics.length === 1');
  //     new_generics.pop();
  //   } else {
  //     console.log('new_generics.length > 1');
  //     new_generics[new_generics.length - 1].name = new_generics[new_generics.length - 2].name;
  //   }
  // }

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

// interface PH { joi123: any; }
// type Comparator<T, U> = (v: T) => U;
// type List<T> = ArrayLike<T>;

// declare function sort<T>(fn: Comparator<T, number>, list: List<T>): T[];
// // declare function sort<T$1, T$2 extends T$1>(fn: Comparator<T$1, number>, list: List<T$2>): T$2[];

// declare function sort<T>(_fn: PH, list: List<T>): (fn: Comparator<T, number>) => T[];
// declare function sort<T>(fn: Comparator<T, number>, list: List<T>): T[];
// declare function sort<T>(fn: Comparator<T, number>): (list: List<T>) => T[];

// declare function sort<T>(_fn: PH, list: List<T>): <U extends T>(fn: Comparator<U, number>) => T[];
// declare function sort<T, U extends T>(fn: Comparator<U, number>, list: List<T>): T[];
// declare function sort<U>(fn: Comparator<U, number>): <T extends U>(list: List<T>) => T[];

// declare function sort<T>(fn: Comparator<T, number>, list: List<T>): T[];
// declare function sort<T>(fn: Comparator<T, number>): <T$2 extends T>(list: List<T$2>) => T$2[];
// declare function sort<T>(_fn: PH, list: List<T>): <T$2 extends T>(fn: Comparator<T$2, number>) => T$2[];

// tslint:disable
/*
type sort_00 = {
  <T>(_fn: PH, list: List<T>): sort_01<T>;
  <T>(fn: Comparator<T, number>, list: List<T>): sort_11<T>;
  <T>(fn: Comparator<T, number>): sort_10<T>;
};
type sort_01<T$> = {
  <T extends T$>(fn: Comparator<T, number>): sort_11<T>;
};
type sort_10<T$> = {
  <T extends T$>(list: List<T>): sort_11<T>;
};
type sort_11<T> = T[];
*/

// prototype
// declare function x<T>(a: T, b: T, c: T): T;

// type x_000 = {
//   <T>(_a: PH, _b: PH, c: T): x_001<T>;
//   <T$1, T$2 extends T$1>(_a: PH, b: T$1, c: T$2): x_011<T$2>;
//   <T$1, T$2 extends T$1>(a: T$1, _b: PH, c: T$2): x_101<T$2>;
//   <T$1, T$2 extends T$1, T$3 extends T$2>(a: T$1, b: T$2, c: T$3): x_111<T$3>;
//   <T>(_a: PH, b: T): x_010<T>;
//   <T$1, T$2 extends T$1>(a: T$1, b: T$2): x_110<T$2>;
//   <T>(a: T): x_100<T>;
// };
// type x_100<T> = {
//   <T$1 extends T>(_b: PH, c: T$1): x_101<T$1>;
//   <T$1 extends T, T$2 extends T$1>(b: T$1, c: T$2): x_111<T$2>;
//   <T$1 extends T>(b: T$1): x_110<T$1>;
// };
// type x_010<T> = {
//   <T$1 extends T>(_a: PH, c: T$1): x_011<T$1>;
//   <T$1 extends T>(a: T, c: T$1): x_111<T$1>;
//   (a: T): x_110<T>;
// };
// type x_001<T> = {
//   (_a: PH, b: T): x_011<T>;
//   (a: T, b: T): x_111<T>;
//   (a: T): x_101<T>;
// };
// type x_110<T> = {
//   <T$1 extends T>(c: T$1): x_111<T$1>;
// };
// type x_011<T> = {
//   (a: T): x_111<T>;
// };
// type x_101<T> = {
//   (b: T): x_111<T>;
// };
// type x_111<T> = T;

// declare const p: PH;
// declare const x_: x_000;

// declare const aa: {a: any};
// declare const bb: {a: any, b: any};
// declare const cc: {a: any, b: any, c: any};

// const x111 = x_(aa, bb, cc);
// const x110_1 = x_(aa, bb)(cc);
// const x101_1 = x_(aa, p, cc)(bb);
// const x011_1 = x_(p, bb, cc)(aa);
// const x100_11 = x_(aa)(bb, cc);
// const x100_01_1 = x_(aa)(p, cc)(bb as typeof cc);
// const x100_1_1 = x_(aa)(bb)(cc);
// const x010_11 = x_(p, bb)(aa, cc);
// const x010_01_1 = x_(p, bb)(p, cc)(aa);
// const x010_1_1 = x_(p, bb)(aa)(cc);
// const x001_11 = x_(p, p, cc)(aa, bb);
// const x001_01_1 = x_(p, p, cc)(p, bb)(aa);
// const x001_1_1 = x_(p, p, cc)(aa)(bb);

// declare const abc: {
//   <T extends number = 1>(a: T): T;
// }
// declare const aas: {
//   <T>(fn: (v: T) => any): T;
// }

// abc(2);
// aas(abc);

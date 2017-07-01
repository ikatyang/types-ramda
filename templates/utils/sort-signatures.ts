import * as dts from 'dts-element';
import {placeholder_name_abbr} from './constants';

export const sort_signatures = (signatures: dts.IObjectMember[]) => {
  const normals: {value: dts.IObjectMember, index: number}[] = [];
  const selectables: dts.IObjectMember[] = [];
  signatures.forEach(signature => {
    const function_decalration = signature.owned as dts.IFunctionDeclaration;
    const function_type = function_decalration.type as dts.IFunctionType;
    // tslint:disable-next-line:strict-boolean-expressions
    if ((function_type.parameters || []).length === 0) {
      selectables.push(signature);
    } else {
      normals.push({value: signature, index: normals.length});
    }
  });
  const members = normals.slice().sort((normal1, normal2) => {
    const function_type_1 = (normal1.value.owned as dts.IFunctionDeclaration).type!;
    const function_type_2 = (normal2.value.owned as dts.IFunctionDeclaration).type!;
    const parameters_1 = function_type_1.parameters!;
    const parameters_2 = function_type_2.parameters!;
    return (parameters_1.length !== parameters_2.length)
      ? get_length_order(parameters_2.length) - get_length_order(parameters_1.length)
      // tslint:disable-next-line:strict-boolean-expressions
      : get_function_order(parameters_2) - get_function_order(parameters_1) || (normal1.index - normal2.index);
  }).map(normal => normal.value);
  return [
    ...members.slice(0, -1),
    ...selectables,
    ...members.slice(-1),
  ];

  function get_function_order(parameters: dts.IParameterDeclaration[]) {
    let point = 0;

    parameters.forEach((parameter, index) => {
      if (!is_placeholder(parameter)) {
        // tslint:disable-next-line:no-bitwise
        point += 1 << (parameters.length - index);
      }
    });

    return -point;
  }
  function is_placeholder(parameter: dts.IParameterDeclaration) {
    return ((parameter.type as dts.IGeneralType).name === placeholder_name_abbr);
  }
  function get_length_order(length: number) {
    return -length;
  }
};

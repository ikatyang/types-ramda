import * as dts from 'dts-element';
import {placeholder_name_abbr} from './constants';

export const sort_signatures = (signatures: dts.IObjectMember[]) => {
  const normals: dts.IObjectMember[] = [];
  const selectables: dts.IObjectMember[] = [];
  signatures.forEach(signature => {
    const function_decalration = signature.owned as dts.IFunctionDeclaration;
    const function_type = function_decalration.type as dts.IFunctionType;
    // tslint:disable-next-line:strict-boolean-expressions
    if ((function_type.parameters || []).length === 0) {
      selectables.push(signature);
    } else {
      normals.push(signature);
    }
  });
  normals.sort((member1, member2) => {
    const function_type_1 = (member1.owned as dts.IFunctionDeclaration).type!;
    const function_type_2 = (member2.owned as dts.IFunctionDeclaration).type!;
    const parameters_1 = function_type_1.parameters!;
    const parameters_2 = function_type_2.parameters!;
    return (parameters_1.length !== parameters_2.length)
      ? get_length_order(parameters_2.length) - get_length_order(parameters_1.length)
      : parameters_2.findIndex(is_placeholder) - parameters_1.findIndex(is_placeholder);
  });
  return [
    ...normals.slice(0, -1),
    ...selectables,
    ...normals.slice(-1),
  ];

  function is_placeholder(parameter: dts.IParameterDeclaration) {
    return ((parameter.type as dts.IGeneralType).name === placeholder_name_abbr);
  }
  function get_length_order(length: number) {
    return (length === 1)
      ? -1
      : length;
  }
};

import * as dts from 'dts-element';
import * as R from 'ramda';
import {ensure, is_function_declaration, is_placeholder} from './is-element';

export const sort_signatures = (signatures: dts.IObjectMember[]) => {
  interface SignatureData {
    signature: dts.IObjectMember;
    index: number;
  }

  const [selectables, normals] = R.partition(
    (x: SignatureData) => (get_parameters(x.signature).length === 0),
    signatures.map((signature, index) => ({signature, index})));

  const sorted_normals = R.sort(
    (data1: SignatureData, data2: SignatureData) =>
      get_signatures_order(data1.signature, data2.signature) || (data1.index - data2.index),
  )(normals);

  return [
    ...sorted_normals.slice(0, -1),
    ...selectables,
    ...sorted_normals.slice(-1),
  ].map(x => x.signature);
};

function get_signatures_order(signature1: dts.IObjectMember, signature2: dts.IObjectMember) {
  const [parameters1, parameters2] = [signature1, signature2].map(get_parameters);
  return (parameters1.length !== parameters2.length)
    ? get_length_point(parameters2) - get_length_point(parameters1)
    : get_placeholder_point(parameters2) - get_placeholder_point(parameters1);
}

function get_parameters(signature: dts.IObjectMember) {
  const function_declaration = ensure(signature.owned, is_function_declaration);
  return function_declaration.type!.parameters!;
}

/**
 * ascending order
 */
function get_length_point(parameters: dts.IParameterDeclaration[]) {
  return -parameters.length;
}

/**
 * placeholder should be as front as possible
 */
function get_placeholder_point(parameters: dts.IParameterDeclaration[]) {
  const get_inverse_index = R.subtract(parameters.length);
  const point = parameters.reduce(
    (current_point, parameter, index) =>
      is_placeholder(parameter.type)
        ? current_point
        : current_point + 1 << get_inverse_index(index), // tslint:disable-line:no-bitwise
    0,
  );
  return R.negate(point);
}

import * as dts from 'dts-element';
import * as _ from '../constants';
import {create_curried_declarations} from '../utils/create-curried-declarations';
import {parse_type} from '../utils/parse-type';

const generic_return = _.get_curried_interface_generic_return_name();
const generics = [...new Array(_.max_curry_level)].map((_0, index) => _.get_curried_interface_generic_name(index));
const parameters = generics.map((_0, index) => _.get_curried_interface_parameter_name(index));

const flip = (array: any[]) => {
  [array[0], array[1]] = [array[1], array[0]];
  return array;
};

const types: {[length_of_parameters: number]: dts.IFunctionType} = {};
for (let i = 2; i <= _.max_curry_level; i++) {
  const current_generics = [...generics.slice(0, i), generic_return].join(', ');
  const current_parameters = parameters.slice(0, i)
    .map((parameter, index) =>
      `${parameter}: ${generics[index]}`).join(', ');
  types[i] = parse_type(
    `<${current_generics}>(fn: (${current_parameters}) => ${generic_return})
      => ${_.CurriedFunctionN(i, ...flip(generics.slice(0, i)), generic_return)}`,
  );
}

export default create_curried_declarations(
  module,
  types,
);

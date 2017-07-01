import * as dts from 'dts-element';
import * as R from 'ramda';
import {placeholder_name_abbr} from './constants';
import {is_placeholder} from './is-element';

export const push_signatures = (
    rest_parameters: dts.IParameterDeclaration[],
    rest_placeholders: dts.IParameterDeclaration[],
    fn: (
      used_parameters: dts.IParameterDeclaration[],
      return_parameters: dts.IParameterDeclaration[],
    ) => void,
    used_parameters: dts.IParameterDeclaration[] = [],
    return_parameters = rest_parameters) => {
  if (rest_parameters.length > 0) {
    const next_rest_parameters = rest_parameters.slice(1);
    const next_rest_placeholders = rest_placeholders.slice(1);
    push_signatures(
      next_rest_parameters,
      next_rest_placeholders,
      fn,
      [...used_parameters, rest_parameters[0]],
      return_parameters.filter(parameter => parameter !== rest_parameters[0]),
    );
    if (rest_placeholders.length > 0) {
      push_signatures(
        next_rest_parameters,
        next_rest_placeholders,
        fn,
        [...used_parameters, rest_placeholders[0]],
        return_parameters,
      );
    }
  }
  if (used_parameters.length > 0 && !is_placeholder(R.last(used_parameters)!.type)) {
    fn(used_parameters, return_parameters);
  }
};

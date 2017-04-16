import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createLogicTypings = (name: string, parameterCount: number) => createCurriedFunctions({
  name,
  arguments: (parameterCount === 1)
    ? [[[], configs.vValue, 'any']]
    : [[['T'], 'a', 'T'], [['U'], 'b', 'U']],
  returnType: (parameterCount === 1)
    ? 'boolean'
    : 'T | U',
});

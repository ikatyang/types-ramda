import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createMathTypings = (name: string, parameterCount: number) => createCurriedFunctions({
  name,
  arguments: (parameterCount === 1)
    ? [[[], configs.vValue, 'number']]
    : [[[], 'a', 'number'], [[], 'b', 'number']],
  returnType: 'number',
});

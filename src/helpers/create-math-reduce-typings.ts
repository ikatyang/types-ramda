import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createMathReduceTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[[], configs.vValues, 'number[]']],
  returnType: 'number',
});

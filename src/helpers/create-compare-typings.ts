import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createCompareTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[[`T extends ${configs.tOrdered}`], 'a', 'T'], [[`T extends ${configs.tOrdered}`], 'b', 'T']],
  returnType: 'boolean',
});

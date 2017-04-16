import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createComparatorTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], 'fn', `${configs.tMorphism}<T, ${configs.tOrdered}>`], [['T'], 'a', 'T'], [['T'], 'b', 'T']],
  returnType: '0 | 1 | -1',
});

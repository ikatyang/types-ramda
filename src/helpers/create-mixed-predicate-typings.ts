import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createMixedPredicateTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], `${configs.vPreficates}`, `${configs.tPredicate}<T>[]`]],
  returnType: `${configs.tCurriedFunction(1)}<T, boolean>`,
});

import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createListPendTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], configs.vValue, 'T'], [['U'], configs.vList, `${configs.tList}<U>`]],
  returnType: `(T | U)[]`,
});

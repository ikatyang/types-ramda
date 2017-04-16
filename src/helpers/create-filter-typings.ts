import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createFilterTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vList, `${configs.tList}<T>`]],
  returnType: 'T[]',
}, {
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vDictionary, `${configs.tDictionary}<T>`]],
  returnType: `${configs.tDictionary}<T>`,
}, {
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vFilterable, `${configs.tFilterable}<T>`]],
  returnType: `${configs.tFilterable}<T>`,
});

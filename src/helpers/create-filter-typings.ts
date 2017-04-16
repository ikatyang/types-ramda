import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createFilterSelfTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vFilterable, `${configs.tFilterable}<T>`]],
  returnType: `${configs.tFilterable}<T>`,
});

export const createFilterListTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vList, `${configs.tList}<T>`]],
  returnType: 'T[]',
});

export const createFilterDictionaryTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vDictionary, `${configs.tDictionary}<T>`]],
  returnType: `${configs.tDictionary}<T>`,
});

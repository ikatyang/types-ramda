import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createListBooleanTypings = (name: string, tAble: string, vAble: string) => createCurriedFunctions({
  name,
  typeAlias: 'List',
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vList, `${configs.tList}<T>`]],
  returnType: 'boolean',
}, {
  name,
  typeAlias: 'Self',
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], vAble, `${tAble}<T>`]],
  returnType: 'boolean',
});

import { createCurriedFunctions } from './create-curried-functions';
import * as configs from '../configs';

export const createListBooleanTypings = (name: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], configs.vList, `${configs.tList}<T>`]],
  returnType: 'boolean',
});

export const createListBooleanSelfTypings = (name: string, tAble: string, vAble: string) => createCurriedFunctions({
  name,
  arguments: [[['T'], configs.vPreficate, `${configs.tPredicate}<T>`], [['T'], vAble, `${tAble}<T>`]],
  returnType: 'boolean',
});
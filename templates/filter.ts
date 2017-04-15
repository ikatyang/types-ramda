import * as S from '../src/index';

const typingsForList = S.createCurriedFunctions({
  name: 'function filter',
  arguments: [[['T'], S.vPreficate, `${S.tPredicate}<T>`], [['T'], S.vList, `${S.tList}<T>`]],
  returnType: 'T[]',
});

const typingsForDictionary = S.createCurriedFunctions({
  name: 'function filter',
  arguments: [[['T'], S.vPreficate, `${S.tPredicate}<T>`], [['T'], S.vDictionary, `${S.tDictionary}<T>`]],
  returnType: `${S.tDictionary}<T>`,
});

const typingsForFilterable = S.createCurriedFunctions({
  name: 'function filter',
  arguments: [[['T'], S.vPreficate, `${S.tPredicate}<T>`], [['T'], S.vFilterable, `${S.tFilterable}<T>`]],
  returnType: `${S.tFilterable}<T>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForList).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForDictionary))
  .append(new S.Group().append(...typingsForFilterable)));

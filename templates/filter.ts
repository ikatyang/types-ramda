import * as S from '../src/index';

const typingsForList = S.createCurriedTypings({
  name: 'function filter',
  generics: ['T'],
  args: [[S.vPreficate, `${S.tPredicate}<T>`], [S.vList, `${S.tList}<T>`]],
  returnType: 'T[]',
});

const typingsForDictionary = S.createCurriedTypings({
  name: 'function filter',
  generics: ['T'],
  args: [[S.vPreficate, `${S.tPredicate}<T>`], [S.vDictionary, `${S.tDictionary}<T>`]],
  returnType: `${S.tDictionary}<T>`,
});

const typingsForFilterable = S.createCurriedTypings({
  name: 'function filter',
  generics: ['T'],
  args: [[S.vPreficate, `${S.tPredicate}<T>`], [S.vFilterable, `${S.tFilterable}<T>`]],
  returnType: `${S.tFilterable}<T>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForList).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForDictionary))
  .append(new S.Group().append(...typingsForFilterable)));

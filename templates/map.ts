import * as S from '../src/index';

const typingsForList = S.createCurriedTypings({
  name: 'function map',
  generics: ['T', 'U'],
  args: [[S.vMorphism, `${S.tMorphism}<T, U>`], [S.vList, `${S.tList}<T>`]],
  returnType: 'U[]',
});

const typingsForDictionary = S.createCurriedTypings({
  name: 'function map',
  generics: ['T', 'U'],
  args: [[S.vMorphism, `${S.tMorphism}<T, U>`], [S.vDictionary, `${S.tDictionary}<T>`]],
  returnType: `${S.tDictionary}<U>`,
});

const typingsForMappable = S.createCurriedTypings({
  name: 'function map',
  generics: ['T', 'U'],
  args: [[S.vMorphism, `${S.tMorphism}<T, U>`], [S.vMappable, `${S.tMappable}<T>`]],
  returnType: `${S.tMappable}<U>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForList).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForDictionary))
  .append(new S.Group().append(...typingsForMappable)));

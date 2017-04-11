import * as S from '../src/index';

const typingsForList = S.createCurriedTypings({
  name: 'function map',
  generics: ['T', 'U'],
  args: [['fn', `${S.tMorphism}<T, U>`], ['list', `${S.tList}<T>`]],
  returnType: 'U[]',
});

const typingsForDictionary = S.createCurriedTypings({
  name: 'function map',
  generics: ['T', 'U'],
  args: [['fn', `${S.tMorphism}<T, U>`], ['dictionary', `${S.tDictionary}<T>`]],
  returnType: `${S.tDictionary}<U>`,
});

const typingsForFunctor = S.createCurriedTypings({
  name: 'function map',
  generics: ['T', 'U'],
  args: [['fn', `${S.tMorphism}<T, U>`], ['functor', `${S.tFunctor}<T>`]],
  returnType: `${S.tFunctor}<U>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForList).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForDictionary))
  .append(new S.Group().append(...typingsForFunctor)));
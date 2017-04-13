import * as S from '../src/index';

const typingsForString = S.createCurriedTypings({
  name: 'function concat',
  generics: [],
  args: [[`${S.vString}1`, 'string'], [`${S.vString}2`, 'string']],
  returnType: 'string',
});

const typingsForList = S.createCurriedTypings({
  name: 'function concat',
  generics: ['T', 'U'],
  args: [[`${S.vList}1`, `T[]`], [`${S.vList}2`, `U[]`]],
  returnType: '(T | U)[]',
});

const typingsForConcatable = S.createCurriedTypings({
  name: 'function concat',
  generics: ['T'],
  args: [[S.vConcatable, `${S.tConcatable}<T>`], [S.vValue, 'T']],
  returnType: `${S.tConcatable}<T>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForString).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForList))
  .append(new S.Group().append(...typingsForConcatable)));

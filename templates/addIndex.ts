import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function addIndex',
  generics: ['T', 'U'],
  args: [['mapper', `${S.tMapper}<T, U>`], ['transformer', `${S.tIndexedTransformer}<T, U>`], ['list', `${S.tList}<T>`]],
  returnType: 'U[]',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function addIndex',
  generics: ['T', 'U'],
  args: [['mapper', 'Mapper<T, U>'], ['transformer', 'IndexedTransformer<T, U>'], ['list', 'List<T>']],
  returnType: 'U[]',
});

export default new S.Declaration([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

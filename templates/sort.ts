import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function sort',
  generics: ['T'],
  args: [[S.vComparator, `${S.tComparator}<T>`], [S.vList, `${S.tList}<T>`]],
  returnType: 'T[]',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

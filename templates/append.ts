import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function append',
  generics: ['T', 'U'],
  args: [[S.vValue, 'T'], [S.vList, `${S.tList}<U>`]],
  returnType: `(T | U)[]`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

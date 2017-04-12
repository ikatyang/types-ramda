import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function adjust',
  generics: ['T', 'U'],
  args: [[S.vMorphism, `${S.tMorphism}<T, U>`], ['index', 'number'], [S.vList, `${S.tList}<T>`]],
  returnType: `(T | U)[]`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

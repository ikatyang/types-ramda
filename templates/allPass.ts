import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function allPass',
  generics: ['T'],
  args: [[`${S.vPreficate}s`, `${S.tPredicate}<T>[]`]],
  returnType: `${S.tCurriedFunction(1)}<T, boolean>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

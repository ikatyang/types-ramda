import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function all',
  generics: ['T'],
  args: [['fn', `${S.tPredicate}<T>`], ['list', `${S.tList}<T>`]],
  returnType: 'boolean',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function ascend',
  generics: ['T'],
  args: [['fn', `${S.tMorphism}<T, ${S.tOrdered}>`], ['a', 'T'], ['b', 'T']],
  returnType: '0 | 1 | -1',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function prop',
  generics: ['T = any'],
  args: [[S.vProperty, S.tProperty], [S.vObject, S.tOjbect]],
  returnType: 'T',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

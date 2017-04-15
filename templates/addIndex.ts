import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function addIndex',
  arguments: [[['T', 'U'], S.vListMapper, `${S.tListMapper}<T, U>`]],
  returnType: `${S.tCurriedFunction(2)}<${S.tIndexedMorphism}<T, U>, ${S.tList}<T>, U[]>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

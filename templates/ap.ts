import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function ap',
  arguments: [[['T', 'U'], `${S.vMorphisms}`, `${S.tList}<${S.tMorphism}<T, U>>`], [['T'], S.vList, `${S.tList}<T>`]],
  returnType: 'U[]',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

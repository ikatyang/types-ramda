import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function adjust',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [[], S.vIndex, S.tIndex], [['T'], S.vList, `${S.tList}<T>`]],
  returnType: '(T | U)[]',
});

export default new S.Definition([
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

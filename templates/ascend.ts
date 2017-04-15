import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function ascend',
  arguments: [[['T'], 'fn', `${S.tMorphism}<T, ${S.tOrdered}>`], [['T'], 'a', 'T'], [['T'], 'b', 'T']],
  returnType: '0 | 1 | -1',
});

export default new S.Definition([
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

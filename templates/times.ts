import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'times',
  arguments: [[['R'], S.vMorphism, `${S.tMorphism}<number, R>`], [[], 'n', 'number']],
  returnType: 'R[]',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

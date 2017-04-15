import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function subtract',
  arguments: [[[], 'a', 'number'], [[], 'b', 'number']],
  returnType: 'number',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

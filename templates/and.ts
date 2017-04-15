import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function and',
  arguments: [[[], 'a', 'boolean'], [[], 'b', 'boolean']],
  returnType: 'boolean',
});

export default new S.Definition([], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

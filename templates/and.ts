import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function and',
  generics: [],
  args: [['a', 'boolean'], ['b', 'boolean']],
  returnType: 'boolean',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

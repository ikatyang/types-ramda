import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function toUpper',
  generics: [],
  args: [[S.vString, 'string']],
  returnType: 'string',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));
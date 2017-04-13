import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function apply',
  generics: ['R'],
  args: [['fn', '(...args: any[]) => R'], [`${S.vValue}s`, `${S.tList}<any>`]],
  returnType: 'R',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

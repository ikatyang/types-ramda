import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'binary',
  arguments: [[['T', 'U', 'R'], 'fn', '(a: T, b: U, ...args: any[]) => R']],
  returnType: '(a: T, b: U) => R',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

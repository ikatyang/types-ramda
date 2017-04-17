import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'unary',
  arguments: [[['T', 'R'], 'fn', '(a: T, ...args: any[]) => R']],
  returnType: '(a: T) => R',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

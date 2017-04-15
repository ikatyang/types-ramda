import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function call',
  arguments: [[['R'], 'fn', '(...args: any[]) => R'], [[], `...${S.vValues}`, 'any[]']],
  returnType: 'R',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

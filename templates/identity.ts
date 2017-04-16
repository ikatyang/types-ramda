import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'identity',
  arguments: [[['T'], S.vValue, 'T']],
  returnType: 'T',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function both',
  arguments: [[['T'], 'a', `${S.tPredicate}<T>`], [['T'], 'b', `${S.tPredicate}<T>`]],
  returnType: `${S.tPredicate}<T>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

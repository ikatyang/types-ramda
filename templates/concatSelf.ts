import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function concatSelf',
  arguments: [[['T'], S.vConcatable, `${S.tConcatable}<T>`], [['T'], S.vValue, 'T']],
  returnType: `${S.tConcatable}<T>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module, 'Self'))));

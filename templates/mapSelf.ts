import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function mapSelf',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vMappable, `${S.tMappable}<T>`]],
  returnType: `${S.tMappable}<U>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module, 'Self'))));

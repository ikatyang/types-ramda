import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function mapDictionary',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vDictionary, `${S.tDictionary}<T>`]],
  returnType: `${S.tDictionary}<U>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module, 'Dictionary'))));

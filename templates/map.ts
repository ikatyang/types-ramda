import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'map',
  typeAlias: 'List',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vList, `${S.tList}<T>`]],
  returnType: 'U[]',
}, {
  name: 'map',
  typeAlias: 'Dictionary',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vDictionary, `${S.tDictionary}<T>`]],
  returnType: `${S.tDictionary}<U>`,
}, {
  name: 'map',
  typeAlias: 'Self',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vMappable, `${S.tMappable}<T>`]],
  returnType: `${S.tMappable}<U>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

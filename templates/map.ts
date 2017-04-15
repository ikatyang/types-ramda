import * as S from '../src/index';

const typingsForList = S.createCurriedFunctions({
  name: 'function map',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vList, `${S.tList}<T>`]],
  returnType: 'U[]',
});

const typingsForDictionary = S.createCurriedFunctions({
  name: 'function map',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vDictionary, `${S.tDictionary}<T>`]],
  returnType: `${S.tDictionary}<U>`,
});

const typingsForMappable = S.createCurriedFunctions({
  name: 'function map',
  arguments: [[['T', 'U'], S.vMorphism, `${S.tMorphism}<T, U>`], [['T'], S.vMappable, `${S.tMappable}<T>`]],
  returnType: `${S.tMappable}<U>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForList).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForDictionary))
  .append(new S.Group().append(...typingsForMappable)));

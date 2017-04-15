import * as S from '../src/index';

const typingsForString = S.createCurriedFunctions({
  name: 'function concat',
  arguments: [[[], `${S.vString}1`, 'string'], [[], `${S.vString}2`, 'string']],
  returnType: 'string',
});

const typingsForList = S.createCurriedFunctions({
  name: 'function concat',
  arguments: [[['T'], `${S.vArray}1`, `T[]`], [['U'], `${S.vArray}2`, `U[]`]],
  returnType: '(T | U)[]',
});

const typingsForConcatable = S.createCurriedFunctions({
  name: 'function concat',
  arguments: [[['T'], S.vConcatable, `${S.tConcatable}<T>`], [['T'], S.vValue, 'T']],
  returnType: `${S.tConcatable}<T>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForString).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForList))
  .append(new S.Group().append(...typingsForConcatable)));

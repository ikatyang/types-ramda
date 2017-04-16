import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'concat',
  arguments: [[['T'], `${S.vArray}1`, `T[]`], [['U'], `${S.vArray}2`, `U[]`]],
  returnType: '(T | U)[]',
}, {
  name: 'concat',
  arguments: [[[], `${S.vString}1`, 'string'], [[], `${S.vString}2`, 'string']],
  returnType: 'string',
}, {
  name: 'concat',
  arguments: [[['T'], S.vConcatable, `${S.tConcatable}<T>`], [['T'], S.vValue, 'T']],
  returnType: `${S.tConcatable}<T>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

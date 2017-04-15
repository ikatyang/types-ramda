import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function assocPath',
  generics: [`R extends ${S.tObject}`],
  arguments: [[[], `${S.vProperties}`, `${S.tProperty}[]`], [[], `${S.vValue}`, 'any'], [[], S.vObject, S.tObject]],
  returnType: 'R',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function assoc',
  generics: ['P extends string', 'V', `T extends ${S.tObject}`],
  args: [[S.vProperty, 'P'], [`${S.vValue}`, 'V'], [S.vObject, 'T']],
  returnType: 'T & { [K in P]: V }',
});

const typingsForProperty = S.createCurriedTypings({
  name: 'function assoc',
  generics: [`T extends ${S.tObject}`],
  args: [[S.vProperty, S.tProperty], [`${S.vValue}`, 'any'], [S.vObject, 'T']],
  returnType: 'T',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForProperty)));

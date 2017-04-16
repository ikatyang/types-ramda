import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function assoc',
  arguments: [[['P extends string'], S.vProperty, 'P'], [['V'], `${S.vValue}`, 'V'], [[`T extends ${S.tObject}`], S.vObject, 'T']],
  returnType: 'T & { [K in P]: V }',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

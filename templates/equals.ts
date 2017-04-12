import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function equals',
  generics: ['T', 'U'],
  args: [['a', 'T'], ['b', 'U']],
  returnType: 'boolean',
});

export default new S.Definition([], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

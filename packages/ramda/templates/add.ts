import * as S from '../src/index';

const typings = S.createCurriedTypings({
  name: 'function add',
  generics: [],
  args: [['a', 'number'], ['b', 'number']],
  returnType: 'number',
});

export default new S.Declaration([], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

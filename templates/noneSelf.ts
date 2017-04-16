import * as S from '../src/index';

const typings = S.createListBooleanSelfTypings('function noneSelf', S.tNoneAble, S.vNoneAble);

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module, 'Self'))));

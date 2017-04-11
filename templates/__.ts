import * as S from '../src/index';

export default new S.Definition([], new S.Namespace(S.namespace)
  .append(new S.Plain(`const __: ${S.tPlaceholder};`).setComment(S.readComment(module)))
  .append(new S.Type(S.tPlaceholder, [], `{ '@@functional/placeholder': true }`)));

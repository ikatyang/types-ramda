import * as S from '../src/index';

export default new S.Declaration([], new S.Namespace(S.namespace)
  .append(new S.Plain(`const __: ${S.placeholderName};`).setComment(S.readComment(module)))
  .append(new S.Type(S.placeholderName, [], `{ '@@functional/placeholder': true }`)));

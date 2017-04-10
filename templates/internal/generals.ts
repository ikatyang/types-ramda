import * as S from '../../src/index';

export default new S.Declaration([], new S.Namespace(S.namespace)
  .append(new S.Interface(S.tList, ['T'])
    .append(new S.PlainTyping('readonly length: number'))
    .append(new S.PlainTyping('readonly [index: number]: T')))
  .append(new S.Group()
    .append(new S.Type(S.tTransformer, ['T', 'U'], '(value: T) => U'))
    .append(new S.Type(S.tIndexedTransformer, ['T', 'U'], `(value: T, index: number, list: ${S.tList}<T>) => U`))
    .append(new S.Type(S.tMapper, ['T', 'U'], `(fn: ${S.tTransformer}<T, U>, list: ${S.tList}<T>) => U[]`))
    .append(new S.Type(S.tIndexedMapper, ['T', 'U'], `(fn: ${S.tIndexedTransformer}<T, U>, list: ${S.tList}<T>) => U[]`))));

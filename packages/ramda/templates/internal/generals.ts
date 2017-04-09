import * as S from '../../src/index';

export default new S.Declaration([], new S.Namespace(S.namespace)
  .append(new S.Interface('List', ['T'])
    .append(new S.PlainTyping('readonly length: number'))
    .append(new S.PlainTyping('readonly [index: number]: T')))
  .append(new S.Group()
    .append(new S.Type('Transformer', ['T', 'U'], '(value: T) => U'))
    .append(new S.Type('IndexedTransformer', ['T', 'U'], '(value: T, index: number, list: List<T>) => U'))
    .append(new S.Type('Mapper', ['T', 'U'], '(fn: Transformer<T, U>, list: List<T>) => U[]'))
    .append(new S.Type('IndexedMapper', ['T', 'U'], '(fn: IndexedTransformer<T, U>, list: List<T>) => U[]'))));

import * as S from '../../src/index';

const references = [new S.Reference('path', '../__')];
const namespace = new S.Namespace(S.namespace);

const interfaces: S.Interface[] = [];
const generics: string[] = [];
const args: [string, string][] = [];

const start = 1;
const maxCurryLevel = 6;
const returnType = 'R';
const valuePrefix = 'v';
const argPrefix = 'T';

for (let i = 0; i < maxCurryLevel; i++) {
  const typeName = `${argPrefix}${i + start}`;
  generics.push(typeName);
  args.push([`${valuePrefix}${i + start}`, typeName]);

  const _interface = new S.Interface(`${S.curriedName}${i + 1}`, [...generics, returnType])
    .append(...S.createCurriedTypings({
      name: '',
      generics: [],
      args,
      returnType,
      usePlaceholderAbbr: true,
      holdHandler: x => x.replace(valuePrefix, '_') }));
  interfaces.push(_interface);
}

export default new S.Declaration(references, namespace
  .append(new S.Type(S.placeholderAbbr, [], S.placeholderName))
  .append(...interfaces));

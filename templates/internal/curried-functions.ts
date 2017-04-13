import * as S from '../../src/index';

const references = [new S.Reference('path', '../__')];
const namespace = new S.Namespace(S.namespace);

const interfaces: S.Interface[] = [];
const generics: string[] = [];
const args: [string, string][] = [];

const start = 1;
for (let i = 0; i < S.maxCurryLevel; i++) {
  const typeName = S.gNumber(i + start);
  generics.push(typeName);
  args.push([S.vNumber(i + start), typeName]);

  const _interface = new S.Interface(S.tCurriedFunction(i + 1), [...generics, S.gReturn])
    .append(...S.createCurriedTypings({
      name: '',
      generics: [],
      args,
      returnType: S.gReturn,
      usePlaceholderAbbr: true,
      holdHandler: x => x.replace(S.vNumberPrefix, S.vPlaceholderPrefix) }));
  interfaces.push(_interface);
}

export default new S.Definition(references, namespace
  .append(new S.Type(S.tPlaceholderAbbr, [], S.tPlaceholder))
  .append(...interfaces));

import * as S from '../src/index';

const typings: S.Typing[] = [];

const generics: string[] = [
  S.gNumber(1),
  S.gNumber(2),
];
const args: [string, string][] = [
  [S.vNumber(1), S.gNumber(1)],
  [S.vNumber(2), S.gNumber(2)],
];
const returnArgs: [string, string][] = [
  [S.vNumber(2), S.gNumber(2)],
  [S.vNumber(1), S.gNumber(1)],
];

const getFuncSignature = (_args: [string, string][]) => {
  return new S.ArrowTyping(_args, S.gReturn).toString();
};

for (let i = 2; i <= S.maxCurryLevel; i++) {

  typings.push(...S.createCurriedTypings({
    name: 'function flip',
    generics: [...generics, S.gReturn],
    args: [['fn', getFuncSignature(args)]],
    returnType: getFuncSignature(returnArgs),
  }));

  const typeName = S.gNumber(i + 1);
  generics.push(typeName);

  const arg: [string, string] = [S.vNumber(i + 1), typeName];
  args.push(arg);
  returnArgs.push(arg);
}

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

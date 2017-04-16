import * as S from '../src/index';

const typings: S.Typing[] = [];
const typingsN: S.Typing[] = [];

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
  typings.push(...S.createCurriedFunctions({
    name: 'function flip',
    arguments: [[[...generics, S.gReturn], 'fn', getFuncSignature(args)]],
    returnType: `${S.tCurriedFunction(returnArgs.length)}<${returnArgs.map(([, g]) => g).join(', ')}, ${S.gReturn}>`,
  }));

  typingsN.push(...S.createCurriedFunctions({
    name: `function flip${i}`,
    arguments: [[[...generics, S.gReturn], 'fn', getFuncSignature(args)]],
    returnType: `${S.tCurriedFunction(returnArgs.length)}<${returnArgs.map(([, g]) => g).join(', ')}, ${S.gReturn}>`,
  }));

  const typeName = S.gNumber(i + 1);
  generics.push(typeName);

  const arg: [string, string] = [S.vNumber(i + 1), typeName];
  args.push(arg);
  returnArgs.push(arg);
}

typingsN.push(...S.createCurriedFunctions({
  name: 'function flipN',
  arguments: [[[S.gReturn], 'fn', `(...args: any[]) => ${S.gReturn}`]],
  returnType: 'any',
}));

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace).append(new S.Group().append(...typings, ...typingsN).setComment(S.readComment(module))));

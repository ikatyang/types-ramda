import * as S from '../src/index';

const typings: S.FunctionTyping[] = [];

const argvPrefix = 'v';
const argtPrefix = 'T';

const returnPrefix = 'r';
const genericPrefix = 'R';
const funcPrefix = 'fn';

const generics: string[] = [`${genericPrefix}1`];
const args: [string, string][] = [[`${funcPrefix}1`, `(...args: any[]) => ${genericPrefix}1`]];

for (let i = 2; i <= S.maxCurryLevel; i++) {
  const prevGeneric = generics[generics.length - 1];
  const currentGeneric = genericPrefix + i;

  generics.push(currentGeneric);
  args.push([funcPrefix + i, `(${returnPrefix}${i - 1}: ${prevGeneric}) => ${currentGeneric}`]);

  const firstGenerics: string[] = [];
  const firstArgs: [string, string][] = [];

  for (let j = 1; j <= S.maxCurryLevel; j++) {

    firstGenerics.push(argtPrefix + j);
    firstArgs.push([argvPrefix + j, argtPrefix + j]);

    typings.push(new S.FunctionTyping('function pipe',
      firstGenerics.concat(generics),
      [[`${funcPrefix}1`, `(${firstArgs.map(([v, t]) => `${v}: ${t}`).join(', ')}) => ${genericPrefix}1`], ...args.slice(1)],
      new S.ArrowTyping(firstArgs.slice(), currentGeneric)));
  }

  typings.push(new S.FunctionTyping('function pipe', generics.slice(), args.slice(), `(...args: any[]) => ${currentGeneric}`));
}

export default new S.Definition([], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

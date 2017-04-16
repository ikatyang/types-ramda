import * as S from '../src/index';

const typings: S.Typing[] = [];

const generics: string[] = [];
const args: [string, string][] = [];

for (let i = 1; i <= S.maxCurryLevel; i++) {

  generics.push(S.gNumber(i));
  args.push([S.vNumber(i) ,S.gNumber(i)]);

  typings.push(...S.createCurriedFunctions({
    name: 'converge',
    typeAlias: i.toString(),
    generics: [],
    arguments: [[[S.gReturn], 'fn', `(...args: any[]) => ${S.gReturn}`], [generics, 'fns', `((${args.map(([v, g]) => `${v}: ${g}`).join(', ')}) => any)[]`]],
    returnType: `${S.tCurriedFunction(i)}<${generics.join(', ')}, ${S.gReturn}>`,
  }));
}

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

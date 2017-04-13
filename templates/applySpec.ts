import * as S from '../src/index';

const typings: S.Typing[] = [];

const args: string[] = [];
const argTypes: string[] = [];
const generics: string[] = [];

for (let i = 1; i <= S.maxCurryLevel; i++) {
  args.push(`${S.vNumber(i)}: ${S.gNumber(i)}`);
  argTypes.push(S.gNumber(i));
  generics.push(`${S.gNumber(i)} = any`);

  typings.push(...S.createCurriedTypings({
    name: 'function applySpec',
    generics: [`N extends ${i}`, ...generics, 'R = any'],
    args: [['fns', `${S.tNestedDictionary}<(${args.join(', ')}) => R>`]],
    returnType: `${S.tCurriedFunction(i)}<${argTypes.join(', ')}, ${S.tNestedDictionary}<R>>`,
  }));
}

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));

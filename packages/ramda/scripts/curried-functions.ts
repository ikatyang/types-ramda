const fs = require('fs');
const path = require('path');

const maxCurryLevel = 5;
const curriedName = 'CurriedFunction';
const outputFilename = path.resolve(path.dirname(module.filename), '../typings/internal/curried-functions.d.ts');

const createFunctionDeclaration = (curryLevel: number, isPlaceHolders: boolean[]): string => {
  const givenCount = isPlaceHolders.length;
  const placeholders = [];
  const types = [];
  isPlaceHolders.forEach((isPlaceHolder, index) => {
    if (isPlaceHolder) {
      types.push(`_${index + 1}: PH`);
      placeholders.push(`T${index + 1}`);
    } else {
      types.push(`v${index + 1}: T${index + 1}`);
    }
  });
  if (isPlaceHolders.length < curryLevel) {
    for (let i = isPlaceHolders.length; i < curryLevel; i++) {
      placeholders.push(`T${i + 1}`);
    }
  }
  const functionArguments = `(${types.join(', ')})`;
  const returnType = placeholders.length === 0 ? 'R' : `${curriedName}${placeholders.length}<${placeholders.join(', ')}, R>`;
  return `${functionArguments}: ${returnType};`;
};

function pushCurriedFunctions(functions: string[], curryLevel: number, argumentCount: number, isPlaceholders: boolean[]): void {
  if (isPlaceholders.length === argumentCount) {
    functions.push(createFunctionDeclaration(curryLevel, isPlaceholders));
    return;
  }
  pushCurriedFunctions(functions, curryLevel, argumentCount, [...isPlaceholders, true]);
  pushCurriedFunctions(functions, curryLevel, argumentCount, [...isPlaceholders, false]);
}

function createCurriedFunction(curryLevel: number): string {
  const types = [];
  const functions = [];
  for (let i = 0; i < curryLevel; i++) {
    types.push(`T${i + 1}`);
    pushCurriedFunctions(functions, curryLevel, i + 1, []);
  }
  return `  interface ${curriedName}${curryLevel}<${types.join(', ')}, R> {\n${functions.map(x => `    ${x}`).join('\n')}\n  }`;
}

const interfaces = [];
for (let i = 1; i <= maxCurryLevel; i++) {
  interfaces.push(createCurriedFunction(i));
}

const content =
`/// <reference path="../__.d.ts" />

declare namespace R {

  type PH = Placeholder;

${interfaces.join('\n\n')}

}
`;

fs.writeFileSync(outputFilename, content, { encoding: 'utf8' });

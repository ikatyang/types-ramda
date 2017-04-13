import * as configs from '../configs';
import { FunctionTyping } from '../typings/function';

export interface ICreateCurriedOptions {
  name: string;
  generics: string[];
  args: [string, string][];
  returnType: string;
  usePlaceholderAbbr?: boolean;
  holdHandler?: (argName: string) => string;
}

const createCurriedTyping = (options: ICreateCurriedOptions, curryLevel: number, isPlaceholders: boolean[]): FunctionTyping => {
  const args: [string, string][] = [];
  const returnTypes: string[] = [];

  const placeholder = options.usePlaceholderAbbr ? configs.tPlaceholderAbbr : configs.tPlaceholder;

  isPlaceholders.forEach((isPlaceholder, index) => {
    const arg = options.args[index];
    if (isPlaceholder) {
      const [argName, returnType] = arg;
      returnTypes.push(returnType);
      const holdName = options.holdHandler ? options.holdHandler(argName) : `_${argName}`;
      args.push([holdName, placeholder]);
    } else {
      args.push(arg);
    }
  });
  if (isPlaceholders.length < curryLevel) {
    for (let i = isPlaceholders.length; i < curryLevel; i++) {
      const [, returnType] = options.args[i];
      returnTypes.push(returnType);
    }
  }
  if (returnTypes.length === 0) {
    return new FunctionTyping(options.name, options.generics, args, options.returnType);
  } else {
    const returnCurryLevel = returnTypes.length;
    returnTypes.push(options.returnType);
    return new FunctionTyping(options.name, options.generics, args, `${configs.tCurriedFunction(returnCurryLevel)}<${returnTypes.join(', ')}>`);
  }
};

const recursivePushTypings = (typings: FunctionTyping[], options: ICreateCurriedOptions, curryLevel: number, argumentCount: number, isPlaceholders: boolean[]): void => {
  if (isPlaceholders.length === argumentCount) {
    typings.push(createCurriedTyping(options, curryLevel, isPlaceholders));
    return;
  }
  recursivePushTypings(typings, options, curryLevel, argumentCount, [...isPlaceholders, true]);
  recursivePushTypings(typings, options, curryLevel, argumentCount, [...isPlaceholders, false]);
};

export const createCurriedTypings = (options: ICreateCurriedOptions): FunctionTyping[] => {

  const typings: FunctionTyping[] = [];

  const curryLevel = options.args.length;
  for (let i = 0; i <= curryLevel; i++) {
    recursivePushTypings(typings, options, curryLevel, i, []);
  }

  typings.unshift(typings[typings.length - 1]);

  return typings.reverse();
};

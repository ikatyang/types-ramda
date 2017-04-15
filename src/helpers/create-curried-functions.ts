import * as configs from '../configs';
import { FunctionTyping } from '../typings/function';
import { InterfaceTyping } from '../typings/interface';

export type ICreateCurriedFunctionArgument = [string[], string, string];
export interface ICreateCurriedFunctionOptions {
  name: string;
  arguments: ICreateCurriedFunctionArgument[];
  returnType: string;
}

interface ICreateCurriedFunctionElement {
  arguments: ICreateCurriedFunctionArgument[];
  children: ICreateCurriedFunctionElement[];
}

const initCurriedElements = (elements: ICreateCurriedFunctionElement[], restArgs: ICreateCurriedFunctionArgument[]) => {
  const argss: ICreateCurriedFunctionArgument[][] = [];
  for (let i = 0; i < restArgs.length; i++) {
    const arg = restArgs[i];
    const placeholderArg: ICreateCurriedFunctionArgument =
      [[], configs.vPlaceholderPrefix + restArgs[i][1], configs.tPlaceholderAbbr];
    if (argss.length === 0) {
      argss.unshift([arg], [placeholderArg]);
    } else {
      argss.unshift(...argss.concat(argss).map((args, index, newArgs) => {
        return (index < newArgs.length / 2)
          ? [...args, arg]
          : [...args, placeholderArg];
      }));
    }
  }
  argss.forEach((args) => {
    if (args[args.length - 1][2] !== configs.tPlaceholderAbbr) {
      const children: ICreateCurriedFunctionElement[] = [];
      elements.push({ arguments: args, children });
      initCurriedElements(children, restArgs.filter(arg => args.indexOf(arg) === -1));
    }
  });
};

const createCurriedFunction = (name: string, element: ICreateCurriedFunctionElement, returnType: string): FunctionTyping => {
  if (element.children.length === 0) {
    return new FunctionTyping(name,
      element.arguments.reduce((target: string[], [generics]) => {
        return target.concat(generics);
      }, []),
      element.arguments.map(([_, variable, typing]) => ([variable, typing] as [string, string])), returnType);
  } else {
    return new FunctionTyping(name,
      element.arguments.reduce((target: string[], [generics]) => {
        return target.concat(generics);
      }, []),
      element.arguments.map(([_, variable, typing]) => ([variable, typing] as [string, string])),
      new InterfaceTyping(element.children.map(child => createCurriedFunction('', child, returnType))));
  }
};

export const createCurriedFunctions = (options: ICreateCurriedFunctionOptions): FunctionTyping[] => {
  const elements: ICreateCurriedFunctionElement[] = [];
  initCurriedElements(elements, options.arguments);
  return elements.map(element => createCurriedFunction(options.name, element, options.returnType));
};

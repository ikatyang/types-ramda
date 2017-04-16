import * as configs from '../configs';
import { FunctionTyping } from '../typings/function';
import { InterfaceTyping } from '../typings/interface';

type ICreateCurriedFunctionGenerics = string[];
type ICreateCurriedFunctionVariable = string;
type ICreateCurriedFunctionTyping = string;

export type ICreateCurriedFunctionArgument = [
  ICreateCurriedFunctionGenerics,
  ICreateCurriedFunctionVariable,
  ICreateCurriedFunctionTyping
];

export interface ICreateCurriedFunctionOptions {
  name: string;
  typeAlias?: string;
  generics?: string[];
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
      const currentGenerics = args.reduce((_generics: string[], [argGenerics]) => {
        return _generics.concat(argGenerics);
      }, []);
      const newRestArgs = restArgs
        .filter(arg => args.indexOf(arg) === -1)
        .map(([generics, variable, typing]): [string[], string, string] => {
          return [generics.filter(generic => currentGenerics.indexOf(generic) === -1), variable, typing];
        });
      initCurriedElements(children, newRestArgs);
    }
  });
};

const getGenerics = (args: ICreateCurriedFunctionArgument[]): string[] => {
  return Array.from(new Set(args.reduce((target: string[], [generics]) => {
    return target.concat(generics);
  }, [])));
};

const createCurriedFunction = (name: string, element: ICreateCurriedFunctionElement, returnType: string): FunctionTyping => {
  if (element.children.length === 0) {
    return new FunctionTyping(name, getGenerics(element.arguments),
      element.arguments.map(([_, variable, typing]): [string, string] => ([variable, typing])), returnType);
  } else {
    return new FunctionTyping(name, getGenerics(element.arguments),
      element.arguments.map(([_, variable, typing]): [string, string] => ([variable, typing])),
      new InterfaceTyping(element.children.map(child => createCurriedFunction('', child, returnType))));
  }
};

const isSameTyping = (a: FunctionTyping, b: FunctionTyping) => {
  return JSON.stringify(a.generics) === JSON.stringify(b.generics)
    && JSON.stringify(a.args) === JSON.stringify(b.args);
};

const mergeTypings = (mainTypings: FunctionTyping[], ...otherTypingss: FunctionTyping[][]) => {
  for (const otherTypings of otherTypingss) {
    for (const otherTyping of otherTypings) {
      let hasSame = false;

      for (const mainTyping of mainTypings) {
        if (isSameTyping(mainTyping, otherTyping)) {

          const mainReturnTypings = (mainTyping.returnType as InterfaceTyping).typings as FunctionTyping[];
          const otherReturnTypings = (otherTyping.returnType as InterfaceTyping).typings as FunctionTyping[];

          mergeTypings(mainReturnTypings, otherReturnTypings);

          hasSame = true;
          break;
        }
      }

      if (!hasSame) {
        mainTypings.push(otherTyping);
      }
    }
  }
};

const elementsToTypings = (elements: ICreateCurriedFunctionElement[], options: ICreateCurriedFunctionOptions) => {
  return elements.map(element => {
    const typing = createCurriedFunction(`function ${options.name}`, element, options.returnType);
    typing.generics.unshift(...(options.generics || []));
    return typing;
  });
};

export const createCurriedFunctions = (mainOptions: ICreateCurriedFunctionOptions, ...otherOptionss: ICreateCurriedFunctionOptions[]): FunctionTyping[] => {
  const mainElements: ICreateCurriedFunctionElement[] = [];
  initCurriedElements(mainElements, mainOptions.arguments);
  const mainTypings = elementsToTypings(mainElements, mainOptions);

  const othertypingss: FunctionTyping[][] = [];
  otherOptionss.forEach((otherOptions) => {
    const otherElements: ICreateCurriedFunctionElement[] = [];
    initCurriedElements(otherElements, otherOptions.arguments);
    othertypingss.push(elementsToTypings(otherElements, otherOptions));
  });

  mergeTypings(mainTypings, ...othertypingss);

  if (mainTypings.length > 1) {
    mainTypings.push(mainTypings[0]);
  }

  return mainTypings;
};

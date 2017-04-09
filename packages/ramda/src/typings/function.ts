import { Typing } from './typing';

export class FunctionTyping extends Typing {

  public returnType: string;

  constructor(public name: string, public generics: string[], public args: [string, string][], returnType: string | Typing) {
    super();
    this.returnType = (typeof returnType === 'string')
      ? returnType : returnType.toString();
  }

  public toString() {
    const generic = (this.generics.length === 0) ? '' : `<${this.generics.join(', ')}>`;
    const args = this.args.map(([key, value]) => `${key}: ${value}`).join(', ');
    return `${this.name}${generic}(${args}): ${this.returnType};`;
  }

}

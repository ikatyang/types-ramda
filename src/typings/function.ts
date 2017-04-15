import { Typing } from './typing';

export class FunctionTyping extends Typing {

  constructor(public name: string, public generics: string[], public args: [string, string][], public returnType: string | Typing) {
    super();
  }

  public toString() {
    const generic = (this.generics.length === 0) ? '' : `<${this.generics.join(', ')}>`;
    const args = this.args.map(([key, value]) => `${key}: ${value}`).join(', ');
    return `${this.name}${generic}(${args}): ${this.returnType.toString()};`;
  }

}

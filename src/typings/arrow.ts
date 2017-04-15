import { Typing } from './typing';

export class ArrowTyping extends Typing {

  public returnType: string;

  constructor(public args: [string, string][], returnType: string | Typing, public generics: string[] = []) {
    super();
    this.returnType = (typeof returnType === 'string')
      ? returnType : returnType.toString();
  }

  public toString() {
    const generic = (this.generics.length === 0) ? '' : `<${this.generics.join(', ')}>`;
    const args = this.args.map(([key, value]) => `${key}: ${value}`).join(', ');
    return `${generic}(${args}) => ${this.returnType}`;
  }

}

import { Typing } from './typing';

export class ArrowTyping extends Typing {

  public returnType: string;

  constructor(public args: [string, string][], returnType: string | Typing) {
    super();
    this.returnType = (typeof returnType === 'string')
      ? returnType : returnType.toString();
  }

  public toString() {
    const args = this.args.map(([key, value]) => `${key}: ${value}`).join(', ');
    return `(${args}) => ${this.returnType}`;
  }

}

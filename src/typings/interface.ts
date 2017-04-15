import { Typing } from './typing';

export class InterfaceTyping extends Typing {

  public returnType: string;

  constructor(public typings: Typing[]) {
    super();
  }

  public toString() {
    const content = this.typings.map(typing => typing.toString()).join('\n')
      .split('\n').map(x => `  ${x}`).join('\n');
    return `{\n${content}\n}`;
  }

}

import { Typing } from './typing';

export class PlainTyping extends Typing {

  constructor(public content: string) {
    super();
  }

  public toString() {
    return `${this.content};`;
  }

}

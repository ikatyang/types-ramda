import { Component } from './component';
import { Typing } from '../typings/typing';

export class Type extends Component {

  public allowTypes = false;
  public allowComponents = false;

  public content: string;

  constructor(public name: string, public generics: string[], content: string | Typing) {
    super();
    this.content = (typeof content === 'string') ? content : content.toString();
  }

  public _toString() {
    const generic = this.generics.length > 0 ? `<${this.generics.join(', ')}>` : '';
    return `type ${this.name}${generic} = ${this.content};`;
  }

}

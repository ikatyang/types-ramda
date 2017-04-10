import { Component } from './component';

export class Interface extends Component {

  public allowTypes = true;
  public allowComponents = false;

  constructor(public name: string, public generics: string[]) {
    super();
  }

  public _toString() {
    const generic = this.generics.length > 0 ? `<${this.generics.join(', ')}>` : '';
    const content = this.getTypes();
    return `interface ${this.name}${generic} {\n${content}\n}`;
  }

}

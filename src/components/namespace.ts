import { Component } from './component';

export class Namespace extends Component {

  public allowTypes = false;
  public allowComponents = true;

  constructor(public name: string) {
    super();
  }

  public _toString() {
    const content = this.getComponents();
    return `declare namespace ${this.name} {\n\n${content}\n\n}`;
  }

}

import { Component } from './component';

export class Plain extends Component {

  public allowTypes = false;
  public allowComponents = false;

  constructor(public content: string) {
    super();
  }

  public _toString() {
    return this.content;
  }

}

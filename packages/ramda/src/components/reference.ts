import { Component } from './component';

export class Reference extends Component {

  public allowTypes = false;
  public allowComponents = false;

  constructor(public refType: 'path' | 'types', public content: string) {
    super();
  }

  public _toString() {
    return `/// <reference ${this.refType}="${this.content}.d.ts" />`;
  }

}

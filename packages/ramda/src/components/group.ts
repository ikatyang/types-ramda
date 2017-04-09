import { Component } from './component';

export class Group extends Component {

  public allowTypes = true;
  public allowComponents = false;

  public _toString() {
    return this.getTypes({ tabCount: 0 });
  }

}

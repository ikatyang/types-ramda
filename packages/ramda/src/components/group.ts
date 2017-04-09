import { Component } from './component';

export class Group extends Component {

  public allowTypes = true;
  public allowComponents = true;

  public _toString() {
    return (this.types.length > 0)
      ? this.getTypes({ tabCount: 0 })
      : this.getComponents({ tabCount: 0, separatorBreaklines: 1 });
  }

}

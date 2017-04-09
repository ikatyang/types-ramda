import { Component } from './component';
import { Namespace } from './namespace';
import { Reference } from './reference';

export class Declaration extends Component {

  public allowTypes = false;
  public allowComponents = false;

  constructor(public references: Reference[], public namespace?: Namespace) {
    super();
  }

  public _toString() {
    const namespace = this.namespace ? this.namespace.toString() : '';
    const reference = this.references.join('\n');
    const breakline = (namespace && reference) ? '\n\n' : '';
    return `${reference}${breakline}${namespace}\n`;
  }

}

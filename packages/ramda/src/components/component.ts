import { Typing } from '../typings/typing';

export interface ComponentIndentOptions {
  separatorBreaklines: number;
  tabCount: number;
}

export abstract class Component {

  public types: Typing[] = [];
  public abstract allowTypes: boolean;

  public components: Component[] = [];
  public abstract allowComponents: boolean;

  public comment: null | string = null;

  public abstract _toString(): string;
  public toString() {
    const str = this._toString();
    const comment = !this.comment ? '' :
      `/**\n${this.comment.split('\n').map(x => ` * ${x}`).join('\n')}\n */\n`;
    return `${comment}${str}`;
  }

  public setComment(comment: string): this {
    this.comment = comment;
    return this;
  }

  public append(...values: (Component | Typing)[]): this {
    values.forEach((value) => {
      if (value instanceof Component) {
        if (!this.allowComponents) {
          throw new Error(`Component '${this.constructor.name}' disallow components`);
        }
        this.components.push(value);
      } else {
        if (!this.allowTypes) {
          throw new Error(`Component '${this.constructor.name}' disallow types`);
        }
        this.types.push(value);
      }
    });
    return this;
  }

  public getIndented(array: any[], options: ComponentIndentOptions) {
    const indent = ('  ').repeat(options.tabCount);
    const separator = ('\n').repeat(options.separatorBreaklines);
    return array.join(separator).split('\n').map(x => indent + x).join('\n');
  }

  public getTypes(options: Partial<ComponentIndentOptions> = {}) {
    const { separatorBreaklines = 1, tabCount = 1 } = options;
    return this.getIndented(this.types, { separatorBreaklines, tabCount });
  }

  public getComponents(options: Partial<ComponentIndentOptions> = {}) {
    const { separatorBreaklines = 2, tabCount = 1 } = options;
    return this.getIndented(this.components, { separatorBreaklines, tabCount });
  }

}

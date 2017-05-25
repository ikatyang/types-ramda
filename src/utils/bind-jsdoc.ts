import * as dts from 'dts-element';
import {load_markdown} from './load-markdown';

export const bind_jsdoc = (the_module: NodeModule, members: dts.ITopLevelMember[]) => {
  members[0].jsdoc = load_markdown(the_module);
  return members;
};

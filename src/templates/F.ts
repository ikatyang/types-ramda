import * as dts from 'dts-element';
import {bind_jsdoc} from '../utils/bind-jsdoc';

export default bind_jsdoc(
  module,
  dts.parse(`
    const F: () => false;
  `).members,
);

import * as dts from 'dts-element';
import {bind_jsdoc} from '../utils/bind-jsdoc';
import {composeKDef} from '../utils/npm-ramda';

// tslint:disable-next-line:no-require-imports no-var-requires
const R = require('ramda');

export default bind_jsdoc(
  module,
  dts.parse(
    R.flatten(
      R.range(1, 10).map(composeKDef),
    ).join('\n'),
  ).members,
);

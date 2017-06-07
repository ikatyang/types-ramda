import * as dts from 'dts-element';
import * as R from 'ramda';
import {bind_jsdoc} from '../utils/bind-jsdoc';
import {pipePDef} from '../utils/npm-ramda';

export default bind_jsdoc(
  module,
  dts.parse(
    R.flatten<string>(
      R.range(1, 10).map(
        i => R.range(1, 5).map(
          j => pipePDef(i, j),
        ),
      ),
    ).join('\n'),
  ).members,
);

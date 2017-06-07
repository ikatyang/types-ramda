import * as dts from 'dts-element';
import * as R from 'ramda';
import {bind_jsdoc} from '../utils/bind-jsdoc';
import {liftNDef} from '../utils/npm-ramda';

export default bind_jsdoc(
  module,
  dts.parse(
    R.flatten(
      R.range(0, 10).map(
        i => liftNDef(i, true),
      ),
    ).join('\n'),
  ).members,
);

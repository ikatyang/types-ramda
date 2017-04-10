/// <reference path="./index.d.ts" />

import * as R from 'ramda';
import checker from './src/checker';

checker(module, (check) => {

  // http://ramdajs.com/docs/#__
  // TODO: R.__

  // http://ramdajs.com/docs/#add
  check('add', R.add(2, 3), 5);
  check('add', R.add(7)(10), 17);

  // http://ramdajs.com/docs/#addIndex
  // TODO: R.addIndex

});

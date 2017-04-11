/// <reference path="./index.d.ts" />

import * as R from 'ramda';
import checker from './src/checker';

checker(module, (check) => {

  // TODO: R.__

  check('add', R.add(2, 3), 5);
  check('add', R.add(7)(10), 17);

  // TODO: R.addIndex

  check('replace', R.replace('foo', 'bar', 'foo foo foo'), 'bar foo foo');
  check('replace', R.replace(/foo/, 'bar', 'foo foo foo'), 'bar foo foo');
  check('replace', R.replace(/foo/g, 'bar', 'foo foo foo'), 'bar bar bar');
});

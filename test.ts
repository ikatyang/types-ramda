/// <reference path="./index.d.ts" />

import * as R from 'ramda';
import checker from './src/checker';

checker(module, (check) => {

  check('__', R.replace('{name}', R.__, 'Hello, {name}!')('Alice'), 'Hello, Alice!');

  check('add', R.add(2, 3), 5);
  check('add', R.add(7)(10), 17);

  {
    const mapIndexed = R.addIndex(R.map);
    check('addIndex', mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']), ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']);
  }

  {
    const double = (x: number) => x * 2;
    check('map', R.map(double, [1, 2, 3]), [2, 4, 6]);
    check('map', R.map(double, { x: 1, y: 2, z: 3 }), { x: 2, y: 4, z: 6 });
    // TODO: R.map for functor
  }

  check('replace', R.replace('foo', 'bar', 'foo foo foo'), 'bar foo foo');
  check('replace', R.replace(/foo/, 'bar', 'foo foo foo'), 'bar foo foo');
  check('replace', R.replace(/foo/g, 'bar', 'foo foo foo'), 'bar bar bar');
});

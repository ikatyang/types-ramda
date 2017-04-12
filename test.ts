/// <reference path="./index.d.ts" />

import * as R from 'ramda';
import checker from './src/checker';

checker(module, (check) => {

  { // __
    const greet = R.replace('{name}', R.__, 'Hello, {name}!');
    check('__', greet('Alice'), 'Hello, Alice!');
  }

  { // add
    check('add', R.add(2, 3), 5);
    check('add', R.add(7)(10), 17);
  }

  { // addIndex
    { // cause every generic types to be any ( {} ), since TS cannot inferred types across function calls
      const mapIndexed = R.addIndex(R.map);
      check('addIndex', mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']), ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']);
    }

    { // specify generic types at once
      check('addIndex', R.addIndex<string, string>(R.map)((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']), ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']);
    }

    { // create a late function to specify generic types while calling
      const mapIndexed = <T, U>() => R.addIndex<T, U>(R.map);
      check('addIndex', mapIndexed<string, string>()((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']), ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']);
    }
  }

  { // adjust
    check('adjust', R.adjust(R.add(10), 1, [1, 2, 3]), [1, 12, 3]);
    check('adjust', R.adjust(R.add(10))(1)([1, 2, 3]), [1, 12, 3]);
  }

  { // map
    const double = (x: number) => x * 2;
    check('map', R.map(double, [1, 2, 3]), [2, 4, 6]);
    check('map', R.map(double, { x: 1, y: 2, z: 3 }), { x: 2, y: 4, z: 6 });
    // TODO: R.map for functor
  }

  { // replace
    check('replace', R.replace('foo', 'bar', 'foo foo foo'), 'bar foo foo');
    check('replace', R.replace(/foo/, 'bar', 'foo foo foo'), 'bar foo foo');
    check('replace', R.replace(/foo/g, 'bar', 'foo foo foo'), 'bar bar bar');
  }

});

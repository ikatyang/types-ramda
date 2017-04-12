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

  { // all
    const equals3 = R.equals(3);
    check('all', R.all(equals3)([3, 3, 3, 3]), true);
    check('all', R.all(equals3)([3, 3, 1, 3]), false);
  }

  { // equals
    check('equals', R.equals(1, 1), true);
    check('equals', R.equals(1, '1'), false);
    check('equals', R.equals([1, 2, 3], [1, 2, 3]), true);

    type V = { v?: any };
    const a: V = {}; a.v = a;
    const b: V = {}; b.v = b;
    check('equals', R.equals(a, b), true);
  }

  { // filter
    const isEven = (n: number) => n % 2 === 0;
    check('filter', R.filter(isEven, [1, 2, 3, 4]), [2, 4]);
    check('filter', R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }), { b: 2, d: 4 });
    // TODO: R.filter for filterable
  }

  { // map
    const double = (x: number) => x * 2;
    check('map', R.map(double, [1, 2, 3]), [2, 4, 6]);
    check('map', R.map(double, { x: 1, y: 2, z: 3 }), { x: 2, y: 4, z: 6 });
    // TODO: R.map for mappable
  }

  { // propEq
    const abby = { name: 'Abby', age: 7, hair: 'blond' };
    const fred = { name: 'Fred', age: 12, hair: 'brown' };
    const rusty = { name: 'Rusty', age: 10, hair: 'brown' };
    const alois = { name: 'Alois', age: 15, disposition: 'surly' };
    const kids = [abby, fred, rusty, alois];
    const hasBrownHair = R.propEq('hair', 'brown');
    check('propEq', R.filter(hasBrownHair, kids), [fred, rusty]);
  }

  { // replace
    check('replace', R.replace('foo', 'bar', 'foo foo foo'), 'bar foo foo');
    check('replace', R.replace(/foo/, 'bar', 'foo foo foo'), 'bar foo foo');
    check('replace', R.replace(/foo/g, 'bar', 'foo foo foo'), 'bar bar bar');
  }

});

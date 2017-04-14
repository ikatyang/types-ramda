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
    { // cause every generic types to be any, since TS cannot inferred types across function calls
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

  { // allPass
    const isQueen = R.propEq('rank', 'Q');
    const isSpade = R.propEq('suit', '♠︎');
    const isQueenOfSpades = R.allPass([isQueen, isSpade]);
    check('allPass', isQueenOfSpades({ rank: 'Q', suit: '♣︎' }), false);
    check('allPass', isQueenOfSpades({ rank: 'Q', suit: '♠︎' }), true);
  }

  { // always
    const t = R.always('Tee');
    check('always', t(), 'Tee');
  }

  { // and
    check('and', R.and(true, true), true);
    check('and', R.and(true, false), false);
    check('and', R.and(false, true), false);
    check('and', R.and(false, false), false);
  }

  { // any
    const lessThan0 = R.flip(R.lt)(0);
    const lessThan2 = R.flip(R.lt)(2);
    check('any', R.any(lessThan0)([1, 2]), false);
    check('any', R.any(lessThan2)([1, 2]), true);
  }

  { // anyPass
    const isClub = R.propEq('suit', '♣');
    const isSpade = R.propEq('suit', '♠');
    const isBlackCard = R.anyPass([isClub, isSpade]);
    check('anyPass', isBlackCard({rank: '10', suit: '♣'}), true);
    check('anyPass', isBlackCard({rank: 'Q', suit: '♠'}), true);
    check('anyPass', isBlackCard({rank: 'Q', suit: '♦'}), false);
  }

  { // ap
    check('ap', R.ap([R.multiply(2), R.add(3)], [1,2,3]), [2, 4, 6, 4, 5, 6]);
    check('ap', R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']), ['tasty pizza', 'tasty salad', 'PIZZA', 'SALAD']);
  }

  { // aperture
    check('aperture', R.aperture(2, [1, 2, 3, 4, 5]), [[1, 2], [2, 3], [3, 4], [4, 5]]);
    check('aperture', R.aperture(3, [1, 2, 3, 4, 5]), [[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
    check('aperture', R.aperture(7, [1, 2, 3, 4, 5]), []);
  }

  { // append
    check('append', R.append('tests', ['write', 'more']), ['write', 'more', 'tests']);
    check('append', R.append('tests', []), ['tests']);
    check('append', R.append(['tests'], ['write', 'more']), ['write', 'more', ['tests']]);
  }

  { // apply
    const nums = [1, 2, 3, -99, 42, 6, 7];
    check('apply', R.apply(Math.max, nums), 42);
  }

  { // applySpec
    { // non-generic will cause arguments length to be 1
      const getMetrics = R.applySpec({
        sum: R.add(2),
        nested: { mul: R.multiply(2) },
      });
      check('applySpec', getMetrics(4), { sum: 6, nested: { mul: 8 } });
    }

    { // specify arguments length, types are considered any
      const getMetrics = R.applySpec<2>({
        sum: R.add,
        nested: { mul: R.multiply },
      });
      check('applySpec', getMetrics(2, 4), { sum: 6, nested: { mul: 8 } });
    }

    { // specify arguments length and its type
      const getMetrics = R.applySpec<2, number, number>({
        sum: R.add,
        nested: { mul: R.multiply },
      });
      check('applySpec', getMetrics(2, 4), { sum: 6, nested: { mul: 8 } });
    }

    { // specify everything even return-type
      const getMetrics = R.applySpec<2, number, number, number>({
        sum: R.add,
        nested: { mul: R.multiply },
      });
      check('applySpec', getMetrics(2, 4), { sum: 6, nested: { mul: 8 } });
    }
  }

  { // ascend
    const byAge = R.ascend(R.prop('age'));
    const people = [
      { name: 'a', age: 20 },
      { name: 'b', age: 40 },
      { name: 'c', age: 30 },
    ];
    const sortedPeople = [
      { name: 'a', age: 20 },
      { name: 'c', age: 30 },
      { name: 'b', age: 40 },
    ];
    check('sort', R.sort(byAge, people), sortedPeople);
  }

  { // assoc
    check('assoc', R.assoc('c', 3, { a: 1, b: 2 }), { a: 1, b: 2, c: 3 });
  }

  { // concat
    check('concat', R.concat('ABC', 'DEF'), 'ABCDEF');
    check('concat', R.concat([4, 5, 6], [1, 2, 3]), [4, 5, 6, 1, 2, 3]);
    check('concat', R.concat([], []), []);
    // TODO: R.concat for concatable
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

  { // flip
    const mergeThree = (a: 1, b: 2, c: 3): number[] => [a, b, c];
    check('flip', mergeThree(1, 2, 3), [1, 2, 3]);
    check('flip', R.flip(mergeThree)(2, 1, 3), [1, 2, 3]);
  }

  { // lt
    check('lt', R.lt(2, 1), false);
    check('lt', R.lt(2, 2), false);
    check('lt', R.lt(2, 3), true);
    check('lt', R.lt('a', 'z'), true);
    check('lt', R.lt('z', 'a'), false);
  }

  { // map
    const double = (x: number) => x * 2;
    check('map', R.map(double, [1, 2, 3]), [2, 4, 6]);
    check('map', R.map(double, { x: 1, y: 2, z: 3 }), { x: 2, y: 4, z: 6 });
    // TODO: R.map for mappable
  }

  { // multiply
    const double = R.multiply(2);
    const triple = R.multiply(3);
    check('multiply', double(3), 6);
    check('multiply', triple(4), 12);
    check('multiply', R.multiply(2, 5), 10);
  }

  { // prop
    check('prop', R.prop('x', { x: 100 }), 100);
    check('prop', R.prop('x', {}), undefined);
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

  { // sort
    const diff = (a: number, b: number) => a - b;
    check('sort', R.sort(diff, [4, 2, 7, 5]), [2, 4, 5, 7]);
  }

  { // toUpper
    check('toUpper', R.toUpper('abc'), 'ABC');
  }

});

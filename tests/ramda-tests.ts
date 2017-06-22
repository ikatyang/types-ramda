import * as R from 'ramda';

// https://github.com/types/npm-ramda/blob/master/tests/test.ts

// tslint:disable max-file-line-count

// @dts-jest:group add
{
  // @dts-jest:pass
  R.add(2, 3); // => 5
  // @dts-jest:pass
  R.add(7)(10); // => 17
}

// @dts-jest:group addIndex
{
  {
    const lastTwo = (val: number, idx: number, list: number[]) => list.length - idx <= 2;
    const filterIndexed = R.addIndex<number, boolean, number[], number[]>(R.filter);

    // @dts-jest:pass
    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]
    // @dts-jest:pass
    filterIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [0, 9]
  }
  {
    const plusFive = (num: number, idx: number, list: number[]) => { list[idx] = num + 5; };

    // @dts-jest:pass
    R.addIndex<number, void, number[], number[]>(R.forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
  }
  {
    const squareEnds = (elt: number, idx: number, list: number[]) =>
      (idx === 0 || idx === list.length - 1)
        ? elt * elt
        : elt;

    // @dts-jest:pass
    R.addIndex<number, number, number[], number[]>(R.map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
    // @dts-jest:pass
    R.addIndex<number, number, number[], number[]>(R.map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
  }
  {
    const reduceIndexed = R.addIndex<
      Record<string, number>, string, Record<string, number>,
      Record<string, number>,
      string[],
      Record<string, number>>(R.reduce);
    const objectify = (accObject: Record<string, number>, elem: string, idx: number, list: string[]) => {
      accObject[elem] = idx;
      return accObject;
    };

    // @dts-jest:pass
    reduceIndexed(objectify, {}, ['a', 'b', 'c']); // => {a: 0, b: 1, c: 2}
    // @dts-jest:pass
    reduceIndexed(objectify)({}, ['a', 'b', 'c']); // => {a: 0, b: 1, c: 2}
    // @dts-jest:pass
    reduceIndexed(objectify, {})(['a', 'b', 'c']); // => {a: 0, b: 1, c: 2}
  }
  {
    const reduceIndexed = R.addIndex<'1', 'v2x1'>()(R.reduce<'111'>());

    // @dts-jest:pass
    reduceIndexed(
      (acc: string, val: string, idx: number) => `${acc},${idx}-${val}`,
      '',
      ['f', 'o', 'o', 'b', 'a', 'r'],
    ); // => [',0-f,1-o,2-o,3-b,4-a,5-r']
  }
}

// @dts-jest:group adjust
{
  // @dts-jest:pass
  R.adjust(R.add(10), 1, [1, 2, 3]); // => [1, 12, 3]
  // @dts-jest:pass
  R.adjust(R.add(10))(1)([1, 2, 3]); // => [1, 12, 3]
}

// @dts-jest:group all
{
  const lessThan2 = R.flip(R.lt<'11'>())(2);
  const lessThan3 = R.flip(R.lt<'11'>())(3);

  // @dts-jest:pass
  R.all(lessThan2)([1, 2]); // => false
  // @dts-jest:pass
  R.all(lessThan3)([1, 2]); // => true
}

// @dts-jest:group allPass
{
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;

  // @dts-jest:pass
  R.allPass([gt10, even])(11); // => false
  // @dts-jest:pass
  R.allPass([gt10, even])(12); // => true
}

// @dts-jest:group always
{
  // @dts-jest:pass
  R.always('Tee')(); // => 'Tee'
}

// @dts-jest:group and
{
  // @dts-jest:pass
  R.and(false, true); // => false
  // @dts-jest:pass
  R.and(0, []); // => 0
  // @dts-jest:pass
  R.and(0)([]); // => 0
  // @dts-jest:pass
  R.and(null, ''); // => null
}

// @dts-jest:group any
{
  const lessThan0 = R.flip(R.lt<'11'>())(0);
  const lessThan2 = R.flip(R.lt<'11'>())(2);

  // @dts-jest:pass
  R.any(lessThan0)([1, 2]); // => false
  // @dts-jest:pass
  R.any(lessThan2)([1, 2]); // => true
}

// @dts-jest:group anyPass
{
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;

  // @dts-jest:pass
  R.anyPass([gt10, even])(11); // => true
  // @dts-jest:pass
  R.anyPass([gt10, even])(8); // => true
  // @dts-jest:pass
  R.anyPass([gt10, even])(9); // => false
}

// @dts-jest:group ap
{
  // @dts-jest:pass
  R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
  // @dts-jest:pass
  R.ap([R.multiply(2), R.add(3)])([1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
}

// @dts-jest:group aperture
{
  // @dts-jest:pass
  R.aperture(2, [1, 2, 3, 4, 5]); // => [[1, 2], [2, 3], [3, 4], [4, 5]]
  // @dts-jest:pass
  R.aperture(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
  // @dts-jest:pass
  R.aperture(7, [1, 2, 3, 4, 5]); // => []
  // @dts-jest:pass
  R.aperture(7)([1, 2, 3, 4, 5]); // => []
}

// @dts-jest:group append
{
  // @dts-jest:pass
  R.append('tests', ['write', 'more']); // => ['write', 'more', 'tests']
  // @dts-jest:pass
  R.append('tests')(['write', 'more']); // => ['write', 'more', 'tests']
  // @dts-jest:pass
  R.append('tests', []); // => ['tests']
  // @dts-jest:pass
  R.append(['tests'], ['write', 'more']); // => ['write', 'more', ['tests']]
  // @dts-jest:pass
  R.append(['tests'])(['write', 'more']); // => ['write', 'more', ['tests']]
}

// @dts-jest:group apply
{
  const nums = [1, 2, 3, -99, 42, 6, 7];

  // @dts-jest:pass
  R.apply(Math.max, nums); // => 42
  // @dts-jest:pass
  R.apply(Math.max)(nums); // => 42
}

// @dts-jest:group applySpec
{
  interface T {
    sum: number;
    nested: {
      mul: number;
    };
  }
  const getMetrics = R.applySpec<T>({
    sum: R.add,
    nested: {
      mul: R.multiply,
    },
  });
  // @dts-jest:pass
  getMetrics(2, 4); // => {sum: 6, nested: {mul: 8}}
}

// @dts-jest:group ascend
{
  const byAge = R.ascend(R.prop('age'));
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];

  // @dts-jest:pass
  R.sort(byAge, people);
  // @dts-jest:pass
  R.sort(R.__, people)(byAge);
}

// @dts-jest:group assoc
{
  // @dts-jest:pass
  R.assoc('c', 3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
  // @dts-jest:pass
  R.assoc('c')(3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
  // @dts-jest:pass
  R.assoc('c', 3)({a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
}

// @dts-jest:group assocPath
{
  // @dts-jest:pass
  R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
  // @dts-jest:pass
  R.assocPath(['a', 'b', 'c'])(42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
  // @dts-jest:pass
  R.assocPath(['a', 'b', 'c'], 42)({a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
}

// @dts-jest:group binary
{
  const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];
  const takesTwoArgs = R.binary(takesThreeArgs);

  // @dts-jest:pass
  takesThreeArgs.length; // => 3
  // @dts-jest:pass
  takesThreeArgs(1, 2, 3); // => [1, 2, 3]

  // @dts-jest:pass
  takesTwoArgs.length; // => 2
  // @dts-jest:fail
  takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
}

// @dts-jest:group bind
{
  // @dts-jest:pass
  R.bind(console.log, console);
}

// @dts-jest:group both
{
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;

  // @dts-jest:pass
  R.both(gt10, even)(100); // => true
  // @dts-jest:pass
  R.both(gt10)(even)(101); // => false
}

// @dts-jest:group call
{
  // @dts-jest:pass
  R.call(R.add<'11'>(), 1, 2); // => 3
}

// @dts-jest:group chain
{
  const duplicate = (n: number) => [n, n];

  // @dts-jest:pass
  R.chain(duplicate, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
  // @dts-jest:pass
  R.chain(duplicate)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
  // @dts-jest:pass
  R.chain<number, number[], number>(R.append, R.head)([1, 2, 3]); // => [1, 2, 3, 1]
  // @dts-jest:pass
  R.chain<number, number[], number>(R.append)(R.head)([1, 2, 3]); // => [1, 2, 3, 1]
}

// @dts-jest:group clamp
{
  // @dts-jest:pass
  R.clamp(1, 10, -1); // => 1
  // @dts-jest:pass
  R.clamp<number>(1, 10)(11); // => 10
  // @dts-jest:pass
  R.clamp<number>(1)(10, 4); // => 4
  // @dts-jest:pass
  R.clamp('a', 'd', 'e'); // => 'd'
}

// @dts-jest:group clone
{
  const obj1 = [{}, {}, {}];
  const obj2 = [{a: 1}, {a: 2}, {a: 3}];

  // @dts-jest:pass
  R.clone(obj1);
  // @dts-jest:pass
  R.clone(obj2);

  // @dts-jest:pass
  R.clone([{}, {}, {}]);
  // @dts-jest:pass
  R.clone([1, 2, 3]);
  // @dts-jest:pass
  R.clone({});
  // @dts-jest:pass
  R.clone(10);
  // @dts-jest:pass
  R.clone('foo');
  // @dts-jest:pass
  R.clone(Date.now());
}

// @dts-jest:group comparator
{
  interface Person {
    age: number;
    name: string;
  }
  const people = [
    {name: 'Agy', age: 33},
    {name: 'Bib', age: 15},
    {name: 'Cari', age: 16},
  ];

  // @dts-jest:pass
  R.sort(R.comparator((a: Person, b: Person) => a.age < b.age), people);
}

// @dts-jest:group complement
{
  const isEven = (n: number) => n % 2 === 0;

  // @dts-jest:pass
  R.complement(isEven)(21); // => true
  // @dts-jest:pass
  R.complement(isEven)(42); // => false
}

// @dts-jest:group compose
{
  {
    const f0 = R.compose(Math.pow);
    const f1 = R.compose(R.negate, Math.pow);
    const f2 = R.compose(R.inc, R.negate, Math.pow);
    const f3 = R.compose(R.inc, R.inc, R.negate, Math.pow);
    const f4 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
    const f5 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);

    // @dts-jest:pass
    f0(3, 4); // -(3^4) + 1
    // @dts-jest:pass
    f1(3, 4); // -(3^4) + 1
    // @dts-jest:pass
    f2(3, 4); // -(3^4) + 1
    // @dts-jest:pass
    f3(3, 4); // -(3^4) + 1
    // @dts-jest:pass
    f4(3, 4); // -(3^4) + 1
    // @dts-jest:pass
    f5(3, 4); // -(3^4) + 1
  }
  {
    const double = (x: number): number => x + x;

    // @dts-jest:pass
    R.compose<number, number, number>(double, R.identity);
  }
  {
    const fn = (a: string, b: number, c: string) => [a, b, c];
    const gn = R.compose(R.length, fn);

    // @dts-jest:pass
    gn('Hello', 4, 'world');
  }
}

// @dts-jest:group composeP
{
  interface User {
    name: string;
    followers: string[];
  }
  interface DateBase {
    users: {
      [userId: string]: User;
    };
  }
  const db: DateBase = {
    users: {
      JOE: {
        name: 'Joe',
        followers: ['STEVE', 'SUZY'],
      },
    },
  };

  const lookupUser = (userId: string) => Promise.resolve(db.users[userId]);
  const lookupFollowers = (user: User) => Promise.resolve(user.followers);

  // @dts-jest:pass
  R.composeP(lookupFollowers, lookupUser);
  // @dts-jest:pass
  R.composeP<string, User, string[]>(lookupFollowers, lookupUser);
}

// @dts-jest:group concat
{
  // @dts-jest:pass
  R.concat([], []); // => []
  // @dts-jest:pass
  R.concat([4, 5, 6], [1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
  // @dts-jest:pass
  R.concat([4, 5, 6])([1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
  // @dts-jest:pass
  R.concat('ABC')('DEF'); // 'ABCDEF'
}

// @dts-jest:group cond
{
  const fn = R.cond([
      [R.equals(0), R.always('water freezes at 0°C')],
      [R.equals(100), R.always('water boils at 100°C')],
      [R.T, (temp: number) => `nothing special happens at ${temp}°C`],
  ]);

  // @dts-jest:pass
  fn(0); // => 'water freezes at 0°C'
  // @dts-jest:pass
  fn(50); // => 'nothing special happens at 50°C'
  // @dts-jest:pass
  fn(100); // => 'water boils at 100°C'
}

{
  class Circle {
    public r: number;
    public colors: string[];
    constructor(r: number, ...colors: string[]) {
      this.r = r;
      this.colors = colors;
    }
    public area() {
      return Math.PI * Math.pow(this.r, 2);
    }
  }
  // @dts-jest:group construct
  {
    // @dts-jest:pass
    R.construct<'1', 'variadic'>()(Circle)(1, 'red');
  }
  // @dts-jest:group constructN
  {
    // @dts-jest:pass
    R.constructN(2, Circle)(1, 'red');
  }
}

// @dts-jest:group contains
{
  const obj = {};

  // @dts-jest:pass
  R.contains(obj)([{}, obj, {}]); // => true
  // @dts-jest:pass
  R.contains(3)([1, 2, 3]); // => true
  // @dts-jest:pass
  R.contains(3, [1, 2, 3]); // => true
  // @dts-jest:pass
  R.contains(4)([1, 2, 3]); // => false
  // @dts-jest:pass
  R.contains({})([{}, {}]); // => false
}

// @dts-jest:group converge
{
  const add = (a: number, b: number) => a + b;
  const add3 = (a: number, b: number, c: number) => a + b + c;

  const subtract = (a: number, b: number) => a - b;
  const multiply = (a: number, b: number) => a * b;

  // @dts-jest:pass
  R.converge(multiply, [add, subtract])(1, 2); // => -3

  // @dts-jest:pass
  R.converge(add3, [multiply, add, subtract])(1, 2); // => 4
}

// @dts-jest:group countBy
{
  const numbers = [1, 1.1, 1.2, 2, 3, 2.2];
  const letters = R.split('', 'abcABCaaaBBc');
  // @dts-jest:pass
  R.countBy(Math.floor)(numbers); // => {'1': 3, '2': 2, '3': 1}
  // @dts-jest:pass
  R.countBy(R.toLower)(letters); // => {'a': 5, 'b': 4, 'c': 3}
}

// @dts-jest:group curry
{
  const addTwo = R.curry((x: number, y: number) => x + y);
  // @dts-jest:pass
  addTwo(3);
  // @dts-jest:pass
  addTwo(3)(1);

  const addThree = R.curry((x: number, y: number, z: number) => x + y + z);
  // @dts-jest:pass
  addThree(3, 2, 1);
  // @dts-jest:pass
  addThree(3)(2)(1);
  // @dts-jest:pass
  addThree(3, 2);
  // @dts-jest:pass
  addThree(3)(2);
  // @dts-jest:pass
  addThree(3);

  const xy = R.curry(<X, Y>(x: X, y: Y) => ({x, y}));

  // @dts-jest:skip <Y>(v2: Y) => { x: number; y: Y; }
  xy(3);
  // @dts-jest:skip { x: number; y: number; }
  xy(3)(1);

  const xyz = R.curry(<X, Y, Z>(x: X, y: Y, z: Z) => ({x, y, z}));
  // @dts-jest:skip { x: number; y: number; z: number; }
  xyz(3, 2, 1);
  // @dts-jest:skip { x: number; y: number; z: number; }
  xyz(3)(2)(1);
  // @dts-jest:skip <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
  xyz(3, 2);
  // @dts-jest:skip <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
  xyz(3)(2);
  // @dts-jest:skip <Y, Z>(v2: Y, v3: Z) => ({ x: number; y: Y; z: Z; })
  xyz(3);
}

// @dts-jest:group curryN
{
  const sumArgs = (...args: number[]) => R.sum(args);
  const curriedAddFourNumbers = R.curryN(4, sumArgs);

  // @dts-jest:pass
  curriedAddFourNumbers;
  // @dts-jest:pass
  curriedAddFourNumbers(1, 2)(3)(4); // => 10
}

// @dts-jest:group dec
{
  // @dts-jest:pass
  R.dec(42); // => 41
}

// @dts-jest:group defaultTo
{
  const defaultTo42 = R.defaultTo(42);
  // @dts-jest:pass
  defaultTo42(null); // => 42
  // @dts-jest:pass
  defaultTo42(undefined); // => 42
  // @dts-jest:pass
  defaultTo42('Ramda'); // => 'Ramda'
}

// @dts-jest:group descend
{
  const byAge = R.descend(R.prop('age'));
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];
  // @dts-jest:pass
  R.sort(byAge, people);
  // @dts-jest:pass
  R.sort(R.__, people)(byAge);
}

// @dts-jest:group difference
{
  // @dts-jest:pass
  R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]); // => [1,2]
  // @dts-jest:pass
  R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]); // => [7,6,5]
}

// @dts-jest:group differenceWith
{
  function cmp(x: {a: number}, y: {a: number}) { return x.a === y.a; }
  const l1 = [{a: 1}, {a: 2}, {a: 3}];
  const l2 = [{a: 3}, {a: 4}];
  // @dts-jest:pass
  R.differenceWith(cmp, l1, l2); // => [{a: 1}, {a: 2}]
  // @dts-jest:pass
  R.differenceWith(cmp)(l1, l2); // => [{a: 1}, {a: 2}]
  // @dts-jest:pass
  R.differenceWith(cmp)(l1)(l2); // => [{a: 1}, {a: 2}]
}

// @dts-jest:group dissoc
{
  // @dts-jest:pass
  R.dissoc<{a: number, c: number}>('b', {a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
  // @dts-jest:pass
  R.dissoc('b')<{a: number, c: number}>({a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
}

// @dts-jest:group dissocPath
{
  // @dts-jest:pass
  R.dissocPath<{a: {b: {}}}>(['a', 'b', 'c'], {a: {b: {c: 42}}}); // => {a: {b: {}}}
  // @dts-jest:pass
  R.dissocPath(['a', 'b', 'c'])<{a: {b: {}}}>({a: {b: {c: 42}}}); // => {a: {b: {}}}
}

// @dts-jest:group divide
{
  // @dts-jest:pass
  R.divide(71, 100); // => 0.71
  // @dts-jest:pass
  R.flip(R.divide<'11'>())(2)(42); // => 21
  // @dts-jest:pass
  R.divide(1)(4); // => 0.25
}

// @dts-jest:group drop
{
  // @dts-jest:pass
  R.drop(3, [1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
  // @dts-jest:pass
  R.drop(3)([1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
  // @dts-jest:pass
  R.drop(3, 'ramda'); // => 'ram'
  // @dts-jest:pass
  R.drop(3)('ramda'); // => 'ram'
}

// @dts-jest:group dropLast
{
  // @dts-jest:pass
  R.dropLast(1, ['foo', 'bar', 'baz']); // => ['foo', 'bar']
  // @dts-jest:pass
  R.dropLast(2)(['foo', 'bar', 'baz']); // => ['foo']
  // @dts-jest:pass
  R.dropLast(3, 'ramda'); // => 'ra'
  // @dts-jest:pass
  R.dropLast(3)('ramda'); // => 'ra'
}

// @dts-jest:group dropLastWhile
{
  const lteThree = (x: number) => x <= 3;
  // @dts-jest:pass
  R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // => [1, 2, 3, 4]
}

// @dts-jest:group dropWhile
{
  const lteTwo = (x: number) =>
    x <= 2;
  // @dts-jest:pass
  R.dropWhile(lteTwo, [1, 2, 3, 4]); // => [3, 4]
  // @dts-jest:pass
  R.dropWhile(lteTwo)([1, 2, 3, 4]); // => [3, 4]
}

// @dts-jest:group either
{
  const gt10 = (x: number) => x > 10;
  const even = (x: number) => x % 2 === 0;
  // @dts-jest:pass
  R.either(gt10, even)(101); // => true
  // @dts-jest:pass
  R.either(gt10)(even)(8); // => true
}

// @dts-jest:group empty
{
  // @dts-jest:pass
  R.empty([1, 2, 3, 4, 5]); // => []
  // @dts-jest:pass
  R.empty([1, 2, 3]); // => []
  // @dts-jest:pass
  R.empty('unicorns'); // => ''
  // @dts-jest:pass
  R.empty({x: 1, y: 2}); // => {}
}

// @dts-jest:group eqBy
{
  // @dts-jest:pass
  R.eqBy(Math.abs, 5, -5); // => true
  // @dts-jest:pass
  R.eqBy(Math.abs)(5, -5); // => true
  // @dts-jest:pass
  R.eqBy(Math.abs, 5)(-5); // => true
}

// @dts-jest:group eqProps
{
  const o1 = {a: 1, b: 2, c: 3, d: 4};
  const o2 = {a: 10, b: 20, c: 3, d: 40};
  // @dts-jest:pass
  R.eqProps('a', o1, o2); // => false
  // @dts-jest:pass
  R.eqProps('c', o1, o2); // => true
  // @dts-jest:pass
  R.eqProps('c')(o1);
  // @dts-jest:pass
  R.eqProps('c', o1);
}

// @dts-jest:group equals
{
  // @dts-jest:pass
  R.equals(1, 1); // => true
  // @dts-jest:pass
  R.equals('2', '1'); // => false
  // @dts-jest:pass
  R.equals([1, 2, 3], [1, 2, 3]); // => true

  const a: any = {}; a.v = a;
  const b: any = {}; b.v = b;
  // @dts-jest:pass
  R.equals(a, b); // => true
}

// @dts-jest:group evolve
{
  const tomato = {firstName: 'Tomato ', data: {elapsed: 100, remaining: 1400}, id: 123};
  const transformations = {
    firstName: R.trim,
    lastName: R.trim, // Will not get invoked.
    data: {elapsed: R.add(1), remaining: R.add(-1)},
  };
  // @dts-jest:pass
  R.evolve(transformations, tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123}
  // @dts-jest:pass
  R.evolve(transformations)(tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123}
}

// ---------------------------------------------------------------------

const double = (x: number): number => x + x;

const shout = (x: number): string =>
  x >= 10
        ? 'big'
        : 'small';

// check type information is not lost for lists
const onlyNumberList = (xs: number[]): number[] =>
  xs;

// check type information is not lost for simple objects
const onlyNumberObj = (xs: {[key: string]: number}): {[key: string]: number} =>
  xs;

class F {
  public x = 'X';
  public y = 'Y';
}

// @dts-jest:group:skip propIs
{
  // @dts-jest:pass
  R.propIs(Number, 'x', {x: 1, y: 2}); // => true
  // @dts-jest:pass
  R.propIs(Number, 'x')({x: 1, y: 2}); // => true
  // @dts-jest:pass
  R.propIs(Number)('x', {x: 1, y: 2}); // => true
  // @dts-jest:pass
  R.propIs(Number)('x')({x: 1, y: 2}); // => true
  // @dts-jest:pass
  R.propIs(Number, 'x', {x: 'foo'}); // => false
  // @dts-jest:pass
  R.propIs(Number, 'x', {}); // => false
}

// @dts-jest:group:skip type
{
  // @dts-jest:pass
  R.type({}); // => 'Object'
  // @dts-jest:show string
  R.type(1); // => 'Number'
  // @dts-jest:show string
  R.type(false); // => 'Boolean'
  // @dts-jest:show string
  R.type('s'); // => 'String'
  // @dts-jest:show string
  R.type(null); // => 'Null'
  // @dts-jest:pass
  R.type([]); // => 'Array'
  // @dts-jest:pass
  R.type(/[A-z]/); // => 'RegExp'
}

// @dts-jest:group:skip unary, binary, nAry
{
  const takesNoArg = () => true;
  const takesOneArg = (a: number) => [a];
  const takesTwoArgs = (a: number, b: number) => [a, b];
  const takesThreeArgs = (a: number, b: number, c: number) => [a, b, c];

  const addFourNumbers = (a: number, b: number, c: number, d: number): number =>
    a + b + c + d;

  const curriedFourNumbers = R.curry(addFourNumbers);
  // @dts-jest:pass
  curriedFourNumbers;
  // @dts-jest:pass
  curriedFourNumbers(1);
  // @dts-jest:pass
  curriedFourNumbers(1)(2);
  // @dts-jest:show <T1,R>(v1: T1) => R
  curriedFourNumbers(1)(2)(3);
  // @dts-jest:show <T1,R>(v1: T1) => R
  curriedFourNumbers(1, 2, 4);
  // @dts-jest:pass
  curriedFourNumbers(1)(2)(3)(4);
  // @dts-jest:pass
  curriedFourNumbers(1, 2)(3, 4);
  // @dts-jest:pass
  curriedFourNumbers(1, 2, 3)(4);

  // @dts-jest:pass
  R.nAry(0, takesNoArg);
  // @dts-jest:pass
  R.nAry(0, takesOneArg);
  // @dts-jest:show (a: number) => number[]
  R.nAry(1, takesTwoArgs);
  // @dts-jest:show (a: number) => number[]
  R.nAry(1, takesThreeArgs);

  // @dts-jest:pass
  R.unary(takesOneArg);
  // @dts-jest:pass
  R.unary(takesTwoArgs);
  // @dts-jest:pass
  R.unary(takesThreeArgs);

  // @dts-jest:pass
  R.binary(takesTwoArgs);
  // @dts-jest:pass
  R.binary(takesThreeArgs);

  const addTwoNumbers = (a: number, b: number) => a + b;
  // @dts-jest:show CurriedFunction2<number, number, number>
  const addTwoNumbersCurried = R.curry(addTwoNumbers);

  const inc = addTwoNumbersCurried(1);
  // @dts-jest:pass
  inc(2);
  // @dts-jest:pass
  addTwoNumbersCurried(2, 3);
}

// @dts-jest:group:skip uncurry
{
  const addFour = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
  const uncurriedAddFour = R.uncurryN<number>(4, addFour);
  // @dts-jest:pass
  uncurriedAddFour(1, 2, 3, 4); // => 10
}

// @dts-jest:group:skip unless
{
  // @dts-jest:show <a>(v: a|[a]) => [a]
  const coerceArray = R.unless(R.isArrayLike, R.of);
  // @dts-jest:show number[]
  coerceArray([1, 2, 3]); // => [1, 2, 3]
  // @dts-jest:show number[]
  coerceArray(1); // => [1]
}

// @dts-jest:group:skip nthArg
{
  // @dts-jest:show string
  R.nthArg(1)('a', 'b', 'c'); // => 'b'
  // @dts-jest:show string
  R.nthArg(-1)('a', 'b', 'c'); // => 'c'
}

// @dts-jest:group:skip unapply
{
  // @dts-jest:show (...args: string[])=>string
  R.unapply(JSON.stringify);
  // @dts-jest:pass
  R.unapply(JSON.stringify)(1, 2, 3); // => '[1,2,3]'
}

// @dts-jest:group:skip until
{
  // @dts-jest:show number
  R.until(R.flip(R.gt)(100), R.multiply(2))(1); // => 128
}

// @dts-jest:group:skip propSatisfies
{
  const truncate = R.when(
    R.propSatisfies(R.flip(R.gt)(10), 'length'),
    R.pipe(R.take(10), R.append('…'), R.join('')),
    );
  // @dts-jest:show string
  truncate('12345'); // => '12345'
  // @dts-jest:show string
  truncate('0123456789ABC'); // => '0123456789…'
}

// @dts-jest:group:skip compose
{
  const limit10 = (x: number): boolean =>
    x >= 10;
  // @dts-jest:show (x0: number) => boolean
  R.compose(limit10, double);
  // @dts-jest:pass
  R.compose(limit10, double)(10);

  // akward example that bounces types between number and string
  const g0 = (list: number[]) => R.map(R.inc, list);
  const g1 = R.dropWhile(R.gt(10));
  const g2 = R.map((i: number) => i > 5 ? 'bigger' : 'smaller');
  const g3 = R.all((i: string) => i === 'smaller');
  // @dts-jest:show (list: number[]) => boolean
  const g = R.compose(g3, g2, g1, g0);
  // @dts-jest:show boolean
  g([1, 2, 10, 13]);
}

// @dts-jest:group:skip pipe
{
  // @dts-jest:show (x0: number) => string
  R.pipe(double, double, shout);
  // @dts-jest:pass
  R.pipe(double, double, shout)(10);

  // @dts-jest:pass
  R.pipe(
    R.split(''),
    R.adjust(R.toUpper, 0),
    R.join(''),
  )('str');

  const f = R.pipe(Math.pow, R.negate, R.inc);
  // @dts-jest:pass
  f(3, 4); // -(3^4) + 1

  // test for type degeneration if the first function has generics
  // @dts-jest:show (x0: number) => number
  R.pipe(R.identity, double);
}

// @dts-jest:group:skip pipeP
{
  // @dts-jest:show Promise<number>
  R.pipeP(
    (m: number) => Promise.resolve(R.multiply(2, m)),
    (m: number) => Promise.resolve(m / 2),
    R.multiply(2),
    )(10);
}

// @dts-jest:group:skip TODO: pipeK

// @dts-jest:group:skip invoker
{
  // @dts-jest:show string
  R.invoker(0, 'toUpperCase', 'foo');
  // @dts-jest:show string
  R.invoker(1, 'charAt', 'foo', 1);
}

// @dts-jest:group:skip juxt
{
  const range = R.juxt([Math.min, Math.max]);
  // @dts-jest:pass
  range(3, 4, 9, -3); // => [-3, 9]

  const chopped = R.juxt([R.head, R.last]);
  // @dts-jest:show string[]
  chopped('longstring'); // => ['l', 'g']
}

// forEach
// (() => {
//   let printXPlusFive = function(x, i) { console.log(i + 5); };
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// }

// @dts-jest:group:skip times
{
  const i = (x: number) => x;
  // @dts-jest:pass
  R.times(i, 5);
}

// @dts-jest:group:skip pipe
{
  const triple = (x: number): number => x * 3;
  const square = (x: number): number => x * x;
  const squareThenDoubleThenTriple = R.pipe(square, double, triple);
  // @dts-jest:pass
  squareThenDoubleThenTriple(5); // => 150
}

// @dts-jest:group:skip partial
{
  const multiply = (a: number, b: number) => a * b;

  // @dts-jest:pass
  R.partial(multiply, [2])(2); // => 4

  const greet = (salutation: string, title: string, firstName: string, lastName: string) =>
    `${salutation}, ${title} ${firstName} ${lastName}!`;
  const sayHello = R.partial(greet, ['Hello']);
  const sayHelloToMs = R.partial(sayHello, ['Ms.']);
  // @dts-jest:pass
  sayHelloToMs('Jane', 'Jones'); // => 'Hello, Ms. Jane Jones!'

  const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
  // @dts-jest:pass
  greetMsJaneJones('Hello'); // => 'Hello, Ms. Jane Jones!'
}

// @dts-jest:group:skip memoize
{
  let numberOfCalls = 0;
  const trackedAdd = (a: number, b: number) => {
    numberOfCalls += 1;
    return a + b;
  };
  const memoTrackedAdd = R.memoize(trackedAdd);

  // @dts-jest:pass
  memoTrackedAdd(1, 2); // => 3
  // @dts-jest:pass
  numberOfCalls; // => 1
  // @dts-jest:pass
  memoTrackedAdd(1, 2); // => 3
  // @dts-jest:pass
  numberOfCalls; // => 1
  // @dts-jest:pass
  memoTrackedAdd(2, 3); // => 5
  // @dts-jest:pass
  numberOfCalls; // => 2

  // Note that argument order matters
  // @dts-jest:pass
  memoTrackedAdd(2, 1); // => 3
  // @dts-jest:pass
  numberOfCalls; // => 3
}

// @dts-jest:group:skip once
{
  const addOneOnce = R.once((x: number) => x + 1);
  // @dts-jest:pass
  addOneOnce(10); // => 11
  // @dts-jest:pass
  addOneOnce(addOneOnce(50)); // => 11
}

// @dts-jest:group:skip match
{
  // @dts-jest:pass
  R.match(/([a-z]a)/g, 'bananas'); // => ['ba', 'na', 'na']
  // @dts-jest:pass
  R.match(/a/, 'b'); // => []
  // @dts-jest:fail
  R.match(/a/, null); // error with strict null checks
}

// @dts-jest:group:skip reduce
{
  const numbers = [1, 2, 3];
  const add = (a: number, b: number) =>
    a + b;
  // @dts-jest:pass
  R.reduce(add, 10, numbers); // => 16;
}

// @dts-jest:group:skip reduceRight
{
  const pairs = [['a', 1], ['b', 2], ['c', 3]];
  const flattenPairs = (acc: [string, number], pair: [string, number]) =>
    acc.concat(pair);
  // @dts-jest:show Array<number|string>
  R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
}

// @dts-jest:group:skip reduceWhile
{
  const isOdd = (x: number, acc: number) => x % 2 === 1;
  const xs = [1, 3, 5, 60, 777, 800];
  // @dts-jest:pass
  R.reduceWhile(isOdd, R.add, 0, xs); // => 9

  const ys = [2, 4, 6];
  // @dts-jest:pass
  R.reduceWhile(isOdd, R.add, 111, ys); // => 111
}

// @dts-jest:group:skip mapObjIndexed
{
  const values = {x: 1, y: 2, z: 3};
  const prependKeyAndDouble = (num: number, key: string, obj: any) => key + (num * 2).toString();
  // @dts-jest:show Dictionary<string>
  R.mapObjIndexed(prependKeyAndDouble, values); // => { x: 'x2', y: 'y4', z: 'z6' }
}

// @dts-jest:group:skip of
{
  // @dts-jest:pass
  R.of([1]); // => [[1]]
  // @dts-jest:pass
  R.of(1);
}

// @dts-jest:group:skip length
{
  // @dts-jest:pass
  R.length([1, 2, 3]); // => 3
}

// @dts-jest:group:skip addIndex, filter, reject
{
  const isEven = (n: number) =>
    n % 2 === 0;
  const filterIndexed = R.addIndex(R.filter);

  // @dts-jest:pass
  R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]

  const lastTwo = (val: number, idx: number, list: number[]) =>
    list.length - idx <= 2;
  // @dts-jest:show number[]
  filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]

  const isOdd = (n: number) =>
    n % 2 === 1;
  // @dts-jest:pass
  R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
}

// @dts-jest:group:skip take, takeWhile
{
  const isNotFour = (x: number) =>
    !(x === 4);
  // @dts-jest:pass
  R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
  // @dts-jest:pass
  R.take(2, [1, 2, 3, 4]); // => [1, 2]
}

// @dts-jest:group:skip unfold
{
  const f = (n: number) => n > 50 ? false : [-n, n + 10];
  // @dts-jest:show number[]
  R.unfold(f, 10); // => [-10, -20, -30, -40, -50]
  const b = R.unfold(f); // => [-10, -20, -30, -40, -50]
  // @dts-jest:show number[]
  b(10);
}

/*****************************************************************
 * Function category
 */

// @dts-jest:group:skip flip
{
  const mergeThree = (a: number, b: number, c: number): number[] =>
    ([] as number[]).concat(a, b, c); // strictNullChecks: must cast array to right type
  // @dts-jest:pass
  mergeThree(1, 2, 3); // => [1, 2, 3]
  const flipped = R.flip(mergeThree);
  // @dts-jest:pass
  flipped(1, 2, 3); // => [2, 1, 3]
}

/*********************
 * List category
 ********************/

// @dts-jest:group:skip filter
{
  const isEven = (n: number) =>
    n % 2 === 0;
  // filter works with lists...
  // @dts-jest:pass
  R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]
  const isEvenFn = R.filter(isEven);
  isEvenFn([1, 2, 3, 4]);
  // ... but also objects
  // @dts-jest:show Dictionary<number>
  R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, d: 4}
  // see that we did not break anything
  // and we kept type information
  // @dts-jest:pass
  onlyNumberList(R.filter(isEven, [1, 2, 3, 4]));
  // @dts-jest:show Dictionary<number>
  onlyNumberObj(R.filter(isEven, {a: 1, b: 2, c: 3, d: 4})); // strictNullChecks: Partial fails, consider Pick
}

// @dts-jest:group:skip find, propEq
{
  const xs = [{a: 1}, {a: 2}, {a: 3}];
  // @dts-jest:show Dictionary<number>
  R.find(R.propEq('a', 2))(xs); // => {a: 2}
  // @dts-jest:show undefined
  R.find(R.propEq('a', 4))(xs); // => undefined
}

// @dts-jest:group:skip find
{
  interface Task {id: number; }
  const tasks: Task[] = [];
  const f: (list: Task[]) => Task = R.find<Task>((task: Task) => task.id === 1);
  // @dts-jest:pass
  f(tasks); // works
}

// @dts-jest:group:skip findIndex
{
  interface Task {a: number; }
  const xs = [{a: 1}, {a: 2}, {a: 3}];
  const a: (list: Task[]) => number = R.findIndex(R.propEq('a', 2));
  // @dts-jest:pass
  a(xs); // => 1
  // @dts-jest:pass
  R.findIndex(R.propEq('a', 4))(xs); // => -1

  // @dts-jest:pass
  R.findIndex((x: number) => x === 1, [1, 2, 3]);
}

// @dts-jest:group:skip findLast
{
  const xs = [{a: 1, b: 0}, {a: 1, b: 1}];
  // @dts-jest:show Dictionary<number>
  R.findLast(R.propEq('a', 1))(xs); // => {a: 1, b: 1}
  // @dts-jest:show undefined
  R.findLast(R.propEq('a', 4))(xs); // => undefined
}

// @dts-jest:group:skip findLastIndex
{
  const xs = [{a: 1, b: 0}, {a: 1, b: 1}];
  // @dts-jest:pass
  R.findLastIndex(R.propEq('a', 1))(xs); // => 1
  // @dts-jest:pass
  R.findLastIndex(R.propEq('a', 4))(xs); // => -1
  // @dts-jest:show number[]
  R.findLastIndex((x: number) => x === 1, [1, 2, 3]);
}

// @dts-jest:group:skip pathEq
{
  const user1 = {address: {zipCode: 90210}};
  const user2 = {address: {zipCode: 55555}};
  const user3 = {name: 'Bob'};
  const users = [user1, user2, user3];
  const isFamous = R.pathEq(['address', 'zipCode'], 90210);
  // @dts-jest:show Object[]
  R.filter(isFamous, users); // => [ user1 ]
}

// @dts-jest:group:skip propEq
{
  const xs: {[key: string]: string} = {a: '1', b: '0'};
  // @dts-jest:pass
  R.propEq('a', '1', xs); // => true
  // @dts-jest:pass
  R.propEq('a', '4', xs); // => false
}
{
  const xs: {[key: string]: number} = {a: 1, b: 0};
  // @dts-jest:pass
  R.propEq('a', 1, xs); // => true
  // @dts-jest:pass
  R.propEq('a', 4, xs); // => false
}
{
  const xs = {a: '1', b: '0'};
  // @dts-jest:pass
  R.propEq('a', '1', xs); // => true
  // @dts-jest:pass
  R.propEq('a', '4', xs); // => false
}
{
  const xs = {a: 1, b: 0};
  // @dts-jest:pass
  R.propEq('a', 1, xs); // => true
  // @dts-jest:pass
  R.propEq('a', 4, xs); // => false
}
interface Obj { a: number; b: number; }
{
  const xs: Obj = {a: 1, b: 0};
  // @dts-jest:pass
  R.propEq('a', 1, xs); // => true
  // @dts-jest:pass
  R.propEq('a', 4, xs); // => false
}

// @dts-jest:group:skip forEach
{
  const printXPlusFive = (x: number) => { console.log(x + 5); };
  // @dts-jest:pass
  R.forEach(printXPlusFive, [1, 2, 3]); // => [1, 2, 3]
  // @dts-jest:pass
  R.forEach(printXPlusFive)([1, 2, 3]); // => [1, 2, 3]
  // => 6
  // => 7
  // => 8
}

// @dts-jest:group:skip forEach
{
  const printKeyConcatValue = (value: any, key: string, obj: any) =>
    console.log(`${key}:${value}`);
  // @dts-jest:show {x: 1, y: 2}
  R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2});
  // @dts-jest:show {x: 1, y: 2}
  R.forEachObjIndexed(printKeyConcatValue)({x: 1, y: 2});
  // @dts-jest:show [1, 2]
  R.forEachObjIndexed(printKeyConcatValue, [1, 2]);
  // @dts-jest:show [1, 2]
  R.forEachObjIndexed(printKeyConcatValue)([1, 2]);
}

// @dts-jest:group:skip groupBy
{
  const byGrade = R.groupBy((student: {score: number; name: string}) => {
    const score = student.score;
    return score < 65 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' : 'A';
  });
  const students = [{name: 'Abby', score: 84},
                    {name: 'Eddy', score: 58},
                    {name: 'Jack', score: 69}];
  // @dts-jest:show Dictionary<Object[]>
  byGrade(students);
}

// @dts-jest:group:skip groupWith
{
  // @dts-jest:pass
  R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
  // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

  // @dts-jest:pass
  R.groupWith((a: number, b: number) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
  // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

  const isVowel = (a: string) => R.contains(a, 'aeiou') ? a : '';
  // @dts-jest:pass
  R.groupWith(R.eqBy<string>(isVowel), 'aestiou');
  // ['ae', 'st', 'iou']
}

// @dts-jest:group:skip head
{
  // @dts-jest:show string
  R.head(['fi', 'fo', 'fum']); // => 'fi'
  // @dts-jest:show number
  R.head([10, 'ten']); // => 10
  // @dts-jest:show string
  R.head(['10', 10]); // => '10'
}

// @dts-jest:group:skip indexBy
{
  const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
  // @dts-jest:show Dictionary<Object>
  R.indexBy(R.prop('id'), list);
  // @dts-jest:show Dictionary<Object>
  R.indexBy(R.prop('id'))(list);
  // @dts-jest:show Dictionary<Object>
  R.indexBy<{id: string}>(R.prop('id'))(list);
}

// @dts-jest:group:skip indexOf
{
  // @dts-jest:pass
  R.indexOf(3, [1, 2, 3, 4]); // => 2
  // @dts-jest:pass
  R.indexOf(10)([1, 2, 3, 4]); // => -1
}

// @dts-jest:group:skip init
{
  // @dts-jest:pass
  R.init(['fi', 'fo', 'fum']); // => ['fi', 'fo']
}

// @dts-jest:group:skip insert
{
  // @dts-jest:pass
  R.insert(2, 5, [1, 2, 3, 4]); // => [1,2,5,3,4]
  // @dts-jest:pass
  R.insert(2)(5, [1, 2, 3, 4]); // => [1,2,5,3,4]
  // @dts-jest:pass
  R.insert(2, 5)([1, 2, 3, 4]); // => [1,2,5,3,4]
  // @dts-jest:pass
  R.insert(2)(5)([1, 2, 3, 4]); // => [1,2,5,3,4]
}

// @dts-jest:group:skip insertAll
{
  // @dts-jest:pass
  R.insertAll(2, [10, 11, 12], [1, 2, 3, 4]);
  // @dts-jest:pass
  R.insertAll(2)([10, 11, 12], [1, 2, 3, 4]);
  // @dts-jest:pass
  R.insertAll(2, [10, 11, 12])([1, 2, 3, 4]);
  // @dts-jest:pass
  R.insertAll(2)([10, 11, 12])([1, 2, 3, 4]);
}

// @dts-jest:group:skip intersection
{
  // @dts-jest:pass
  R.intersection([1, 2, 3, 4], [7, 6, 5, 4, 3]); // => [4, 3]
  // @dts-jest:pass
  R.intersection([1, 2, 3, 4])([7, 6, 5, 4, 3]); // => [4, 3]
  // @dts-jest:pass
  R.intersection([1, 2, 4], [1, 2, 3]); // => [1,2]
  // @dts-jest:pass
  R.intersection([1, 2, 4])([1, 2, 3]); // => [1,2]
}

// @dts-jest:group:skip intersectionWith
{
  const buffaloSpringfield = [
      {id: 824, name: 'Richie Furay'},
      {id: 956, name: 'Dewey Martin'},
      {id: 313, name: 'Bruce Palmer'},
      {id: 456, name: 'Stephen Stills'},
      {id: 177, name: 'Neil Young'},
  ];
  const csny = [
      {id: 204, name: 'David Crosby'},
      {id: 456, name: 'Stephen Stills'},
      {id: 539, name: 'Graham Nash'},
      {id: 177, name: 'Neil Young'},
  ];

  // @dts-jest:show { id: number, name: string }[]
  R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
  // => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
  // @dts-jest:show { id: number, name: string }[]
  R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
  // => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
  // @dts-jest:show { id: number, name: string }[]
  R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield, csny);
  // @dts-jest:show { id: number, name: string }[]
  R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield)(csny);
}

// @dts-jest:group:skip into
{
  const numbers = [1, 2, 3, 4];
  const transducer = R.compose(R.map(R.add(1)), R.take(2));

  // @dts-jest:show number[]
  R.into([], transducer, numbers); // => [2, 3]
  // @dts-jest:show number[]
  R.into([])(transducer, numbers); // => [2, 3]
  // @dts-jest:show number[]
  R.into([], transducer)(numbers); // => [2, 3]

  const intoArray = R.into([]);
  // @dts-jest:show number[]
  intoArray(transducer, numbers); // => [2, 3]
  // @dts-jest:show number[]
  intoArray(transducer)(numbers); // => [2, 3]
}

// @dts-jest:group:skip join
{
  const spacer = R.join(' ');
  // @dts-jest:pass
  spacer(['a', 2, 3.4]); // => 'a 2 3.4'
  // @dts-jest:pass
  R.join('|', [1, 2, 3]); // => '1|2|3'
}

// @dts-jest:group:skip last
{
  // @dts-jest:show string
  R.last(['fi', 'fo', 'fum']); // => 'fum'
}

// @dts-jest:group:skip lastIndexOf
{
  R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]); // => 6
  R.lastIndexOf(10, [1, 2, 3, 4]); // => -1
  R.lastIndexOf(10)([1, 2, 3, 4]); // => -1
}

// @dts-jest:group:skip length
{
  // @dts-jest:pass
  R.length([]); // => 0
  // @dts-jest:pass
  R.length([1, 2, 3]); // => 3
}

// @dts-jest:group:skip lensIndex, set, view, over
{
  const headLens = R.lensIndex(0);
  // @dts-jest:show number
  headLens([10, 20, 30, 40]); // => 10
  // @dts-jest:show Array<number|string>
  headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40]
  // @dts-jest:show string
  R.view(headLens, ['a', 'b', 'c']); // => 'a'
  // @dts-jest:show string[]
  R.set(headLens, 'x', ['a', 'b', 'c']); // => ['x', 'b', 'c']
  // @dts-jest:show string[]
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
}

// @dts-jest:group:skip map
{
  const arrayify = <T>(v: T): T[] => [v];
  // homogeneous array
  // @dts-jest:pass
  R.map(double, [1, 2, 3]); // => [2, 4, 6]
  // @dts-jest:pass
  R.map(double)([1, 2, 3]); // => [2, 4, 6]
  // homogeneous object
  // @dts-jest:show Dictionary<number>
  R.map(double, {a: 1, b: 2, c: 3}); // => { a: 2, b: 4, c: 6 }
  // @dts-jest:show Dictionary<number>
  R.map(double)({a: 1, b: 2, c: 3}); // => { a: 2, b: 4, c: 6 }
  // heterogeneous array
  // @dts-jest:show [number[], string[]]
  R.map(arrayify, [1, 'a']); // => [[1], ['a']]
  // @dts-jest:show [number[], string[]]
  R.map(arrayify)([1, 'a']); // => [[1], ['a']]
  // heterogeneous object
  // @dts-jest:show { a: number[], b: string[] }
  R.map(arrayify, {a: 1, b: 'c'}); // => { a: [1], b: ['c'] }
  // @dts-jest:show { a: number[], b: string[] }
  R.map(arrayify)({a: 1, b: 'c'}); // => { a: [1], b: ['c'] }

  // functor
  // I'm sorry, I have no clue how to make this example work with proper functor typing
  // const stringFunctor = {
  //   map: (fn: (c: number) => number) => {
  //     let chars = 'Ifmmp!Xpsme'.split('');
  //     return chars.map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join('');
  //   }
  // };
  // let s = R.map((x: number) => x-1, stringFunctor); // => 'Hello World'
}

// @dts-jest:group:skip mapAccum
{
  const digits = ['1', '2', '3', '4'];
  const append = (a: string, b: string): [string, string] =>
    [a + b, a + b];
  // @dts-jest:show Array<string[]|string>
  R.mapAccum(append, '0', digits); // => ['01234', ['01', '012', '0123', '01234']]
  // @dts-jest:show Array<string[]|string>
  R.mapAccum(append)('0', digits); // => ['01234', ['01', '012', '0123', '01234']]
  // @dts-jest:show Array<string[]|string>
  R.mapAccum(append, '0')(digits); // => ['01234', ['01', '012', '0123', '01234']]
  // @dts-jest:show Array<string[]|string>
  R.mapAccum(append)('0')(digits); // => ['01234', ['01', '012', '0123', '01234']]
}

// @dts-jest:group:skip mapAccumRight
{
  const digits = ['1', '2', '3', '4'];
  const append = (a: string, b: string): [string, string] =>
    [a + b, a + b];
  // @dts-jest:show Array<string|string[]>
  R.mapAccumRight(append, '0', digits); // => ['04321', ['04321', '0432', '043', '04']]
  // @dts-jest:show Array<string|string[]>
  R.mapAccumRight(append)('0', digits); // => ['04321', ['04321', '0432', '043', '04']]
  // @dts-jest:show Array<string|string[]>
  R.mapAccumRight(append, '0')(digits); // => ['04321', ['04321', '0432', '043', '04']]
  // @dts-jest:show Array<string|string[]>
  R.mapAccumRight(append)('0')(digits); // => ['04321', ['04321', '0432', '043', '04']]
}

// @dts-jest:group:skip none
{
  // @dts-jest:show boolean
  R.none(R.isNaN, [1, 2, 3]); // => true
  // @dts-jest:show boolean
  R.none(R.isNaN, [1, 2, 3, NaN]); // => false
  // @dts-jest:show boolean
  R.none(R.isNaN)([1, 2, 3, NaN]); // => false
}

// @dts-jest:group:skip nth
{
  const list = ['foo', 'bar', 'baz', 'quux'];
  // @dts-jest:show string
  R.nth(1, list); // => 'bar'
  // @dts-jest:show string
  R.nth(-1, list); // => 'quux'
  // @dts-jest:show undefined
  R.nth(-99, list); // => undefined
  // @dts-jest:show undefined
  R.nth(-99)(list); // => undefined
}

// @dts-jest:group:skip partition, contains
{
  // @dts-jest:show [string[], string[]]
  R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
  // @dts-jest:show [string[], string[]]
  R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
  // @dts-jest:pass
  R.partition((x: number) => x > 2, [1, 2, 3, 4]);
  // @dts-jest:pass
  R.partition((x: number) => x > 2)([1, 2, 3, 4]);
  // @dts-jest:show Object[]
  R.partition(R.contains('s'), {a: 'sss', b: 'ttt', foo: 'bars'}); // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' } ]
}

// @dts-jest:group:skip pluck
{
  // @dts-jest:pass
  R.pluck('a', [{a: 1}, {a: 2}]); // => [1, 2]
  // @dts-jest:show number[]
  R.pluck(0, [[1, 2], [3, 4]]); // => [1, 3]
  // @dts-jest:pass
  R.pluck('a')([{a: 1}, {a: 2}]); // => [1, 2]
  // @dts-jest:show number[]
  R.pluck(0)([[1, 2], [3, 4]]); // => [1, 3]
}

// @dts-jest:group:skip prepend
{
  // @dts-jest:pass
  R.prepend('fee', ['fi', 'fo', 'fum']); // => ['fee', 'fi', 'fo', 'fum']
  // @dts-jest:pass
  R.prepend('fee')(['fi', 'fo', 'fum']); // => ['fee', 'fi', 'fo', 'fum']
}

// @dts-jest:group:skip range
{
  // @dts-jest:pass
  R.range(1, 5); // => [1, 2, 3, 4]
  // @dts-jest:pass
  R.range(50)(53); // => [50, 51, 52]
}

// @dts-jest:group:skip reduce
{
  const numbers = [1, 2, 3];
  const add = (a: number, b: number) =>
    a + b;
  // @dts-jest:pass
  R.reduce(add, 10, numbers); // => 16
  // @dts-jest:pass
  R.reduce(add)(10, numbers); // => 16
  // @dts-jest:pass
  R.reduce(add, 10)(numbers); // => 16
}

// @dts-jest:group:skip reduceBy

interface Student {
  name: string;
  score: number;
}
{
  const reduceToNamesBy = R.reduceBy((acc: string[], student: Student) => acc.concat(student.name), []);
  const namesByGrade = reduceToNamesBy((student: Student) => {
    const score = student.score;
    return score < 65 ? 'F' :
                 score < 70 ? 'D' :
                 score < 80 ? 'C' :
                 score < 90 ? 'B' : 'A';
  });
  const students = [{name: 'Lucy', score: 92},
                    {name: 'Drew', score: 85},
                    {name: 'Bart', score: 62}];
  // @dts-jest:show Dictionary<string[]>
  namesByGrade(students);
  // {
  //   'A': ['Lucy'],
  //   'B': ['Drew']
  //   'F': ['Bart']
  // }
}

// @dts-jest:group:skip reduceRight
interface KeyValuePair<K, V> extends Array<K | V> { 0: K; 1: V; }
type Pair = KeyValuePair<string, number>;
{
  const pairs: Pair[] = [['a', 1], ['b', 2], ['c', 3]];
  const flattenPairs = (pair: Pair, acc: Pair[]): Pair[] =>
    acc.concat(pair);
  // @dts-jest:show Array<string[]|string>
  R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
  // @dts-jest:show Array<string[]|string>
  R.reduceRight(flattenPairs, [])(pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
  // @dts-jest:show Array<string[]|string>
  R.reduceRight(flattenPairs)([], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
}

// @dts-jest:group:skip reject
{
  const isOdd = (n: number) => n % 2 === 1;
  // @dts-jest:pass
  R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
  // @dts-jest:pass
  R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
}

// @dts-jest:group:skip rejectIndexed
{
  const lastTwo = (val: number, idx: number, list: number[]) =>
    list.length - idx <= 2;
  const rejectIndexed = R.addIndex(R.reject);
  // @dts-jest:show number[]
  rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
  // @dts-jest:show number[]
  rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
}

// @dts-jest:group:skip remove
{
  // @dts-jest:pass
  R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
  // @dts-jest:pass
  R.remove(2, 3)([1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
  // @dts-jest:pass
  R.remove(2)(3, [1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
}

// @dts-jest:group:skip repeat
{
  // @dts-jest:pass
  R.repeat('hi', 5); // => ['hi', 'hi', 'hi', 'hi', 'hi']
  const obj = {};
  const repeatedObjs = R.repeat(obj, 5); // => [{}, {}, {}, {}, {}]
  // @dts-jest:pass
  repeatedObjs[0] === repeatedObjs[1]; // => true
}

// @dts-jest:group:skip reverse
{
  // @dts-jest:pass
  R.reverse([1, 2, 3]); // => [3, 2, 1]
  // @dts-jest:pass
  R.reverse([1, 2]); // => [2, 1]
  // @dts-jest:pass
  R.reverse([1]); // => [1]
  // @dts-jest:show number[]
  R.reverse([]); // => []
}

// @dts-jest:group:skip scan
{
  const numbers = [1, 2, 3, 4];
  // @dts-jest:pass
  R.scan(R.multiply, 1, numbers); // => [1, 1, 2, 6, 24]
  // @dts-jest:pass
  R.scan(R.multiply, 1)(numbers); // => [1, 1, 2, 6, 24]
  // @dts-jest:pass
  R.scan(R.multiply)(1, numbers); // => [1, 1, 2, 6, 24]
}

// @dts-jest:group:skip slice
{
  const xs = R.range(0, 10);
  // @dts-jest:pass
  R.slice(2, 5, xs); // => [2, 3, 4]
  // @dts-jest:pass
  R.slice(2, 5)(xs); // => [2, 3, 4]
  // @dts-jest:pass
  R.slice(2)(5, xs); // => [2, 3, 4]

  const str = 'Hello World';
  // @dts-jest:pass
  R.slice(2, 5, str); // => 'llo'
  // @dts-jest:pass
  R.slice(2, 5)(str); // => 'llo'
  // @dts-jest:pass
  R.slice(2)(5, str); // => 'llo'
}

// @dts-jest:group:skip sort
{
  const diff = (a: number, b: number) => a - b;
  // @dts-jest:pass
  R.sort(diff, [4, 2, 7, 5]); // => [2, 4, 5, 7]
  // @dts-jest:pass
  R.sort(diff)([4, 2, 7, 5]); // => [2, 4, 5, 7]
}

// @dts-jest:group:skip tail
{
  // @dts-jest:pass
  R.tail(['fi', 'fo', 'fum']); // => ['fo', 'fum']
  // @dts-jest:pass
  R.tail([1, 2, 3]); // => [2, 3]
}

// @dts-jest:group:skip take
{
  // @dts-jest:pass
  R.take(3, [1, 2, 3, 4, 5]); // => [1,2,3]

  const members = [
    'Paul Desmond', 'Bob Bates', 'Joe Dodge', 'Ron Crotty', 'Lloyd Davis', 'Joe Morello', 'Norman Bates',
    'Eugene Wright', 'Gerry Mulligan', 'Jack Six', 'Alan Dawson', 'Darius Brubeck', 'Chris Brubeck',
    'Dan Brubeck', 'Bobby Militello', 'Michael Moore', 'Randy Jones',
  ];
  const takeFive = R.take(5);
  // @dts-jest:pass
  takeFive(members); // => ['Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis']
}
{
  // @dts-jest:pass
  R.take(3, 'Example'); // => 'Exa'

  const takeThree = R.take(3);
  // @dts-jest:pass
  takeThree('Example'); // => 'Exa'
}

// @dts-jest:group:skip takeLast
{
  // @dts-jest:pass
  R.takeLast(1, ['foo', 'bar', 'baz']); // => ['baz']
  // @dts-jest:pass
  R.takeLast(2)(['foo', 'bar', 'baz']); // => ['bar', 'baz']
  // @dts-jest:pass
  R.takeLast(3, 'ramda'); // => 'mda'
  // @dts-jest:pass
  R.takeLast(3)('ramda'); // => 'mda'
}

// @dts-jest:group:skip takeLastWhile
{
  const isNotOne = (x: number) => x !== 1;
  // @dts-jest:pass
  R.takeLastWhile(isNotOne, [1, 2, 3, 4]); // => [2, 3, 4]
  // @dts-jest:pass
  R.takeLastWhile(isNotOne)([1, 2, 3, 4]); // => [2, 3, 4]
}

// @dts-jest:group:skip takeWhile
{
  const isNotFour = (x: number) =>
    !(x === 4);
  // @dts-jest:pass
  R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
  // @dts-jest:pass
  R.takeWhile(isNotFour)([1, 2, 3, 4]); // => [1, 2, 3]
}

// @dts-jest:group:skip tap
{
  const sayX = (x: number) => console.log(`x is ${x}`);
  // @dts-jest:pass
  R.tap(sayX, 100); // => 100
}

// @dts-jest:group:skip test
{
  // @dts-jest:pass
  R.test(/^x/, 'xyz'); // => true
  // @dts-jest:pass
  R.test(/^y/)('xyz'); // => false
}

// @dts-jest:group:skip times
{
  // @dts-jest:pass
  R.times(R.identity, 5); // => [0, 1, 2, 3, 4]
  // @dts-jest:pass
  R.times(R.identity)(5); // => [0, 1, 2, 3, 4]
}

// @dts-jest:group:skip toString
{
  class Point {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    public toString() {
      return `new Point(${this.x}, ${this.y})`;
    }
  }
  // @dts-jest:pass
  R.toString(new Point(1, 2)); // => 'new Point(1, 2)'
  // @dts-jest:pass
  R.toString(42); // => '42'
  // @dts-jest:pass
  R.toString('abc'); // => ''abc''
  // @dts-jest:pass
  R.toString([1, 2, 3]); // => '[1, 2, 3]'
  // @dts-jest:pass
  R.toString({foo: 1, bar: 2, baz: 3}); // => '{'bar': 2, 'baz': 3, 'foo': 1}'
  // @dts-jest:pass
  R.toString(new Date('2001-02-03T04: 05: 06Z')); // => 'new Date('2001-02-03T04: 05: 06.000Z')'
}

// @dts-jest:group:skip transduce
{
  const numbers = [1, 2, 3, 4];
  const transducer = R.compose(R.map(R.add(1)), R.take(2));
  const fn = R.flip<number, number[], number[]>(R.append);
  // @dts-jest:show number[]
  R.transduce(transducer, fn, [] as number[], numbers); // => [2, 3] // strictNullChecks: must annotate empty array type
  // @dts-jest:show number[]
  R.transduce(transducer, fn, [] as number[])(numbers); // => [2, 3]
  // @dts-jest:show number[]
  R.transduce(transducer, fn)([] as number[], numbers); // => [2, 3]
  // @dts-jest:show number[]
  R.transduce(transducer)(fn, [] as number[], numbers); // => [2, 3]
}

// // traverse
// () => {
//   // Returns `Nothing` if the given divisor is `0`
//   safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
//
//   R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); // => Just([5, 2.5, 2])
//   R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); // => Nothing
// }

// @dts-jest:group:skip transpose
{
  // @dts-jest:show any[][]
  R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]); // => [[1, 2, 3], ['a', 'b', 'c']]
  // @dts-jest:show any[][]
  R.transpose([[1, 2, 3], ['a', 'b', 'c']]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
  // @dts-jest:pass
  R.transpose([[10, 11], [20], [], [30, 31, 32]]); // => [[10, 20, 30], [11, 31], [32]]
}

// @dts-jest:group:skip tryCatch
{
  // @dts-jest:show boolean
  R.tryCatch<boolean>(R.prop('x'), R.F)({x: true}); // => true
  // @dts-jest:show boolean
  R.tryCatch<boolean>(R.prop('x'), R.F)(null); // => false
}

// @dts-jest:group:skip uniq
{
  // @dts-jest:pass
  R.uniq([1, 1, 2, 1]); // => [1, 2]
  // @dts-jest:show Object[]
  R.uniq([{}, {}]); // => [{}, {}]
  // @dts-jest:show any[]
  R.uniq([1, '1']); // => [1, '1']
}

// @dts-jest:group:skip uniqWith
{
  const strEq = (a: any, b: any) => String(a) === String(b);
  // @dts-jest:show number[]
  R.uniqWith(strEq, [1, '1', 2, 1]); // => [1, 2]
  // @dts-jest:show number[]
  R.uniqWith(strEq)([1, '1', 2, 1]); // => [1, 2]
  // @dts-jest:show Object[]
  R.uniqWith(strEq)([{}, {}]); // => [{}]
  // @dts-jest:show number[]
  R.uniqWith(strEq)([1, '1', 1]); // => [1]
  // @dts-jest:show string[]
  R.uniqWith(strEq)(['1', 1, 1]); // => ['1']
}

// @dts-jest:group:skip unnest, equals
{
  // @dts-jest:pass
  R.equals(R.unnest([1, [2], [[3]]]), [1, 2, [3]]); // => true
  // @dts-jest:pass
  R.equals(R.unnest([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]); // => true
}

// @dts-jest:group:skip xprod
{
  // @dts-jest:pass
  R.xprod([1, 2], ['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
  // @dts-jest:pass
  R.xprod([1, 2])(['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
}

// @dts-jest:group:skip zip
{
  // @dts-jest:pass
  R.zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
  // @dts-jest:pass
  R.zip([1, 2, 3])(['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
}

// @dts-jest:group:skip zipObj
{
  // @dts-jest:show Dictionary<number>
  R.zipObj(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
  // @dts-jest:show Dictionary<number>
  R.zipObj(['a', 'b', 'c'])([1, 2, 3]); // => {a: 1, b: 2, c: 3}
}

// @dts-jest:group:skip zipWith
{
  const f = (x: number, y: string) => {
  // ...
  };
  // @dts-jest:show any[]
  R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
  // @dts-jest:show any[]
  R.zipWith(f)([1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
  // @dts-jest:show any[]
  R.zipWith(f, [1, 2, 3])(['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
}

/*****************************************************************
 * Object category
 */

// @dts-jest:group:skip has
{
  const hasName = R.has('name');
  // @dts-jest:pass
  hasName({name: 'alice'}); // => true
  // @dts-jest:pass
  hasName({name: 'bob'}); // => true
  // @dts-jest:pass
  hasName({}); // => false

  const point = {x: 0, y: 0};
  const pointHas = R.flip(R.has)(point);
  // @dts-jest:show boolean
  pointHas('x'); // => true
  // @dts-jest:show boolean
  pointHas('y'); // => true
  // @dts-jest:show boolean
  pointHas('z'); // => false
}

// @dts-jest:group:skip hasIn
class Rectangle {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  public area(): number {
    return this.width * this.height;
  }
}
{
  const square = new Rectangle(2, 2);
  // @dts-jest:pass
  R.hasIn('width', square); // => true
  // @dts-jest:pass
  R.hasIn('area', square); // => true
  // @dts-jest:show boolean
  R.flip(R.hasIn)(square)('area'); // => true
}

// @dts-jest:group:skip invert
{
  const raceResultsByFirstName = {
    first: 'alice',
    second: 'jake',
    third: 'alice',
  };
  // @dts-jest:pass
  R.invert(raceResultsByFirstName);
  // => { 'alice': ['first', 'third'], 'jake': ['second'] }
}

// @dts-jest:group:skip invertObj
{
  const raceResults0 = {
    first: 'alice',
    second: 'jake',
  };
  // @dts-jest:pass
  R.invertObj(raceResults0);
  // => { 'alice': 'first', 'jake': 'second' }

  // Alternatively:
  const raceResults1 = ['alice', 'jake'];
  // @dts-jest:pass
  R.invertObj(raceResults1);
  // => { 'alice': '0', 'jake': '1' }
}

// @dts-jest:group:skip keys
{
  // @dts-jest:show string[]
  R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c']
}

// @dts-jest:group:skip keysIn
{
  const f = new F();
  // @dts-jest:show string[]
  R.keysIn(f); // => ['x', 'y']
}

// @dts-jest:group:skip lens
{
  // let xLens = R.lens(R.prop('x'), R.assoc('x'));
  // let xLens = R.lens<number, xy>(R.prop('x'), R.assoc('x'));
  const xLens = R.lens<number>(R.prop('x'))(R.assoc('x'));
  // ^ works with only 1 generic, for curried version managed to split the inferred generic from the manual generic
  // @dts-jest:show number
  R.view(xLens, {x: 1, y: 2}); // => 1
  // @dts-jest:show { x: number, y: number }
  R.set(xLens, 4, {x: 1, y: 2}); // => {x: 4, y: 2}
  // @dts-jest:show { x: number, y: number }
  R.set(xLens)(4, {x: 1, y: 2}); // => {x: 4, y: 2}
  // @dts-jest:show { x: number, y: number }
  R.set(xLens, 4)({x: 1, y: 2}); // => {x: 4, y: 2}
  // @dts-jest:show { x: number, y: number }
  R.over(xLens, R.negate, {x: 1, y: 2}); // => {x: -1, y: 2}
  // @dts-jest:show { x: number, y: number }
  R.over(xLens, R.negate)({x: 1, y: 2}); // => {x: -1, y: 2}
  // @dts-jest:show { x: number, y: number }
  R.over(xLens)(R.negate, {x: 1, y: 2}); // => {x: -1, y: 2}
}

// @dts-jest:group:skip lensIndex
{
  const headLens = R.lensIndex(0);
  // @dts-jest:show string
  R.view(headLens, ['a', 'b', 'c']); // => 'a'
  // @dts-jest:show string[]
  R.set(headLens, 'x', ['a', 'b', 'c']); // => ['x', 'b', 'c']
  // @dts-jest:show string[]
  R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
}

// @dts-jest:group:skip lensProp
{
  const xLens = R.lensProp('x');
  // @dts-jest:show number
  R.view(xLens, {x: 1, y: 2}); // => 1
  // @dts-jest:show Dictionary<number>
  R.set(xLens, 4, {x: 1, y: 2}); // => {x: 4, y: 2}
  // @dts-jest:show Dictionary<number>
  R.over(xLens, R.negate, {x: 1, y: 2}); // => {x: -1, y: 2}
}

// @dts-jest:group:skip lensPath
{
  const xyLens = R.lensPath(['x', 'y']);
  // @dts-jest:show number
  R.view(xyLens, {x: {y: 2, z: 3}}); // => 2
  // @dts-jest:show { [s: string]: { [s: string]: number } }
  R.set(xyLens, 4, {x: {y: 2, z: 3}}); // => {x: {y: 4, z: 3}}
  // @dts-jest:show { [s: string]: { [s: string]: number } }
  R.over(xyLens, R.negate, {x: {y: 2, z: 3}}); // => {x: {y: -2, z: 3}}
}

// @dts-jest:group:skip keys
{
  // @dts-jest:show string[]
  R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c']
}

// @dts-jest:group:skip keysIn
{
  const f = new F();
  // @dts-jest:show string[]
  R.keysIn(f); // => ['x', 'y']
}

// @dts-jest:group:skip lens
{
  const headLens = R.lens(
    function get(arr: number[]) { return arr[0]; },
    function set(val: number, arr: number[]) { return [val].concat(arr.slice(1)); },
    );
  headLens([10, 20, 30, 40]); // => 10
  // // @dts-jest:show Argument of type 'mu' is not assignable to parameter of type 'number'.
  // headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40]

  const phraseLens = R.lens(
    function get(obj: any) { return obj.phrase; },
    function set(val: string, obj: any) {
      const out = R.clone(obj);
      out.phrase = val;
      return out;
    },
    );
  const obj1 = {phrase: 'Absolute filth . . . and I LOVED it!'};
  const obj2 = {phrase: "What's all this, then?"};
  // @dts-jest:show string
  phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
  // @dts-jest:show string
  phraseLens(obj2); // => "What's all this, then?"
  // @dts-jest:show Dictionary<string>
  phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
}

// @dts-jest:group:skip lensProp
{
  const phraseLens = R.lensProp('phrase');
  const obj1 = {phrase: 'Absolute filth . . . and I LOVED it!'};
  const obj2 = {phrase: "What's all this, then?"};
  // @dts-jest:show string
  phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
  // @dts-jest:show string
  phraseLens(obj2); // => 'What's all this, then?'
  // @dts-jest:show Dictionary<string>
  phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
}

// @dts-jest:group:skip merge
{
  // @dts-jest:show Dictionary<any>
  R.merge({name: 'fred', age: 10}, {age: 40});
  // => { 'name': 'fred', 'age': 40 }
  const resetToDefault = R.flip(R.merge)({x: 0});
  // @dts-jest:show Dictionary<number>
  resetToDefault({x: 5, y: 2}); // => {x: 0, y: 2}
}

// @dts-jest:group:skip megeAll
{
  // @dts-jest:show Dictionary<number>
  R.mergeAll([{foo: 1}, {bar: 2}, {baz: 3}]); // => {foo: 1,bar: 2,baz: 3}
  // @dts-jest:show Dictionary<number>
  R.mergeAll([{foo: 1}, {foo: 2}, {bar: 2}]); // => {foo: 2,bar: 2}
}

// @dts-jest:group:skip mergeWith
{
  // @dts-jest:show { a: boolean, b: boolean, values: number[] }
  R.mergeWith(R.concat,
              {a: true, values: [10, 20]},
              {b: true, values: [15, 35]});
  // => { a: true, b: true, values: [10, 20, 15, 35] }
}

// @dts-jest:group:skip mergeWithKey
{
  const concatValues = (k: string, l: string, r: string) => k === 'values' ? R.concat(l, r) : r;
  R.mergeWithKey(concatValues,
                 {a: true, thing: 'foo', values: [10, 20]},
                 {b: true, thing: 'bar', values: [15, 35]});
  const merge = R.mergeWithKey(concatValues);
  // @dts-jest:show { a: boolean, b: boolean, values: number[], thing: string }
  merge({a: true, thing: 'foo', values: [10, 20]}, {b: true, thing: 'bar', values: [15, 35]});
}

// @dts-jest:group:skip pathOr
{
  // @dts-jest:show number
  R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); // => 2
  // @dts-jest:show number
  R.pathOr('N/A', ['a', 'b'])({a: {b: 2}}); // => 2
  // @dts-jest:show number
  R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); // => 'N/A'
  // @dts-jest:show number
  R.pathOr({c: 2})(['a', 'b'], {c: {b: 2}}); // => 'N/A'
}

// @dts-jest:group:skip pathSatisfies
{
  // @dts-jest:pass
  R.pathSatisfies((a: any) => a === 'foo', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); // => true
  // @dts-jest:pass
  R.pathSatisfies((a: any) => a === 'bar', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); // => false
  // @dts-jest:pass
  R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'], {a: {b: {c: 1}}}); // => true
  // @dts-jest:pass
  R.pathSatisfies((a: any) => a !== 1, ['a', 'b', 'c'], {a: {b: {c: 2}}}); // => true
  // @dts-jest:pass
  R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'], {a: {b: {c: 1}}}); // => true
  // @dts-jest:pass
  R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'])({a: {b: {c: 1}}}); // => true
  // @dts-jest:pass
  R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'])({a: {b: {c: 1}}}); // => true
}

// @dts-jest:group:skip pickBy
{
  const isPositive = (n: number) =>
    n > 0;
  // @dts-jest:show Dictionary<number>
  R.pickBy(isPositive, {a: 1, b: 2, c: -1, d: 0, e: 5}); // => {a: 1, b: 2, e: 5}
  const containsBackground = (val: any) =>
    val.bgcolor;
  const colors = {1: {color: 'read'}, 2: {color: 'black', bgcolor: 'yellow'}};
  // @dts-jest:show { 2: R.Dictionary<string> }
  R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}

  const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;
  // @dts-jest:show Dictionary<number>
  R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
}

// @dts-jest:group:skip pick
{
  // @dts-jest:show Dictionary<number>
  R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
  // the following should errror: e/f are not keys in these objects
  // @dts-jest:pass
  R.pick<{a: number}>(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
  // @dts-jest:pass
  R.pick(['a', 'e', 'f'])<{a: number}>({a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
  // @dts-jest:show:skip
  R.pick(['a', 'e', 'f'], [1, 2, 3, 4]); // => {}
}

// @dts-jest:group:skip objOf
{
  const matchPhrases = R.compose(
    R.objOf('must'),
    R.map(R.objOf('match_phrase')),
    );
  // @dts-jest:show { must: { match_phrase: string }[] }
  matchPhrases(['foo', 'bar', 'baz']);
}

// @dts-jest:group:skip omit
{
  // @dts-jest:show Dictionary<number>
  R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
  // @dts-jest:show Dictionary<number>
  R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
}

// @dts-jest:group:skip fromPairs
{
  // @dts-jest:pass
  R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); // => {a: 1, b: 2, c: 3}
}

// @dts-jest:group:skip pair
{
  R.pair('foo', 'bar'); // => ['foo', 'bar']
  const p = R.pair('foo', 1); // => ['foo', 'bar']
  // @dts-jest:show string
  p[0];
  // @dts-jest:pass
  p[1];
}

// @dts-jest:group:skip over, lensIndex
{
  const headLens = R.lensIndex(0);
  // @dts-jest:show string[]
  R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); // => ['FOO', 'bar', 'baz']
}

// @dts-jest:group:skip pickAll
{
  // @dts-jest:show Dictionary<number>
  R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
  // @dts-jest:show Dictionary<number>
  R.pickAll(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
  // @dts-jest:show Dictionary<number>
  R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}
  // @dts-jest:show Dictionary<number>
  R.pickAll(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}
}

// @dts-jest:group:skip pickBy
{
  const isUpperCase = (val: number, key: string) => key.toUpperCase() === key;
  // @dts-jest:show Dictionary<number>
  R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
}

// @dts-jest:group:skip project
{
  const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
  const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
  const kids = [abby, fred];
  // @dts-jest:show { name: string, grade: number }[]
  R.project(['name', 'grade'], kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
}

// @dts-jest:group:skip prop
{
  // @dts-jest:pass
  R.prop('x', {x: 100}); // => 100
  // @dts-jest:show:skip Argument of type 'x' is not assignable to parameter of type 'never'.
  R.prop('x', {}); // => undefined
}

// @dts-jest:group:skip propOr
{
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const favorite = R.prop('favoriteLibrary');
  const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

  // @dts-jest:show undefined
  favorite(alice); // => undefined
  // @dts-jest:show string
  favoriteWithDefault(alice); // => 'Ramda'
}

// @dts-jest:group:skip propSatisfies
{
  // @dts-jest:pass
  R.propSatisfies((x: number) => x > 0, 'x', {x: 1, y: 2}); // => true
  // @dts-jest:show boolean
  R.propSatisfies((x: number) => x > 0, 'x')({x: 1, y: 2}); // => true
  // @dts-jest:show boolean
  R.propSatisfies((x: number) => x > 0)('x')({x: 1, y: 2}); // => true
}

// @dts-jest:group:skip props
{
  // @dts-jest:pass
  R.props(['x', 'y'], {x: 1, y: 2}); // => [1, 2]
  // @dts-jest:show Array<number|undefined>
  R.props(['c', 'a', 'b'], {b: 2, a: 1}); // => [undefined, 1, 2]

  const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
  // @dts-jest:pass
  fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); // => 'Tony Bullet-Tooth'
}

// @dts-jest:group:skip toPairs
{
  // @dts-jest:show [string, number][]
  R.toPairs({a: 1, b: 2, c: 3}); // => [['a', 1], ['b', 2], ['c', 3]]
}

// @dts-jest:group:skip toPairsIn
{
  const f = new F();
  // @dts-jest:show [string, string][]
  R.toPairsIn(f); // => [['x','X'], ['y','Y']]
  // @dts-jest:show [string, string][]
  R.toPairsIn(f); // => [['x','X'], ['y','Y']]
}

// @dts-jest:group:skip values
{
  // @dts-jest:pass
  R.values({a: 1, b: 2, c: 3}); // => [1, 2, 3]
}

// @dts-jest:group:skip valuesIn
{
  const f = new F();
  // @dts-jest:pass
  R.valuesIn(f); // => ['X', 'Y']
}

// @dts-jest:group:skip where
{
  const spec = {x: 2};
  // @dts-jest:show boolean
  R.where(spec, {w: 10, x: 2, y: 300}); // => true
  // @dts-jest:show boolean
  R.where(spec, {x: 1, y: 'moo', z: true}); // => false
  // @dts-jest:show boolean
  R.where(spec)({w: 10, x: 2, y: 300}); // => true
  // @dts-jest:show boolean
  R.where(spec)({x: 1, y: 'moo', z: true}); // => false

  // There's no way to represent the below functionality in typescript
  // per http: //stackoverflow.com/a/29803848/632495
  // will need a work around.

  interface XY {
    x: number;
    y: number;
  }

  const spec2 = {x(val: number, obj: XY) { return val + obj.y > 10; }};
  // @dts-jest:show boolean
  R.where(spec2, {x: 2, y: 7}); // => false
  // @dts-jest:show boolean
  R.where(spec2, {x: 3, y: 8}); // => true

  const xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
  // @dts-jest:show { x: number, y: number }[]
  R.filter(R.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
  // @dts-jest:show { x: number, y: number }[]
  R.filter(R.where({x: 10}))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
}

// @dts-jest:group:skip whereEq
{
  // @dts-jest:show (v: Object) => Boolean
  const pred = R.whereEq({a: 1, b: 2});
  // @dts-jest:pass
  pred({a: 1}); // => false
  // @dts-jest:pass
  pred({a: 1, b: 2}); // => true
  // @dts-jest:pass
  pred({a: 1, b: 2, c: 3}); // => true
  // @dts-jest:pass
  pred({a: 1, b: 1}); // => false
  // @dts-jest:pass
  R.whereEq({a: 'one'}, {a: 'one'}); // => true
}

// @dts-jest:group:skip without
{
  // @dts-jest:pass
  R.without([1, 2], [1, 2, 1, 3, 4]); // => [3, 4]
}

// @dts-jest:group:skip mapIndexed, addIndex
{
  const mapIndexed = R.addIndex<string, string>(R.map);
  // @dts-jest:show string[]
  mapIndexed((val: string, idx: number) => `${idx}-${val}`)(['f', 'o', 'o', 'b', 'a', 'r']);
  // @dts-jest:show string[]
  R.mapIndexed((val: string, idx: number) => `${idx}-${val}`)(['f', 'o', 'o', 'b', 'a', 'r']);
  // => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
  // @dts-jest:show number[]
  R.mapIndexed(
    (rectangle: Rectangle, idx: number) => rectangle.area() * idx,
    [new Rectangle(1, 2), new Rectangle(4, 7)],
  ); // => [2, 56]
}

// @dts-jest:group:skip pipe, inc, negate
{
  const f = R.pipe(Math.pow, R.negate, R.inc);
  // @dts-jest:pass
  f(3, 4); // -(3^4) + 1
}

// @dts-jest:group:skip TODO: composeP

// @dts-jest:group:skip TODO: composeK

/*****************************************************************
 * Relation category
 */

// @dts-jest:group:skip identity
{
  const obj = {};

  // @dts-jest:pass
  R.identity(obj) === obj; // => true
  // @dts-jest:show number
  R.identity(1); // => 1
  // @dts-jest:pass
  R.identity([1, 2, 3]);
  // @dts-jest:pass
  R.identity(['a', 'b', 'c']);
}

// @dts-jest:group:skip identical
{
  const o = {};
  // @dts-jest:pass
  R.identical(o, o); // => true
  // @dts-jest:pass
  R.identical(1, 1); // => true
  // @dts-jest:pass
  R.identical('2', '1'); // => false
  // @dts-jest:pass
  R.identical([], []); // => false
  // @dts-jest:pass
  R.identical(0, -0); // => false
  // @dts-jest:pass
  R.identical(NaN, NaN); // => true
}

// @dts-jest:group:skip path
{
  // @dts-jest:show number
  R.path(['a', 'b'], {a: {b: 2}}); // => 2
  // @dts-jest:show number
  R.path(['a', 'b'])({a: {b: 2}}); // => 2
}

// @dts-jest:group:skip sortBy
{
  const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
  const sortByAgeDescending = R.sortBy(R.compose(R.negate, R.prop('age')));
  const sortByAgeAscending = R.sortBy(R.prop('age'));
  const alice = {
    name: 'ALICE',
    age: 101,
  };
  const bob = {
    name: 'Bob',
    age: -10,
  };
  const clara = {
    name: 'clara',
    age: 314.159,
  };
  const people = [clara, bob, alice];
  // @dts-jest:show { name: string, age: number }[]
  sortByAgeDescending(people); // => [alice, bob, clara]
  // @dts-jest:show { name: string, age: number }[]
  sortByNameCaseInsensitive(people); // => [alice, bob, clara]
  // @dts-jest:show { name: string, age: number }[]
  sortByAgeAscending(people); // => [bob, alice, clara]
}

// @dts-jest:group:skip sortWith
{
  const alice = {
    name: 'alice',
    age: 40,
  };
  const bob = {
    name: 'bob',
    age: 30,
  };
  const clara = {
    name: 'clara',
    age: 40,
  };
  const people = [clara, bob, alice];
  // @dts-jest:show typeof people
  R.sortWith(
    [
      R.descend(R.prop('age')),
      R.ascend(R.prop('name')),
    ],
    people,
  );
  const ageNameSort = R.sortWith([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name')),
  ]);
  // @dts-jest:show typeof people
  ageNameSort(people);
  // => [alice, clara, bob]
}

// @dts-jest:group:skip splitAt
{
  // @dts-jest:pass
  R.splitAt(1, [1, 2, 3]); // => [[1], [2, 3]]
  // @dts-jest:pass
  R.splitAt(1)([1, 2, 3]); // => [[1], [2, 3]]
  // @dts-jest:pass
  R.splitAt(5, 'hello world'); // => ['hello', ' world']
  // @dts-jest:pass
  R.splitAt(-1, 'foobar'); // => ['fooba', 'r']
}

// @dts-jest:group:skip splitWhen
{
  // @dts-jest:pass
  R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]); // => [[1], [2, 3, 1, 2, 3]]
  // @dts-jest:pass
  R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]); // => [[1], [2, 3, 1, 2, 3]]
}

// @dts-jest:group:skip gt
{
  // @dts-jest:pass
  R.gt(2, 6); // => false
  // @dts-jest:pass
  R.gt(2, 0); // => true
  // @dts-jest:pass
  R.gt(2, 2); // => false
  // @dts-jest:show boolean
  R.flip(R.gt)(2)(10); // => true
  // @dts-jest:show boolean
  R.gt(2)(10); // => false
}

// @dts-jest:group:skip gte
{
  // @dts-jest:pass
  R.gte(2, 6); // => false
  // @dts-jest:pass
  R.gte(2, 0); // => true
  // @dts-jest:pass
  R.gte(2, 2); // => false
  // @dts-jest:show boolean
  R.flip(R.gte)(2)(10); // => true
  // @dts-jest:show boolean
  R.gte(2)(10); // => false
}

// @dts-jest:group:skip isNaN
{
  // @dts-jest:show boolean
  R.isNaN(NaN); // => true
  // @dts-jest:show boolean
  R.isNaN(undefined); // => false
  // @dts-jest:show boolean
  R.isNaN({}); // => false
}

// @dts-jest:group:skip lt
{
  // @dts-jest:pass
  R.lt(2, 6); // => true
  // @dts-jest:pass
  R.lt(2, 0); // => false
  // @dts-jest:pass
  R.lt(2, 2); // => false
  // @dts-jest:show boolean
  R.lt(5)(10); // => true
  // @dts-jest:show boolean
  R.flip(R.lt)(5)(10); // => false // right-sectioned currying
}

// @dts-jest:group:skip lte
{
  // @dts-jest:pass
  R.lte(2, 6); // => true
  // @dts-jest:pass
  R.lte(2, 0); // => false
  // @dts-jest:pass
  R.lte(2, 2); // => true
  // @dts-jest:show boolean
  R.flip(R.lte)(2)(1); // => true
  // @dts-jest:show boolean
  R.lte(2)(10); // => true
}

// @dts-jest:group:skip mathMod
{
  // @dts-jest:pass
  R.mathMod(-17, 5); // => 3
  // @dts-jest:pass
  R.mathMod(17, 5); // => 2
  // @dts-jest:pass
  R.mathMod(17, -5); // => NaN
  // @dts-jest:pass
  R.mathMod(17, 0); // => NaN
  // @dts-jest:pass
  R.mathMod(17.2, 5); // => NaN
  // @dts-jest:pass
  R.mathMod(17, 5.3); // => NaN

  const clock = R.flip(R.mathMod)(12);
  // @dts-jest:show number
  clock(15); // => 3
  // @dts-jest:show number
  clock(24); // => 0

  const seventeenMod = R.mathMod(17);
  // @dts-jest:pass
  seventeenMod(3); // => 2
}

// @dts-jest:group:skip max
{
  // @dts-jest:show number
  R.max(7, 3); // => 7
  // @dts-jest:show string
  R.max('a', 'z'); // => 'z'
}

// @dts-jest:group:skip maxBy
{
  function cmp(obj: { x: number }) { return obj.x; }
  const a = {x: 1};
  const b = {x: 2};
  const c = {x: 3};
  const d = {x: 'a'};
  const e = {x: 'z'};
  // @dts-jest:pass
  R.maxBy(cmp, a, c); // => {x: 3}
  // @dts-jest:pass
  R.maxBy(cmp)(a, c); // => {x: 3}
  // @dts-jest:pass
  R.maxBy(cmp)(a)(b);
  // @dts-jest:fail
  R.maxBy(cmp)(d)(e);
}

// @dts-jest:group:skip mean
{
  // @dts-jest:pass
  R.mean([2, 7, 9]); // => 6
  // @dts-jest:pass
  R.mean([]); // => NaN
}

// @dts-jest:group:skip median
{
  // @dts-jest:pass
  R.median([7, 2, 10, 9]); // => 8
  // @dts-jest:pass
  R.median([]); // => NaN
}

// @dts-jest:group:skip min
{
  // @dts-jest:show number
  R.min(9, 3); // => 3
  // @dts-jest:show string
  R.min('a', 'z'); // => 'a'
}

// @dts-jest:group:skip minBy
{
  function cmp(obj: { x: number }) { return obj.x; }
  const a = {x: 1};
  const b = {x: 2};
  const c = {x: 3};
  const d = {x: 'a'};
  const e = {x: 'z'};
  // @dts-jest:show { x: number }
  R.minBy(cmp, a, b); // => {x: 1}
  // @dts-jest:show { x: number }
  R.minBy(cmp)(a, b); // => {x: 1}
  // @dts-jest:show { x: number }
  R.minBy(cmp)(a)(c);
  // @dts-jest:fail
  R.minBy(cmp, d, e);
}

// @dts-jest:group:skip modulo
{
  // @dts-jest:pass
  R.modulo(17, 3); // => 2
  // JS behavior:
  // @dts-jest:pass
  R.modulo(-17, 3); // => -2
  // @dts-jest:pass
  R.modulo(17, -3); // => 2

  const isOdd = R.flip(R.modulo)(2);
  // @dts-jest:show number
  isOdd(42); // => 0
  // @dts-jest:show number
  isOdd(21); // => 1
}

// @dts-jest:group:skip multiply
{
  // @dts-jest:pass
  R.multiply(2)(3); // => 6
  // @dts-jest:pass
  R.multiply(3)(4); // => 12
  // @dts-jest:pass
  R.multiply(2, 5); // => 10
}

// @dts-jest:group:skip negate
{
  // @dts-jest:pass
  R.negate(42); // => -42
}

// @dts-jest:group:skip product
{
  // @dts-jest:pass
  R.product([2, 4, 6, 8, 100, 1]); // => 38400
}

// @dts-jest:group:skip subtract
{
  // @dts-jest:pass
  R.subtract(10, 8); // => 2

  const minus5 = R.flip(R.subtract)(5);
  // @dts-jest:show number
  minus5(17); // => 12

  const complementaryAngle = R.subtract(90);
  // @dts-jest:pass
  complementaryAngle(30); // => 60
  // @dts-jest:pass
  complementaryAngle(72); // => 18
}

// @dts-jest:group:skip sum
{
  // @dts-jest:pass
  R.sum([2, 4, 6, 8, 100, 1]); // => 121
}

// @dts-jest:group:skip symmetricDifference
{
  // @dts-jest:pass
  R.symmetricDifference([1, 2, 3, 4], [7, 6, 5, 4, 3]); // => [1,2,7,6,5]
  // @dts-jest:pass
  R.symmetricDifference([7, 6, 5, 4, 3])([1, 2, 3, 4]); // => [7,6,5,1,2]
}

// @dts-jest:group:skip symmetricDifferenceWith
{
  const eqA = R.eqBy(R.prop('a'));
  const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  // @dts-jest:show { a: number }[]
  R.symmetricDifferenceWith(eqA, l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
  // @dts-jest:show { a: number }[]
  R.symmetricDifferenceWith(eqA)(l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
  // @dts-jest:show (a: any[]) => any[]
  R.symmetricDifferenceWith(eqA)(l1); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
}

/*****************************************************************
 * String category
 */

// @dts-jest:group:skip replace
{
  // @dts-jest:pass
  R.replace('foo', 'bar', 'foo foo foo'); // => 'bar foo foo'
  // @dts-jest:pass
  R.replace('foo', 'bar')('foo foo foo'); // => 'bar foo foo'
  // @dts-jest:pass
  R.replace('foo')('bar')('foo foo foo'); // => 'bar foo foo'
  // @dts-jest:pass
  R.replace(/foo/, 'bar', 'foo foo foo'); // => 'bar foo foo'

  // Use the 'g' (global) flag to replace all occurrences:
  // @dts-jest:pass
  R.replace(/foo/g, 'bar', 'foo foo foo'); // => 'bar bar bar'
  // @dts-jest:pass
  R.replace(/foo/g, 'bar')('foo foo foo'); // => 'bar bar bar'
  // @dts-jest:pass
  R.replace(/foo/g)('bar')('foo foo foo'); // => 'bar bar bar'
}

/*****************************************************************
 * Is category
 */

{
  // @dts-jest:pass
  R.is(Object, {}); // => true
  // @dts-jest:pass
  R.is(Object)({}); // => true
  // @dts-jest:pass
  R.is(Number, 1); // => true
  // @dts-jest:pass
  R.is(Number)(1); // => true
  // @dts-jest:pass
  R.is(Object, 1); // => false
  // @dts-jest:pass
  R.is(Object)(1); // => false
  // @dts-jest:pass
  R.is(String, 's'); // => true
  // @dts-jest:pass
  R.is(String)('s'); // => true
  // @dts-jest:pass
  R.is(String, ''); // => true
  // @dts-jest:pass
  R.is(String)(''); // => true
  // @dts-jest:pass
  R.is(Object, new Object()); // => true
  // @dts-jest:pass
  R.is(Object)(new Object()); // => true
  // @dts-jest:pass
  R.is(Object, 's'); // => false
  // @dts-jest:pass
  R.is(Object)('s'); // => false
  // @dts-jest:pass
  R.is(Number, {}); // => false
  // @dts-jest:pass
  R.is(Number)({}); // => false
}

/*****************************************************************
 * Logic category
 */

// @dts-jest:group:skip ifElse
{
  // Flatten all arrays in the list but leave other values alone.
  const flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

  // @dts-jest:pass
  flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}]
  // @dts-jest:pass
  flattenArrays([[[10], 123], [8, [10]], 'hello']); // => [[10, 123], [8, 10], 'hello']
}

// @dts-jest:group:skip isEmpty
{
  // @dts-jest:pass
  R.isEmpty([1, 2, 3]); // => false
  // @dts-jest:pass
  R.isEmpty([]); // => true
  // @dts-jest:pass
  R.isEmpty(''); // => true
  // @dts-jest:pass
  R.isEmpty(null); // => false
  // @dts-jest:pass
  R.isEmpty({}); // =>true
  // @dts-jest:pass
  R.isEmpty({a: 1}); // => false
}

// @dts-jest:group:skip not
{
  // @dts-jest:pass
  R.not(true); // => false
  // @dts-jest:pass
  R.not(false); // => true
  // @dts-jest:pass
  R.not(0); // => true
  // @dts-jest:pass
  R.not(1); // => false
}

class Why {
  public val: boolean;
  constructor(val: boolean) {
    this.val = val;
  }
  public or(x: boolean) {
    return this.val && x;
  }
}

// @dts-jest:group:skip or
{
  // @dts-jest:pass
  R.or(false, true); // => false
  // @dts-jest:show number|any[]
  R.or(0, []); // => []
  // @dts-jest:show number|any[]
  R.or(0)([]); // => []
  // @dts-jest:show string
  R.or(null, ''); // => ''

  const why = new Why(true);
  why.or(true);
  // @dts-jest:show Why|boolean
  R.or(why, false); // false
}

// @dts-jest:group:skip intersperse
{
  // @dts-jest:pass
  R.intersperse(',', ['foo', 'bar']); // => ['foo', ',', 'bar']
  // @dts-jest:pass
  R.intersperse(0, [1, 2]); // => [1, 0, 2]
  // @dts-jest:pass
  R.intersperse(0, [1]); // => [1]
}

// ISSUES:

// RESOLVED ISSUES:

{
  // #65, evolve issue
  const test = {a: 1, b: 2};
  // @dts-jest:show { a: number, b: number }
  R.evolve({a: R.add(1)}, test);
}

{
  // #73
  const filterMatrix = (v: number, m: number[][]): number[] =>
    R.chain(R.filter((c: number) => c === v), m); // return R.chain(R.filter(R.equals(v)), m)
  const b = [
    [0, 1],
    [1, 0],
  ];
  // @dts-jest:pass
  filterMatrix(1, b); // --> [1, 1]
}

// UNRESOLVED ISSUES:

{
  // #29
  // @dts-jest:show string[]
  R.pipe(R.append('a'), R.uniq)(['a', 'b', 'c']);
  // @dts-jest:show string[][]
  R.pipe(
    R.split(''),
    R.map((letter: string) => ([letter])),
  )('dave');

  // @dts-jest:pass
  R.pipe(
    R.prop<string>('name'),
    R.length,
  )({name: 'dave'});
}

{
  // #69: lens composition
  const sectioneditems = { sections: [
    {items: []},
    {items: []},
  ]};
  const elem = 'Hello';
  R.over(
    R.compose(
      R.lensProp('sections'),
      R.lensIndex(sectioneditems.sections.length - 1),
      R.lensProp('items'),
    ),
    R.append(elem),
    sectioneditems,
  );
}

{
  // #78: curry loses generics
  // : <T>R.CurriedFunction3<R.Pred<T>, T, T[], T[]>
  // : R.CurriedFunction3<R.Pred<any>, any, any[], any[]>
  const updateBy = R.curry(<T>(pred: (v: T) => boolean, val: T, array: T[]): T[] => {
    const i = R.findIndex(pred, array);
    if (i >= 0) {
      return R.update(i, val, array);
    } else {
      return array;
    }
  });
  // @dts-jest:show number[]
  updateBy((n: number) => n > 1, 0, [1, 2, 3]);
}

{
  // #86: lose generics in compose
  const pairs = [['1', 'A'], ['2', 'B'], ['3', 'C']];
  // @dts-jest:show { [index: string]: string }
  R.fromPairs([['1', 'A'], ['2', 'B'], ['3', 'C']]);
  // @dts-jest:show { [index: string]: string }
  R.fromPairs(pairs); // fails -- variable reduced to string[][], killing tuples
  // @dts-jest:show { [index: string]: string }
  R.pipe(R.fromPairs)([['1', 'A'], ['2', 'B'], ['3', 'C']]);
  // @dts-jest:show { [index: string]: string }
  R.compose(R.fromPairs)([['1', 'A'], ['2', 'B'], ['3', 'C']]);

  // generics in pipe loses generics
  R.pipe(R.identity);
}

{
  // #90: curried function loses generics
  const map = (func: (some: string) => (x: number) => 1) =>
    func('xx')(1);
  const map2 = (func: (some: string, other: string) => '1') =>
    func('xx', 'x');
  // will work only with proposed changes
  map(R.assoc('xxx'));
  map2(R.assoc('xxx'));
}

{
  // #92: lose generics in compose

  // can't infer cond paths, must annotate:
  // @dts-jest:show <T>(v: T) => T
  const x = R.cond([
    [R.F, R.F],
    [R.T, R.identity],
  ]);
  // argument order matters for some reason...
  // @dts-jest:show (v: number) => number
  R.pipe(R.inc, x); // ok
  // @dts-jest:show (v: number) => number
  R.compose(x, R.inc); // boom

  // don't use generics in pipe/compose/curry if it can't resolve them right away:
  // const pipeF0 = R.pipe(R.identity); // : (v: {}) => {}
  // const compF0 = R.compose(R.identity); // : (v: {}) => {}

  // argument order matters too:
  // const pipeF1 = R.pipe(R.inc, R.identity); // : (v: number) => number
  const compF1 = R.compose(R.identity, R.inc); // : (v: number) => {}
  // @dts-jest:show number
  compF1(1); // uh-oh, fails

  // also can't reason backward:
  const compF2 = R.compose(R.inc, R.identity); // : (v: {}) => number
  // @dts-jest:pass
  compF2('foo'); // uh-oh, passes
  const pipeF2 = R.pipe(R.identity, R.inc); // : (v: {}) => number
  // @dts-jest:pass
  pipeF2('foo'); // uh-oh, passes
}

{
  // #118: flatten
  // @dts-jest:show number[]
  R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
  // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}

{
  // #119: path
  // @dts-jest:show number
  R.path(['a', 'b', 'c'], {a: {b: {c: 2}}});
  // @dts-jest:show null
  R.path(['a', 'b', 'c'], {a: {b: 2}}); // still fails
  // let n = R.path(['a', '0', 'c'], {a: [{c: 2}] })
  // @dts-jest:show number
  R.path(['a', 0, 'c'], {a: [{c: 2}]});
}

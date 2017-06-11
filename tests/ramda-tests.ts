import * as R from 'ramda';

// tslint:disable

// @dts-jest:skip
'placeholder';

// pipeK
{
  // TODO
}

// useWith
{
    let double = (x: number): number => x + x;
    let square = function(x: number) { return x * x; };
    let add = function(a: number, b: number) { return a + b; };
    // Adds any number of arguments together
    let addAll = function() {
      return 0;
    };

    // Basic example
    R.useWith(addAll, [ double, square ]);
}

// forEach
// (() => {
//   let printXPlusFive = function(x, i) { console.log(i + 5); };
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// })();

// lastIndexOf
{
    R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); // => 6
    R.lastIndexOf(10, [1,2,3,4]); // => -1
    R.lastIndexOf(10)([1,2,3,4]); // => -1
}

// traverse
{
    // Returns `Nothing` if the given divisor is `0`
    // safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)

    // R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); // => Just([5, 2.5, 2])
    // R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); // => Nothing
}

// composeP
{
  // TODO
}

// composeK
{
  // TODO
}

// ISSUES:

// RESOLVED ISSUES:

// #109
{
    function grepSomethingRecursively(grepPatterns: string | string[]) {
        if (R.is(Array, grepPatterns)) {
            R.forEach(() => {}, grepPatterns);
        }
    }
}

// UNRESOLVED ISSUES:

// #69
{
    // lens composition
    const sectioneditems = { sections: [
        {items: []},
        {items: []}
    ]};
    const elem = 'Hello';
    R.over(R.compose(R.lensProp('sections'), R.lensIndex(sectioneditems.sections.length - 1), R.lensProp('items')), R.append(elem), sectioneditems);
}

// #90
{
    // curried function loses generics
    const map = (func: (some: string) => (x: number) => 1) => {
      return func('xx')(1);
    };
    const map2 = (func: (some: string, other: string) => '1') => {
      return func('xx', 'x');
    };
    // will work only with proposed changes
    map(R.assoc('xxx'));
    map2(R.assoc('xxx'));
}

// #101
{
    // compose can't guess types for generic functions
    interface SomeStruct {
        a: number[];
        b: string[];
        c: { [index: string]: string };
    }
    const x: SomeStruct = {
        'a': [],
        'b': [],
        'c': {}
    };
    // const fun = <(y: SomeStruct) => SomeStruct>R.compose(        // annotated: works
    const fun = R.compose(
        R.assoc('a', [1, 2, 3]),
        R.assoc('b', ['a', 'b', 'c']),
        R.assoc('c', { 'k': 'v'})
    );
    let struct: SomeStruct = fun(x);

    let a = R.assoc('a', 2, {z:3});
    let b = R.assoc('b', 2);
}

// #129
{
  // nested evolve
  type FormState = { index: number };
  function ramdaIssue(state: FormState): FormState {
    return R.evolve({
        index: R.inc
    }, state);
  }
}

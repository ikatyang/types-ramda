import * as R from 'ramda';

{
  let pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
  let flattenPairs = function(acc: [string, number], pair: [string, number]) {
    return acc.concat(pair);
  };
  // @dts-jest:skip Array<number|string>
  R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
}

{
  interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }
  type Pair = KeyValuePair<string, number>;
  
  let pairs: Pair[] = [ ['a', 1], ['b', 2], ['c', 3] ];
  let flattenPairs = function(pair: Pair, acc: Pair[]): Pair[] {
      return acc.concat(pair);
  };
  // @dts-jest:skip Array<string[]|string>
  R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
  // @dts-jest:skip Array<string[]|string>
  R.reduceRight(flattenPairs, [])(pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
  // @dts-jest:skip Array<string[]|string>
  R.reduceRight(flattenPairs)([], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
}

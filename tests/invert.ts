import * as R from 'ramda';

const raceResultsByFirstName = {
  first: 'alice',
  second: 'jake',
  third: 'alice',
};
// @dts-jest:skip Dictionary<string[]>
R.invert(raceResultsByFirstName);
// => { 'alice': ['first', 'third'], 'jake': ['second'] }

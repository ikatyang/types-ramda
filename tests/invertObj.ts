import * as R from 'ramda';

let raceResults0 = {
  first: 'alice',
  second: 'jake'
};
// @dts-jest:skip Dictionary<string>
R.invertObj(raceResults0);
// => { 'alice': 'first', 'jake': 'second' }

// Alternatively:
let raceResults1 = ['alice', 'jake'];
// @dts-jest:skip Dictionary<string>
R.invertObj(raceResults1);
// => { 'alice': '0', 'jake': '1' }

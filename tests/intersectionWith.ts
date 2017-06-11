import * as R from 'ramda';

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

// @dts-jest:skip { id: number, name: string }[]
R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
// => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
// @dts-jest:skip { id: number, name: string }[]
R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
    // => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
// @dts-jest:skip { id: number, name: string }[]
R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield, csny);
// @dts-jest:skip { id: number, name: string }[]
R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield)(csny);

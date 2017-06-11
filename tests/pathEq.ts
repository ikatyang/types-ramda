import * as R from 'ramda';

let user1 = { address: { zipCode: 90210 } };
let user2 = { address: { zipCode: 55555 } };
let user3 = { name: 'Bob' };
let users = [ user1, user2, user3 ];
let isFamous = R.pathEq(['address', 'zipCode'], 90210);
// @dts-jest:skip Object[]
R.filter(isFamous, users); // => [ user1 ]

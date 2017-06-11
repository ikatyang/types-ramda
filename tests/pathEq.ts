import * as R from 'ramda';

const user1 = {address: {zipCode: 90210}};
const user2 = {address: {zipCode: 55555}};
const user3 = {name: 'Bob'};
const users = [user1, user2, user3];
const isFamous = R.pathEq(['address', 'zipCode'], 90210);
// @dts-jest:skip Object[]
R.filter(isFamous, users); // => [ user1 ]

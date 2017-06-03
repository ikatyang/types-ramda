import * as R from 'ramda';

const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);

// @dts-jest
isQueenOfSpades({rank: 'Q', suit: '♣︎'}); // => false

// @dts-jest
isQueenOfSpades({rank: 'Q', suit: '♠︎'}); // => true

const R = require('ramda');

R.filterDictionary
  = R.filterSelf
  = R.filter;

R.rejectDictionary
  = R.rejectSelf
  = R.reject;

R.allSelf
  = R.all;

R.anySelf
  = R.any;

R.noneSelf
  = R.none;

R.apSelf
  = R.ap;

R.assocSoft
  = R.assoc;

R.concatString
  = R.concatSelf
  = R.concat;

R.mapDictionary
  = R.mapSelf
  = R.map;

R.flip2
  = R.flip3
  = R.flip4
  = R.flip5
  = R.flip6
  = R.flipN
  = R.flip

module.exports = R;

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

module.exports = R;

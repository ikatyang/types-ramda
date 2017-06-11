import * as R from 'ramda';

let matchPhrases = R.compose(
  R.objOf('must'),
  R.map(R.objOf('match_phrase'))
);
// @dts-jest:skip { must: { match_phrase: string }[] }
matchPhrases(['foo', 'bar', 'baz']);

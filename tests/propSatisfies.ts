import * as R from 'ramda';

{
  const truncate = R.when(
    R.propSatisfies(R.flip(R.gt)(10), 'length'),
    R.pipe(R.take(10), R.append('…'), R.join('')),
  );
  // @dts-jest
  truncate('12345');         // => '12345'
  // @dts-jest
  truncate('0123456789ABC'); // => '0123456789…'
}

{
  // @dts-jest
  R.propSatisfies((x: number) => x > 0, 'x', {x: 1, y: 2}); // => true
  // @dts-jest
  R.propSatisfies((x: number) => x > 0, 'x')({x: 1, y: 2}); // => true
  // @dts-jest
  R.propSatisfies((x: number) => x > 0)('x')({x: 1, y: 2}); // => true
}

import * as R from 'ramda';

// @dts-jest:skip string[]
R.pipe(R.append('a'), R.uniq)(['a', 'b', 'c']);
// @dts-jest:skip string[][]
R.pipe(
  R.split(''),
  R.map((letter: string) => ([letter])),
)('dave');

// @dts-jest
R.pipe(
  R.prop<string>('name'),
  R.length,
)({name: 'dave'});

interface Foo {
  build: string;
  package: string;
}
const build2 = 'dev';
const mapPackages2 = R.map((test: Foo) => test.package);
const filterBuild2 = R.filter((test: Foo) => test.build === build2);
const getPackages2 = R.compose(R.uniq, mapPackages2, filterBuild2);
const foos = [
  {
    build: 'dev',
    package: 'devPackage',
  },
  {
    build: 'prod',
    package: 'prodPackage',
  },
  {
    build: 'dev',
    package: 'devPackage',
  }];
// @dts-jest:skip expected: ??
getPackages2(foos);

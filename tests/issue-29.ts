import * as R from 'ramda';

// @dts-jest:skip string[]
R.pipe(R.append('a'), R.uniq)(['a', 'b', 'c']);
// @dts-jest:skip string[][]
R.pipe(
    R.split(''),
    R.map((letter: string) => ([ letter ]))
)('dave');

// @dts-jest
R.pipe(
    R.prop<string>('name'),
    R.length
)({ name: 'dave' });

let build: string;
let mapPackages = R.partial(R.map, [(test: any) => test.package]);
let filterBuild = R.partial(R.filter, [(test: any) => test.build === build]);
let getPackages = R.compose(R.uniq, mapPackages, filterBuild);
this.packages = getPackages(this._tests);
// ^ expected: ??

interface Foo {
    build: string;
    package: string;
}
const build2 = 'dev';
let mapPackages2 = R.map((test: Foo) => test.package);
let filterBuild2 = R.filter((test: Foo) => test.build === build2);
let getPackages2 = R.compose(R.uniq, mapPackages2, filterBuild2);
let foos = [{
    build: 'dev',
    package: 'devPackage'
}, {
    build: 'prod',
    package: 'prodPackage'
}, {
    build: 'dev',
    package: 'devPackage'
}];
let foosFiltered = getPackages2(foos);
// ^ expected: ??

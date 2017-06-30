import * as R_lensIndex from '../ramda/dist/src/lensIndex';

// @dts-jest:pass -> Lens<{}, {}[] | ArrayLike<{}>>
R_lensIndex(0);
// @dts-jest:pass -> Lens<number, number[]>
R_lensIndex<number, number[]>(0);

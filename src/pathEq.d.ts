import { Path } from "./$types";
declare const pathEq: pathEq_000;
type pathEq_000 = {
    (path: Path): pathEq_100;
    (path: Path, value: any): pathEq_110;
    (path: Path, value: any, object: {}): pathEq_111;
};
type pathEq_100 = {
    (value: any): pathEq_110;
    (value: any, object: {}): pathEq_111;
};
type pathEq_010 = {
    (path: Path): pathEq_110;
    (path: Path, object: {}): pathEq_111;
};
type pathEq_110 = {
    (object: {}): pathEq_111;
};
type pathEq_001 = {
    (path: Path): pathEq_101;
    (path: Path, value: any): pathEq_111;
};
type pathEq_101 = {
    (value: any): pathEq_111;
};
type pathEq_011 = {
    (path: Path): pathEq_111;
};
type pathEq_111 = boolean;
export = pathEq;

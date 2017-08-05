import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pathEq: pathEq_000;
type pathEq_000 = {
    (path: Path): pathEq_100;
    (_path: PH, value: any): pathEq_010;
    (path: Path, value: any): pathEq_110;
    (_path: PH, _value: PH, object: {}): pathEq_001;
    (_path: PH, value: any, object: {}): pathEq_011;
    (path: Path, _value: PH, object: {}): pathEq_101;
    (path: Path, value: any, object: {}): pathEq_111;
};
type pathEq_100 = {
    (value: any): pathEq_110;
    (_value: PH, object: {}): pathEq_101;
    (value: any, object: {}): pathEq_111;
};
type pathEq_010 = {
    (path: Path): pathEq_110;
    (_path: PH, object: {}): pathEq_011;
    (path: Path, object: {}): pathEq_111;
};
type pathEq_110 = {
    (object: {}): pathEq_111;
};
type pathEq_001 = {
    (path: Path): pathEq_101;
    (_path: PH, value: any): pathEq_011;
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

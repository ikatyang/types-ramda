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
    <$SEL extends "1">(): (path: Path) => pathEq_100;
    <$SEL extends "01">(): (_path: PH, value: any) => pathEq_010;
    <$SEL extends "11">(): (path: Path, value: any) => pathEq_110;
    <$SEL extends "001">(): (_path: PH, _value: PH, object: {}) => pathEq_001;
    <$SEL extends "011">(): (_path: PH, value: any, object: {}) => pathEq_011;
    <$SEL extends "101">(): (path: Path, _value: PH, object: {}) => pathEq_101;
    <$SEL extends "111">(): (path: Path, value: any, object: {}) => pathEq_111;
    (path: Path, value: any, object: {}): pathEq_111;
};
type pathEq_100 = {
    (value: any): pathEq_110;
    (_value: PH, object: {}): pathEq_101;
    <$SEL extends "1">(): (value: any) => pathEq_110;
    <$SEL extends "01">(): (_value: PH, object: {}) => pathEq_101;
    <$SEL extends "11">(): (value: any, object: {}) => pathEq_111;
    (value: any, object: {}): pathEq_111;
};
type pathEq_010 = {
    (path: Path): pathEq_110;
    (_path: PH, object: {}): pathEq_011;
    <$SEL extends "1">(): (path: Path) => pathEq_110;
    <$SEL extends "01">(): (_path: PH, object: {}) => pathEq_011;
    <$SEL extends "11">(): (path: Path, object: {}) => pathEq_111;
    (path: Path, object: {}): pathEq_111;
};
type pathEq_110 = {
    (object: {}): pathEq_111;
};
type pathEq_001 = {
    (path: Path): pathEq_101;
    (_path: PH, value: any): pathEq_011;
    <$SEL extends "1">(): (path: Path) => pathEq_101;
    <$SEL extends "01">(): (_path: PH, value: any) => pathEq_011;
    <$SEL extends "11">(): (path: Path, value: any) => pathEq_111;
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

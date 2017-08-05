import { Path } from "./$types";
declare const pathOr: pathOr_000;
type pathOr_000 = {
    (defaults: any): pathOr_100;
    (defaults: any, path: Path): pathOr_110;
    <$SEL extends "1">(): (defaults: any) => pathOr_100;
    <$SEL extends "11">(): (defaults: any, path: Path) => pathOr_110;
    <$SEL extends "111">(): (defaults: any, path: Path, object: {}) => pathOr_111;
    (defaults: any, path: Path, object: {}): pathOr_111;
};
type pathOr_100 = {
    (path: Path): pathOr_110;
    <$SEL extends "1">(): (path: Path) => pathOr_110;
    <$SEL extends "11">(): (path: Path, object: {}) => pathOr_111;
    (path: Path, object: {}): pathOr_111;
};
type pathOr_010 = {
    (defaults: any): pathOr_110;
    <$SEL extends "1">(): (defaults: any) => pathOr_110;
    <$SEL extends "11">(): (defaults: any, object: {}) => pathOr_111;
    (defaults: any, object: {}): pathOr_111;
};
type pathOr_110 = {
    (object: {}): pathOr_111;
};
type pathOr_001 = {
    (defaults: any): pathOr_101;
    <$SEL extends "1">(): (defaults: any) => pathOr_101;
    <$SEL extends "11">(): (defaults: any, path: Path) => pathOr_111;
    (defaults: any, path: Path): pathOr_111;
};
type pathOr_101 = {
    (path: Path): pathOr_111;
};
type pathOr_011 = {
    (defaults: any): pathOr_111;
};
type pathOr_111 = any;
export = pathOr;

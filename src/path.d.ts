import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const path: path_00;
type path_00 = {
    (path: Path): path_10;
    (_path: PH, object: {}): path_01;
    <$SEL extends "1">(): (path: Path) => path_10;
    <$SEL extends "01">(): (_path: PH, object: {}) => path_01;
    <$SEL extends "11">(): (path: Path, object: {}) => path_11;
    (path: Path, object: {}): path_11;
};
type path_10 = {
    (object: {}): path_11;
};
type path_01 = {
    (path: Path): path_11;
};
type path_11 = any;
export = path;

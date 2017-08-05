import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const assocPath: assocPath_000;
type assocPath_000 = {
    (path: Path): assocPath_100;
    (_path: PH, value: any): assocPath_010;
    (path: Path, value: any): assocPath_110;
    <T extends {}>(_path: PH, _value: PH, object: T): assocPath_001<T>;
    <T extends {}>(_path: PH, value: any, object: T): assocPath_011<T>;
    <T extends {}>(path: Path, _value: PH, object: T): assocPath_101<T>;
    <T extends {}>(path: Path, value: any, object: T): assocPath_111<T>;
};
type assocPath_100 = {
    (value: any): assocPath_110;
    <T extends {}>(_value: PH, object: T): assocPath_101<T>;
    <T extends {}>(value: any, object: T): assocPath_111<T>;
};
type assocPath_010 = {
    (path: Path): assocPath_110;
    <T extends {}>(_path: PH, object: T): assocPath_011<T>;
    <T extends {}>(path: Path, object: T): assocPath_111<T>;
};
type assocPath_110 = {
    <T extends {}>(object: T): assocPath_111<T>;
};
type assocPath_001<T extends {}> = {
    (path: Path): assocPath_101<T>;
    (_path: PH, value: any): assocPath_011<T>;
    (path: Path, value: any): assocPath_111<T>;
};
type assocPath_101<T extends {}> = {
    (value: any): assocPath_111<T>;
};
type assocPath_011<T extends {}> = {
    (path: Path): assocPath_111<T>;
};
type assocPath_111<T extends {}> = T;
export = assocPath;

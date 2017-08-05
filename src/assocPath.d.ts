import { Path } from "./$types";
declare const assocPath: assocPath_000;
type assocPath_000 = {
    (path: Path): assocPath_100;
    (path: Path, value: any): assocPath_110;
    <T extends {}>(path: Path, value: any, object: T): assocPath_111<T>;
};
type assocPath_100 = {
    (value: any): assocPath_110;
    <T extends {}>(value: any, object: T): assocPath_111<T>;
};
type assocPath_010 = {
    (path: Path): assocPath_110;
    <T extends {}>(path: Path, object: T): assocPath_111<T>;
};
type assocPath_110 = {
    <T extends {}>(object: T): assocPath_111<T>;
};
type assocPath_001<T extends {}> = {
    (path: Path): assocPath_101<T>;
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

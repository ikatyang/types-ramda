import { Lens, Path } from "./$types";
declare const lensPath: lensPath_0;
type lensPath_0 = {
    <T, U>(path: Path): lensPath_1<T, U>;
};
type lensPath_1<T, U> = Lens<T, U>;
export = lensPath;

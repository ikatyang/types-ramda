import { DeepPartial } from "./$operation";
import { Path } from "./$types";
declare const dissocPath: dissocPath_00;
type dissocPath_00 = {
    (path: Path): dissocPath_10;
    <T extends {}>(path: Path, object: T): dissocPath_11<T>;
};
type dissocPath_10 = {
    <T extends {}>(object: T): dissocPath_11<T>;
};
type dissocPath_01<T extends {}> = {
    (path: Path): dissocPath_11<T>;
};
type dissocPath_11<T extends {}> = DeepPartial<T>;
export = dissocPath;

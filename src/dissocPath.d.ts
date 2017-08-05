import { DeepPartial } from "./$operation";
import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const dissocPath: dissocPath_00;
type dissocPath_00 = {
    (path: Path): dissocPath_10;
    <T extends {}>(_path: PH, object: T): dissocPath_01<T>;
    <$SEL extends "1">(): (path: Path) => dissocPath_10;
    <$SEL extends "01">(): <T extends {}>(_path: PH, object: T) => dissocPath_01<T>;
    <$SEL extends "11">(): <T extends {}>(path: Path, object: T) => dissocPath_11<T>;
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

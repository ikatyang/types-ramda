import { Placeholder as PH } from "./$placeholder";
declare const match: match_00;
type match_00 = {
    (regex: RegExp): match_10;
    (_regex: PH, str: string): match_01;
    <$SEL extends "1">(): (regex: RegExp) => match_10;
    <$SEL extends "01">(): (_regex: PH, str: string) => match_01;
    <$SEL extends "11">(): (regex: RegExp, str: string) => match_11;
    (regex: RegExp, str: string): match_11;
};
type match_10 = {
    (str: string): match_11;
};
type match_01 = {
    (regex: RegExp): match_11;
};
type match_11 = string[];
export = match;

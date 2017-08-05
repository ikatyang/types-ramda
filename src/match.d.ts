declare const match: match_00;
type match_00 = {
    (regex: RegExp): match_10;
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

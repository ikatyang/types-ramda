declare const replace: replace_000;
type replace_000 = {
    (pattern: RegExp | string): replace_100;
    (pattern: RegExp | string, replacement: string): replace_110;
    <$SEL extends "1">(): (pattern: RegExp | string) => replace_100;
    <$SEL extends "11">(): (pattern: RegExp | string, replacement: string) => replace_110;
    <$SEL extends "111">(): (pattern: RegExp | string, replacement: string, str: string) => replace_111;
    (pattern: RegExp | string, replacement: string, str: string): replace_111;
};
type replace_100 = {
    (replacement: string): replace_110;
    <$SEL extends "1">(): (replacement: string) => replace_110;
    <$SEL extends "11">(): (replacement: string, str: string) => replace_111;
    (replacement: string, str: string): replace_111;
};
type replace_010 = {
    (pattern: RegExp | string): replace_110;
    <$SEL extends "1">(): (pattern: RegExp | string) => replace_110;
    <$SEL extends "11">(): (pattern: RegExp | string, str: string) => replace_111;
    (pattern: RegExp | string, str: string): replace_111;
};
type replace_110 = {
    (str: string): replace_111;
};
type replace_001 = {
    (pattern: RegExp | string): replace_101;
    <$SEL extends "1">(): (pattern: RegExp | string) => replace_101;
    <$SEL extends "11">(): (pattern: RegExp | string, replacement: string) => replace_111;
    (pattern: RegExp | string, replacement: string): replace_111;
};
type replace_101 = {
    (replacement: string): replace_111;
};
type replace_011 = {
    (pattern: RegExp | string): replace_111;
};
type replace_111 = string;
export = replace;

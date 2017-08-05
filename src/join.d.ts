declare const join: join_00;
type join_00 = {
    (separator: string): join_10;
    (separator: string, list: any[]): join_11;
};
type join_10 = {
    (list: any[]): join_11;
};
type join_01 = {
    (separator: string): join_11;
};
type join_11 = string;
export = join;

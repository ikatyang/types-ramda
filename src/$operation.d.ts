import { Morphism } from "./$types";
export type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export type Evolver<T> = Morphism<T, T> | {
    [K in keyof T]?: Evolver<T[K]>;
};
export type Diff<T extends string, U extends string> = ({
    [P in T]: P;
} & {
    [P in U]: never;
} & {
    [x: string]: never;
})[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

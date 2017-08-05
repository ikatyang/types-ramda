import { Chain } from "./$types";
declare const composeK: typeof $;
declare function $<V1, R1>(fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R1>;
declare function $<V1, R1, R2>(fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R2>;
declare function $<V1, R1, R2, R3>(fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R3>;
declare function $<V1, R1, R2, R3, R4>(fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R4>;
declare function $<V1, R1, R2, R3, R4, R5>(fn5: (v: Chain<R4>) => Chain<R5>, fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R5>;
declare function $<V1, R1, R2, R3, R4, R5, R6>(fn6: (v: Chain<R5>) => Chain<R6>, fn5: (v: Chain<R4>) => Chain<R5>, fn4: (v: Chain<R3>) => Chain<R4>, fn3: (v: Chain<R2>) => Chain<R3>, fn2: (v: Chain<R1>) => Chain<R2>, fn1: (v1: Chain<V1>) => Chain<R1>): (v1: Chain<V1>) => Chain<R6>;
export = composeK;

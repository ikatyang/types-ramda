/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
declare const pipeP: typeof $;
declare function $<V1, R1>(fn1: (v1: V1) => Promise<R1>): (v1: V1) => Promise<R1>;
declare function $<V1, V2, R1>(fn1: (v1: V1, v2: V2) => Promise<R1>): (v1: V1, v2: V2) => Promise<R1>;
declare function $<V1, V2, V3, R1>(fn1: (v1: V1, v2: V2, v3: V3) => Promise<R1>): (v1: V1, v2: V2, v3: V3) => Promise<R1>;
declare function $<V1, V2, V3, V4, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R1>): (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R1>;
declare function $<V1, V2, V3, V4, V5, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R1>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R1>;
declare function $<V1, V2, V3, V4, V5, V6, R1>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R1>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R1>;
declare function $<V1, R1, R2>(fn1: (v1: V1) => Promise<R1>, fn2: (v: R1) => Promise<R2>): (v1: V1) => Promise<R2>;
declare function $<V1, V2, R1, R2>(fn1: (v1: V1, v2: V2) => Promise<R1>, fn2: (v: R1) => Promise<R2>): (v1: V1, v2: V2) => Promise<R2>;
declare function $<V1, V2, V3, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3) => Promise<R1>, fn2: (v: R1) => Promise<R2>): (v1: V1, v2: V2, v3: V3) => Promise<R2>;
declare function $<V1, V2, V3, V4, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R1>, fn2: (v: R1) => Promise<R2>): (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R2>;
declare function $<V1, V2, V3, V4, V5, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R1>, fn2: (v: R1) => Promise<R2>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R2>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R1>, fn2: (v: R1) => Promise<R2>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R2>;
declare function $<V1, R1, R2, R3>(fn1: (v1: V1) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>): (v1: V1) => Promise<R3>;
declare function $<V1, V2, R1, R2, R3>(fn1: (v1: V1, v2: V2) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>): (v1: V1, v2: V2) => Promise<R3>;
declare function $<V1, V2, V3, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>): (v1: V1, v2: V2, v3: V3) => Promise<R3>;
declare function $<V1, V2, V3, V4, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>): (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R3>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R3>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R3>;
declare function $<V1, R1, R2, R3, R4>(fn1: (v1: V1) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>): (v1: V1) => Promise<R4>;
declare function $<V1, V2, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>): (v1: V1, v2: V2) => Promise<R4>;
declare function $<V1, V2, V3, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>): (v1: V1, v2: V2, v3: V3) => Promise<R4>;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>): (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R4>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R4>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R4>;
declare function $<V1, R1, R2, R3, R4, R5>(fn1: (v1: V1) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>): (v1: V1) => Promise<R5>;
declare function $<V1, V2, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>): (v1: V1, v2: V2) => Promise<R5>;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>): (v1: V1, v2: V2, v3: V3) => Promise<R5>;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>): (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R5>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R5>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R5>;
declare function $<V1, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>, fn6: (v: R5) => Promise<R6>): (v1: V1) => Promise<R6>;
declare function $<V1, V2, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>, fn6: (v: R5) => Promise<R6>): (v1: V1, v2: V2) => Promise<R6>;
declare function $<V1, V2, V3, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>, fn6: (v: R5) => Promise<R6>): (v1: V1, v2: V2, v3: V3) => Promise<R6>;
declare function $<V1, V2, V3, V4, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>, fn6: (v: R5) => Promise<R6>): (v1: V1, v2: V2, v3: V3, v4: V4) => Promise<R6>;
declare function $<V1, V2, V3, V4, V5, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>, fn6: (v: R5) => Promise<R6>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5) => Promise<R6>;
declare function $<V1, V2, V3, V4, V5, V6, R1, R2, R3, R4, R5, R6>(fn1: (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R1>, fn2: (v: R1) => Promise<R2>, fn3: (v: R2) => Promise<R3>, fn4: (v: R3) => Promise<R4>, fn5: (v: R4) => Promise<R5>, fn6: (v: R5) => Promise<R6>): (v1: V1, v2: V2, v3: V3, v4: V4, v5: V5, v6: V6) => Promise<R6>;
export = pipeP;

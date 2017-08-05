declare const tryCatch: tryCatch_00;
type tryCatch_00 = {
    <F extends Function>(tryer: F): tryCatch_10<F>;
    <F extends Function>(tryer: F, catcher: F): tryCatch_11<F>;
};
type tryCatch_10<F extends Function> = {
    (catcher: F): tryCatch_11<F>;
};
type tryCatch_01<F extends Function> = {
    (tryer: F): tryCatch_11<F>;
};
type tryCatch_11<F extends Function> = F;
export = tryCatch;

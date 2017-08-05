import { Placeholder as PH } from "./$placeholder";
declare const tryCatch: tryCatch_00;
type tryCatch_00 = {
    <F extends Function>(tryer: F): tryCatch_10<F>;
    <F extends Function>(_tryer: PH, catcher: F): tryCatch_01<F>;
    <$SEL extends "1">(): <F extends Function>(tryer: F) => tryCatch_10<F>;
    <$SEL extends "01">(): <F extends Function>(_tryer: PH, catcher: F) => tryCatch_01<F>;
    <$SEL extends "11">(): <F extends Function>(tryer: F, catcher: F) => tryCatch_11<F>;
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

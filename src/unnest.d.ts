import { List } from "./$types";
declare const unnest: unnest_0;
type unnest_0 = {
    <T>(list: List<List<T>>): unnest_deep_1<T>;
    <T>(list: List<T>): unnest_shallow_1<T>;
    <$SEL extends "1", $KIND extends "deep">(): <T>(list: List<List<T>>) => unnest_deep_1<T>;
    <$SEL extends "1", $KIND extends "shallow">(): <T>(list: List<T>) => unnest_shallow_1<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: List<List<T>> | List<T>) => unnest_mixed_1<T>;
    <T>(list: List<List<T>> | List<T>): unnest_mixed_1<T>;
};
type unnest_deep_1<T> = T[];
type unnest_shallow_1<T> = T[];
type unnest_mixed_1<T> = T[];
export = unnest;

import {Dictionary, KeyedObjectTap} from '../ramda/dist/src/$types';
import * as R_forEachObjIndexed from '../ramda/dist/src/forEachObjIndexed';

declare const number_dictionary: Dictionary<number>;
declare const keyed_number_dictionary_tap: KeyedObjectTap<number, Dictionary<number>>;

// @dts-jest:pass -> <U$1 extends Dictionary<number> = Dictionary<number>>(list: U$1) => U$1
R_forEachObjIndexed(keyed_number_dictionary_tap);
// @dts-jest:pass -> Dictionary<number>
R_forEachObjIndexed(keyed_number_dictionary_tap)(number_dictionary);
// @dts-jest:pass -> Dictionary<number>
R_forEachObjIndexed(keyed_number_dictionary_tap, number_dictionary);

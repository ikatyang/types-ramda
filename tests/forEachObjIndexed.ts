import {Dictionary, KeyedObjectTap} from 'ramda/src/$types';
import * as R_forEachObjIndexed from 'ramda/src/forEachObjIndexed';

declare const number_dictionary: Dictionary<number>;
declare const keyed_number_dictionary_tap: KeyedObjectTap<number, Dictionary<number>>;

// @dts-jest
R_forEachObjIndexed(keyed_number_dictionary_tap);
// @dts-jest
R_forEachObjIndexed(keyed_number_dictionary_tap)(number_dictionary);
// @dts-jest
R_forEachObjIndexed(keyed_number_dictionary_tap, number_dictionary);

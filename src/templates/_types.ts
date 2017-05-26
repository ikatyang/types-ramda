import * as dts from 'dts-element';
import {create_curried_interfaces} from '../utils/create-curried-interfaces';

export default [
  ...dts.parse(`
    type Morphism<T, U> = (value: T) => U;
    type IndexedMorphism<T, U> = (value: T, index: number, list: List<T>) => U;
    type ListMapper<T, U> = (fn: Morphism<T, U>, list: List<T>) => U[];
    type DictionaryMapper<T, U> = (fn: Morphism<T, U>, dictionary: Dictionary<T>) => Dictionary<U>;
    interface List<T> {
      length: number;
      [index: number]: T;
    }
    interface Dictionary<T> {
      [key: string]: T;
    }
  `).members,
  ...create_curried_interfaces(),
];

import * as dts from 'dts-element';
import {create_curried_interfaces} from '../utils/create-curried-interfaces';

export default [
  ...dts.parse(`
    type Morphism<T, U> = (value: T) => U;
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

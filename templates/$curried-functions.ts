import * as dts from 'dts-element';
import {placeholder_name, placeholder_name_abbr} from './utils/constants';
import {create_curried_interfaces} from './utils/create-curried-interfaces';

export default [
  dts.create_import_named({
    members: [
      dts.create_import_member({
        name: placeholder_name_abbr,
        property: placeholder_name,
      }),
    ],
    from: './$placeholder',
  }),
  ...create_curried_interfaces(6),
];

// reference placeholder

// tslint:disable:no-empty-interface no-unused-variable
export interface CurriedFunction1<T1, R> {}
export interface CurriedFunction2<T1, T2, R> {}
export interface CurriedFunction3<T1, T2, T3, R> {}
export interface CurriedFunction4<T1, T2, T3, T4, R> {}
export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {}
export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {}
// tslint:enable:no-empty-interface no-unused-variable

import * as dts from 'dts-element';
import {placeholder_name, placeholder_name_abbr} from './utils/constants';
import {create_curried_interfaces} from './utils/create-curried-interfaces';

export const max_curry_level = 6;

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
  ...dts.parse(`export type CurriedFunction0<R> = () => R;`).members,
  ...create_curried_interfaces(max_curry_level).map(
    the_interface => ({
      ...the_interface,
      export: true,
    }),
  ),
];

// reference placeholder

// tslint:disable:no-empty-interface no-unused-variable
export interface CurriedFunction0<R> {}
export interface CurriedFunction1<T1, R> {}
export interface CurriedFunction2<T1, T2, R> {}
export interface CurriedFunction3<T1, T2, T3, R> {}
export interface CurriedFunction4<T1, T2, T3, T4, R> {}
export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {}
export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {}
// tslint:enable:no-empty-interface no-unused-variable

import {Functor} from 'ramda/src/$types';
import * as R_map from 'ramda/src/map';

{
  // @dts-jest
  R_map((x: string) => +x, ['1', '2']);

  // @dts-jest
  R_map((x: string) => +x)(['1', '2']);
}

{
  // @dts-jest
  R_map((x: string) => +x, {a: '1', b: '2'});
  // @dts-jest
  R_map((x: string) => +x)({a: '1', b: '2'});
}

{
  declare const string_functor: Functor<string>;

  // @dts-jest
  R_map((x: string) => +x, string_functor);
  // @dts-jest
  R_map((x: string) => +x)(string_functor);
}

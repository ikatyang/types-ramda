import {Functor} from 'ramda/src/$types';
import * as map from 'ramda/src/map';

{
  // @dts-jest
  map((x: string) => +x, ['1', '2']);

  // @dts-jest
  map((x: string) => +x)(['1', '2']);
}

{
  // @dts-jest
  map((x: string) => +x, {a: '1', b: '2'});
  // @dts-jest
  map((x: string) => +x)({a: '1', b: '2'});
}

{
  declare const string_functor: Functor<string>;

  // @dts-jest
  map((x: string) => +x, string_functor);
  // @dts-jest
  map((x: string) => +x)(string_functor);
}

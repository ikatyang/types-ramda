import * as dts from 'dts-element';
import {placeholder_name_abbr} from './constants';

export const is_placeholder = (type?: dts.IType): type is dts.IGeneralType =>
  type !== undefined && type.kind === dts.ElementKind.GeneralType && type.name === placeholder_name_abbr;

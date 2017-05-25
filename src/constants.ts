import {left_pad} from './utils/left-pad';

export const max_curry_level = 6;
export const placeholder_name = 'Placeholder';
export const placeholder_name_abbr = 'PH';

// curried interfaces
export const get_curried_interface_name = (index: number) => `CurriedFunction${index + 1}`;
export const get_curried_interface_generic_name = (index: number) => `T${index + 1}`;
export const get_curried_interface_parameter_name = (index: number) => `v${index + 1}`;
export const get_curried_interface_parameter_placeholder_name = (index: number) => `_${index + 1}`;
export const get_curried_interface_generic_return_name = () => 'R';

// curried functions
export const get_curried_function_parameter_placeholder_name = (name: string) => `_${name}`;
export const get_curried_function_selectable_name = () => 'X';
export const get_curried_function_selectable_group_name = () => 'K';
export const get_curried_function_selectable_type = (mask: string) => mask;
export const get_curried_function_type_name = (name: string, mask: string) => `${name}_${mask}`;

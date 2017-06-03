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

// types
// tslint:disable:variable-name max-line-length

const CurriedFunction = (curry: number, ...types: string[]) => `CurriedFunction${curry}<${types.join(', ')}>`;
export const CurriedFunction2 = (type1: string, type2: string, return_type: string) => CurriedFunction(2, type1, type2, return_type);

export const key = 'key';
export const index = 'index';
export const value = 'value';

export const property = 'property';
export const Property = () => 'Property';
export const object = 'obj';
export const Object = () => 'Obj';

export const morphosm = 'fn';
export const Morphism = (from: string, to: string) => `Morphism<${from}, ${to}>`;
export const indexedMorphism = 'fn';
export const IndexedMorphism = (from: string, to: string) => `IndexedMorphism<${from}, ${to}>`;
export const predicate = 'fn';
export const Predicate = (from: string) => `Predicate<${from}>`;

export const list = 'list';
export const List = (member: string) => `List<${member}>`;
export const dictionary = 'dictionary';
export const Dictionary = (member: string) => `Dictionary<${member}>`;

export const listMapper = 'fn';
export const ListMapper = (from: string, to: string) => `ListMapper<${from}, ${to}>`;
export const dictionaryMapper = 'fn';
export const DictionaryMapper = (from: string, to: string) => `DictionaryMapper<${from}, ${to}>`;

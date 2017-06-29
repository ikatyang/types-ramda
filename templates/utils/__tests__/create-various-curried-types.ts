import * as dts from 'dts-element';
import {create_various_curried_types} from '../create-curried-various-types';

const test_cases: Record<string, string> = {
  'non-generics': `
    function number(a: number, b: number): boolean;
    function string(a: string, b: string): boolean;
  `,
  'generics + multi-parameters': `
    function string(str: string): string;
    function list<T>(list: List<T>): T | undefined;
  `,
  'generics + multi-parameters + return-generics': `
    function list<T, U>(fn: Morphism<T, U>, list: List<T>): U[];
    function functor<T, U>(fn: Morphism<T, U>, functor: Functor<T>): Functor<U>;
  `,
};

it('should throw error if those function types have different length', () => {
  expect(() => create_various_curried_types('$', parse_types(`
    function $1(a: any): any;
    function $2(a: any, b: any): any;
  `))).toThrowError();
});

Object.keys(test_cases).forEach(case_name => {

  describe(case_name, () => {

    it('should transform correctly without any options', () => {
      expect(emit_curried_types()).toMatchSnapshot();
    });

    it('should transform correctly with selectable', () => {
      expect(emit_curried_types({
        selectable: true,
      })).toMatchSnapshot();
    });

    it('should transform correctly with placeholder', () => {
      expect(emit_curried_types({
        placeholder: true,
      })).toMatchSnapshot();
    });

    it('should transform correctly with every option', () => {
      expect(emit_curried_types({
        selectable: true,
        placeholder: true,
      })).toMatchSnapshot();
    });
  });

  function emit_curried_types(options: {selectable?: boolean, placeholder?: boolean} = {}) {
    const test_case = test_cases[case_name];
    const function_types = parse_types(test_case);

    const {
      selectable = false,
      placeholder = false,
    } = options;

    const curried_types = create_various_curried_types('$', function_types, selectable, placeholder);
    const top_level_element = dts.create_top_level_element({members: curried_types});
    return dts.emit(top_level_element);
  }
});

function parse_types(types_string: string) {
  const function_declarations = dts.parse(types_string).members as dts.IFunctionDeclaration[];
  return function_declarations.reduce<Record<string, dts.IFunctionType>>(
    (current, function_declaration) => ({
      ...current,
      [function_declaration.name!]: function_declaration.type!,
    }),
    {},
  );
}

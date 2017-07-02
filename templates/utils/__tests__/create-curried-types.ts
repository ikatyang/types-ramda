import * as dts from 'dts-element';
import {create_curried_types} from '../create-curried-types';

const test_cases: Record<string, string> = {
  'non-generics': `
    function clamp(min: number, max: number, value: number): number;
  `,
  'generics + multi-parameters': `
    function all<T>(fn: Predicate<T>, list: List<T>): boolean;
  `,
  'generics + multi-parameters + return-generics': `
    function adjust<T, U>(fn: Morphism<T, U>, index: number, list: List<T>): (T | U)[];
  `,
  'type-predicate': `
    function is<T>(constructor: Constructor<T>, value: any): value is T;
  `,
  'generic-dependencies + multi-parameters + return-generics': `
    function propSatisfies<K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T): boolean;
  `,
};

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

    it('should transform correctly with late-inference', () => {
      expect(emit_curried_types({
        late_inference: true,
      })).toMatchSnapshot();
    });

    it('should transform correctly with every option', () => {
      expect(emit_curried_types({
        selectable: true,
        placeholder: true,
        late_inference: true,
      })).toMatchSnapshot();
    });
  });

  function emit_curried_types(options: {selectable?: boolean, placeholder?: boolean, late_inference?: boolean} = {}) {
    const test_case = test_cases[case_name];
    const function_declaration = dts.parse(test_case).members[0] as dts.IFunctionDeclaration;
    const function_name = function_declaration.name!;
    const function_type = function_declaration.type!;

    const {
      selectable = false,
      placeholder = false,
      late_inference = false,
    } = options;

    const curried_types = create_curried_types(function_name, function_type, selectable, placeholder);
    const top_level_element = dts.create_top_level_element({members: curried_types});
    return dts.emit(top_level_element);
  }
});

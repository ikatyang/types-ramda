jest.mock('fs', () => ({
  readFileSync: (filename: string) => `markdown content from '${filename}'`,
}));

import * as dts from 'dts-element';
import {create_curried_declarations} from '../create-curried-declarations';

const parse_type = (type_string: string) =>
  (dts.parse(`type X = ${type_string};`).members[0] as dts.ITypeDeclaration).type as dts.IFunctionType;
const emit = (members: dts.ITopLevelMember[]) => dts.emit(dts.create_top_level_element({members}));

it('should generate correctly with curried types', () => {
  expect(emit(create_curried_declarations(
    '$.ts',
    parse_type('(a: boolean, b: number, c: string) => object'),
    true,
    true,
  ))).toMatchSnapshot();
});

it('should generate correctly with various curried types', () => {
  expect(emit(create_curried_declarations(
    '$.ts',
    {
      x: parse_type('(a: number, b: number) => number'),
      y: parse_type('(a: string, b: string) => {}'),
    },
    true,
    true,
  ))).toMatchSnapshot();
});

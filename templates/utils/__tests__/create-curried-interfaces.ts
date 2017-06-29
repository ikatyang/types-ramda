import * as dts from 'dts-element';
import {create_curried_interfaces} from '../create-curried-interfaces';

const emit_curried_interfaces = (options: {selectable?: boolean, placeholder?: boolean} = {}) => {
  const {
    selectable = false,
    placeholder = false,
  } = options;

  const curried_interfaces = create_curried_interfaces(3, selectable, placeholder);
  const top_level_element = dts.create_top_level_element({members: curried_interfaces});
  return dts.emit(top_level_element);
};

it('should generate correctly without any options', () => {
  expect(emit_curried_interfaces()).toMatchSnapshot();
});

it('should generate correctly with selectable', () => {
  expect(emit_curried_interfaces({
    selectable: true,
  })).toMatchSnapshot();
});

it('should generate correctly with placeholder', () => {
  expect(emit_curried_interfaces({
    placeholder: true,
  })).toMatchSnapshot();
});

it('should generate correctly with every option', () => {
  expect(emit_curried_interfaces({
    selectable: true,
    placeholder: true,
  })).toMatchSnapshot();
});

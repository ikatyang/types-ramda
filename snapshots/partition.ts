import * as R_partition from '../ramda/dist/src/partition';

declare const number_to_boolean: (x: number) => boolean;
declare const number_array: number[];
declare const a_1_b_2_c_3: {
  a: 1,
  b: 2,
  c: 3,
};

// @dts-jest:pass -> [number[], number[]]
R_partition(number_to_boolean)(number_array);
// @dts-jest:pass -> [number[], number[]]
R_partition(number_to_boolean, number_array);

// @dts-jest:pass -> [Record<string, number>, Record<string, number>]
R_partition(number_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass -> [Record<string, number>, Record<string, number>]
R_partition(number_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass -> [Record<"a", number>, Record<"b" | "c", number>]
R_partition(number_to_boolean)<'a', 'b' | 'c'>(a_1_b_2_c_3);
// @dts-jest:pass -> [Record<"a", number>, Record<"b" | "c", number>]
R_partition<number, 'a', 'b' | 'c'>(number_to_boolean, a_1_b_2_c_3);

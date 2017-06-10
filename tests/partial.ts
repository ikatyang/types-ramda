import * as R from 'ramda';

const multiply = (a: number, b: number) => a * b;
const double = R.partial(multiply, [2]);
// @dts-jest
double(2); // => 4

const greet = (salutation: string, title: string, firstName: string, lastName: string) =>
  `${salutation}, ${title} ${firstName} ${lastName}!`;
const sayHello = R.partial(greet, ['Hello']);
const sayHelloToMs = R.partial(sayHello, ['Ms.']);
// @dts-jest
sayHelloToMs('Jane', 'Jones'); // => 'Hello, Ms. Jane Jones!'

const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
// @dts-jest
greetMsJaneJones('Hello'); // => 'Hello, Ms. Jane Jones!'

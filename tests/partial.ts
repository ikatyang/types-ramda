import * as R from 'ramda';

let multiply = function(a: number, b: number) { return a * b; };
let double = R.partial(multiply, [2]);
// @dts-jest
double(2); // => 4

let greet = function(salutation: string, title: string, firstName: string, lastName: string) {
  return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
};
let sayHello = R.partial(greet, ['Hello']);
let sayHelloToMs = R.partial(sayHello, ['Ms.']);
// @dts-jest
sayHelloToMs('Jane', 'Jones'); // => 'Hello, Ms. Jane Jones!'

let greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
// @dts-jest
greetMsJaneJones('Hello'); // => 'Hello, Ms. Jane Jones!'

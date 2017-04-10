/// <reference path="./index.d.ts" />

import * as R from 'ramda';

// tslint:disable no-unused-expression

declare const number: number;

// TODO: R.__

(): number => R.add(number, number);
(): number => R.add(number)(number);

// TODO: R.addIndex

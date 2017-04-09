/// <reference path="./index.d.ts" />

import * as R from 'ramda';

R.__;

R.add(1, 2);
R.add(1)(2);
R.add(R.__, 1)(R.__)(2);

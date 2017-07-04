# types-ramda

[![release](https://img.shields.io/github/release/ikatyang/types-ramda.svg)](https://github.com/ikatyang/types-ramda/releases)
[![build](https://travis-ci.org/ikatyang/types-ramda.svg?branch=master)](https://travis-ci.org/ikatyang/types-ramda)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/types-ramda/master.svg)](https://codecov.io/gh/ikatyang/types-ramda)
[![greenkeeper](https://badges.greenkeeper.io/ikatyang/types-ramda.svg)](https://greenkeeper.io/)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

[Changelog](https://github.com/ikatyang/types-ramda/blob/master/CHANGELOG.md)

- [Version](#version)
- [Features](#features)
- [Usage](#usage)
- [Progress](#progress)
- [Development](#development)
- [Related](#related)
- [License](#license)

## Version

This project uses the same MAJOR.MINOR version as [Ramda](https://github.com/ramda/ramda).

## Features

#### For User

- support placeholder ( `R.__` )
- support partial import ( `import * as map from "ramda/src/map"` )
- support selectable overloads ( use 0-param: `R.map<"11", "list">()` )

#### For Developer

- support snapshot testing ( via [`dts-jest`](https://github.com/ikatyang/dts-jest), see `./tests/*.ts` )
- support functions auto-currying ( via [`dts-element`](https://github.com/ikatyang/dts-element), see `./templates/*.d.ts` )

## Usage

The following command install the types from the `dist` branch, which is the newest version and contains `selectable` and `placeholder` types.

```sh
# using npm
npm install --save-dev ikatyang/types-ramda#dist

# using yarn
yarn add --dev ikatyang/types-ramda#dist
```

**NOTE**: You can also choose which [release version](https://github.com/ikatyang/types-ramda/releases) to install using `#<branch/commit/tag>`, for example:

```sh
yarn add --dev ikatyang/types-ramda#v0.24.0-dist
yarn add --dev ikatyang/types-ramda#v0.24.0-dist-simple
yarn add --dev ikatyang/types-ramda#v0.24.0-dist-selectable
yarn add --dev ikatyang/types-ramda#v0.24.0-dist-placeholder
```

## Progress

source version: v0.24.1

#### Declarations

- __246__/__246__ done

#### Unit tests

- __246__/__246__ done

#### Integration tests

- __242__/__246__ done
- [ ] composeK
- [ ] pipeK
- [ ] sequence
- [ ] traverse

## Development

```sh
# linting
yarn run lint

# migrate jsdoc (ramda-repo -> ./templates/*.md)
yarn run jsdoc

# build types (./templates/*.ts -> ./ramda/dist/**/*.d.ts)
yarn run build

# build types with watching mode
yarn run build-watch

# test utils
yarn run test-utils

# actual test
yarn run test-actual

# snapshot test for types
yarn run test

# snapshot test for types with watching mode
yarn run test -- --watch

# NOTE: test files
#   unit tests -> ./tests/*.ts
#   actual tests -> ./tests/ramda-tests.ts
#   integration tests -> ./tests/ramda-tests.ts

# remap snapshots (./tests/__snapshots__/*.ts.snap -> ./snapshots/*.ts)
yarn run remap

# remap snapshots with watching mode
yarn run remap-watch

# check if snapshot is outdated
yarn run remap-check
```

## Related

- [npm-ramda](https://github.com/types/npm-ramda): TypeScript's type definitions for Ramda from @types

## License

MIT © [Ika](https://github.com/ikatyang)

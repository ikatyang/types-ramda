# types-ramda

[![build](https://travis-ci.org/ikatyang/types-ramda.svg)](https://travis-ci.org/ikatyang/types-ramda)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

## Usage

```sh
# using npm
npm install --save-dev ikatyang/types-ramda

# using yarn
yarn add --dev ikatyang/types-ramda
```

## Features

#### For User

- support placeholder ( `R.__` )
- support partial import ( `import * as map from "ramda/src/map"` )
- support selectable overloads ( use 0-param: `R.map<"11", "list">()` )

#### For Developer

- support snapshot testing ( via [`dts-jest`](https://github.com/ikatyang/dts-jest), see `./tests/*.ts` )
- support functions auto-currying ( via [`dts-element`](https://github.com/ikatyang/dts-element), see `./templates/*.d.ts` )

## Development

```sh
# linting
yarn run lint

# migrate jsdoc (ramda-repo -> ./templates/*.md)
yarn run jsdoc

# build types (./index.d.ts, ./src/*.d.ts)
yarn run build

# build types with watching mode
yarn run build-watch

# snapshot test
yarn run test

# snapshot test with watching mode
yarn run test -- --watch
```

## Progress

source version: v0.24.1

#### Declarations

- __246__/__246__ done

#### Unit tests

- __246__/__246__ done

#### Integration tests

- [ ] __
- [x] add
- [x] addIndex
- [x] adjust
- [x] all
- [x] allPass
- [x] always
- [x] and
- [x] any
- [x] anyPass
- [x] ap
- [x] aperture
- [x] append
- [x] apply
- [x] applySpec
- [x] ascend
- [x] assoc
- [x] assocPath
- [x] binary
- [x] bind
- [x] both
- [x] call
- [x] chain
- [x] clamp
- [x] clone
- [x] comparator
- [x] complement
- [x] compose
- [ ] composeK
- [x] composeP
- [x] concat
- [x] cond
- [x] construct
- [x] constructN
- [x] contains
- [x] converge
- [x] countBy
- [x] curry
- [x] curryN
- [x] dec
- [x] defaultTo
- [x] descend
- [x] difference
- [x] differenceWith
- [x] dissoc
- [x] dissocPath
- [x] divide
- [x] drop
- [x] dropLast
- [x] dropLastWhile
- [ ] dropRepeats
- [ ] dropRepeatsWith
- [x] dropWhile
- [x] either
- [x] empty
- [ ] endsWith
- [x] eqBy
- [x] eqProps
- [x] equals
- [x] evolve
- [ ] F
- [x] filter
- [x] find
- [x] findIndex
- [x] findLast
- [x] findLastIndex
- [x] flatten
- [x] flip
- [x] forEach
- [x] forEachObjIndexed
- [x] fromPairs
- [x] groupBy
- [x] groupWith
- [x] gt
- [x] gte
- [x] has
- [x] hasIn
- [x] head
- [x] identical
- [x] identity
- [x] ifElse
- [ ] inc
- [ ] indexBy
- [x] indexOf
- [x] init
- [ ] innerJoin
- [x] insert
- [x] insertAll
- [x] intersection
- [ ] intersectionWith
- [x] intersperse
- [ ] into
- [x] invert
- [x] invertObj
- [ ] invoker
- [x] is
- [x] isEmpty
- [ ] isNil
- [x] join
- [ ] juxt
- [ ] keys
- [ ] keysIn
- [ ] last
- [ ] lastIndexOf
- [x] length
- [ ] lens
- [ ] lensIndex
- [ ] lensPath
- [ ] lensProp
- [ ] lift
- [ ] liftN
- [ ] lt
- [ ] lte
- [ ] map
- [ ] mapAccum
- [ ] mapAccumRight
- [ ] mapObjIndexed
- [x] match
- [ ] mathMod
- [ ] max
- [x] maxBy
- [x] mean
- [x] median
- [x] memoize
- [ ] memoizeWith
- [ ] merge
- [ ] mergeAll
- [ ] mergeDeepLeft
- [ ] mergeDeepRight
- [ ] mergeDeepWith
- [ ] mergeDeepWithKey
- [ ] mergeWith
- [ ] mergeWithKey
- [ ] min
- [ ] minBy
- [ ] modulo
- [x] multiply
- [ ] nAry
- [x] negate
- [ ] none
- [x] not
- [ ] nth
- [ ] nthArg
- [ ] o
- [ ] objOf
- [x] of
- [ ] omit
- [x] once
- [ ] or
- [ ] over
- [ ] pair
- [x] partial
- [ ] partialRight
- [ ] partition
- [ ] path
- [ ] pathEq
- [ ] pathOr
- [x] pathSatisfies
- [ ] pick
- [ ] pickAll
- [ ] pickBy
- [x] pipe
- [ ] pipeK
- [ ] pipeP
- [ ] pluck
- [x] prepend
- [x] product
- [ ] project
- [ ] prop
- [x] propEq
- [x] propIs
- [ ] propOr
- [ ] props
- [ ] propSatisfies
- [x] range
- [x] reduce
- [ ] reduceBy
- [ ] reduced
- [ ] reduceRight
- [x] reduceWhile
- [x] reject
- [x] remove
- [x] repeat
- [x] replace
- [ ] reverse
- [x] scan
- [ ] sequence
- [ ] set
- [x] slice
- [x] sort
- [ ] sortBy
- [ ] sortWith
- [ ] split
- [x] splitAt
- [ ] splitEvery
- [x] splitWhen
- [ ] startsWith
- [ ] subtract
- [x] sum
- [x] symmetricDifference
- [ ] symmetricDifferenceWith
- [ ] T
- [x] tail
- [x] take
- [x] takeLast
- [x] takeLastWhile
- [x] takeWhile
- [x] tap
- [x] test
- [x] times
- [ ] toLower
- [ ] toPairs
- [ ] toPairsIn
- [x] toString
- [ ] toUpper
- [ ] transduce
- [ ] transpose
- [ ] traverse
- [ ] trim
- [ ] tryCatch
- [ ] type
- [ ] unapply
- [ ] unary
- [x] uncurryN
- [ ] unfold
- [ ] union
- [ ] unionWith
- [ ] uniq
- [ ] uniqBy
- [ ] uniqWith
- [ ] unless
- [ ] unnest
- [ ] until
- [ ] update
- [ ] useWith
- [x] values
- [x] valuesIn
- [ ] view
- [ ] when
- [ ] where
- [ ] whereEq
- [x] without
- [x] xprod
- [x] zip
- [ ] zipObj
- [ ] zipWith

## Related

- [npm-ramda](https://github.com/types/npm-ramda): TypeScript's type definitions for Ramda from @types

## License

MIT © [Ika](https://github.com/ikatyang)

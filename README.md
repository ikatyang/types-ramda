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
- [ ] eqBy
- [ ] eqProps
- [ ] equals
- [ ] evolve
- [ ] F
- [ ] filter
- [ ] find
- [ ] findIndex
- [ ] findLast
- [ ] findLastIndex
- [ ] flatten
- [ ] flip
- [ ] forEach
- [ ] forEachObjIndexed
- [ ] fromPairs
- [ ] groupBy
- [ ] groupWith
- [ ] gt
- [ ] gte
- [ ] has
- [ ] hasIn
- [ ] head
- [ ] identical
- [ ] identity
- [ ] ifElse
- [ ] inc
- [ ] indexBy
- [ ] indexOf
- [ ] init
- [ ] innerJoin
- [ ] insert
- [ ] insertAll
- [ ] intersection
- [ ] intersectionWith
- [ ] intersperse
- [ ] into
- [ ] invert
- [ ] invertObj
- [ ] invoker
- [ ] is
- [ ] isEmpty
- [ ] isNil
- [ ] join
- [ ] juxt
- [ ] keys
- [ ] keysIn
- [ ] last
- [ ] lastIndexOf
- [ ] length
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
- [ ] match
- [ ] mathMod
- [ ] max
- [ ] maxBy
- [ ] mean
- [ ] median
- [ ] memoize
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
- [ ] multiply
- [ ] nAry
- [ ] negate
- [ ] none
- [ ] not
- [ ] nth
- [ ] nthArg
- [ ] o
- [ ] objOf
- [ ] of
- [ ] omit
- [ ] once
- [ ] or
- [ ] over
- [ ] pair
- [ ] partial
- [ ] partialRight
- [ ] partition
- [ ] path
- [ ] pathEq
- [ ] pathOr
- [ ] pathSatisfies
- [ ] pick
- [ ] pickAll
- [ ] pickBy
- [ ] pipe
- [ ] pipeK
- [ ] pipeP
- [ ] pluck
- [ ] prepend
- [ ] product
- [ ] project
- [ ] prop
- [ ] propEq
- [ ] propIs
- [ ] propOr
- [ ] props
- [ ] propSatisfies
- [ ] range
- [ ] reduce
- [ ] reduceBy
- [ ] reduced
- [ ] reduceRight
- [ ] reduceWhile
- [ ] reject
- [ ] remove
- [ ] repeat
- [ ] replace
- [ ] reverse
- [ ] scan
- [ ] sequence
- [ ] set
- [ ] slice
- [ ] sort
- [ ] sortBy
- [ ] sortWith
- [ ] split
- [ ] splitAt
- [ ] splitEvery
- [ ] splitWhen
- [ ] startsWith
- [ ] subtract
- [ ] sum
- [ ] symmetricDifference
- [ ] symmetricDifferenceWith
- [ ] T
- [ ] tail
- [ ] take
- [ ] takeLast
- [ ] takeLastWhile
- [ ] takeWhile
- [ ] tap
- [ ] test
- [ ] times
- [ ] toLower
- [ ] toPairs
- [ ] toPairsIn
- [ ] toString
- [ ] toUpper
- [ ] transduce
- [ ] transpose
- [ ] traverse
- [ ] trim
- [ ] tryCatch
- [ ] type
- [ ] unapply
- [ ] unary
- [ ] uncurryN
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
- [ ] values
- [ ] valuesIn
- [ ] view
- [ ] when
- [ ] where
- [ ] whereEq
- [ ] without
- [ ] xprod
- [ ] zip
- [ ] zipObj
- [ ] zipWith

## Related

- [npm-ramda](https://github.com/types/npm-ramda): TypeScript's type definitions for Ramda from @types

## License

MIT © [Ika](https://github.com/ikatyang)

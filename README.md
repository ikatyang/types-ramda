# types-ramda

[![build](https://travis-ci.org/ikatyang/types-ramda.svg)](https://travis-ci.org/ikatyang/types-ramda)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

developing ...

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

source version: v0.24.x

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
- [ ] chain
- [x] clamp
- [x] clone
- [x] comparator
- [x] complement
- [ ] compose
- [ ] composeK
- [ ] composeP
- [x] concat
- [x] cond
- [ ] construct
- [ ] constructN
- [x] contains
- [ ] converge
- [x] countBy
- [ ] curry
- [ ] curryN
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
- [x] dropRepeats
- [x] dropRepeatsWith
- [x] dropWhile
- [x] either
- [x] empty
- [x] endsWith
- [x] eqBy
- [x] eqProps
- [x] equals
- [x] evolve
- [x] F
- [x] filter
- [x] find
- [x] findIndex
- [x] findLast
- [x] findLastIndex
- [x] flatten
- [ ] flip
- [x] forEach
- [x] forEachObjIndexed
- [x] fromPairs
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
- [x] inc
- [ ] indexBy
- [ ] indexOf
- [ ] init
- [ ] innerJoin
- [ ] insert
- [ ] insertAll
- [x] intersection
- [x] intersectionWith
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
- [x] map
- [ ] mapAccum
- [ ] mapAccumRight
- [ ] mapObjIndexed
- [ ] match
- [x] mathMod
- [ ] max
- [ ] maxBy
- [x] mean
- [x] median
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
- [x] modulo
- [x] multiply
- [x] nAry
- [x] negate
- [ ] none
- [ ] not
- [ ] nth
- [ ] nthArg
- [ ] o
- [ ] objOf
- [ ] of
- [ ] omit
- [ ] once
- [x] or
- [ ] over
- [x] pair
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
- [x] prepend
- [x] product
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
- [x] startsWith
- [x] subtract
- [x] sum
- [x] symmetricDifference
- [x] symmetricDifferenceWith
- [x] T
- [ ] tail
- [x] take
- [x] takeLast
- [x] takeLastWhile
- [x] takeWhile
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
- [x] unary
- [ ] uncurryN
- [ ] unfold
- [x] union
- [x] unionWith
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

## License

MIT © [Ika](https://github.com/ikatyang)

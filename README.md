# types-ramda

[![build](https://travis-ci.org/ikatyang/types-ramda.svg)](https://travis-ci.org/ikatyang/types-ramda)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

developing ...

## Development

```sh
# linting
yarn run lint

# migrate jsdoc (ramda repo -> ./src/templates/*.md)
yarn run jsdoc

# build for test (./ramda/*.d.ts)
yarn run build

# build for test with watching mode
yarn run build-watch

# build for release (./index.d.ts)
yarn run build-release

# snapshot test
yarn run test

# snapshot test with watching mode
yarn run test -- --watch
```

## Progress

source version: v0.23.x

#### migration

done

#### testing

- [ ] __
- [x] add
- [ ] addIndex
- [ ] adjust
- [x] all
- [x] allPass
- [x] always
- [ ] and
- [x] any
- [x] anyPass
- [x] ap
- [x] aperture
- [ ] append
- [x] apply
- [ ] applySpec
- [ ] ascend
- [ ] assoc
- [ ] assocPath
- [ ] binary
- [ ] bind
- [x] both
- [ ] call
- [ ] chain
- [ ] clamp
- [ ] clone
- [ ] comparator
- [x] complement
- [ ] compose
- [ ] composeK
- [ ] composeP
- [x] concat
- [x] cond
- [ ] construct
- [ ] constructN
- [x] contains
- [x] converge
- [ ] countBy
- [ ] curry
- [ ] curryN
- [x] dec
- [ ] defaultTo
- [ ] descend
- [x] difference
- [ ] differenceWith
- [ ] dissoc
- [ ] dissocPath
- [x] divide
- [ ] drop
- [ ] dropLast
- [x] dropLastWhile
- [ ] dropRepeats
- [ ] dropRepeatsWith
- [x] dropWhile
- [x] either
- [ ] empty
- [x] eqBy
- [ ] eqProps
- [x] equals
- [ ] evolve
- [ ] F
- [ ] filter
- [ ] find
- [x] findIndex
- [ ] findLast
- [ ] findLastIndex
- [ ] flatten
- [x] flip
- [ ] forEach
- [ ] forEachObjIndexed
- [ ] fromPairs
- [ ] groupBy
- [ ] groupWith
- [x] gt
- [x] gte
- [x] has
- [x] hasIn
- [x] head
- [x] identical
- [x] identity
- [ ] ifElse
- [x] inc
- [ ] indexBy
- [x] indexOf
- [x] init
- [x] insert
- [x] insertAll
- [x] intersection
- [ ] intersectionWith
- [x] intersperse
- [ ] into
- [ ] invert
- [ ] invertObj
- [ ] invoker
- [x] is
- [x] isArrayLike
- [x] isEmpty
- [ ] isNil
- [x] join
- [ ] juxt
- [x] keys
- [x] keysIn
- [ ] last
- [ ] lastIndexOf
- [x] length
- [ ] lens
- [ ] lensIndex
- [ ] lensPath
- [ ] lensProp
- [ ] lift
- [ ] liftN
- [x] lt
- [x] lte
- [ ] map
- [ ] mapAccum
- [ ] mapAccumRight
- [ ] mapObjIndexed
- [ ] match
- [x] mathMod
- [ ] max
- [ ] maxBy
- [x] mean
- [x] median
- [x] memoize
- [ ] merge
- [ ] mergeAll
- [ ] mergeWith
- [ ] mergeWithKey
- [ ] min
- [ ] minBy
- [x] modulo
- [x] multiply
- [ ] nAry
- [x] negate
- [ ] none
- [x] not
- [ ] nth
- [ ] nthArg
- [ ] objOf
- [x] of
- [ ] omit
- [x] once
- [ ] or
- [ ] over
- [x] pair
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
- [ ] pipe
- [ ] pipeK
- [x] pipeP
- [ ] pluck
- [x] prepend
- [x] product
- [ ] project
- [ ] prop
- [x] propEq
- [x] propIs
- [ ] propOr
- [ ] props
- [x] propSatisfies
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
- [x] subtract
- [x] sum
- [x] symmetricDifference
- [ ] symmetricDifferenceWith
- [ ] T
- [x] tail
- [x] take
- [ ] takeLast
- [x] takeLastWhile
- [x] takeWhile
- [x] tap
- [x] test
- [x] times
- [ ] toLower
- [x] toPairs
- [ ] toPairsIn
- [x] toString
- [ ] toUpper
- [ ] transduce
- [ ] transpose
- [ ] traverse
- [ ] trim
- [x] tryCatch
- [x] type
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
- [x] until
- [ ] update
- [ ] useWith
- [x] values
- [ ] valuesIn
- [ ] view
- [ ] when
- [ ] where
- [ ] whereEq
- [x] without
- [ ] xprod
- [ ] zip
- [ ] zipObj
- [ ] zipWith

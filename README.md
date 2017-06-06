# types-ramda

[![build](https://travis-ci.org/ikatyang/types-ramda.svg)](https://travis-ci.org/ikatyang/types-ramda)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

developing ...

## Development

```sh
# linting
yarn run lint

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

- [x] __
- [x] add
- [ ] addIndex
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
- [ ] compose
- [ ] composeK
- [ ] composeP
- [x] concat
- [x] cond
- [x] construct
- [x] constructN
- [x] contains
- [x] converge
- [x] countBy
- [ ] curry
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
- [x] dropRepeats
- [x] dropRepeatsWith
- [x] dropWhile
- [x] either
- [x] empty
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
- [x] inc
- [x] indexBy
- [x] indexOf
- [x] init
- [x] insert
- [x] insertAll
- [x] intersection
- [x] intersectionWith
- [x] intersperse
- [x] into
- [x] invert
- [x] invertObj
- [x] invoker
- [x] is
- [x] isArrayLike
- [x] isEmpty
- [x] isNil
- [x] join
- [x] juxt
- [x] keys
- [x] keysIn
- [x] last
- [x] lastIndexOf
- [x] length
- [x] lens
- [x] lensIndex
- [x] lensPath
- [x] lensProp
- [ ] lift
- [ ] liftN
- [x] lt
- [x] lte
- [x] map
- [x] mapAccum
- [x] mapAccumRight
- [x] mapObjIndexed
- [x] match
- [x] mathMod
- [x] max
- [x] maxBy
- [x] mean
- [x] median
- [x] memoize
- [x] merge
- [x] mergeAll
- [x] mergeWith
- [x] mergeWithKey
- [x] min
- [x] minBy
- [x] modulo
- [x] multiply
- [x] nAry
- [x] negate
- [x] none
- [x] not
- [x] nth
- [x] nthArg
- [x] objOf
- [x] of
- [x] omit
- [x] once
- [x] or
- [x] over
- [x] pair
- [x] partial
- [x] partialRight
- [x] partition
- [ ] path
- [x] pathEq
- [x] pathOr
- [x] pathSatisfies
- [x] pick
- [x] pickAll
- [x] pickBy
- [ ] pipe
- [ ] pipeK
- [ ] pipeP
- [x] pluck
- [x] prepend
- [x] product
- [x] project
- [x] prop
- [x] propEq
- [x] propIs
- [x] propOr
- [x] props
- [x] propSatisfies
- [x] range
- [x] reduce
- [x] reduceBy
- [x] reduced
- [x] reduceRight
- [x] reduceWhile
- [x] reject
- [x] remove
- [x] repeat
- [x] replace
- [x] reverse
- [x] scan
- [x] sequence
- [x] set
- [x] slice
- [x] sort
- [x] sortBy
- [x] sortWith
- [x] split
- [x] splitAt
- [x] splitEvery
- [x] splitWhen
- [x] subtract
- [x] sum
- [x] symmetricDifference
- [x] symmetricDifferenceWith
- [x] T
- [x] tail
- [x] take
- [x] takeLast
- [x] takeLastWhile
- [x] takeWhile
- [x] tap
- [x] test
- [x] times
- [x] toLower
- [x] toPairs
- [x] toPairsIn
- [x] toString
- [x] toUpper
- [x] transduce
- [x] transpose
- [x] traverse
- [x] trim
- [x] tryCatch
- [x] type
- [x] unapply
- [x] unary
- [x] uncurryN
- [x] unfold
- [x] union
- [x] unionWith
- [x] uniq
- [x] uniqBy
- [x] uniqWith
- [x] unless
- [x] unnest
- [x] until
- [x] update
- [x] useWith
- [x] values
- [x] valuesIn
- [x] view
- [x] when
- [x] where
- [x] whereEq
- [x] without
- [x] xprod
- [x] zip
- [x] zipObj
- [x] zipWith

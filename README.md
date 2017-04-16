# ts-ramda

[![build](https://travis-ci.org/ikatyang/ts-ramda.svg)](https://travis-ci.org/ikatyang/ts-ramda)

TypeScript Wrapper for [Ramda](https://github.com/ramda/ramda)

require `typescript >= 2.3.0`

## Development

Use Yarn as package manager

#### Build

```sh
yarn run build
```

#### Lint

```sh
yarn run lint
```

#### Test

```sh
yarn run test
```

## API

source version: v0.23.0

- [x] __
- [x] add
- [x] addIndex
- [x] adjust
- [x] all
- [x] allPass
- [x] always
- [x] and
- any
  - [x] any for ArrayLike
  - [x] anySelf for `#any()`
- [x] anyPass
- ap
  - [x] ap for ArrayLike
  - [x] apSelf for `#ap()`
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
- [ ] call
- [ ] chain
- [ ] clamp
- [ ] clone
- [ ] comparator
- [ ] complement
- [ ] compose
- [ ] composeK
- [ ] composeP
- [x] concat
- [ ] cond
- [ ] construct
- [ ] constructN
- [ ] contains
- [ ] converge
- [ ] countBy
- [ ] curry
- [ ] curryN
- [x] dec
- [ ] defaultTo
- [x] descend
- [ ] difference
- [ ] differenceWith
- [ ] dissoc
- [ ] dissocPath
- [x] divide
- [ ] drop
- [ ] dropLast
- [ ] dropLastWhile
- [ ] dropRepeats
- [ ] dropRepeatsWith
- [ ] dropWhile
- [ ] either
- [ ] empty
- [ ] eqBy
- [ ] eqProps
- [x] equals
- [ ] evolve
- [ ] F
- filter
  - [x] filter for ArrayLike
  - [x] filterSelf for `#filter()`
  - [x] filterDictionary for Object
- [ ] find
- [ ] findIndex
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
- [ ] has
- [ ] hasIn
- [ ] head
- [ ] identical
- [x] identity
- [ ] ifElse
- [x] inc
- [ ] indexBy
- [ ] indexOf
- [ ] init
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
- [ ] isArrayLike
- [ ] isEmpty
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
- [x] lt
- [x] lte
- [x] map
- [ ] mapAccum
- [ ] mapAccumRight
- [ ] mapObjIndexed
- [ ] match
- [x] mathMod
- [ ] max
- [ ] maxBy
- [ ] mean
- [ ] median
- [ ] memoize
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
- [x] none
- [x] not
- [ ] nth
- [ ] nthArg
- [ ] objOf
- [ ] of
- [ ] omit
- [ ] once
- [x] or
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
- [x] pipe
- [ ] pipeK
- [ ] pipeP
- [ ] pluck
- [x] prepend
- [x] product
- [ ] project
- [x] prop
- [x] propEq
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
- reject
  - [x] reject for ArrayLike
  - [x] rejectSelf for `#filter()`
  - [x] rejectDictionary for Object
- [ ] remove
- [ ] repeat
- [x] replace
- [ ] reverse
- [ ] scan
- [ ] sequence
- [ ] set
- [ ] slice
- [x] sort
- [ ] sortBy
- [ ] sortWith
- [ ] split
- [ ] splitAt
- [ ] splitEvery
- [ ] splitWhen
- [x] subtract
- [x] sum
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
- [x] times
- [x] toLower
- [ ] toPairs
- [ ] toPairsIn
- [ ] toString
- [x] toUpper
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

# types-ramda

[![build](https://travis-ci.org/ikatyang/types-ramda.svg)](https://travis-ci.org/ikatyang/types-ramda)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

developing ...

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
- [ ] applySpec
- [ ] ascend
- [ ] assoc
- [ ] assocPath
- [ ] binary
- [ ] bind
- [ ] both
- [ ] call
- [ ] chain
- [ ] clamp
- [ ] clone
- [ ] comparator
- [ ] complement
- [ ] compose
- [ ] composeK
- [ ] composeP
- [ ] concat
- [ ] cond
- [ ] construct
- [ ] constructN
- [ ] contains
- [ ] converge
- [ ] countBy
- [ ] curry
- [ ] curryN
- [ ] dec
- [ ] defaultTo
- [ ] descend
- [ ] difference
- [ ] differenceWith
- [ ] dissoc
- [ ] dissocPath
- [ ] divide
- [ ] drop
- [ ] dropLast
- [ ] dropLastWhile
- [ ] dropRepeats
- [ ] dropRepeatsWith
- [ ] dropWhile
- [ ] either
- [ ] empty
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
- [x] map
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
- [ ] pipe
- [ ] pipeK
- [ ] pipeP
- [ ] pluck
- [x] prepend
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

## License

MIT © [Ika](https://github.com/ikatyang)

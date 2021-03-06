# Change Log

All changes to this project will be documented in this file.

> **Tags:**
> - 💥 [Breaking Change]
> - 🚀 [New Feature]
> - 🐛 [Bug Fix]
> - 📝 [Documentation]
> - 🏠 [Internal]
> - 💅 [Polish]

<a name="0.24.3"></a>
## [0.24.3](https://github.com/ikatyang/types-ramda/compare/v0.24.2...v0.24.3) (2017-08-13)

### Bug Fixes

* **generated:** fix `Cannot find name 'K'` for `R.dissoc` and `R.pick` ([560e6e3](https://github.com/ikatyang/types-ramda/commit/560e6e3))
* **templates:** `R.splitWhen` - should return array of array (#86) ([c21564a](https://github.com/ikatyang/types-ramda/commit/c21564a))

### Features

* **templates:** replace returned `any` with `T` (#85) ([24f531a](https://github.com/ikatyang/types-ramda/commit/24f531a))
* **templates:** `R.both`-like -  allow variadic predicate (#91) ([96bece0](https://github.com/ikatyang/types-ramda/commit/96bece0))
* **templates:** `R.lens`-like - support PseudoLens (lensIndex, lensProp) (#99) ([cec493c](https://github.com/ikatyang/types-ramda/commit/cec493c))
* **tempaltes:** `R.path` - no regression from npm-ramda (#84) ([92656be](https://github.com/ikatyang/types-ramda/commit/92656be))
* **templates:** `R.unless` - support predicate (#87) ([4f613d7](https://github.com/ikatyang/types-ramda/commit/4f613d7))
* **temlpates:** `R.where` - make it less strict (#98) ([0460185](https://github.com/ikatyang/types-ramda/commit/0460185))

<a name="v0.24.2"></a>
## [v0.24.2](https://github.com/ikatyang/types-ramda/compare/v0.24.1...v0.24.2) (2017-07-20)

#### 🚀 New Feature

- **template:** constrain non-null-parameter with `{}` (#54) ([34f6488](https://github.com/ikatyang/types-ramda/commit/34f6488))
- **template:** R.append-like - allow different type (#37) ([65738c5](https://github.com/ikatyang/types-ramda/commit/65738c5))
- **template:** R.filter-like - return Partial for objects (#45) ([9eaa862](https://github.com/ikatyang/types-ramda/commit/9eaa862))
- **template:** R.merge-like - improve using type-level operation (#55) ([df7af44](https://github.com/ikatyang/types-ramda/commit/df7af44))
- **template:** R.pipeP-like - allow non-PromiseLike as fn return type (#44) ([9bd79dd](https://github.com/ikatyang/types-ramda/commit/9bd79dd))
- **template:** R.splitAt-like - should return tuple (#43) ([1b8a157](https://github.com/ikatyang/types-ramda/commit/1b8a157))

<a name="v0.24.1"></a>
## [v0.24.1](https://github.com/ikatyang/types-ramda/compare/v0.24.0...v0.24.1) (2017-07-10)

#### 🚀 New Feature

- **template:** improve tuple in R.head ([efc2ea7](https://github.com/ikatyang/types-ramda/commit/efc2ea7))
- **template:** improve `Ordered` type (#16) ([d622766](https://github.com/ikatyang/types-ramda/commit/d622766))
- **utils:** sort signatures using ascending order ([9ed1f42](https://github.com/ikatyang/types-ramda/commit/9ed1f42))

#### 🐛 Bug Fix

- **template:** add missing export modifiers ([7076781](https://github.com/ikatyang/types-ramda/commit/7076781))
- **tempalte:** R.append-like operations should not affect types ([12988ac](https://github.com/ikatyang/types-ramda/commit/12988ac))
- **template:** R.concat is not compatible with List ([b9fc8cb](https://github.com/ikatyang/types-ramda/commit/b9fc8cb))
- **template:** R.cond should accept multi-args (#24) ([77a78e6](https://github.com/ikatyang/types-ramda/commit/77a78e6))
- **template:** R.head and R.last should return string type if input is a string ([64cd511](https://github.com/ikatyang/types-ramda/commit/64cd511))
- **template:** remove unnecessary importing placeholder ([90af411](https://github.com/ikatyang/types-ramda/commit/90af411))
- **utils:** placeholders should be the frontest ([cff4d79](https://github.com/ikatyang/types-ramda/commit/cff4d79))
- **utils:** remove unnecessary generated generics (#8) ([39770d3](https://github.com/ikatyang/types-ramda/commit/39770d3))
- **utils:** support CurriedFunctionN multi-version building ([f846073](https://github.com/ikatyang/types-ramda/commit/f846073))

## v0.24.0 (2017-06-25)

#### 🚀 New Feature
- Release first version

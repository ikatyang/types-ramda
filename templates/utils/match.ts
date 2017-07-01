import * as R from 'ramda';

/**
 * (target: any, object: any) => boolean
 *
 * Returns `true` if `object` matches `target`, `false` otherwise.
 */
export const match = R.curry((target: any, object: any): boolean =>
  R.pipe(
    R.keys,
    R.ifElse(
      R.pipe(R.length, R.identical(0)),
      () => R.equals(target, object),
      R.all(R.tryCatch((key: string) => match(target[key], object[key]), R.F)),
    ),
  )(target),
);

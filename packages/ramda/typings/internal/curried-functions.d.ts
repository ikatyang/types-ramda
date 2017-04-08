/// <reference path="../__.d.ts" />

declare namespace R {

  type PH = Placeholder;

  interface CurriedFunction1<T1, R> {
    (_1: PH): CurriedFunction1<T1, R>;
    (v1: T1): R;
  }

  interface CurriedFunction2<T1, T2, R> {
    (_1: PH): CurriedFunction2<T1, T2, R>;
    (v1: T1): CurriedFunction1<T2, R>;
    (_1: PH, _2: PH): CurriedFunction2<T1, T2, R>;
    (_1: PH, v2: T2): CurriedFunction1<T1, R>;
    (v1: T1, _2: PH): CurriedFunction1<T2, R>;
    (v1: T1, v2: T2): R;
  }

  interface CurriedFunction3<T1, T2, T3, R> {
    (_1: PH): CurriedFunction3<T1, T2, T3, R>;
    (v1: T1): CurriedFunction2<T2, T3, R>;
    (_1: PH, _2: PH): CurriedFunction3<T1, T2, T3, R>;
    (_1: PH, v2: T2): CurriedFunction2<T1, T3, R>;
    (v1: T1, _2: PH): CurriedFunction2<T2, T3, R>;
    (v1: T1, v2: T2): CurriedFunction1<T3, R>;
    (_1: PH, _2: PH, _3: PH): CurriedFunction3<T1, T2, T3, R>;
    (_1: PH, _2: PH, v3: T3): CurriedFunction2<T1, T2, R>;
    (_1: PH, v2: T2, _3: PH): CurriedFunction2<T1, T3, R>;
    (_1: PH, v2: T2, v3: T3): CurriedFunction1<T1, R>;
    (v1: T1, _2: PH, _3: PH): CurriedFunction2<T2, T3, R>;
    (v1: T1, _2: PH, v3: T3): CurriedFunction1<T2, R>;
    (v1: T1, v2: T2, _3: PH): CurriedFunction1<T3, R>;
    (v1: T1, v2: T2, v3: T3): R;
  }

  interface CurriedFunction4<T1, T2, T3, T4, R> {
    (_1: PH): CurriedFunction4<T1, T2, T3, T4, R>;
    (v1: T1): CurriedFunction3<T2, T3, T4, R>;
    (_1: PH, _2: PH): CurriedFunction4<T1, T2, T3, T4, R>;
    (_1: PH, v2: T2): CurriedFunction3<T1, T3, T4, R>;
    (v1: T1, _2: PH): CurriedFunction3<T2, T3, T4, R>;
    (v1: T1, v2: T2): CurriedFunction2<T3, T4, R>;
    (_1: PH, _2: PH, _3: PH): CurriedFunction4<T1, T2, T3, T4, R>;
    (_1: PH, _2: PH, v3: T3): CurriedFunction3<T1, T2, T4, R>;
    (_1: PH, v2: T2, _3: PH): CurriedFunction3<T1, T3, T4, R>;
    (_1: PH, v2: T2, v3: T3): CurriedFunction2<T1, T4, R>;
    (v1: T1, _2: PH, _3: PH): CurriedFunction3<T2, T3, T4, R>;
    (v1: T1, _2: PH, v3: T3): CurriedFunction2<T2, T4, R>;
    (v1: T1, v2: T2, _3: PH): CurriedFunction2<T3, T4, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction1<T4, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH): CurriedFunction4<T1, T2, T3, T4, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4): CurriedFunction3<T1, T2, T3, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH): CurriedFunction3<T1, T2, T4, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4): CurriedFunction2<T1, T2, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH): CurriedFunction3<T1, T3, T4, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4): CurriedFunction2<T1, T3, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH): CurriedFunction2<T1, T4, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4): CurriedFunction1<T1, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH): CurriedFunction3<T2, T3, T4, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4): CurriedFunction2<T2, T3, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH): CurriedFunction2<T2, T4, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4): CurriedFunction1<T2, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH): CurriedFunction2<T3, T4, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4): CurriedFunction1<T3, R>;
    (v1: T1, v2: T2, v3: T3, _4: PH): CurriedFunction1<T4, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): R;
  }

  interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (_1: PH): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (v1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
    (_1: PH, _2: PH): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (_1: PH, v2: T2): CurriedFunction4<T1, T3, T4, T5, R>;
    (v1: T1, _2: PH): CurriedFunction4<T2, T3, T4, T5, R>;
    (v1: T1, v2: T2): CurriedFunction3<T3, T4, T5, R>;
    (_1: PH, _2: PH, _3: PH): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (_1: PH, _2: PH, v3: T3): CurriedFunction4<T1, T2, T4, T5, R>;
    (_1: PH, v2: T2, _3: PH): CurriedFunction4<T1, T3, T4, T5, R>;
    (_1: PH, v2: T2, v3: T3): CurriedFunction3<T1, T4, T5, R>;
    (v1: T1, _2: PH, _3: PH): CurriedFunction4<T2, T3, T4, T5, R>;
    (v1: T1, _2: PH, v3: T3): CurriedFunction3<T2, T4, T5, R>;
    (v1: T1, v2: T2, _3: PH): CurriedFunction3<T3, T4, T5, R>;
    (v1: T1, v2: T2, v3: T3): CurriedFunction2<T4, T5, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4): CurriedFunction4<T1, T2, T3, T5, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH): CurriedFunction4<T1, T2, T4, T5, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4): CurriedFunction3<T1, T2, T5, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH): CurriedFunction4<T1, T3, T4, T5, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4): CurriedFunction3<T1, T3, T5, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH): CurriedFunction3<T1, T4, T5, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4): CurriedFunction2<T1, T5, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH): CurriedFunction4<T2, T3, T4, T5, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4): CurriedFunction3<T2, T3, T5, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH): CurriedFunction3<T2, T4, T5, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4): CurriedFunction2<T2, T5, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH): CurriedFunction3<T3, T4, T5, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4): CurriedFunction2<T3, T5, R>;
    (v1: T1, v2: T2, v3: T3, _4: PH): CurriedFunction2<T4, T5, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4): CurriedFunction1<T5, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH, _5: PH): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (_1: PH, _2: PH, _3: PH, _4: PH, v5: T5): CurriedFunction4<T1, T2, T3, T4, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4, _5: PH): CurriedFunction4<T1, T2, T3, T5, R>;
    (_1: PH, _2: PH, _3: PH, v4: T4, v5: T5): CurriedFunction3<T1, T2, T3, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH, _5: PH): CurriedFunction4<T1, T2, T4, T5, R>;
    (_1: PH, _2: PH, v3: T3, _4: PH, v5: T5): CurriedFunction3<T1, T2, T4, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4, _5: PH): CurriedFunction3<T1, T2, T5, R>;
    (_1: PH, _2: PH, v3: T3, v4: T4, v5: T5): CurriedFunction2<T1, T2, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH, _5: PH): CurriedFunction4<T1, T3, T4, T5, R>;
    (_1: PH, v2: T2, _3: PH, _4: PH, v5: T5): CurriedFunction3<T1, T3, T4, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4, _5: PH): CurriedFunction3<T1, T3, T5, R>;
    (_1: PH, v2: T2, _3: PH, v4: T4, v5: T5): CurriedFunction2<T1, T3, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH, _5: PH): CurriedFunction3<T1, T4, T5, R>;
    (_1: PH, v2: T2, v3: T3, _4: PH, v5: T5): CurriedFunction2<T1, T4, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4, _5: PH): CurriedFunction2<T1, T5, R>;
    (_1: PH, v2: T2, v3: T3, v4: T4, v5: T5): CurriedFunction1<T1, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH, _5: PH): CurriedFunction4<T2, T3, T4, T5, R>;
    (v1: T1, _2: PH, _3: PH, _4: PH, v5: T5): CurriedFunction3<T2, T3, T4, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4, _5: PH): CurriedFunction3<T2, T3, T5, R>;
    (v1: T1, _2: PH, _3: PH, v4: T4, v5: T5): CurriedFunction2<T2, T3, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH, _5: PH): CurriedFunction3<T2, T4, T5, R>;
    (v1: T1, _2: PH, v3: T3, _4: PH, v5: T5): CurriedFunction2<T2, T4, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4, _5: PH): CurriedFunction2<T2, T5, R>;
    (v1: T1, _2: PH, v3: T3, v4: T4, v5: T5): CurriedFunction1<T2, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH, _5: PH): CurriedFunction3<T3, T4, T5, R>;
    (v1: T1, v2: T2, _3: PH, _4: PH, v5: T5): CurriedFunction2<T3, T4, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4, _5: PH): CurriedFunction2<T3, T5, R>;
    (v1: T1, v2: T2, _3: PH, v4: T4, v5: T5): CurriedFunction1<T3, R>;
    (v1: T1, v2: T2, v3: T3, _4: PH, _5: PH): CurriedFunction2<T4, T5, R>;
    (v1: T1, v2: T2, v3: T3, _4: PH, v5: T5): CurriedFunction1<T4, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, _5: PH): CurriedFunction1<T5, R>;
    (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): R;
  }

}

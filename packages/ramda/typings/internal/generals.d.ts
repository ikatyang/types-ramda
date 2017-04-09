declare namespace R {

  interface List<T> {
    readonly length: number;
    readonly [index: number]: T;
  }
  
  type Transformer<T, U> = (value: T) => U;
  type IndexedTransformer<T, U> = (value: T, index: number, list: List<T>) => U;
  type Mapper<T, U> = (fn: Transformer<T, U>, list: List<T>) => U[];
  type IndexedMapper<T, U> = (fn: IndexedTransformer<T, U>, list: List<T>) => U[];

}

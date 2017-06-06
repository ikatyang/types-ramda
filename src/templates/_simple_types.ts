import * as dts from 'dts-element';

export default dts.parse(`

type Index = string | number;
type Primitive = string | number | boolean;
type Ord = string | number | boolean | Date;

interface Dictionary<T> {
    [index: string]: T;
}

type Obj<T> = Dictionary<T>;
type List<T> = T[] | ArrayLike<T>;
type StringLike = string | StringRepresentable<string>;
type Prop = Index | StringRepresentable<Index>;
type Path = List<Prop>;
type Struct<T> = Obj<T> | List<T>;
type AccOpts<T,U> = List<any>|Obj<any>|Transformer<T, U, U>;
type Pred<T> = (v: T) => boolean;
type ObjPred<T> = (value: T, key: string) => boolean;

`).members;

type TupleToString<T, Result extends string = ""> = T extends [infer L, ...infer R]
  ? L extends string
    ? TupleToString<R, `${Result}${L}`>
    : never
  : Result;

type A = TupleToString<["a", "b", "c"]>; // 'abc'
type B = TupleToString<[]>; // ''
type C = TupleToString<["a"]>; // 'a'
export default {};

type Flat<T extends any[], Result extends any[] = []> = T extends [infer L, ...infer R]
  ? L extends any[]
    ? Flat<R, [...Result, ...Flat<L>]>
    : Flat<R, [...Result, L]>
  : Result;
type A = Flat<[1, 2, 3]>; // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]>; // [1,2,3,4,5,6]
type C = Flat<[]>; // []
type D = Flat<[1]>; // [1]
export default {};

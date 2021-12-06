type LengthOfTuple<T extends any[], Result extends any[] = []> = T extends [infer L, ...infer R]
  ? LengthOfTuple<R, [...Result, null]>
  : Result["length"];
type A = LengthOfTuple<["B", "F", "E"]>; // 3
type B = LengthOfTuple<[]>; // 0

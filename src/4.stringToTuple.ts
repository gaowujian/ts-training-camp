type StringToTuple<T, Result extends Array<any> = []> = T extends `${infer L}${infer R}`
  ? StringToTuple<R, [...Result, L]>
  : Result;
type A = StringToTuple<"BFE.dev">; // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<"">; // []

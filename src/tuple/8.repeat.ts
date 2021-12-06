type Repeat<T, R, N extends any[] = [], Result extends any[] = []> = N["length"] extends R
  ? Result
  : Repeat<T, R, [...N, null], [...Result, T]>;
type A = Repeat<number, 3>; // [number, number, number]
type B = Repeat<string, 2>; // [string, string]
type C = Repeat<1, 1>; // [1]
type D = Repeat<0, 0>; // []

export default {};

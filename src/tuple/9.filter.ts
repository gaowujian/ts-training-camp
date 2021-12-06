type Filter<T extends any[], K, Result extends any[] = []> = T extends [infer L, ...infer R]
  ? Filter<R, K, [L] extends [K] ? [...Result, L] : Result>
  : Result;
type A = Filter<[1, "BFE", 2, true, "dev"], number>; // [1, 2]
type B = Filter<[1, "BFE", 2, true, "dev"], string>; // ['BFE', 'dev']
type C = Filter<[1, "BFE", 2, any, "dev"], string>; // ['BFE', any, 'dev']

type c = [any] extends [number] ? 1 : 2;
export default {};

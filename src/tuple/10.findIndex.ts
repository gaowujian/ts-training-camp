type Equal<T, R> = [T] extends [R]
  ? [R] extends [T]
    ? keyof T extends keyof R
      ? keyof R extends keyof T
        ? true
        : false
      : false
    : false
  : false;

type AA = Equal<any, 1>;

type FindIndex<T extends any[], K, N extends any[] = []> = T extends [infer L, ...infer R]
  ? Equal<L, K> extends true
    ? N["length"]
    : FindIndex<R, K, [...N, null]>
  : never;
type A = [any, never, 1, "2", true];
type B = FindIndex<A, 1>; // 2
type C = FindIndex<A, 3>; // never
type D = FindIndex<A, true>; // 4

export default {};

type LastItem<T extends any[], Result = never> = T extends [infer L, ...infer R] ? LastItem<R, L> : Result;
type A = LastItem<[string, number, boolean]>; // boolean
type B = LastItem<["B", "F", "E"]>; // 'E'
type C = LastItem<[]>; // never
export default {};

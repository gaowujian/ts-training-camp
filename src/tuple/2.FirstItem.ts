type FirstItem<T extends any[]> = T extends [infer L, ...infer R] ? L : T;

type A = FirstItem<[string, number, boolean]>; // string
type B = FirstItem<["B", "F", "E"]>; // 'B'
type C = FirstItem<[]>; // 'C'

export default {};

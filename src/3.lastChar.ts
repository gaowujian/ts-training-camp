type LastChar<T, Prev = T> = T extends `${infer L}${infer R}` ? LastChar<R, L> : Prev;
type A = LastChar<"BFE">; // 'E'
type B = LastChar<"dev">; // 'v'
type C = LastChar<"">; // never

export default {};

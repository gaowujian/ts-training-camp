// 目的就是实现一个内置的Capitalize工具方法
type CapitalizeString<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T;

type a1 = CapitalizeString<"handler">; // Handler
type a2 = CapitalizeString<"parent">; // Parent
type a3 = CapitalizeString<233>; // 233

export default {};

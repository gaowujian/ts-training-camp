// 解法一，利用了之前的字符串开头大写类型
type CapitalizeString<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T;
type CamelCase<T extends string, Result extends string = ""> = T extends `${infer L}-${infer R}`
  ? CamelCase<R, `${Result}`>
  : `${Result}${CapitalizeString<T>}`;

// 解法2. 遍历的时候老方法，
// type CamelCase<T extends string, Result extends string = ""> = T extends `${infer L}-${infer R1}${infer R2}`
//   ? CamelCase<R2, `${Result}${L}${Uppercase<R1>}`>
//   : Capitalize<`${Result}${T}`>;

type a1 = CamelCase<"handle-open-flag">; // HandleOpenFlag
type a2 = CamelCase<"open-flag">; // OpenFlag

export default {};

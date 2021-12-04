type CapitalizeString<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : T;
type CamelCase<T extends string, Result extends string = ""> = T extends `${infer L}-${infer R}`
  ? `${Result}${CamelCase<R, CapitalizeString<L>>}`
  : `${Result}${CapitalizeString<T>}`;
type a1 = CamelCase<"handle-open-flag">; // HandleOpenFlag
type a2 = CamelCase<"open-flag">; // OpenFlag

export default {};

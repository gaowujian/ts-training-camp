type RemoveFirst<T extends string> = T extends `-${infer S}` ? S : T;

// 解题思路 递归遍历字符串，所有的大写字符转为 -小写，最后再删除第一个
type KebabCase<T extends string, Result extends string = ""> = T extends `${infer L}${infer R}`
  ? KebabCase<R, `${Result}${L extends Uppercase<L> ? `-${Lowercase<L>}` : L}`>
  : RemoveFirst<Result>;
type a1 = KebabCase<"HandleOpenFlag">; // handle-open-flag
type a2 = KebabCase<"OpenFlag">; // open-flag

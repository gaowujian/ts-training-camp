# 计算长度

在 ts 的类型操作中，如果设计到算数运算，都是通过一个元祖的长度参数进行判断

# 遍历字符串

对于一个字符串类型来说，通过 `${infer L}${infer R}` 进行判断就是在尝试去分割一个字符串，直到最后的一次分割结果就是无法继续分割, L 是最后一个字符，而 R 是一个空。 这是一个遍历字符串类型最基本的范式。

## 遍历字符串，并对遍历的所有字符串进行操作，

type UpperString<T extends string, Result extends string = ""> = T extends `${infer L}${infer R}`
? UpperString<R, `${Result}${Uppercase<L>}`>
: Result;

type c = UpperString<"handle">;

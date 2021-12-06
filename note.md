# 计算长度

在 ts 的类型操作中，如果设计到算数运算，都是通过一个元祖的长度参数进行判断

# 遍历字符串

对于一个字符串类型来说，通过 `${infer L}${infer R}` 进行判断就是在尝试去分割一个字符串，直到最后的一次分割结果就是无法继续分割, L 是最后一个字符，而 R 是一个空。 这是一个遍历字符串类型最基本的范式。

# 遍历字符串，并对遍历的所有字符串进行操作，

type UpperString<T extends string, Result extends string = ""> = T extends `${infer L}${infer R}`
? UpperString<R, `${Result}${Uppercase<L>}`>
: Result;

type c = UpperString<"handle">;

## ObjectAccessPaths

传入一个对象给泛型 T 之后，等下次函数调用的时候只能用属性名的连接

## componentEmitsTypes

获取组件的派发事件类型，在传入一个对象给泛型 T 之后，等下次使用组件的时候，需要传入指定格式的事件绑定函数

在 vue 中的 createComponent 用到，不过在 react 中，在编写一个组件的时候，大部分操作是直接手动编写好组件需要哪些 props

```
interface CollapseProps {
  onChange?: () => void;
  onClick?: () => void;
}

export const Collapse: React.FC<CollapseProps> = () => {
  return <div></div>;
};

const b = <Collapse onChange={() => {}} />;
```

# tuple 中 flat 一题

主要也是用了递归的思想，我们要理解一个递归函数的意义是什么。明确入参和返回值

# [L] extends [K] 避免分发

any 可以看做 boolean | string | number |等等，所以 any extends 会发生分发现象

在使用泛型的时候，如果 T 是一个联合类型，会引起一个类型分发的现象。如果想要避免的话，使用 [] 包括住前后内容，封装成一个元祖类型，可以避免分发。让前面的部分作为整体去查看是否满足后面部分的条件

# 数组 infer 的时候相较于 string infer

数组 infer 可以方便的拿到开头和结尾元素，不用像 string infer 一样，向下递归

```
type FirstItem<T extends any[]> = T extends [infer L, ...infer R] ? L : T;
type LastItem<T extends any[]> = T extends [...infer L, infer R] ? R : never;
```

# 比 extends 更加严密的判等类型

```
type Equal<T, R> = [T] extends [R]
  ? [R] extends [T]
    ? keyof T extends keyof R
      ? keyof R extends keyof T
        ? true
        : false
      : false
    : false
  : false;
```

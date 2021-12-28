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

# 元祖类型中遍历

在数组中使用 如下的范式进行遍历，并把操作结果保存到 result 的暂存变量中

```
 type Slice <T,Result=[]> = T extends [infer First, ...infer Rest] ? Slice<Rest>:Result
```

在循环体内使用 if else 就是在使用 extends 关键子，并调用 Slice，使用递归的方式去遍历元祖类型

# 遍历联合类型, 如果一个类型是联合类型，在使用 extends 的时候会自动触发分发现象，实现一个遍历或者 map 的效果

```
K的初始值是T的所有key, 联合类型A去extends 联合类型B的时候，成功的时候就相当于去遍历每个属性，可以认为是数组中的每个元素,否则就是never
type OptionalKeys <T, K = keyof T> = K extends keyof T ? K : never;

在问号之后的K类型已经被缩小，K是针对每个属性
```

# 在使用 K = keyof T 之后, K 会默认获得一个联合类型 string|number|symbol

# 遍历一个对象类型 T 的所有属性的范式

```
第一个K是初始值，看成是数组 也就是T 类型的所有属性值组成的联合类型， 如果满足extends条件判断关键字，第二个K就变成了一个单一元素，实现了遍历效果
第二个K是通过条件判断的单一值，看成是数组的元素

type XX<T, K = keyof T> = K extends keyof T ? K : never

```

# extends 是泛型约束的关键字 A extends B 如果成功的话 可以认为 A 类型的值可以赋值为 B 类型的值，否则不能

# 函数的兼容性问题

1. 如果定义了一个函数类型，接收两个参数。 当我们声明一个函数是该类型的时候，声明的这个函数参数只能少不能多
   1. 举例子：函数类型里有两个参数，也就是告诉我们是有两个参数可用的，在我们创建一个函数并且认为是已知的函数类型，并使用的时候，在函数内部可以使用提供的一个参数，也可以使用提供的两个参数，但是不能用第三个变量再去接收第三个参数，因为已经不满足最开始定义的函数类型了，对方只提供了两个。
2. 如果定义了一个函数，返回值需要三个属性，那么在声明一个该类型的函数之后，在实现的时候必须返回所有需要的属性，只能多不能少，少了的话就不满足函数定义的类型需求了。因为别人的代码可能假设你的函数已经帮我提供了一个有指定属性的对象作为返回值了，如果你没有，可能就会出错。
3. 函数的参数是逆变的，返回值类型是协变的
   1. 如果把函数的参数和返回值分别看成一种类型，那么兼容的函数应该满足：
      1. 参数可以传递 自己或者函数参数的父类； 返回值可以传递自己或函数返回值的子类
4. 通俗的来讲 逆变就是条件变宽泛，也就是父类，协变就是类型变详细，也就是子类
   1. 函数的参数默认是双向的，即是逆变，也是协变，需要开启 tsconfig 的 strictFunctionType,那么参数就只是逆变

# 任何类型和 any 联合都是 any，任何类型和 never 类型都是其他类型

// 第一步 如果泛型继承any，那么直接先构造出一个函数类型
// 第二步 看构造出来的函数是否继承一个新的函数类型，并推导出这个新函数类型的参数，推导出来的参数是一个逆变
// 也就是多个函数参数的父类，和&的效果一致

// ! 解决问题的关键在于利用 infer去推导函数参数的逆变性的结果

type UnionToIntersection<T> = (T extends any ? (p: T) => any : never) extends (p: infer P) => any ? P : never;
type A = UnionToIntersection<{ a: string } | { b: string } | { c: string }>;
// {a: string} & {b: string} & {c: string}

type AA = {
  username: string;
};
type BB = {
  name: string;
};
const Fn: () => UnionToIntersection<AA | BB> = function () {
  const username = "gwjlshebei";
  const name = "tony";
  return {
    username,
    name,
  };
};

export default {};

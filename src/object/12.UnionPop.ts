type UnionPop<T> = "";

// 任何类型和any联合都是any，任何类型和never类型都是其他类型

type a = 1 | 2 | 3;
type b = UnionPop<a>; // 3

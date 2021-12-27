type Person = {
  username: string;
  age: number;
  sex: "male" | "female";
  isAdult: boolean;
  hasJob?: boolean;
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

// 根据一个对象类型T，创建一个新的对象类型，把所有的属性变成可选

type A = Partial<Person>;

type Required<T> = {
  [P in keyof T]-?: T[P];
};

// 根据一个对象类型T，创建一个新的对象类型，把所有的属性变成必须的

type B = Required<Person>;

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 根据一个对象类型T，创建一个新的对象类型，把所有的属性变成只读的

type c = Readonly<Person>;

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 根据一个对象类型T，和传入的联合类型作为所需属性的参数， 创建一个新的对象类型，从对象T中获取只需的类型

type d = Pick<Person, "age" | "hasJob">;

// 创建一个对象类型，他的属性类型是第一个参数，值的类型是第二个参数

type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// 这就是创建了一个普通的对象类型，他的属性值是字符串，值是任意类型
type e = Record<"string", any>;

// =====================================================
// extract和exclude是两个基础的兼容和非兼容的计算方法

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

// 从一个类型T中，选出不能兼容U的类型 排除掉类型U, 中间利用了extends关键字，其实这边主要考察了联合类型的分发

type f = Exclude<keyof Person, "age" | "username">;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

// 从一个类型T中，选出可以兼容类型U的类型, 中间利用了extends关键字，其实这边主要考察了联合类型的分发

type g = Extract<keyof Person, "age" | "username" | "xxx">;

// =================================================

// 根据之前的 partial,required,readonly,pick 和 record等基本方法，再配合上之后的 extract和exclude方法
// 基于总结出更高级的方法 Omit就是Pick的对应方法，之前是挑出指定，现在是忽略指定

type i = Omit<Person, "username">;

/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R
  ? R
  : any;

/**
 * Convert string literal type to uppercase
 */
type Uppercase<S extends string> = intrinsic;

export default {};

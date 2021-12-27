interface Module {
  count: number;
  message: string;

  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;

  syncMethod<T, U>(action: Action<T>): Action<U>;
}

interface Action<T> {
  payload?: T;
  type: string;
}

// 这个要求的结果
type Result = {
  asyncMethod<T, U>(input: T): Action<U>;
  syncMethod<T, U>(action: T): Action<U>;
};

// 实现类型Connect，要求 Connect<Module> 的结果为上面的 Result
// 只要函数类型的属性；
// 如果函数是异步函数，要求自动解析出来Promise中的类型；

type FuncKeys<T, K = keyof T> = K extends keyof T ? (T[K] extends (...args: any) => any ? K : never) : never;
// 根据函数形状提取函数参数，并返回指定类型
type FormatFnType<Q> = Q extends <T, U>(input: Promise<T>) => Promise<Action<U>>
  ? <T, U>(input: T) => Action<U>
  : Q extends <T, U>(input: Action<T>) => Action<U>
  ? <T, U>(action: T) => Action<U>
  : Q;

type Connect<T> = {
  [K in FuncKeys<T>]: FormatFnType<T[K]>;
};

type A = Connect<Module>;

export default {};

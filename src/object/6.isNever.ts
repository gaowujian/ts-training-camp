// 只有never类型才能赋值给never
// 使用场景：永远不会执行的代码
type IsNever<T> = [T] extends [never] ? true : false;

type A = IsNever<never>; // true
type B = IsNever<string>; // false
type C = IsNever<undefined>; // false
type D = IsNever<any>; // false

export default {};

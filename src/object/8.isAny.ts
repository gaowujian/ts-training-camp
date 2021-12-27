// unknown类型只能赋值给any和unknown
type IsAny<T> = [unknown] extends [T] ? ([T] extends [number] ? true : false) : false;
type A = IsAny<string>; // false
type B = IsAny<any>; // true
type C = IsAny<unknown>; // false
type D = IsAny<never>; // false
export default {};

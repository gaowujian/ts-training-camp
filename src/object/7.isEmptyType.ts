type IsEmptyType<T> = "";
type A = IsEmptyType<string>; // false
type B = IsEmptyType<{ a: 3 }>; // false
type C = IsEmptyType<{}>; // true
type D = IsEmptyType<any>; // false
type E = IsEmptyType<object>; // false
type F = IsEmptyType<Object>; // false
type G = IsEmptyType<unknown>; // false
export default {};

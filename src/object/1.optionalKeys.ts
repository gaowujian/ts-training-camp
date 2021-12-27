// type OptionalKeys<T extends Record<string, any>, K = keyof T> = Omit<T, K> extends T ? K : never;

//  K extends keyof T之后的K不再是联合类型，而是一个单一类型, Omit<T,K>之后获得一个少了K属性的对象类型
// 如果缺少K还能给T赋值，那么说明K是可选的，否则不是
type OptionalKeys<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? K : never) : never;
type a1 = OptionalKeys<{ foo: number | undefined; bar?: string; flag: boolean }>; // bar
type a2 = OptionalKeys<{ foo: number; bar?: string }>; // bar
type a3 = OptionalKeys<{ foo: number; flag: boolean }>; // never
type a4 = OptionalKeys<{ foo?: number; flag?: boolean }>; // foo|flag
type a5 = OptionalKeys<{}>; // never
export default {};

type A = { foo: number | undefined; bar?: string; flag: boolean };
type b = Omit<A, "foo" | "flag">;

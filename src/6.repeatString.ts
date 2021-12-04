type RepeatString<
  T extends string,
  N extends number,
  K extends any[] = [],
  Result extends string = ""
> = K["length"] extends N ? Result : RepeatString<T, N, [...K, null], `${Result}${T}`>;
type A = RepeatString<"a", 3>; // 'aaa'
type B = RepeatString<"a", 0>; // ''

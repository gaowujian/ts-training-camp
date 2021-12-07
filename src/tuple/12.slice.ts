type Slice<
  T extends any[],
  start extends number = 0,
  end extends number = T["length"],
  startArr extends any[] = [],
  endArr extends any[] = [],
  Result extends any[] = []
> = T extends [infer L, ...infer R]
  ? startArr["length"] extends start
    ? endArr["length"] extends end
      ? [...Result, L]
      : Slice<R, start, end, startArr, [...endArr, null], [...Result, L]>
    : Slice<R, start, end, [...startArr, null], [...endArr, null], Result>
  : Result;
type A1 = Slice<[any, never, 1, "2", true, boolean], 0, 2>; // [any,never,1]                    从第0个位置开始，保留到第2个位置的元素类型
type A2 = Slice<[any, never, 1, "2", true, boolean], 1, 3>; // [never,1,'2']                    从第1个位置开始，保留到第3个位置的元素类型
type A3 = Slice<[any, never, 1, "2", true, boolean], 1, 2>; // [never,1]                        从第1个位置开始，保留到第2个位置的元素类型
type A4 = Slice<[any, never, 1, "2", true, boolean], 2>; // [1,'2',true,boolean]             从第2个位置开始，保留后面所有元素类型
type A5 = Slice<[any], 2>; // []                               从第2个位置开始，保留后面所有元素类型
type A6 = Slice<[], 0>; // []                               从第0个位置开始，保留后面所有元素类型
export default {};

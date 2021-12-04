type SplitString<
  T extends string,
  S extends string,
  Result extends string[] = []
> = T extends `${infer L}${S}${infer R}` ? SplitString<R, S, [...Result, L]> : [...Result, T];

type A1 = SplitString<"handle-open-flag", "-">; // ["handle", "open", "flag"]
type A2 = SplitString<"open-flag", "-">; // ["open", "flag"]
type A3 = SplitString<"handle.open.flag", ".">; // ["handle", "open", "flag"]
type A4 = SplitString<"open.flag", ".">; // ["open", "flag"]
type A5 = SplitString<"open.flag", "-">; // ["open.flag"]

// 实现一个叫做 UnionToBooleanProps 的泛型，使得以下需求成立

// K是用来分发的，在通过 K extends T之后，K会收缩，但是T保持原样
type UnionToBooleanProps<T extends string, K extends string = T> = K extends T
  ? {
      [k in K]: true;
    } & {
      [k in Exclude<T, K>]?: never;
    }
  : never;

type MessageStringType = "info" | "success" | "warning" | "error";

type OneMessageTypes = UnionToBooleanProps<MessageStringType>;
type Props = OneMessageTypes & { id: string };
function Component(props: Props) {
  return <></>;
}

const a = <Component id="abc" info />; //correct
const b = <Component id="abc" success />; //correct
const c = <Component id="abc" />; //wrong
const d = <Component id="abc" info success />; //wrong

// 组件Component所接收的属性，有且只有一个 "info" | "success" | "warning" | "error" 中的值；
export default {};

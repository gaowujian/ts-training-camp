type Merge<T, K> = Pick<T, Exclude<keyof T, keyof K>> & K;

type obj1 = {
  el: string;
  age: number;
  x: boolean;
  y: number;
};

type obj2 = {
  el: HTMLElement;
  flag: boolean;
};

type obj3 = Merge<obj1, obj2>; // {el:HtmlElement,age:number,flag:boolean}

const a = { ...({} as obj3) };

console.log(a.el.scrollTop, a.age.toFixed(0), a.flag.valueOf());
// console.log(a.el.charAt(0))     // error
export default {};

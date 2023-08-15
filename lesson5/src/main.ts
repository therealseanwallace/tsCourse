type One = string;
type Two = string | number;
type Three = "hello";

// Convert to more or less specific type

let a: One = "hello";


let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world"; // can't do this type of syntax in React
let e = <string | number>"world";

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  if (c === "add") return a + b
  return "" + a + b
}

let myVal: string = addOrConcat(2, 2, "concat") as string; // asserting that addOrConcat will return a string

// Be careful! TypeScript sees no problem here, but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
(10 as unknown) as string; // double casting / forced casting - avoid this when possible

// The DOM
const img = document.querySelector("img")!;

const myImg = document.getElementById("#img") as HTMLImageElement; // ! is a non-null assertion
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
nextImg.src;
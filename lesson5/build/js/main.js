"use strict";
// Convert to more or less specific type
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world"; // can't do this type of syntax in React
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat"); // asserting that addOrConcat will return a string
// Be careful! TypeScript sees no problem here, but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
10; // double casting / forced casting - avoid this when possible
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img"); // ! is a non-null assertion
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
nextImg.src;

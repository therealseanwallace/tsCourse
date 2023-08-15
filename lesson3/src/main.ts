let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

guitars = stringArr;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

myTuple[1] = 42;

// Objects

let myObject: object;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John";

type Guitarist = {
  name?: string;
  active: boolean;
  albums: object;
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let JP: Guitarist = {
  active: true,
  albums: ["I","II", "IV"],
};

evh = JP;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`
  }
  return "Hello!"
};

console.log(greetGuitarist(JP))

// Enums

// "Unlike most Typescript features, Enums are not a type-level addition to 
// Javascript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A
}

console.log(Grade.U, Grade.D)
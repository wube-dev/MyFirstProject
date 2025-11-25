// // app.js
// const m1 = require("./m1.js");
// // const m2 = require("./m2.js");
// // const m3 = require("./m3.js");
// console.log(m1.you(2, 3));
// console.log(module);

// main.js
// const m1 = require("./m1.js");//this for add and sub and sum
// const m2 = require("./m2.js");//this for div and mult
import { multiply, divide } from "./m2.js";
// const m3 = require("./m3.js");//this for even and odd
//fo generall importing all the functions from m1.js
// import * as m1 from "./m1.js";//this for add and sub and sum
// let arr = [10,10,10,10,10];
// console.log("Addition:", m1.add(5, 10));
// console.log("the sum of arry list", m1.arrSum(arr));
// console.log("Subtraction:", m1.sub(20, 5));
console.log("Multiplication:", multiply(4, 5));
// console.log("Division:", m2.divide(20, 4));
console.log("Division:",divide(20, 4));
// console.log("Is 4 even?", m3.isEven(4));
// console.log("Is 7 odd?", m3.isOdd(7));
const ex = require("express");
console.log(ex);
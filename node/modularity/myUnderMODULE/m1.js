// let name = "Inside m1.js";
// // console.log(name);
// function sum(a, b)
// {
//   console.log(name + " Sum in m1.js: " + (a + b));
//   return a + b;
// };
// sum(3,4);
// // module.exports.you = sum;// when used in imported file it will be used as m1.you()
// module.exports = { you:sum };
// console.log(module);// this is an object that represents the all info about the current module or current file

// m1.js
function add(a, b) {
  return a + b;
}

function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

function sub(a, b) {
  return a - b;
}

// Export both functions
module.exports = {
  add,
  arrSum:sum,
  sub,
};
console.log(module);
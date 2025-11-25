// m2.js
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}



// Export both functions
// module.exports = {
//   multiply,
//   divide,
// };
// export default divide;
export { multiply, divide };
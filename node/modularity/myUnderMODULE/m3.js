// m3.js
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// Export both functions
module.exports = {
  isEven,
  isOdd,
};


function calculateNumber(a, b) {
  let roundedA = Math.round(a);
  let roundedB = Math.round(b);

  return roundedA + roundedB;
}

console.log(calculateNumber(1, 3));
console.log(calculateNumber(1, 3.7));
console.log(calculateNumber(1.5, 3.7));

module.exports = calculateNumber;

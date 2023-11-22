const calculateNumber = (a, b) => {
  const fNum = Number(a);
  const sNum = Number(b);
  return Math.round(fNum) + Math.round(sNum);
};

module.exports = calculateNumber;

const Utils = {
  calculateNumber(type, a, b) {
    const fNum = Number(a);
    const sNum = Number(b);
    if (type === 'SUM') return Math.round(fNum) + Math.round(sNum);
    if (type === 'SUBTRACT') return Math.round(fNum) - Math.round(sNum);
    if (type === 'DIVIDE') return Math.round(sNum) === 0 ? 'Error' : Math.round(fNum) / Math.round(sNum);
  },
};

module.exports = Utils;

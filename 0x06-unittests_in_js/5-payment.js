const Utils = require('./utils.js');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const answer = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${answer}`);
  return answer;
}

module.exports = sendPaymentRequestToApi;

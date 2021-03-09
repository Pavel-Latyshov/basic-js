const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let result = {
    turns: '',
    seconds: ''
  }
  x = result.turns = Math.pow(2, disksNumber) - 1
  result.seconds = Math.floor(x/(turnsSpeed/3600))
  return result
};
const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let newArr = arr
    if (newArr.length == 0) {
      return 1
    } else {
      if (Array.isArray(newArr)) {
        return 1 + Math.max(...newArr.map((item) => this.calculateDepth(item)))
      } else return 0
    }
  }
};
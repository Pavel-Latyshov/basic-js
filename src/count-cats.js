const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = []
  for (i of matrix) {
    for (j of i) {
      if (j == '^^') {
        arr.push(j)
      }
    }
  }
  if (arr.length == 0) {
    return 0
  } else return arr.length
};

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let nweStr = ''
  let result = ''

  let newAdd = String(options.addition)
  let string = String(str)
  let sepStr = options.separator
  let repTime = options.repeatTimes
  let addRT = options.additionRepeatTimes
  let addSep = options.additionSeparator



  if (!sepStr) {
    sepStr = '+'
  }
  if (repTime == undefined) {
    repTime = 1
  }
  if (addRT == undefined) {
    addRT = 1
  }
  if (!addSep) {
    addSep = '|'
  }

  if (newAdd) {
    let arr = []
    for (let i = 1; i <= addRT; i++) {
      arr.push(newAdd)
      arr.push(addSep)
    }
    arr.pop()
    nweStr = arr.join('')
  }

  if (string) {
    let newArr = []
    for (let j = 1; j <= repTime; j++) {
      newArr.push(string)
      if (nweStr !== 'undefined') {
        newArr.push(nweStr)
      }
      newArr.push(sepStr)
    }
    newArr.pop()
    result = newArr.join('')
  }

  return result
};
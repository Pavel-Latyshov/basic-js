const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let arr = []
  let filtArr = []
  let array = []
  let newArr = []
  let sort = []

  if (!Array.isArray(members)) {
    return false
  } else {

  for (i of members) {
      if (typeof i == 'string') {
          arr.push(i)
      }
  }

  for (i of arr) {
      filtArr = i.split('')
      filtArr = filtArr.join('')
      filtArr = filtArr.trim()
      array.push(filtArr)
  }

  for (i of array) {
      newArr.push(i[0])
  }

  newArr.sort()
  newArr = newArr.join('')
  newArr = newArr.toUpperCase()
  sort = newArr.split('')
  sort.sort()
  sort = sort.join('')

  return sort
  }
};

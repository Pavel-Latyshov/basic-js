const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('1');
      }
    

    let nar = arr
    let numArr = []
  
    let doubleNext = []
    let discardPrev = []
    let discardNext = []
    let doublePrev = []
  
  
      for (i of arr) {
              numArr.push(i)
      }
  
  for (i of nar) {
    if (typeof i == 'string') {
      if (i == '--discard-next') {
        discardNext.push(nar.indexOf(i))
        numArr.splice(++discardNext, 1, 'disn')
  
      } 
       if (i == '--double-prev') {
        doublePrev.push(nar.indexOf(i))
        console.log(doublePrev);
        numArr.splice(--doublePrev, 0, numArr[doublePrev])
        console.log(numArr);
      } 
      if (i == '--double-next') {
        doubleNext.push(nar.indexOf(i))
        console.log(doubleNext);
        numArr.splice(++doubleNext, 0,  numArr[doubleNext])
  
        console.log(numArr);
      }
      if (i == '--discard-prev') {
        discardPrev.push(nar.indexOf(i))
        numArr.splice(discardPrev, 1, 'disn')
  
        // console.log(numArr);
      } 
      if (i !==  '--discard-prev' && i !== '--double-next' && i !== '--double-prev'&& i !== '--discard-next') {
          
        // return arr
        return nar.filter(num => {
            if (num !== '--discard-prev' && num !== '--double-next' && num !== '--discard-next' && num !== '--double-prev') {
              return true
            }
          })
    }
  
      console.log(doublePrev);
      
      // return result
    }
    // console.log(numArr);
    // return result
  }
//   return numArr.filter(num => {
//     if (typeof num == 'number') {
//       return true
//     }
//   })
  
//   return numArr.filter(num => {
//     if (num !== '--discard-prev') {
//       return true
//     } else if (num !== '--double-next') {
//       return true 
//     } else if (num !== '--discard-next') {
//       return true
//     } else if (num !== '--discard-next') {
//       return true
//     }
//   })
  
  return numArr.filter(num => {
    if (num !== '--discard-prev' && num !== '--double-next' && num !== '--discard-next' && num !== '--double-prev' && num !== 'disn' && (typeof num == 'number')) {
      return true
    }
  })
  
  };
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let newArr = [];
    if(Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                i++
            } else if (arr[i] === '--discard-prev') {
                if (newArr.length !== 0 &&
                      arr[i - 2] !== '--discard-next') {
                    newArr.pop()
                }
            } else if (arr[i] === '--double-next') {
                newArr.push(arr[i + 1])
            } else if (arr[i] === '--double-prev') {
                if (i !== 0 && 
                arr[i - 2] !== '--discard-next') {
                    newArr.push(arr[i - 1]);
                }
            } else {
                newArr.push(arr[i])
            }
        } 
    } else {
        throw new Error('some error')
    }
    return newArr.filter(e => e !== undefined);
};



  // if (!Array.isArray(arr)) {
  //   throw new Error('1');
  // } 

  //   let nar = arr
  //   let numArr = []

  //   let doubleNext = []
  //   let discardPrev = []
  //   let discardNext = []
  //   let doublePrev = []


  //     for (i of arr) {
  //             numArr.push(i)
  //     }

  // for (i of nar) {
  //   if (typeof i == 'string') {
  //     if (i == '--discard-next') {
  //       discardNext.push(nar.indexOf(i))
  //       numArr.splice(++discardNext, 1, 'disn')

  //     } 
  //      if (i == '--double-prev') {
  //       doublePrev.push(nar.indexOf(i))
  //       console.log(doublePrev);
  //       numArr.splice(--doublePrev, 0, numArr[doublePrev])
  //       console.log(numArr);
  //     } 
  //     if (i == '--double-next') {
  //       doubleNext.push(nar.indexOf(i))
  //       console.log(doubleNext);
  //       numArr.splice(++doubleNext, 0,  numArr[doubleNext])

  //       console.log(numArr);
  //     }
  //     if (i == '--discard-prev') {
  //       discardPrev.push(nar.indexOf(i))
  //       numArr.splice(discardPrev, 1, 'disn')

  //       // console.log(numArr);
  //     } 
  //     if (i !==  '--discard-prev' && i !== '--double-next' && i !== '--double-prev'&& i !== '--discard-next') {

  //       // return arr
  //       return nar.filter(num => {
  //           if (num !== '--discard-prev' && num !== '--double-next' && num !== '--discard-next' && num !== '--double-prev' && i != undefined) {
  //             return true
  //           }
  //         })
  //   }




  //     console.log(doublePrev);

      // return result
    // }
    // console.log(numArr);
  //   // return result
  // }
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

//   return numArr.filter(num => {
//     if (num !== '--discard-prev' && num !== '--double-next' && num !== '--discard-next' && num !== '--double-prev' && num !== 'disn' && ((typeof num == 'number') || (typeof num == 'boolean'))) {
//       return true
//     }
//   })


// }

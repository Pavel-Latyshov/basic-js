const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length
  },
  addLink(value) {
    if (value !== undefined) {
      this.array.push(value)
      return this
    } else {
      this.array.push('( )')
      return this
    }

  },
  removeLink(position) {
    let x = position - 1
    if (x >= 0 && Number.isInteger(x) && x < this.array.length - 1) {
      this.array.splice(x, 1)
      return this
    } else {
      this.array = []
      throw new Error('1')
    }

  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    let fin = this.array.map(e => `( ${e} )`)
    this.array = []
    return fin.join('~~')
  }
};

module.exports = chainMaker;

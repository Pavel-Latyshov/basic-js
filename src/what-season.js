const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) { return 'Unable to determine the time of year!' }
  if (date instanceof Date) {
    let month = date.getUTCMonth()
    if (month == 1 || month == 0 || month == 11)  return 'winter'
    if (month == 2 || month == 3 || month == 4) return 'spring'
    if (month == 5 || month == 6 || month == 7) return 'summer'
    if (month == 8 || month == 9 || month == 10) return 'autumn'
  } else {
    throw new Error()
  }
};


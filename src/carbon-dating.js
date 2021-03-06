const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY) {
    return false
  } else if (typeof sampleActivity !== 'string') {
    return false
} else if (!Number(sampleActivity)) {
  return false
} else {
    let result = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)

    return Math.ceil(result)
}
};

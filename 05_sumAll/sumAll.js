const sumAll = function(fromNumber,toNumber) {
    if (typeof(fromNumber) !== "number" || typeof(toNumber) !== "number") {
        return "ERROR";
    }
    if (fromNumber < 0 || toNumber < 0) {
        return "ERROR";
    }
    let sum = 0;
    let minNumber = Math.min(fromNumber,toNumber);
    let maxNumber = Math.max(fromNumber,toNumber);
    for (let i = minNumber; i <= maxNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

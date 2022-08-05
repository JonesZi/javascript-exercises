const palindromes = function (string) {
    cleanString = string.toLowerCase()
                        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"")
                        .replace(/\s/g, "");
    backwardsString = cleanString
                        .split("")
                        .reverse()
                        .join("");
    
    if (backwardsString == cleanString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

const palindromes = function (string) {
    cleanString = string.toLowerCase()
                        .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"")
                        .replace(/\s/g, "");
    // backwardsString = cleanString
    //                     .split("")
    //                     .reverse()
    //                     .join("");
    
    return (cleanString
            .split("")
            .reverse()
            .join("") 
            == cleanString);
};

// Do not edit below this line
module.exports = palindromes;

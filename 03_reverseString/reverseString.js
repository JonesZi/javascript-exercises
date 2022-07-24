const reverseString = function(string) {
// My solution
    // const array = [];
    // for (let i = 0; i < string.length; i++) {
    // array[i] = string[i];
    // }
    // const reverseArray = array.reverse();
    // const reverseString = reverseArray.join("");
    // return reverseString;
//Better solution
return string.split("").reverse().join("");
}

// Do not edit below this line
module.exports = reverseString;

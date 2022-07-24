const reverseString = function(string) {
const array = [];
for (let i = 0; i < string.length; i++) {
array[i] = string[i];
}
const reverseArray = array.reverse();
const reverseString = reverseArray.join("");
return reverseString;
}

// Do not edit below this line
module.exports = reverseString;

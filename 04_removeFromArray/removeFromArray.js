const removeFromArray = function(array, ...args) {
       const filteredArray = array.filter(element => args.indexOf(element) === -1
       
    // Longer way (without arrow / one line)
    // function(element) {
    //     if (args.indexOf(element) === -1) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    );
   return filteredArray;
}


console.log(removeFromArray([1,2,3,4],1,"3",4));

// Do not edit below this line
module.exports = removeFromArray;

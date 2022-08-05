const fibonacci = function(input) {
    number = parseInt(input);
    if (number < 0) return "OOPS";
    if (number === 1) return 1;
    if (number === 2) return 1;
    let sequence = [1,1];
    if (number > 2) {
        for (let i = 2; i < number; i++) {
            sequence[i] = sequence[i-1] + sequence[i-2];
        };
    };
    return sequence[number-1];

};

// from solutions:
// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     if (count === 0) return 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//       const temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
//   };


// Do not edit below this line
module.exports = fibonacci;

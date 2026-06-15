// const removeFromArray = function(arr) {

//     let args = Array.from(arguments);
//     for (let i = 0; i< arr.length; i++) {
//         console.log(arr[i]);
//         if (args.includes(arr[i])) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     return arr;
// };

const removeFromArray = function(arr) {
    let args = Array.from(arguments);
    return arr.filter((value) => (!(args.includes(value))));
}



arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeFromArray(arr, 2, 3));



// Do not edit below this line
module.exports = removeFromArray;


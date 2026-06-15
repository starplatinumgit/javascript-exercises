
//this code has a bit less redundance... still, the solution just used three if statements 
//while i may have overcomplicated it using an array.
//in order to reduce the if statement clutter, i made the numbers into an array 
//which made the overall code more convoluted (the for loop may be confusing)
//so its important to look big picture.. a small improvement might cost a big one 

const sumAll = function(firstNum, lastNum) {

    let result = [firstNum, lastNum].sort((num1, num2) => (num1 - num2));   
    if (result.some((num) => (!(Number.isInteger(num))) || num < 0)) {
        return "ERROR";
    }

    let sum = 0;
    const ARR_MAX = result[1];
    for (let i = result[0]; i <= ARR_MAX; i++) {
        sum += i;
    }
    return sum;
}

    console.log(sumAll(1, 20));


// This is my initial passing code but its pretty ugly:

// const sumAll = function(firstNum, lastNum) {

//     let result = [firstNum, lastNum].sort((num1, num2) => (num1 - num2));   
//     if (result.some((num) => (!(Number.isInteger(num))) || num < 0)) {
//         return "ERROR";
//     }
//     const ARR_SIZE = result[1] - result[0];
    
//     for (let i = 1;  i < ARR_SIZE; i++) {
//         result.splice(i, 0, 1+result[i-1]);
//         console.log(result);
//     }

//     return result.reduce((sum, current) => (sum += current));
// };



    
// Do not edit below this line
module.exports = sumAll;

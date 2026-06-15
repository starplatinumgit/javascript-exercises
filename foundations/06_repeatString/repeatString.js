const repeatString = function(string, num) {
    let result = "";
    if (num < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < num; i++) {
            result = result.concat(string);
            console.log(result);
        }
        return result;
    }
};

console.log(repeatString("HEY", 5));
console.log("TE2ST");

// Do not edit below this line
module.exports = repeatString;

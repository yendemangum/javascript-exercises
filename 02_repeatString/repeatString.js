const repeatString = function(string, num) {

    let newString = ""
    if (num < 0) {
        newString = "ERROR"
    }
    for (let i = 1; i <= num; i++) {
        newString = newString + string
    }
return newString;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(string) {

    const array = string.split("");
    let newString = "";
    for (let i = array.length - 1; i >= 0; i--) {
        newString = newString + array[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

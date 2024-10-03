const fibonacci = function(num) {
    let array = [1,1]
    if (num == 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS";
    }
    for (let i = 2; i <= num; i++)
        {
            let x = array[i-1]
            let y = array[i-2]
            array.push(+x + +y)
        }

    return array[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

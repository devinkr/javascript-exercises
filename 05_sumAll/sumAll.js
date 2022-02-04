const sumAll = function(a, b) {
    let sum = 0;
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        return "ERROR";
    }
    else if (a < 0 || b < 0) {
        return "ERROR";
    }
    else if (a <= b) {
        while (a <= b) {
            sum += a;
            a++;
        }
        return sum;
    }
    else if (a > b) {
        while (a >= b) {
            sum += a;
            a--;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

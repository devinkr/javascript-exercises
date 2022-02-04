const leapYears = function(year) {
// Year is a leap year if it is divisible by 4 but not divisible by 100 except when divisible by 400.
//    if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
//        return true;
//    }
//    else {
//        return false;
//    }
    // Rewrite above as ternary.
    return ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;

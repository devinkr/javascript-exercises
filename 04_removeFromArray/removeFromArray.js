const removeFromArray = function(array, ...arg) {
    
    let resultArray = array.filter( ( el ) => !arg.includes( el ) );
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;

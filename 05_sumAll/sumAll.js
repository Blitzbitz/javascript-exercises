const sumAll = function(firstParam,secondParam) {
    let paramTotal = 0
    if (firstParam < secondParam) {
        for(let i = firstParam;i <= secondParam;i++) {
            paramTotal += i;
            
        };
        return paramTotal;
    }else{return "ERROR"}

};

// Do not edit below this line
module.exports = sumAll;

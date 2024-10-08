const sumAll = function(firstParam,secondParam) {
    let paramTotal = 0
if( (isNaN(firstParam)|| isNaN(secondParam))||(firstParam < 0 || secondParam < 0)||(typeof firstParam === "string")|| (typeof secondParam === "string")||(Number.isInteger(firstParam) == false)||Number.isInteger(secondParam) == false){return "ERROR";

    }else if (((firstParam) < (secondParam)) ){
        for(let i = firstParam;i <= secondParam;i++) {
            paramTotal += i;
            
        };
        return paramTotal;
    }else  {
        for(let i = secondParam;i <= firstParam;i++) {
            paramTotal += i;
            
        };
        return paramTotal;
    }

};

// Do not edit below this line
module.exports = sumAll;

const sumAll = function(minNum, maxNum) {
    
    let sum = 0;

    if ((!Number.isInteger(minNum)) || (!Number.isInteger(maxNum)))
        return 'ERROR';

    if ((minNum < 0) || (maxNum < 0))
        return 'ERROR';
    if (maxNum < minNum) {
        let temp = minNum;
        minNum = maxNum;
        maxNum = temp;
    }
    while (minNum <= maxNum)
    {
        sum = sum+minNum;
        minNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

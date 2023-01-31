const repeatString = function(holdHey, amount) {
    let word = '';
    if (amount < 0) 
        return 'ERROR';
    for (i = 0; i < amount; i++)
        word = word + holdHey;
    return word;
};

// Do not edit below this line
module.exports = repeatString;

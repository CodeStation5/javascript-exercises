const removeFromArray = function(array, ...itemRemove) {
    const tempArray = [];
    array.forEach(num => {
        if(!itemRemove.includes(num))
            tempArray.push(num);         
    }            );
    return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;

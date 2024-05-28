//verify the list is all numbers
function ValidateStringOfNums(numString){
    let result = []

    for(let i = 0; i < numString.length; ++i){
        let valToNumber = Number(numString[i]);

        if(Number.isNaN(valToNumber)){
            return new Error(`The value at ${numString[i]} at index ${i} is not a valid number.`);
        }

        result.push(valToNumber);
    }
    return result;
}

//finding the mean of the list provided (AVERAGE)
function findMean(nums){
    if(nums.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i < nums.length; ++i){
        sum += nums[i];
    }
    return sum/nums.length;
}

//finding the median of the list (MIDDLE)
function findMedian(nums){
    if(nums.length === 0) return 0;
    
    nums.sort((a, b) => a - b);

    let middle = Math.floor(nums.length / 2);
    let median;

    if(nums.length % 2 === 0){
        median = (nums[middle] + nums[middle - 1] / 2);
    } else {
        median = nums[middle];
    }
    return median;
}

//finding the mode of the list (MOST FREQUENT VAL)
function findMode(nums){
    let freqCounter = nums.reduce((acc, next) => {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
      }, {});
    
    let count = 0;
    let mostFrequent;

    for(let key in freqCounter){
        if(freqCounter[key] > count){
            mostFrequent = key;
            count = freqCounter[key];
        }
    }
    return +mostFrequent;
}

module.exports = {
    findMean,
    findMedian,
    findMode,
    ValidateStringOfNums
};
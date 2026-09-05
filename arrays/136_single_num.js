var singleNumber = function(nums) {
    let a = 0

    for(let num of nums){
        a = a ^ num
    }

    return a
};

console.log(singleNumber([1,3,1,4,3]))
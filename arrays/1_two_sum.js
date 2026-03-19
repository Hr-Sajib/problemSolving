
var twoSum = function(nums, target) {
    const ind = [];

    for(let i = 0; i<nums.length; i++){
        for(let j =i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target){
                ind.push(i,j)
            }
        }
    }

    return ind;
};






// Better solution with O(n) 
// what is does is - instead of depending on a 2nd loop for comparison, it stores values and indexes in a map as pairs
// It may take larger memory space needed but is faster

var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i<nums.length; i++){
        const need = target - nums[i]

        if(map.has(need)){
            return ([map.get(need),i])
        }

        map.set(nums[i],i)

    }

    return ind;
};












console.log(twoSum([1,2], 2));

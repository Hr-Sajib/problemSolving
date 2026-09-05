// init sol 

// var missingNumber = function(nums) {
//     const length = nums.length
    
//     const checkMap = new Map()

//     for(let i = 0; i<=length; i++){
//         checkMap.set(i, false)
//     }

//     for(let i = 0; i<length; i++){
//         if(checkMap.has(nums[i])) {
//             checkMap.set(nums[i], true)
//         }
//     }

//     for(elem of checkMap){
//         if(elem[1] === false) return elem[0]
//     }
// };


// optimal sol:  I missed the point that, the elements of the nums array will be within the 0-lenth range 

var missingNumber = function(nums) {
    let sum = 0
    let sumOfPresentNumbers = 0

    for(let i = 0; i<=nums.length; i++){
        sum+=i
    }
    for(let i = 0; i<nums.length; i++){
        sumOfPresentNumbers+=nums[i]
    }


    return sum - sumOfPresentNumbers
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

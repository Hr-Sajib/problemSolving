// init solution which does not meet O(log n) TC requirement but solved 

// var searchInsert = function(nums, target) {
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] >= target){
//             return i
//         }
//     }

//     return nums.length
// };


// better binary search option 

var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while(left <= right){
        
        let mid = Math.floor((right+left)/2)

        if(nums[mid] < target){
            left = mid+1
            continue
        }
        else if(nums[mid] > target){
            right = mid-1
            continue
        }
        return mid
    }

    return left

};                                          





console.log(searchInsert([1,1,1,2,2,3,4,6,7],5))
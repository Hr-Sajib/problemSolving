
// [3,3,3,1,2,3]

// [3,3,3,1,2,3]

var removeElement = function(nums, val) {
    
    for(let i=0; i<=nums.length; i++){
       if(nums[i] == val){

            let continuousMatchCount = 1
            for(let j=i+1; nums[j]==val;j++){
                continuousMatchCount++
            }

            for(let k=i; k<nums.length; k++){
                nums[k] = nums[k+continuousMatchCount]
            }

            nums.length-=continuousMatchCount

       }
    }

    return nums.length
};






console.log(removeElement([3,3,3,1,2,3],3))
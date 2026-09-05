var moveZeroes = function(nums) {
    let rightLock = nums.length-1

    let i = 0

    while(true){

        if(i == rightLock || i>rightLock) break
        if(nums[i] != 0) i++

        if(nums[i] == 0){
            for(let j = i; j<rightLock; j++){
                nums[j] = nums[j+1]
            }
            nums[rightLock] = 0
            rightLock--
        }

    }

    return nums
};



 

console.log(moveZeroes([1, 0, 2, 0, 3]))

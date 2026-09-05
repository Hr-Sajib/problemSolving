class numArray{
    constructor(nums){
        this.nums = nums
    }

    sumRange(left, right){
        let sum = nums[left]
        for(let i = left; i<=right; i++){
            sum+=nums[right]
        }
        return sum
    }
}

const obj = new numArray([-2, 0, 3, -5, 2, -1])

obj.sumRange(0,2)


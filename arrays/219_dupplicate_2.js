var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()

    for(let i=0; i<nums.length; i++){
        // console.log("iteration on : ",nums[i])
        const inMapIndex = map.get(nums[i])
        if(!inMapIndex && inMapIndex != 0){
            map.set(nums[i], i)
            // console.log("not found. added. map: ",map)
        }
        else{
            // console.log("found")
            // console.log("prev index is: ",map.get(nums[i]), "curr index: ", i)
            if(Math.abs(map.get(nums[i]) - i) <= k){
                // console.log("returning")
                return true
            }
            map.set(nums[i], i)
        }
        // console.log("\n")
    }

    return false
};

// console.log(containsNearbyDuplicate([1,2,3,1,1], 1))
var findDisappearedNumbers = function(nums) {
    let lowestNum = 1
    let highestNum = nums.length

    let arrSet = new Set()

    for(let num of nums){
        arrSet.add(num)
    }

    let missingArr = []
    for(let i = lowestNum; i<=highestNum; i++){
        if(!arrSet.has(i)) missingArr.push(i)
    }


    return missingArr

};


console.log(findDisappearedNumbers([2, 2, 3, 4, 5]))
// var intersection = function(nums1, nums2) {
//     let intersectionArr = []

//     for(let i = 0; i<nums1.length; i++){
//         for(let j = 0; j<nums2.length; j++){
//             if(nums1[i] == nums2[j]){
//                 let isPresentInIntersectionArr = false
//                 for(let k = 0; k<intersectionArr.length; k++){
//                     if(intersectionArr[k] == nums1[i]) isPresentInIntersectionArr = true
//                 }
//                 if(isPresentInIntersectionArr == false) intersectionArr.push(nums1[i])
//             }
//         }

//     }

//     return intersectionArr
// };

var intersection = function(nums1, nums2) {
    let intersectionSet = new Set()
    let num2Set = new Set()

    for(num of nums2){
        num2Set.add(num)
    }

    for(let i = 0; i<nums1.length; i++){
        if(num2Set.has(nums1[i])){
            if(!intersectionSet.has(nums1[i])) intersectionSet.add(nums1[i])
        } 
    }

    let finalArr = []
    for(elem of intersectionSet){
        finalArr.push(elem)
    }

    return finalArr
};


console.log(intersection([1,2,2,1], [2,2]))
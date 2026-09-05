// init sol 
// var majorityElement = function(nums) {
//     const n = nums.length

//     const map = new Map()

//     for(const element of nums){

//         if(!map.has(element)){
//             map.set(element, 1)
//             continue
//         }
//         map.set(element, map.get(element)+1)
//     }

//     let majorityElem = 0
//     let majorityElemCount = 0

//     for(const elem of map){
//         if(elem[1] > majorityElemCount) {
//             majorityElem = elem[0]
//             majorityElemCount = elem[1]
//         }
//     }

//     return majorityElem
    
// };



// optimal one

var majorityElement = function(nums) {
    const n = nums.length

    const map = new Map()

    for(const element of nums){

        if(!map.has(element)){
            map.set(element, 1)
        }
        else{
            map.set(element, map.get(element)+1)
        }
        
        if(map.get(element) > (n/2)) return element
    }
    
};



console.log(majorityElement([1]))


// var summaryRanges = function(nums) {
//     if (nums.length === 0) return [];
//     let finalArr = []

//     let range = String(nums[0])

//     for(let i = 0; i<nums.length; i++){
//         if(nums[i+1] == nums[i]+1){
//             continue
//         }else{

//             if(Number(range) == nums[i]){
//                 finalArr.push(range)
//                 range = String(nums[i+1])
//                 continue
//             }

//             range = range.concat("->").concat(String(nums[i]))
//             finalArr.push(range)
//             range = String(nums[i+1])

//         }
//     }

//     return finalArr
// };

// console.log(summaryRanges([1,2,3,5,9]))






const cardPayment = {
    processPayment(amount){
        console.log("Charged ", amount, "from card")
    }
}

const cashPayment = {
    processPayment(amount){
        console.log("Charged ", amount, "in cash")
    }
}



function charge(amount, paymentMethod){
    const paid = paymentMethod.processPayment(amount)
}


charge(40, cardPayment)
charge(400, cashPayment)
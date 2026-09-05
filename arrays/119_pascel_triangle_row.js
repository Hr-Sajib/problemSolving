// init sol 
// var getRow = function(rowIndex) {
//     let finalArr = []

//    for(let row = 0; row<=rowIndex; row++){
//         let individualRow = []
//         for(let col = 0; col<=row; col++){
            
//             if(col === row || col === 0){
//                 individualRow.push(1)
//                 continue
//             }
//             let val = finalArr[row-1][col-1] + finalArr[row-1][col]
//             individualRow.push(val)
//         }
//         finalArr.push(individualRow)
//    }

//    return finalArr[finalArr.length-1]
// };



// better version : does not store all the rows and just produces the target row

var getRow = function(rowIndex) {
    if(rowIndex === 0){return [1]}

    let res = [1,1]

    for(let i = 1; i<rowIndex; i++){
        let next = [1]
        for(let j = 1; j<=i; j++){
            let val = res[j-1]+res[j]
            next.push(val)
        }
        next.push(1)
        res = next
    }
    return res
};



// playing around for better understanding 

// var getRow = function(rowIndex) {
//     if (rowIndex === 0) return [1];

//     let res = [1, 1];

//     for (let i = 2; i <= rowIndex; i++) {
//         let next = [1];

//         for (let j = 2; j <= i; j++) {
//             let val = res[j-1] + res[j - 1-1];
//             next.push(val);
//         }

//         next.push(1);
//         res = next;
//     }

//     return res;
// };

console.log(getRow(4));

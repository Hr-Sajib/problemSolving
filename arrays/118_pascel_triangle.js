// init sol 
// var findFactorial = function (a) {
//   let ans = 1;

//   while (a > 1) {
//     ans = ans * a;
//     a--;
//   }
//   return ans;
// };
// var generate = function (numRows) {
//     let finalArr = []
    
//     for(let row = 0; row<numRows; row++){

//         let individualRowArray = []
//         for(let col = 0; col<=row; col++){
//             let val = findFactorial(row)/(findFactorial(col) * findFactorial(row-col))
//             individualRowArray.push(Math.round(val))
//         }

//         finalArr.push(individualRowArray)

//     }

//     return finalArr
// };



// better one 

var generate = function (numRows) {
   let finalArr = []

   for(let row = 0; row<numRows; row++){
        let individualRow = []
        for(let col = 0; col<=row; col++){
            
            if(col === row || col === 0){
                individualRow.push(1)
                continue
            }
            let val = finalArr[row-1][col-1] + finalArr[row-1][col]
            individualRow.push(val)
        }
        finalArr.push(individualRow)
   }

   return finalArr
};

console.log(generate(5));

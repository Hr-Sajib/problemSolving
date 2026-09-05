// init sol 
// var lengthOfLastWord = function (s) {
//   let lastLetterFoundAt = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
    
//     console.log("iteration ",i, 'char ',s[i])

//     if (s[i] === " " && lastLetterFoundAt === 0) {
//         continue
//     }
//     else if(s[i] !== ' '){
//         (lastLetterFoundAt === 0)? lastLetterFoundAt = i : null
//         if(i == 0){ return lastLetterFoundAt+1}
//     }
//     else if(lastLetterFoundAt != 0 && s[i] === ' '){
//       return lastLetterFoundAt - i
//     }
//     console.log('lastLetterFoundAt ',lastLetterFoundAt)

//   }
// };



// better simpler one 
var lengthOfLastWord = function(s) {
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    // Count the last word
    let length = 0;

    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;
};

console.log(lengthOfLastWord("s y"));

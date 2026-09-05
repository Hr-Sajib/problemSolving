// inital solution O(m x n) for 2 loops


// var strStr = function (haystack, needle) {

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//         let matchCount = 1
//         for (let j = 1; j < needle.length; j++) {
//             if(needle[j] === haystack[i+j]){
//                 matchCount++
//             }
//             else{
//                 break
//             }
//         }
//         if(matchCount === needle.length){
//             return i
//         }
//     }
//   }

//   return -1

// };







var strStr = function (haystack, needle) {

    let i = 0; 
    while (i < haystack.length) {
        let matchCount = 0
        if (haystack[i] === needle[0]) {
            matchCount++
            for (let j = 1; j < needle.length; j++) {
                if(needle[j] === haystack[i+j]){
                    matchCount++
                }
                else{
                    break
                }
            }
            if(matchCount === needle.length){
                return i
            }
        }

        i = i+matchCount+1
    }

  return -1

};





console.log(strStr("todaysadaysadd", "sadd"));

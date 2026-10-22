var reverseVowels = function(s) {
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'])
    const stringArray = s.split("")


    let left = 0
    let right = stringArray.length - 1

    while(left<=right){

        if(vowels.has(stringArray[left]) && vowels.has(stringArray[right])){
            const temp = stringArray[left]
            stringArray[left] = stringArray[right]
            stringArray[right] = temp

            left++
            right--

            continue
        }

        if( !vowels.has(stringArray[left]) ) left++
        if( !vowels.has(stringArray[right]) ) right--
    }

    return stringArray.join("")
};

console.log(reverseVowels("IceCreAm"))
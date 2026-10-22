var canConstruct = function(ransomNote, magazine) {
    const magazineArr = (magazine.split(""))

    for (const letter of ransomNote){
        if(magazineArr.includes(letter)){
            const index = magazineArr.indexOf(letter)
            if(index !== -1) magazineArr.splice(index,1)
            continue
        }
        return false

    }
    
    return true
};


console.log(canConstruct("abcdd","aabcd"))
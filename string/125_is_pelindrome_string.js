var isPalindrome = function(s) {

    const refined = s.replace(/([^a-zA-Z0-9])/g,'').toLowerCase()

    console.log(refined)

    let leftFlag = 0
    let rightFlag = refined.length-1

    while((rightFlag != leftFlag)& !(leftFlag > rightFlag)){
        if(refined[leftFlag] !== refined[rightFlag]) return false

        rightFlag--
        leftFlag++
    }

    return true

};


console.log(isPalindrome("abba"))
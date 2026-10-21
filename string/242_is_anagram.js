var isAnagram = function(s, t) {
    let letterMapS = new Map()
    let letterMapT = new Map()

    //different length string pairs fail
    if(s.length !== t.length) return false

    // setting the letter counts for string s 
    for (const l of s) {
        if(letterMapS.has(l)){
            letterMapS.set(l, letterMapS.get(l) + 1)
            continue
        }
        letterMapS.set(l,1)
    }
    // setting the letter counts for string t
    for (const l of t) {
        if(letterMapT.has(l)){
            letterMapT.set(l, letterMapT.get(l) + 1)
            continue
        }
        letterMapT.set(l,1)
    }

    for (const [letter, count] of letterMapS){
        if(letterMapT.get(letter) !== count) return false
    }

    return true

};


console.log(isAnagram("silent","listen"))

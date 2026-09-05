var isIsomorphic = function(s, t) {
    let letterMap = new Map()

    if(s.length !== t.length) return false

    for(let i = 0; i<s.length; i++){

        for(let mapPair of letterMap){
            if(mapPair[1] == t[i] && mapPair[0] !== s[i]) return false
        }

        if(letterMap.get(s[i]) && (letterMap.get(s[i]) !== t[i])) return false

        letterMap.set(s[i],t[i])
    }

    return true
};


// better one 

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false

    let sToT = new Map()
    let tToS = new Map()

    for (let i = 0; i < s.length; i++) {

        if (sToT.has(s[i]) && sToT.get(s[i]) !== t[i])
            return false

        if (tToS.has(t[i]) && tToS.get(t[i]) !== s[i])
            return false

        sToT.set(s[i], t[i])
        tToS.set(t[i], s[i])
    }

    return true
};

console.log(isIsomorphic('ab','cc'))
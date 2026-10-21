var wordPattern = function(pattern, s) {
    const wordCollection = s.split(" ")
    const patternMapLetterToWord = new Map()
    const patternMapWordToLetter = new Map()

    if(pattern.length !== wordCollection.length) return false


    for(let i=0; i<pattern.length;i++){
        if(patternMapLetterToWord.get(pattern[i])){
            if(patternMapLetterToWord.get(pattern[i]) !== wordCollection[i]) return false
            continue
        }
        patternMapLetterToWord.set(pattern[i], wordCollection[i])
    }


    for(let j=0; j<wordCollection.length;j++){
        if(patternMapWordToLetter.get(wordCollection[j])){
            if(patternMapWordToLetter.get(wordCollection[j]) !== pattern[j]) return false
            continue
        }
        patternMapWordToLetter.set(wordCollection[j], pattern[j])
    }

    return true
};

console.log(wordPattern("abba","dog cat cat dog"))
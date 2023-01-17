function bestfrend(sentence, charA, charB){
    wordList = sentence.split(" ")

    sum = 0
    pattern = charA+charB
    for (let i = 0; i<wordList.length; i++ ){
        //charList = wordList[i].split("")
        if (wordList[i].includes(pattern)){
            sum += 1
        }
    }
    if (sum >= 2){
        return true
    }




    return false
}

console.log(bestfrend("we found your dynamite", "d", "y"))
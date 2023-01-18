
function vowelExchanger(word) {
    /**
     *
     * */
    let newWords = ''


// or the shorthand way
    var dictVowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};

    charList = word.split('')
    for (let i = 0; i < charList.length; i++) {

        let character = charList[i].toLowerCase()


        if(character in dictVowels){

             newWords += dictVowels[character].toString()
            //console.log(character)

        }else {
            newWords += charList[i].toLowerCase()
        }
    }

    return newWords
}


console.log(vowelExchanger("karAchi"));
console.log(vowelExchanger("chEmBur"));
console.log(vowelExchanger("khandbari"));
console.log(vowelExchanger("LexiCAl"));
console.log(vowelExchanger("fuNctionS"));

function pigLatinSentence(sentence){
    /**
     * loop through each word
     * For each word, loop through each character
     * check if the first letter is a vowel, then add 'way' to the word
     * else if any letter that is not first letter is a vowel, add 'ay' to the word.
     *
     * */
    let vowels = ['a','e','i','o','u']
    let sentenceWordList = sentence.split(" ")
    let newSenList = []

    for (let i = 0; i < sentenceWordList.length; i++) { //Loop through each word
            let eachWord = sentenceWordList[i].trim()
            let eachWordCharList = eachWord.split("") //convert each word to list--> 'word' -> ['w','o','r','d']

        let candidates = []

        for (let j = 0; j < eachWordCharList.length; j++) { // for each character

            let isIn = vowels.includes(eachWordCharList[j].toLowerCase()) //if character is vowel

            if(j==0 && isIn){

                    candidates.push(eachWord+"way")

                }else if( isIn ) { //if vowel found in the middle of the string
                    let newStr = ''
                    //get the index if the current char
                    let currIndex = j

                    let firstHalf = eachWordCharList.slice(0,currIndex).join('') //get the first half of the string
                    let secondHalf = eachWordCharList.slice(currIndex+1).join('') //get the second half of thr string
                    newStr = secondHalf+firstHalf+'ay'
                    candidates.push(eachWordCharList[currIndex]+newStr)

                }
        }
        newSenList.push(candidates[0])

    }
    return newSenList.join(' ')
}

console.log(pigLatinSentence("this is pig latin"));
console.log(pigLatinSentence("wall street journal"));
console.log(pigLatinSentence("raise the bridge"));
console.log(pigLatinSentence("all pigs oink"));
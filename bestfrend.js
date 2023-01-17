function bestFriend(sentence, charA, charB){
    /**
     *finds a pairs of characters in a sentence.
     * We have a sum for each character, if they occur together
     * We should get an even outcome hence, true
     * if the sums are uneven, we return false
     * @param {string} sentence A setence to control the pair
     * @param {character} charA the first char
     * @param {character} charB the secnond char
     */
    wordList = sentence.split(" ")


    sumA = 0
    sumB = 0

    pattern = charA+charB

    for (let i = 0; i<wordList.length; i++ ){
        //in each word from wordList, CharA and CharB should occur together
        charList = wordList[i].split("")

        for (let j = 0; j < charList.length; j++){

            if( charList[j] == charA ){

                sumA += 1

                if((j+1) < (charList.length-1)){
                    if(charList[j+1] == charB){
                        //y
                        sumB += 1
                    }
                }
            }
        }

    }
    if (sumA == sumB){
        return true
    }





    return false
}

console.log(bestFriend("we found your dynamite", "d", "y")) //False
console.log(bestFriend("i found an ounce with my hound", "o", "u")) //True
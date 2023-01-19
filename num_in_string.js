function numInStr(listOfString) {
    /**
     * 1. Loop though each word in the listOfString
     * 2. Loop though each character in that string
     * 3. check if char is comma
     * 4.  if char not comma && is a number, we add that string in the newStrList
     * 5. Make a set of newStrList to remove duplicates, again converting it to a list.
     * @param {string[]} listOfString
     * @return {Array} list of string with
    **/
    newStrList = [] //here we store our string candidates

    for (let i = 0; i < listOfString.length; i++) { //looping though each element(String) in the list

        listOfChar = listOfString[i].replaceAll(" ",',') //get each string/word. While replacing blanks with commas

        for(j=0;j<listOfChar.length;j++){ // for each char in each word

            ch = listOfChar[j] //

            if(ch != ','){

                if (!isNaN(ch * 1)) { //if false (i.e )
                    newStrList.push(listOfString[i])
                }


            }
        }
    }

    return Array.from(new Set(newStrList)) ;
}







/*console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(numInStr(["abc", "abc10"]) ))
console.log(numInStr(numInStr(["abc", "ab10c", "a10bc", "bcd"])))*/
console.log(numInStr(numInStr(["this is a test", "test1"])))
console.log(numInStr(numInStr(["who needs numbers", "not me"])))

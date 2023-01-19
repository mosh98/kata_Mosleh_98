function numInStr(listOfString) {
    newStrList = [] //here we store our string candidates

    for (let i = 0; i < listOfString.length; i++) { //looping though each element(String) in the list

        listOfChar = listOfString[i]

        for(j=0;j<listOfChar.length;j++){
            ch = listOfChar[j]
            if (!isNaN(ch * 1)) { //if false (i.e )
                newStrList.push(listOfString[i])
            }
        }
    }

    return Array.from(new Set(newStrList)) ;
}







console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(numInStr(["abc", "abc10"]) ))
console.log(numInStr(numInStr(["abc", "ab10c", "a10bc", "bcd"])))
console.log(numInStr(numInStr(["this is a test", "test1"])))
console.log(numInStr(numInStr(["who needs numbers", "not me"])))

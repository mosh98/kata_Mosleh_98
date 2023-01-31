
function clockwise(message,size=4) {


    //Make array of size 4, 4 times
    let listOfArr = []
    for (let i = 0; i < size; i++) {
        listOfArr.push(new Array(size).fill(null))
    }

    //convert message into list of characters
    let messageBrokenIntoCharacters = message.split("")

    let flag = false
    for (let i = 0; i < messageBrokenIntoCharacters.length; i++) {
        let currChar = messageBrokenIntoCharacters[i]
        console.log(currChar)
        //loop through each array
        for (let j = 0; j < listOfArr.length; j++) {
            //first available space in a list
            let curList = listOfArr[i]
            let firstAvailable = list.indexOf(null);
            if (firstAvailable === -1) {
                firstAvailable = curList.length;
            }
            //replace the value in the list with the firstAvailable index
            curList[firstAvailable] = currChar
            flag = true
            continue

        }

    }



    return listOfArr
}

//console.log("Mubashir Hassan".split(""));
//console.log(new Array(4).fill(NaN))
console.log(clockWise("Mubashir Hassan", 4))
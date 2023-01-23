

function countBoomerangs( listOfNum ){
    if(listOfNum.length <3){
        return new Error('List too small')
    }
    for(let i = 0; i< listOfNum.length; i++){
        if(isNaN(listOfNum[i])){
            return new Error('It includes a string')
        }
    }

    let sum = 0

    for (let i = 0; i< listOfNum.length - 2; i++){
        let current = listOfNum[i]
        // if current is samme as current + 2 && if cu{rrent is not same as current+1


        if( current ==  listOfNum[i+2] ){
            if(current != listOfNum[i+1]){
                sum += 1
            }
        }

    }

    return sum
}

//console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
//console.log(countBoomerangs([]));
//console.log(countBoomerangs([1, 7]));
//console.log(countBoomerangs([1, 7, 1, 7, "one”, 7, 1]));
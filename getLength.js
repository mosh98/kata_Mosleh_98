function getLength(lz){
    let sum = 0
    for (let i = 0; i < lz.length; i++) {
        let item = lz[i]
        if(Array.isArray(item)){
            sum += getLength(item)

        }else if (typeof  item == "number" ){
            sum+= 1
        }
    }



    return sum
}

console.log(getLength([1, [2, 3]]));

console.log(getLength([1, [2, [3, 4]]]));

console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

console.log(getLength([1, [2], 1, [2], 1]));




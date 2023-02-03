function existsHigher(liz, num){

    if(liz.length == 0) return false

    for (let i = 0; i < liz.length; i++) {
        let curNum = liz[i]
        if (curNum >= num) return true
    }

    return false
}

console.log(existsHigher([5, 3, 15, 22, 4], 10));
console.log(existsHigher([1, 2, 3, 4, 5], 8));
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));
console.log(existsHigher([-10, -99, -57, -4], -4));
console.log(existsHigher([5], 5));
console.log(existsHigher([99, 99], 99));
console.log(existsHigher([], 5));

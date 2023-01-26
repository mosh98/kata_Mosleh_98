function happyAlgorithm( n, c=0){

    /**
     * happy number is any number that goes through a process
     * which ends in 1 after a certain iterations.
     * ex: 19 -> 82 .......-> 1 == HAPPY!
     * to elaborate 19 to 82 : 19 -> 1 and 9^2 ->1 + 81
     * */



    let sum = 0

    //this while sqaures each digit in a number
    while (n>0){
        let e = n%10; //we take the last digit
        n = Math.floor(n/10) //we take the first digit/digits
        sum += e*e //we square the last digit

    }

    c++ //after every "power ups" we increase the counter


    if(sum === 1){
        return `HAPPY ${c}`
    }  else if (sum > 1 && sum <= 4) {
        //assuming we landed in a infinite loop we increase the counter
        c++
        return `SAD ${c}`;
    }

    return happyAlgorithm(sum,c);
}





console.log(happyAlgorithm(139));
console.log(happyAlgorithm(67));
console.log(happyAlgorithm(1));
console.log(happyAlgorithm(89));


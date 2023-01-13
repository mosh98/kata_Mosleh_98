
function consecutive_sum(n) {
    /**
     * In summary,
     * the algorithm is checking all possible consecutive number sequences starting from 1 to half of the input number
     * and
     * if it finds any sum of consecutive numbers that is equal to the input number,
     * it returns true,
     * otherwise it returns false if it couldn't find any.*
     */
    for (let i = 1; i < (n/2) + 1; i++) {

        let curr_sum = 0; //addding stuffz
        //calculated by adding the current value of the inner loop variable to the sum
        //lopoping (j<half of the number), because the added value will alawys be lower than ´n´

        for (let j = i; j < (n/2) + 2; j++) {

            curr_sum += j;

            if (curr_sum == n) {
                return true;
            }
            if (curr_sum > n)
                //we don't want a value greater than n
                break;
        }
    }
    return false;
}




console.log(consecutive_sum(64))



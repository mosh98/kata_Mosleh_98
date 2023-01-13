
function consecutive_sum(n) {
    /**
     *
     * In summary, the algorithm is checking all possible consecutive number sequences starting from 1 to half of the input number
     * and
     * if it finds any sum of consecutive numbers that is equal to the input number,
     * it returns true,
     * otherwise it returns false if it couldn't find any.*
     */


    for (let i = 1; i < (n/2) + 1; i++) {

        let curr_sum = 0;
        //calculated by adding the current value of the inner loop variable to the sum
        //
        for (let j = i; j < (n/2) + 2; j++) {
            curr_sum += j;
            if (curr_sum == n) {
                return true;
            }
            if (curr_sum > n) {
                break;
            }
        }
    }
    return false;
}



console.log(consecutive_sum(64))


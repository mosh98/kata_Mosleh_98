
function reorder(text){
    function checkCase(ch) {
        if (!isNaN(ch * 1)){
            return 0;
        }
        else {
            if (ch == ch.toUpperCase()) {
                return 1;
            }
            if (ch == ch.toLowerCase()){
                return 2;
            }
        }
    }

    let upper_case_list = []
    let lower_case_list = []
    let numers_list = []

    list_of_text = text.split("");

    for (i=0; i<list_of_text.length; i++){

        if (checkCase(list_of_text[i]) == 0  ){
            numers_list.push(list_of_text[i])
        }

        if (checkCase(list_of_text[i]) == 1  ){
            upper_case_list.push(list_of_text[i])
        }
        if (checkCase(list_of_text[i]) == 2  ){
            lower_case_list.push(list_of_text[i])
        }
    }
    return upper_case_list.concat(lower_case_list,numers_list).join('')
}

console.log(reorder("m11oveMENT"))



function greaterThanTwenty(num){
    if(num>20){
        return true
    }
}





function students(arr){
    c=0
    for(i of arr){
        if(greaterThanTwenty(i)==true){
            c++

        }
    }
    console.log(c,"students having more than 20 marks")
}
students([19,20,21,45,16,32,14,9,8])
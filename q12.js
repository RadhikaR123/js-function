function add(n1,n2){
    return n1+n2
}


function addTwoNumbers(ar,ar1){
    for(var i=0; i<ar.length; i++){
       console.log(add(ar[i],ar1[i]))
    }
}
addTwoNumbers([1,2,3],[20,50,24])
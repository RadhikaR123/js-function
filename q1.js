function sayBye(ar){
    console.log("bye","",ar)
}
sayBye("radhika")



var x=function(ar){
    console.log("bye","",ar)
}
x("radhika")


// (function(ar){
//     console.log("bye","",ar)
// })("radhika")


(function(str1,str2){
    console.log(str1===str2)
 })("kumar","kumar");

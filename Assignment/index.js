var x = 1;
a();
console.log(x);
b(); 
console.log(a);

function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
}
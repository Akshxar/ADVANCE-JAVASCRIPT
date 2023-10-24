 // 1st case - 
 console.log(" 1st case: ");
//code start
 var x=7;
 function fun1()
 {
    console.log("Namaste Javascript ");

 }
 fun1();
 console.log(x)



 
//2nd case - 
console.log(" 2nd case: ")
//code start
fun2();
console.log(y)
var y=7;
function fun2()
{
   console.log("Namaste Javascript ");

}


//3rd case :
console.log(" 3rd case:")
//code start
fun3();
console.log(z)
console.log(fun3)
var z=7;
function fun3()
{
   console.log("IT'S A THIRD CASE ");

}


//4rth case :
console.log("4rth case :")
//code start
var a=7;
function fun4()
{
   console.log("IT'S A FOURTH CASE ");

}
fun4();
console.log(a)
console.log(fun4)



//5th case :
console.log("5th case :")
//code start:
fun5();
console.log(fun5);
var fun5 = () => {                   
   console.log("it's a function 5");
}
//output 5 : typeerror : fun5 is not a function
//here fun5 is a variable 

//IMPORTANT POINT IS UNTIL THE FUNCTION DECALARATION IS NOT DIRECTLY 
//IT WILL NEVER BEHAVE LIKE A PROPER FUNCTION




//6thcase:
console.log('6TH CASE:')

console.log(printName);
console.log(f);
var f = 3;
var printName = function (name) {
console.log(name)

}











 
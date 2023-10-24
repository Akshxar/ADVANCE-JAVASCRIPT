//QUESTION 1



//What will be the output of the following (Also write the reason for the answer)



var a = 2;
var c = 2;

function b(){
var x = 2;
var c = 4
console.log(c)
}



console.log(a);

console.log(this.a);

console.log(this.c)

console.log(this.x)

console.log(window.a)

console.log(window.x)

console.log(b());




//QUESTION 2
console.log("QUESTION 2: ")


function abc() {

    console.log(var2);
    
    }            
var var2 = 7;
    
abc();





//QUESTION 3:
console.log("QUESTION 3: ")



function xyz() {

console.log(var3);

}

xyz();
var var3 = 7;





//QUESTION 4:
console.log("QUESTION 4: ")



function outerfunction1() {
    console.log(vara);                      //-7
    var varc = 10;                          
    innerfunction1();
    function innerfunction1() {               //3
    console.log(varb);                      
    console.log(varc);
    }   
    }
var vara = 7;
var varb =3
outerfunction1();




//QUESTION 5:
console.log("QUESTION 5: ")


function outerfunction2() {
console.log(boxa);                                //7
var boxa = 10;                                   
innerfunction2();
function innerfunction2() {
console.log(boxa);                               //10
console.log(window.boxa);  ///window.boxa = global boxa=7
console.log(this.boxa)     ///this.boxa = global boxa=7
}
}
var boxa = 7;
var boxb =3
outerfunction2();

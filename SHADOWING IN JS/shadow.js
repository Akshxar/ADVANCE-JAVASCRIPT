

var a=100;      //global
let b=200     //script
const c=300;  //script

{
    var a=10;         //global
    let b=20;        //block space
    const c=30;      // block space
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

//shadowing hogi sirf same scope mein

//OUTPUT : 10 20 30   10 200 300

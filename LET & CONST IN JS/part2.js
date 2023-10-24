console.log(window.a);
let a = 20;

var b = 40 ;

console.log(window.b);


// here u can see var b is a global variable(global object) then,
// if we call window object (window.b) we can easily access it 
// kiu ki variable b hmesha global scope mein banta hai 

// but if we declare variable using let toh vo seperate banta hai 
// aap usse window object se access nhi kar skte 

function outerfunction() {
    console.log(a);                                //7
    var a = 10;                                   
    innerfunction();
    function innerfunction() {
    console.log(a);                               //10
    console.log(window.a);  ///window.boxa = global boxa=7
    console.log(this.a)     ///this.boxa = global boxa=7
    }
    }
    var a = 7;
    var b =3
    outerfunction();
    
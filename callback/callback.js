function buycar(cb){
    setTimeout( ()=> {
        console.log("buy a car ")
    cb();    
    }, 10000)
    
}

 function trip(cb){
    setTimeout( ()=> {
        console.log("go to trip ")
    cb();     
    }, 2000)
    
}

function manali(){
    setTimeout( ()=> {
        console.log("manali ")
    }, 1000)
}

buycar(trip);

    
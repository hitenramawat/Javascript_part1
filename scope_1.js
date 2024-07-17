 // what is scope({}-this is scope representation):-

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
// area under the curly braces is block scope  and outer area is called global scope 
}
// if now i run (console log(a)) this code it'll give us a error (that a is not defind) becoz the scope of a is only avaible in
// the curlybraces{} 
//  for console log (b) itll give the same error (that b is not defind)
// but now if i give command conlsole log (c) it'll print 30(in output)
// thats why we don't use var for a variable because it doesn't have scope 

// console.log(a);
// console.log(b);
// console.log(c);



// day 2

function one() {
    const userName = "hiten";

    function two() {
        const website = "youtube";
        console.log(userName);
    }
   // console.log(website);


    two()
}
one()

if (true){
    const uName = "hitesh";
    if(uName === "hitesh"){
        const wsite = "instagram"
       // console.log(uName);
    }

}


// ++++++++++++++++++++++++++++ interesting ++++++++++++++
console.log(addone(5)); // we print this then it'll print and won't give any error
function addone(num){
    return num + 1;
}


console.log(addtwo(5)); // but we print this then it'll give an error and won't run 
const addtwo = function(num){ // because addtwo(variable) can't access that
    return num + 2;
}


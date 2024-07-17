if(false){
    // console.log("log_in");
}

if(true){
    // console.log("log_out");
}


// falsy and truthy values
// falsy values :- false,NaN,Null,undefined,0,-0,BigInt 0n,""
// truthy vales :- "0","false"," ",[],{},function () {}
const usermail = "hitesh.ai" // OR try = "" output will be that not an email

if(usermail){
    // console.log("thats an email");
}else{
    // console.log("thats not an email");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("bro thats an empty object")
}


// false == 0 -------> output --> True  but false === 0 output --> false
// true == 1 --------> ouput -->True but true === 1 output --> false

// Nullish Coalescing Operator (??): null , undefined
let val1;
val1 = 5 ?? 10;
// console.log(val1); // output will be 5
val1 = null ?? 5
// console.log(val1); // output will be 5
val1 = null ?? undefined
// console.log(val1); // output will be undefined


// ternary operator

// condition ? true/false : false/true
let val2  = 80;
// val2 >=20 ? //console.log("yes it is") : // console.log("no it's not");







let str = "this is what it takes";
const DOB = new Date('18-04-05');

// declaration of symbol datatype
// const mySym = Symbol("thekey1");
// let obj = {
//    name: "harry",
//    location: "jaipur",
//    worksAt: "google",
//    lastSeen: ["sunday","saturday"],
//    [mySym]: "thekey1" 
   
// }
// console.log(obj[mySym]);
// console.log(obj["worksAt"]);
// console.log(obj);
// console.log(obj["location"]);
// console.log(obj.mySym);
// console.log(typeof.obj.mySym);

const tinderUser = new Object(); // this is a singelton object
// const tinder = {}    // this is non-singelton object 

tinderUser.id = 1100;
tinderUser.name = "harry";
tinderUser.login = false;
// console.log(tinderUser);

let obj1 = {1: "t",2: "H"}
let obj2 = {3: "K",4: "S"}

const obj3 = Object.assign({},obj1,obj2)  // assigning
//console.log(obj3);


const obj4 = {...obj1,...obj3,...obj2}
// console.log(obj4);

console.log(Object.keys(tinderUser)); // this will be a arry and will print variables (name,id,login)
console.log(Object.values(tinderUser)); // this will be a arry and will print variables values 
console.log(Object.entries(tinderUser)); // this will be a arry and will print variable name : variable value
console.log(tinderUser.hasOwnProperty("logink")); // answer will be in boolean



let  tutor = {
   
}

// const {tutorName: name} = tutor

// console.log(name);


//     is thiss json shit going on nigga
// }


// {
//     tutorName: "ajay",
//     tutorId: 9,
//     joiningDate:26/4/89,
//     timing:"morning"

// }


let addition = function(a,b){
    plus  = a + b;
    return plus;
}

console.log(`the sum of numbers is ${addition(5,5)}`);

let wordPrinting = function(userName){
    for(i = 0; i<=userName.length ; i++){
        console.log(userName[i]);
    }
}

console.log(wordPrinting("umesh_yadav"));
console.log("the addition is: ",addition(4,5));
function createUser(userName,score){
    this.userName = userName;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai",24);
const tea =   createUser("tea",250);

//chai.increment()
//chai.printMe()
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/




const str = "hitesh   "
//trim()

String.prototype.truelength = function(){
    console.log(`${this}`);
    return this.trim().length
}
console.log(str.truelength());
//console.log(truelength(str));  



// starting point 2

const myHero = ["Thor","SpiderMan"];

const heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}



Object.prototype.hiten = function(){
    console.log(`hiten is an object and you have access to it`);
}


// heroPower.hiten()
// myHero.hiten()



Array.prototype.kali = function(){
    console.log("yes,its working");
}

//myHero.kali()
//heroPower.kali()



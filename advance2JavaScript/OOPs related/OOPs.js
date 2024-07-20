class implementAbstraction {
    set(x,y) {
        this.a = x;
        this.b = y;
    }
    display(){
        console.log(`a = ${this.a}`);
        console.log(`b = ${this.b}`);
    }
}

const obj = new implementAbstraction();
//obj.set(10,20);
//obj.display();


function displays(a,b){
    let sum = a + b ;
   // console.log(`the sum of ${a} and ${b} is ${sum}`);
}
//displays(40,50);


class implementAbstraction2{
    #a;
    #b;
    #sum;

    set(x,y){
        this.#a = x;
        this.#b = y;
        this.#sum = x + y;
    }
    display(){
        console.log(`a = ${ this.#a}`);
        console.log(`b = ${ this.#b}`);
        console.log(`the sum of ${this.#a} and ${this.#b} is ${this.#sum} `);
    }
}
const obj3 = new implementAbstraction2();
//obj3.set(20,30);
//obj3.display();


// Above section is about Abstraction


// in this section we gonna talk about Object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    singnedIn: true,

    getUserDetails: function(){
        console.log(`name of the person is ${this.username} and his login counts are ${this.loginCount} , is he singned in ${this.singnedIn}`);
       // console.log(this); // (this) is giving us the object elements like(username,logincount)
    }
}

//console.log(user.getUserDetails());

// this section we gonna learn about Constructor Function

// const promise = new Promise();
// here (new) is Construnctor Function

function  User(username , logInCount , gMail){
    this.username = username
    this.logInCount = logInCount
    this.gMail = gMail
    console.log(`the name of person is ${this.username} and logInCount is ${this.logInCount} and gmail is ${this.gMail}`);
    return this;
}


//let  user1 = new User("hitesh",67,"gamil.com")  // (new) generate an empty object
//console.log(user1);

// using of instanceof 

function Car(model){
    this.model = model

}
const car1 = new Car("tesla S");
const car2 = {model: "honda civic"}

console.log(car1 instanceof Car );
console.log(car2 instanceof Car );
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
    // (this) is use for current context
}
// user.welcomeMessage();
// user.username = "sam (the mother fukcer)"
// user.welcomeMessage(this.username);
user.welcomeMessage(this);

function chai() {
    let usern = "kita"
    // console.log(this.usern); // if now we print the output will give an error (undefined)
}     // we can  onyl use this.usern in objects not in functions 
chai()


let geeking = () => {
    let game = "gta_6";
    let gameMaker = "Rockstar_Games";
    let version = "latest"
    console.log(`name of the game is ${game} and maker of the game is ${gameMaker} version of game is ${version}`);
}
// geeking()

// implicit version of arrow

let kila = (num_1 ,num_2) => (num_1 + num_2);
let nam = () => ({username: "kilaniga"});
// console.log(nam());
// console.log(kila(3,4));



// immediately Invoked Function Expression (IIFE)
// sometimes global polution got into the funtion and that harmed it so for saving it from global P. we use IIFE 

(function kela() {
    // this is named
    //console.log(`nigga you ain't`); // instead calling function in globalarea we can just wrap the funtion in ()
})();  // and then invoke it by again using of () at the end 
// kela();
///////  and for ending the IIFE we got to use semicolon(;) at the end 


((name) => {
    // console.log(`this is it nigga ${name}`);
})("hitesh")
// this is calledd IIFE
function SetUsesrname(username){
    this.username = username;
}

function createUser(username,email,password){
    SetUsesrname(username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("kunal","kunal@gmail.com",345554)
console.log(chai);
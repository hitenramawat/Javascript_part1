const promiseOne = new Promise((resolve,reject) => {
    setTimeout(function(){
       // console.log("Async task is complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    //console.log("Promise consumed");
})


new Promise(function(resolve,reject){
   // console.log("everything till now is blessed");
    resolve()
}).then(function(){
   // console.log("is completed");
})


new Promise((resolve,reject) => {
    setTimeout(function(){
       // resolve({userName: "hien",gmail: "ksjflajf@gmail.com"})
    },1000)
}).then((ll) => {
    //console.log(ll);
})



new Promise((resolve,reject) => {
    let error = true;
    if(!error){
        resolve({userName: "kilana",location: "jelp/folder.p"});
    } else{
        reject('ERROR:-SOMETHING WENT WRONG')
    }
})
.then((user) => {
    console.log(user);
    return user.userName
})
.then((userName) => {
    console.log(userName);
})
.catch((k) => {
   // console.log(k);  
})//.finally(() => console.log("the promise either resolved or rejected"))



const promiseFive = new Promise((resolve,reject) => {
    let error = true;
    if(!error){
      //  resolve({userName: "Matrix",location: "jelp/folder.p"});
    } else{
       // reject('ERROR:- JS WENT WRONG')
    }
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive;
        //console.log(response);
   } catch (error) {
        //console.log(error);
   }
}

//consumePromiseFive()



new Promise((resolve,reject) => {
    let url ='https://randomuser.me/api/'
    resolve(url)
}).then((ul) => {
    console.log(ul);
    return ul.location;
}).catch((y) => {
    console.log(y);
})

for (let i = 1 ; i<= 4 ; i++){
    for(let j = 1 ; j<=i ; j++){
       // console.log("*");
    }
   // console.log("");
}

for (let i = 0 ; i<=10 ; i++){
    let element = i;
    if(i == 5){
       // console.log("5 is the number");
    }
   // console.log(element);
}

let arry = ["name","age","workAt","location"]
for (const i of arry) {
    //console.log(i);
}

let profile = {
    name: "hitesh",
    age: 23,
    workAt: "google",
    location: "jaipur",
    id: 5656,
    gmail: "hiteshch.ai"
}
for (const i in profile) {
    if (Object.hasOwnProperty.call(profile,i)) {
        const element = profile[i]; 
        //console.log(element);
    }
}

arry.forEach(i => {
    //console.log(i);
});

const maps = new Map();
maps.set('IN',"India")
maps.set('Fr',"France")
//console.log(maps);


arry.forEach(function (item) {
      //console.log(item);
});

let anum = (item) => {
    console.log("kinan");
    return item;
}
//console.log(anum());

const lan = [
    {
        lan1:"JavaScript",
        lantypo3:"Js" 
    },
    {
        lan1:"C",
        lantypo3:"c"
    },
    {
        lan1:"Java",
        lantypo3:"java"
    },
    {
        lan1:"Python",
        lantypo3:"py"
    }
]

lan.forEach((item) =>{
    //console.log(item.lan1)
})

let myNums = [1,2,3,4,5,6,7,8,9,10];
myNums.filter((num) => {
    if(num>4){
        //console.log(num);
    }
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const newFilter = books.filter((bk) =>{
    return  bk.genre === 'history';
})
//console.log(newFilter);

 const newFilter1 = books.forEach((val) => {
     //console.log(`name of the book is ${val.title} and genre of book is ${val.genre}.`);
 })



let myNumers = [1,2,3,4,5,6,7,8,9,10];
let newNumers = myNumers
            .map((item) => item * 5)
            .map((item) => {
                if(item%5 == 0 ){
                    //console.log(item);
                }
                //return item;
})


const arry23 = [5,20,45,10];

const intialValue = 0;
const sumOf = arry23.reduce(
    (accumulator,currentValue) => accumulator + currentValue ,intialValue
);
console.log(sumOf);
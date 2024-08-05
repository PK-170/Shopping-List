const { type } = require("@testing-library/user-event/dist/type");

setTimeout(greet, 1000);

function greet(){
    console.log("calllback func works");
}

// setInterval(()=>{console.log("intervel func")}, 5000);

// Promise

let newPromise = new Promise(function(myResolve, myReject){
   
    let x =8;
    if(x ===5){console.log("OK");}
    else{console.log("ERROR");}
});

newPromise.then(
    (value)=>{console.log(value);},
    (error)=>{console.log(error);}
)

//Promise

let myPromise = new Promise(function(myResolve, myReject){

    setTimeout(()=>{myResolve("callback func")}, 2000)
    }
)

myPromise.then(
    (value)=>{console.log(value);}
)

//async func

async function myFunc(){
    return "Hello";
}

let f = myFunc().then(
    (value)=>{console.log("success")},
    (error)=>{console.log("failed")}
);

console.log(f);

// function await

async function f4(){
    try{
        const k = await Promise.reject(10);
    }catch(error){
        console.log(error);
    }

}

f4()

// foo

async function g5(){
    return await Promise.resolve(5);
}

console.log(g5())

//
function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  }

  add()

  //
  function greet(){
    console.log("good morning");
  }

  // counter func

  const add1 = (function () {
    let counter = 0;
    return ()=>{counter += 1; return counter}
  })();
  
  add1();
  add1();
 console.log(add1());

 // nested func

 function add2(){
    let counter =0;
    function a(){counter+=10; return counter;}
    a();
    return counter;
 }

 console.log(add2());

 //
 const person = {
    firstName:"Ming",
    lastName: "Young",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }

  console.log(person);

  const member = {
    firstName:"Zihan",
    lastName: "Young",
  }

  let fullName = person.fullName.bind(member);
  console.log(member);

  //

  try{
    let a = 100;
    console.log(b);
  }catch(error){
    console.log("invalid value");
  }

  //

  const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName: "Ming",
    lastName: "Young"
  }

  person1.fullName.apply(person2);

  //
  function myFunction(x, y = 10) {
    return x + y;
  }
  console.log("my func value",myFunction(5));

  //
  let str = "test"
  let v = str.length;
  console.log("the str length ",v);

  //
  let firstName = "Ming";
  let lastName = "Young";

  let text = `Welcome ${firstName}, ${lastName}!`;
  console.log(text);

  // Test
  function welcome(msg){
    console.log(msg);
  }

  welcome("This is new message from mac")
  welcome("This is message to display")
  
  // new keyword

let z = new Object();
let x = new String();
let c = new Array();
let b = new Set();
let n = new Map();

z = {}
z = {
  id: 1001,
  firstName: 'Ming',
  lastName: 'Young',
  Region: 'NSW',
}
console.log(z);

// 

x = "This is the string of the world";
console.log(x);

c = [44, 77, 88, 99, 22];
for(let element of c){
  console.log(element);
  
}

//
p = [44, 66, 88, 88, 11, 77];
b = new Set(p);
console.log(b);

//hoisting
cowSays('moo');

function cowSays(sound) {
    console.log(sound);
}

//closures
const first = () => {
  const greet = 'Hi';
  const second = () => {   // second is closure
      const name = 'john';
      console.log(greet);
  }
  return second;
}
const newFunc = first();
newFunc();

//In JavaScript, a callback is simply a function that is passed to another function as a parameter and 
//is invoked or executed inside the other function. 

const greeting = (name) => {
  console.log('Hello  ' + name);
}

const processUserName = (callback) => {
  namea = 'Zihan';
  callback(namea);
}
processUserName(greeting);

//promise is an object that may produce a single value some time in the future, 
//either a resolved value or a reason that it’s not resolved (rejected).
//Fulfilled: When the operation is completed successfully.
//Rejected: When the operation is failed.
//Pending: initial state, neither fulfilled nor rejected.
const promise = new Promise((resolve, reject) => {
  isNameExist = true;
  if (isNameExist) {
      resolve("User name exist")
  } else {
      reject("error")
  }
})
promise.then(result => console.log(result))
.catch(() => { console.log('error!'); });
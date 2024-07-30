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
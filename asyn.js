setTimeout(greet, 9000);

function greet(){
    console.log("calllback func works");
}

// setInterval(()=>{console.log("intervel func")}, 5000);

// Promise

let newPromise = new Promise(function(myResolve, myReject){
    let x =5;

    if(x ===5){console.log("OK");}
    else{console.log("ERROR");}
});

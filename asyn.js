setTimeout(greet, 9000);

function greet(){
    console.log("calllback func works");
}

setInterval(()=>{console.log("intervel func")}, 5000)
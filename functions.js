console.log("New File");

// nested function
function outerFunc(){
    let a = 100;

    function innerFunc(){
        console.log(a); 
        console.log(b);
         
    }
    return {innerFunc};
}

outerFunc().innerFunc();

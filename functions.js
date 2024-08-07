console.log("New File");

function outerFunc(){
    let a = 100;

    function innerFunc(){
        console.log(a);
         
    }
    return {innerFunc};
}

outerFunc().innerFunc();
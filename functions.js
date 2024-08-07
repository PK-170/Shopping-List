console.log("New File");
let b = 699;
// nested function
function outerFunc(){
    let a = 100;

    function innerFunc(){
        console.log(a); 
        
        function childFunc(){
            console.log(b);            
        }
        return {childFunc}; 
    }
    return {innerFunc};
}

outerFunc().innerFunc().childFunc();

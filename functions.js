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

//new function

function Bike(model,color){
    this.model = model,
    this.color = color
  }

  Bike.prototype.getDetails = function(){
    return this.model+" bike is "+this.color;
   }

   var bikeObj1 = new Bike("BMW","Black");
   var bikeObj2 = new Bike("BMW","white");

   console.log(bikeObj1.getDetails()); 
   console.log(bikeObj2.getDetails());
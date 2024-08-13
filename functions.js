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
   Bike.prototype.getInfo = function() {
    return this.color + ' ' + this.model+ ' bike';
};

//iife

(function () 
{ var foo = "hello";
console.log(foo);
 })
();

//iife

var greeting='Welcome to blog';
(function(){
  console.log(greeting); 
})();

//nested func

var add =   function (a){
    return function(b){
          return function(c){
                 return a+b+c;
                 }        
           }
     }
     console.log(add(2)(3)(4));
     console.log(add(3)(4)(5)); 
     console.log(add(-3)(4)(5));
     console.log(add(-555)(4)(5));

     // callback func
     function greeting(name) {
        console.log('Hello ' + name);
     }

     // Promise

     var promise = new Promise(function(resolve, reject) {
        isDbOperationCompleted = false;
        if (isDbOperationCompleted) {
            resolve('Completed');
        } else {
            reject('Not completed');
        }
     })
     promise.then(function(result) {
        console.log(result); 
    }).catch(function(error) {
        console.log(error);                                                  
    })

    // Async func
    async function getUserDetail() {
        try {
            let users = await getUsers();
            return users[0].name;
        } catch (err) {
            return {
                name: 'default user'
            };
        }
    }
    
    console.log(getUserDetail());
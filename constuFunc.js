function User(first, last, age, eyeColor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;

}



function nameFunc(obja){
    console.log(obja.firstName + " " + obja.lastName);
}



const user1 = new User("John", "Hunter", 42, "blue");
const user2 = new User("Ming", "Young", 22, "blue");

nameFunc(user1);

// closures 

const factoryLogger = (type) => {

    function logger(msg){
       console.log(`${type} - ${msg}`);
    }
    return logger;
}

let errorLogger = factoryLogger("ERROR");
errorLogger("This is an error logger");

//function inside 

const outerFunc = function(){


     function increment(count){
        return console.log("This is increment");
     }

     function decrement(count){
        return count -=1;
     }

     return [increment, decrement];
}

let [increment, decrement] = outerFunc();

increment();


class Person{

    constructor(name, height, color){
        console.log("The obj is being created");
        this.name = name;
        this.height = height;
        this.color = color;
    }
    
    getName(){
        return this.name;
    }
    
}

var obj1 = new Person("Sam",3,"Blue");
console.log(obj1);
console.log(obj1.getName());
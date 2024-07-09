
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

class Programer extends Person{

constructor(name, height, color, role){
    super(name, height, color);
    this.role = role;
}

}

var obj1 = new Person("Sam",3,"Blue");
console.log(obj1);
console.log(obj1.getName());
let programer = new Programer("tim", 8, "brown", "developer");
console.log(programer);
console.log(programer.getName());
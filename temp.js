
class Person{

    constructor(name, height, color){
        console.log("The obj is being created");
        this.name = name;
        this.height = height;
        this.color = color;
    }
    
    get Name(){
        return this.name;
    }
    
    get Height(){
        return this.height;
    }

    set nameas(newname){
        return this.name = newname;
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
console.log(obj1.Name);
let programer = new Programer("tim", 8, "brown", "developer");
console.log(programer);
console.log(programer.Name);
console.log(programer.Height);
console.log(programer.newname = "Ragav");

function compact(arr){
    if(orr.length > 10)
          return arr.trim(0, 10)
          return arr
}

// factorial

function facto(n){
    if(n <= 1){return 1;}
    return n * facto(n-1)
}

console.log(facto(10));

// fill up the array

function rangeOfNumber(startNum, endNum){
    if(endNum < startNum){return []}
        else{
            const numbers = rangeOfNumber(startNum, endNum - 1);
            numbers.push(endNum);
            return numbers;
        }
    
}

console.log(rangeOfNumber(77,99));


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

// Array for each high order function and callback function
let arr2 = [22, 44, 87, 56, 99];

arr2.forEach(function(value){
    console.log("The value is " + value);
})

// map 

let arr3 = arr2.map((value)=>{
    return value*2;
})
console.log(arr3);

// filter

let arr4 = arr2.filter(function(value){
    if(value%2 == 0){return true;}
    else{return false;}
})

console.log(arr4);

// filter odd number
let arr5 = arr2.filter(function(value){
    if(value%2 == 0){return false;}
    else{return true;}
})

console.log("The filter func ", arr5);

// Reduce

let sum1 = arr2.reduce(function(sum, value){
    return sum + value;
}, 0) 

console.log(sum1);

// Rest args

function findAvrg(...args){
   let sum = 0;
   for(mark of args){
    sum = sum + mark;
   }
   return sum/args.length;
}

console.log(findAvrg(66, 77, 88, 99));

// reverse str

function reverseStr(str){
    if(str === ""){return ""}
    //else{ return reverseStr(str.substr(1) + str.charAt(0))}
}

console.log(reverseStr("hello"));

//
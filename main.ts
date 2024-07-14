class Point {

    public name: string; 
    public x: number;
    public y: number;


     constructor(name: string, x: number, y: number){
        this.name = name;
        this.x = x;
        this.y = y;
    }
   
}

let point1: Point = new Point("Big", 100, 200);
let point2: Point = new Point("Small", 50, 100);

console.log(point1);
console.log(point2);


// find the max value in an Array
const findMax = function(arr: Array<number>): number{
    let max = 0;
    for(let item of arr){
         if(item > max) {max = item };
    }
    return max;
}

let arr: Array<number> = [56, 77, 88, 97, 55, 44, 2999, 4444, 4444,39393];
arr.push(55);

console.log(arr);

console.log(findMax(arr));

// find the min value in an Array

const findMin = function(arr: Array<number>): number{
    let min = Infinity;
    for(let item of arr){
        if(item < min){min = item}
    }
    return min;
}

console.log(findMin(arr));

// interface in TS

interface User{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: User = {
    name: "Ming",
    age: 22,
    speak(text: string): void {
        console.log("text");
    },
    spend(amount: number): number{
        console.log("I spent", amount);
        return amount;
    }
};

console.log(me);

export {}

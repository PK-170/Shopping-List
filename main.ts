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
const findMax = function(arr: number[]): number{
    let max = 0;
    for(let item of arr){
         if(item > max) {max = item };
    }
    return max;
}

let arr: Array<number> = [56, 77, 88, 97, 55];
arr.push(55);

console.log(arr);

console.log(findMax(arr));

// find the min value in an Array

const findMin = function(arr: number[]): number{
    let min = Infinity;
    for(let item of arr){
        if(item < min){min = item}
    }
    return min;
}

console.log(findMin(arr));


// Find the avrage of an Array of numbers

const findAvrage = function(arr: number[]): number{
    let sum = 0;
    let avr = 0;
    for(let item of arr){sum += item}
    console.log(sum);
    console.log(arr.length);
    
    return  avr = (sum/arr.length);
}

console.log(findAvrage(arr));


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

// Bank Account and some method to implement
interface AccountUser{

    accountName: string;
    accountNumber: number;
    password: string;

    getAccountBalance(User: AccountUser):void;
    withdraw(amount: number):void;
    deposit(amount: number):void;

}


class user implements AccountUser{
    
    accountName: string;
    accountNumber: number;
    password: string;
    balance: number;

    constructor(accountName: string, accountNumber: number, password: string, balance: number){
             this.accountName = accountName;
             this.accountNumber= accountNumber;
             this.password = password;
             this.balance = balance;
    
    }
    
     
    getAccountBalance(): void {
        return console.log("Your account balance is "+"$ "+this.balance);
    }

    withdraw(amount: number): void {
          if(amount > this.balance){console.log("Sorry you have insufficient balance " + "$"+this.balance);
          } else{this.balance -= amount; this.getAccountBalance();}
         
                 
    }

    deposit(amount: number): void {
        
    }
}

let user1 = new user("Ming", 1001, "p123456", 100);
user1.getAccountBalance();
user1.withdraw(100);

let char = "mario";
let age = 22;
let isBlackBelt = true;

type StringOrNum = string | number;

let StringOrNum = 100;

//function signature
let calc: (a: number, b: number, c: string)=> number;

//implementation of calc
calc = (numOne: number, numTwo: number, action: string)=>{
    if(action === "add"){ return numOne + numTwo;}
    else{ return numOne-numTwo ;}
    }

console.log(calc(500, 400, "a"));


export {}
